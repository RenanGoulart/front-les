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
import { IDashboardResponse } from "../../services/order/dto/OrderDTO";
import MultiSelect from "../../components/MultiSelect/MultiSelect";
import useProduct from "../../hooks/useProduct";
import { categoriesOptions } from "../../data/createProductOptions";

Chart.register(...registerables);

const options = {
  responsive: true,
};

interface DataType {
  label: string;
  value: number;
}

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

  const formatLabel = (date: string) => date.split("-").reverse().join("/");

  const processData = (data: IDashboardResponse[]) => {
    const groupedData = data.reduce(
      (acc, item) => {
        const key = item.createdAt.substring(0, 7);
        if (acc[key]) {
          acc[key].total += item.total;
        } else {
          acc[key] = { total: item.total };
        }
        return acc;
      },
      {} as { [key: string]: { total: number } },
    );

    return Object.entries(groupedData)
      .map(([key, value]) => ({
        label: formatLabel(key),
        value: value.total,
      }))
      .sort(
        (a, b) =>
          Number(a.label.substring(0, 2)) - Number(b.label.substring(0, 2)) &&
          Number(a.label.substring(3, 7)) - Number(b.label.substring(3, 7)),
      );
  };

  const formatGraphData = (finalData: DataType[]) => ({
    labels: finalData.map((item) => item.label),
    datasets: [
      {
        label: "Valor em vendas (R$)",
        data: finalData.map((item) => item.value),
        borderColor: theme.colors.green_56,
        backgroundColor: theme.colors.green_56,
      },
    ],
  });

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
    const finalData = processData(data);
    setGraphData(formatGraphData(finalData));
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
      : new Date(end.getFullYear() - 1);

    await fetchData(
      start.toISOString(),
      end.toISOString(),
      mappedProducts,
      mappedCategories,
    );
  };

  useEffect(() => {
    onSubmit({});
  }, []);

  useEffect(() => {
    if (watchProducts?.length) {
      setIsSelectDisable("categories");
    } else if (watchCategories?.length) {
      setIsSelectDisable("products");
    } else {
      setIsSelectDisable(null);
    }
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
                  : "Selecione um ou mais produto(s)"
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
                  : "Selecione um ou mais categoria(s)"
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
                reset({ startDate: "", endDate: "" });
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
