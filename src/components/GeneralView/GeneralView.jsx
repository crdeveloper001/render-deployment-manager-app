/* eslint-disable no-unused-vars */
import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample data for the chart
const cloudData = [
  {
    provider: "Azure",
    deployedApps: 120,
    suspendedApps: 10,
  },
  {
    provider: "AWS",
    deployedApps: 150,
    suspendedApps: 15,
  },
  {
    provider: "Google Cloud",
    deployedApps: 90,
    suspendedApps: 5,
  },
];

// Chart.js configuration
const chartData = {
  labels: cloudData.map((data) => data.provider),
  datasets: [
    {
      label: "Deployed Apps",
      data: cloudData.map((data) => data.deployedApps),
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Suspended Apps",
      data: cloudData.map((data) => data.suspendedApps),
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Cloud Provider App Statistics",
    },
  },
};

export const GeneralView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: "1200px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Cloud Provider App Statistics
        </Typography>
        <Bar data={chartData} options={chartOptions} />
      </Paper>
    </Box>
  );
};
