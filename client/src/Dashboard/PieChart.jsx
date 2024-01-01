import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const generateRandomData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * 100)); // Generate random data points between 0 and 100
  }
  return data;
};

const PieChart = () => {
  const DATA_COUNT = 8;
  const labels = Array.from({ length: DATA_COUNT }, (_, i) => `Week ${i + 1}`);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Quiz performance',
        data: generateRandomData(DATA_COUNT),
        borderColor: 'green',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Overall Performance',
        data: generateRandomData(DATA_COUNT),
        borderColor: 'yellow',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  };

  return (
    <div>
      <h2 style={{color:"white", fontSize:"20px"}}>Weekly Report</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PieChart;
