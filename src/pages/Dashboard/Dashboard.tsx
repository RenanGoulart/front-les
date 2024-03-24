import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import {
  Container,
  Content,
  FilterLabel,
  FilterRow,
  FilterSelect,
  Header,
  PageTitle,
} from "./styles";
import SideBar from "../../components/SideBar/SideBar";
import { theme } from "../../styles/theme";

Chart.register(...registerables);

export const options = {
  responsive: true,
};

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const Dashboard = () => {
  const [startMonth, setStartMonth] = useState(0);
  const [endMonth, setEndMonth] = useState(11);

  const data = {
    labels: labels.slice(startMonth, endMonth + 1),
    datasets: [
      {
        label: "Vendas",
        data: labels
          .slice(startMonth, endMonth + 1)
          .map(() => (Math.random() * 1000).toFixed()),
        borderColor: theme.colors.purple_1f,
        backgroundColor: theme.colors.purple_1f,
      },
    ],
  };

  const handleStartMonthChange = (event: any) => {
    const { value } = event.target;
    if (labels.indexOf(value) < endMonth) {
      return setStartMonth(labels.indexOf(value));
    }
    return window.alert("Mês inicial não pode ser maior que o mês final");
  };

  const handleEndMonthChange = (event: any) => {
    const { value } = event.target;
    if (labels.indexOf(value) > startMonth) {
      return setEndMonth(labels.indexOf(value));
    }
    return window.alert("Mês final não pode ser menor que o mês inicial");
  };

  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <PageTitle>Dashboard - Vendas por mês</PageTitle>
          <FilterRow>
            <FilterLabel>De</FilterLabel>

            <FilterSelect onChange={handleStartMonthChange}>
              {labels.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </FilterSelect>
            <FilterLabel>Até</FilterLabel>
            <FilterSelect onChange={handleEndMonthChange}>
              {labels.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </FilterSelect>
          </FilterRow>
        </Header>
        <Line options={options} data={data} />
      </Content>
    </Container>
  );
};

export default Dashboard;
