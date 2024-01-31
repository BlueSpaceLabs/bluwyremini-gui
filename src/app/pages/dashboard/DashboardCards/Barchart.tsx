import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Whatsapp", "Messenger", "Instagram", "Telegram"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Channel Utilization",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [ 50, 10, 10, 30],
      },
    ],
  };
  return (
    
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;