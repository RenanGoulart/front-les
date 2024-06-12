import { Line } from "react-chartjs-2";
import { Chart, ChartData, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import {
  ChartWrapper,
  Container,
  Content,
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
import { randomColor } from "../../utils/randomColor";
import { IProductResponse } from "../../services/product/dto/ProductDTO";
import { IDashboardResponse } from "../../services/order/dto/OrderDTO";

Chart.register(...registerables);

const options = {
  responsive: true,
};

interface IDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  fill?: boolean;
  tension?: number;
}

const Dashboard = () => {
  const { products } = useProduct();
  const { handleShowDashboard } = useOrder();
  const [graphData, setGraphData] = useState<ChartData<"line">>(
    {} as ChartData<"line">,
  );

  const { control, handleSubmit, reset } = useForm<DashboardForm>({
    resolver: yupResolver(DashboardSchema),
  });

  const formatGraphData = (finalData: IDashboardResponse) => {
    return {
      labels: finalData.labels,
      datasets: finalData.datasets.map((dataset) => {
        const color = randomColor();
        return {
          label: dataset.label,
          data: dataset.values,
          borderColor: color,
          backgroundColor: color,
          fill: false,
          tension: 0.5,
        } as IDataset;
      }),
    };
  };

  const fetchData = async (
    startDate: string,
    endDate: string,
    productValues: string[],
  ) => {
    const data = await handleShowDashboard(startDate, endDate, productValues);

    setGraphData(formatGraphData(data));
  };

  const onSubmit = async ({
    startDate,
    endDate,
    productsFilter = [],
  }: DashboardForm) => {
    const mappedProducts = productsFilter.map((item) => item.value!);

    const end = endDate ? new Date(endDate) : new Date();
    const start = startDate
      ? new Date(startDate)
      : new Date(end.getFullYear() - 1);

    await fetchData(start.toISOString(), end.toISOString(), mappedProducts);
  };

  const formatProduct = (item: IProductResponse) => ({
    label: `${item.album} - ${item.artist}`,
    value: item.id,
  });

  const resetForm = () => {
    const endDate = new Date();
    reset({
      startDate: format(
        new Date(
          endDate.getFullYear() - 1,
          endDate.getMonth(),
          endDate.getDate(),
        ),
        "yyyy-MM-dd",
      ),
      endDate: format(endDate, "yyyy-MM-dd"),
      productsFilter: products?.map(formatProduct) || [],
    });
  };

  useEffect(() => {
    onSubmit({});
    resetForm();
  }, []);

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
              placeholder="Selecione um ou mais produtos"
              style={{
                minHeight: 45,
                borderRadius: 5,
                borderWidth: 2,
                borderColor: theme.colors.purple_80,
                padding: 0,
              }}
            />

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
