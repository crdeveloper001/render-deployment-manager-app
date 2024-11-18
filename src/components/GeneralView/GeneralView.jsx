import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

// Sample data for Azure and AWS
const cloudData = [
    {
        provider: 'Azure',
        deployedApps: 120,
        suspendedApps: 10,
        consumption: 'Standard',
    },
    {
        provider: 'AWS',
        deployedApps: 150,
        suspendedApps: 15,
        consumption: 'High Performance',
    },
    {
        provider: 'Google Cloud',
        deployedApps: 90,
        suspendedApps: 5,
        consumption: 'Budget',
    },
];

// Chart.js configuration
const chartData = {
    labels: cloudData.map((data) => data.provider),
    datasets: [
        {
            label: 'Deployed Apps',
            data: cloudData.map((data) => data.deployedApps),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
        {
            label: 'Suspended Apps',
            data: cloudData.map((data) => data.suspendedApps),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Cloud Provider App Statistics',
        },
    },
};

export const GeneralView = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={13}>
                {/* Display cards with expanded grid */}
                {/* Chart spanning across full grid */}
                <Grid item xs={12}>
                    <Item>
                        <Typography variant="h6" component="div" gutterBottom>
                            Overall Statistics
                        </Typography>
                        <Bar data={chartData} options={chartOptions} />
                    </Item>
                </Grid>
                {cloudData.map((data, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                {data.provider}
                            </Typography>
                            <Typography variant="body1" component="div">
                                <strong>Deployed Apps:</strong> {data.deployedApps}
                            </Typography>
                            <Typography variant="body1" component="div">
                                <strong>Suspended/Inactive Apps:</strong> {data.suspendedApps}
                            </Typography>
                            <Typography variant="body1" component="div">
                                <strong>Consumption Type:</strong> {data.consumption}
                            </Typography>
                        </Item>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
};
