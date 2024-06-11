import { Line } from "react-chartjs-2";
import { Chart, ChartData, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ChartWrapper,
  Container,
  Content,
  FilterLabel,
  FilterRow,
  Header,
  PageTitle,
} from "./styles";
import SideBar from "../../components/SideBar/SideBar";
import Button from "../../components/Button/Button";
import useOrder from "../../hooks/useOrder";
import Input from "../../components/Input/Input";
import {
  DashboardForm,
  DashboardSchema,
} from "../../validations/dashboard.validation";
import { theme } from "../../styles/theme";
import MultiSelect from "../../components/MultiSelect/MultiSelect";
import useProduct from "../../hooks/useProduct";
import { categoriesOptions } from "../../data/createProductOptions";
import { randomColor } from "../../utils/randomColor";
import { IProductResponse } from "../../services/product/dto/ProductDTO";

Chart.register(...registerables);

const options = {
  responsive: true,
};

interface DataType {
  productName: string;
  label: string;
  value: number;
}

type Dataset = {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  fill?: boolean;
};

type SelectDisable = "categories" | "products" | null;

const Dashboard = () => {
  const { products } = useProduct();
  const { handleShowDashboard } = useOrder();
  const [graphData, setGraphData] = useState<ChartData<"line">>(
    {} as ChartData<"line">,
  );
  const [isSelectDisable, setIsSelectDisable] = useState<SelectDisable>(null);

  const { control, handleSubmit, reset, watch } = useForm<DashboardForm>({
    resolver: yupResolver(DashboardSchema),
  });

  const watchProducts = watch("productsFilter");
  const watchCategories = watch("categoriesFilter");

  const formatGraphData = (finalData: DataType[]) => {
    const datasets: Dataset[] = [];
    const productNames: string[] = [];

    finalData.forEach((item) => {
      const index = productNames.indexOf(item.productName);
      if (index === -1) {
        productNames.push(item.productName);
        datasets.push({
          label: item.productName,
          data: [item.value],
        });
      } else {
        datasets[index].data.push(item.value);
      }
    });

    return {
      labels: finalData.map((item) => item.label),
      datasets: datasets.map((dataset) => {
        const color = randomColor();
        return {
          ...dataset,
          borderColor: color,
          backgroundColor: color,
          fill: false,
        };
      }),
    };
  };

  const fetchData = async (
    startDate: string,
    endDate: string,
    productValues: string[],
    categoryValues: string[],
  ) => {
    const data = await handleShowDashboard(
      startDate,
      endDate,
      productValues,
      categoryValues,
    );

    setGraphData(formatGraphData(data));
  };

  const onSubmit = async ({
    startDate,
    endDate,
    categoriesFilter = [],
    productsFilter = [],
  }: DashboardForm) => {
    const mappedProducts = productsFilter.map((item) => item.value!);
    const mappedCategories = categoriesFilter.map((item) => item.value!);

    const end = endDate ? new Date(endDate) : new Date();
    const start = startDate
      ? new Date(startDate)
      : new Date(end.getMonth() - 1);

    await fetchData(
      start.toISOString(),
      end.toISOString(),
      mappedProducts,
      mappedCategories,
    );
  };

  const formatProduct = (item: IProductResponse) => ({
    label: `${item.album} - ${item.artist}`,
    value: item.id,
  });

  const resetForm = () => {
    reset({
      startDate: "",
      endDate: "",
      categoriesFilter: [],
      productsFilter: products?.map(formatProduct) || [],
    });
  };

  const updateSelectDisable = () => {
    if (watchProducts?.length) {
      setIsSelectDisable("categories");
    } else if (watchCategories?.length) {
      setIsSelectDisable("products");
    } else {
      setIsSelectDisable(null);
    }
  };

  useEffect(() => {
    onSubmit({});
    resetForm();
  }, []);

  useEffect(() => {
    updateSelectDisable();
  }, [watchCategories, watchProducts]);

  return (
    <Container>
      <SideBar />
      <Content>
        <PageTitle>Dashboard de Vendas</PageTitle>
        <Header>
          <FilterRow>
            <MultiSelect
              control={control}
              name="productsFilter"
              label="Filtre por produto(s)"
              options={
                products?.map((item) => ({
                  label: `${item.album} - ${item.artist}`,
                  value: item.id,
                })) || []
              }
              placeholder={
                isSelectDisable === "products"
                  ? "Remova as categorias para selecionar produtos"
                  : "Selecione um ou mais produtos"
              }
              disabled={isSelectDisable === "products"}
            />
            <FilterLabel>Ou</FilterLabel>
            <MultiSelect
              control={control}
              name="categoriesFilter"
              label="Filtre por categoria(s)"
              options={categoriesOptions}
              placeholder={
                isSelectDisable === "categories"
                  ? "Remova os produtos para selecionar categorias"
                  : "Selecione uma ou mais categorias"
              }
              disabled={isSelectDisable === "categories"}
            />
          </FilterRow>
          <FilterRow>
            <Input
              control={control}
              name="startDate"
              label="Data inicial"
              type="date"
            />
            <Input
              control={control}
              name="endDate"
              label="Data final"
              type="date"
            />
            <Button
              style={{
                minWidth: 150,
                backgroundColor: "white",
                color: theme.colors.purple_1f,
              }}
              onClick={() => {
                reset({
                  startDate: "",
                  endDate: "",
                  categoriesFilter: [],
                  productsFilter: [],
                });
                onSubmit({});
              }}
            >
              Limpar
            </Button>
            <Button onClick={handleSubmit(onSubmit)}>Aplicar</Button>
          </FilterRow>
        </Header>
        <ChartWrapper>
          {graphData?.datasets?.length > 0 && (
            <Line options={options} data={graphData} />
          )}
        </ChartWrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
