import React from "react";
import styled from "@emotion/styled";
import CardDasboard from "../components/CardDasboard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Diagram Produk Koding Akademi"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 300, 500, 600],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: [10, 300, 500, 600],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};

const Heading = styled.h1`
  font-size: 19px;
  padding: 0;
  marign: 0;
  font-weight: bold;
`;

const WrapperKoding = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .wrapper-card {
    background-color: #252b42;
    display: flex;
    height: 25vh;
    border-radius: 10px;
    gap: 10px;
    align-items: center;
    width: 60%;
    padding: 10px;
  }

  .wrapper-calendar {
    width: 30%;
  }
`;

const index = () => {
  return (
    <div>
      <Heading>Data Koding Akademi</Heading>
      <WrapperKoding>
        <div className="wrapper-card">
          <CardDasboard title="Murid" value="3310" />
          <CardDasboard title="Kursus" value="59" />
          <CardDasboard title="Trainer" value="47" />
        </div>
        <div className="wrapper-calendar">
          <Calendar />
        </div>
      </WrapperKoding>
      <div style={{ height: "30vh" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default index;
