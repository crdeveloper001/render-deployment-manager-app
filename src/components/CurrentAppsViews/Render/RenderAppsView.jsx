/* eslint-disable no-undef */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Typography, ButtonGroup, Paper } from '@mui/material';
import useRenderServicesStatus from './hooks/useRenderServicesStatus';

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // Enabling dark mode
    },
});

export const RenderAppsView = () => {
    const { currentServices, error, RetrieveServices } = useRenderServicesStatus();

    return (
        <>
            <Button variant="contained" color="secondary" onClick={RetrieveServices} sx={{ marginBottom: '1rem' }}>
                REFRESH INFORMATION
            </Button>
            <ThemeProvider theme={darkTheme}>
                <TableContainer component={Paper}>
                    <Table aria-label="services table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Service Id</TableCell>
                                <TableCell align="left">Service Name</TableCell>
                                <TableCell align="left">Application Type</TableCell>
                                <TableCell align="left">Last Date Updated</TableCell>
                                <TableCell align="left">Link For Page</TableCell>
                                <TableCell align="left">Options for this App</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {error ? (
                                // Show error message if there was an error
                                <TableRow>
                                    <TableCell colSpan={8} align="center">
                                        <Typography variant="subtitle2" color="error">
                                            {error} {/* Show the error message */}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : currentServices && currentServices.length > 0 ? (
                                // Display rows when there are services
                                currentServices.map((item) => (
                                    <TableRow key={item.service.id}>
                                        <TableCell>{item.service.id}</TableCell>
                                        <TableCell>{item.service.name}</TableCell>
                                        <TableCell>{item.service.type}</TableCell>
                                        <TableCell>{new Date(item.service.updatedAt).toLocaleString()}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                href={item.service.serviceDetails.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Go to this page
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <ButtonGroup variant="outlined">
                                                <Button color="success">Launch Redeployment</Button>
                                                <Button color="warning">Suspend Service</Button>
                                                <Button color="error">Delete Application</Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                // If no services, show 'No data available'
                                <TableRow>
                                    <TableCell colSpan={8} align="center">
                                        <Typography variant="subtitle2" color="textSecondary">
                                            No data available
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ThemeProvider>
        </>
    );
};
