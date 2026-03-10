
"use client"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu"],
  datasets: [
    {
      label: "Visitors",
      data: [10, 25, 15, 40],
    },
  ],
};

export default function Graph() {
  return <Line data={data} />;
}