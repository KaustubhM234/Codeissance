import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const BarChart = () => {
  const data = {
    labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4','Quiz 5'],
    datasets: [
      {
        label: 'Quizes',
        data: [45, 19, 34, 65, 55],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'white'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'white'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {/* <h2 >Bar Chart</h2> */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
