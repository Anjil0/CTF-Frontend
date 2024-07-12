// GraphComponent.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "march"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0,
      },
      {
        label: "My Second Dataset",
        data: [45, 69, 60, 91, 46, 65, 50],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart with Multiple Datasets",
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0, // Prevent labels from rotating
          autoSkip: true, // Automatically skip ticks to fit the space
          maxTicksLimit: 7, // Maximum number of ticks to show
          stepSize: 1, // Interval between tick marks
        },
        grid: {
          display: true, // Hide grid lines on the x-axis
        },
      },
      y: {
        ticks: {
          beginAtZero: true, // Start y-axis from zero
          stepSize: 20, // Interval between tick marks
        },
        grid: {
          display: true, // Show grid lines on the y-axis// Custom color for grid lines
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
