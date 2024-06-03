import { Line } from "react-chartjs-2";
import { Chart, ChartData, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
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

Chart.register(...registerables);

const options = {
  responsive: true,
};

interface DataType {
  label: string;
  value: number;
}

const Dashboard = () => {
  const { handleShowDashboard } = useOrder();
  const [graphData, setGraphData] = useState<ChartData<"line">>(
    {} as ChartData<"line">,
  );

  const { control, handleSubmit, reset } = useForm<DashboardForm>({
    resolver: yupResolver(DashboardSchema),
  });

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

  const fetchData = async (startDate: string, endDate: string) => {
    const data = await handleShowDashboard(startDate, endDate);
    const finalData = processData(data);
    setGraphData(formatGraphData(finalData));
  };

  const onSubmit = async ({ startDate, endDate }: DashboardForm) => {
    if (startDate && endDate) {
      await fetchData(startDate, endDate);
    } else {
      const end = new Date();
      const start = new Date();
      start.setFullYear(end.getFullYear() - 1);
      await fetchData(start.toISOString(), end.toISOString());
    }
  };

  useEffect(() => {
    onSubmit({});
  }, []);

  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <PageTitle>Dashboard de Vendas</PageTitle>
          <FilterRow>
            <FilterLabel>De</FilterLabel>
            <Input control={control} name="startDate" type="date" />
            <FilterLabel>Até</FilterLabel>
            <Input control={control} name="endDate" type="date" />
            <Button
              style={{
                minWidth: 100,
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
            <Button style={{ minWidth: 100 }} onClick={handleSubmit(onSubmit)}>
              Aplicar
            </Button>
          </FilterRow>
        </Header>
        {graphData?.datasets?.length > 0 && (
          <Line options={options} data={graphData} />
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
