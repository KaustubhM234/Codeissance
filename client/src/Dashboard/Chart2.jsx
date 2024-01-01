import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Chart2 = () => {
  // Sample data for Ayurveda and Allopathy usage over the past 10 years
  const data = {
    labels: [
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Ayurveda",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: [5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500],
      },
      {
        label: "Allopathy",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [12000, 11800, 11500, 11200, 10900, 10600, 10300, 10000, 9700, 9400],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        // type:linear,
        title: {
          display: true,
          text: "Number of People",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  return (
    
    <div>
    <h2>Bar Chart</h2>
    <Bar data={data} options={options} />
  </div>
  );
};

export default Chart2;
