/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardContent, TextField, Button, CardMedia, Divider, Alert, Grid, Typography } from '@mui/material';
import useLoginForm from './Hooks/useLoginForm';
import logo from '../../assets/logo/all1one.jpg';
import { useNavigate } from 'react-router';

export const Login = () => {
    const { values, errors, authResponse, handleChange, handleSubmit } = useLoginForm();
    const appNavigation = useNavigate();

    return (
        <Grid container spacing={2} sx={{ minHeight: '100vh', padding: 4 }}>
            {/* Description Column */}
            <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
                <Typography variant="h4" gutterBottom>
                    Welcome to Cloud Manager All1One
                </Typography>
                <Typography variant="body1" component={'p'} textAlign={'justify'}>
                    Manage all your deployed services seamlessly across multiple cloud platforms such as Render, Azure, AWS, and GCP.
                    Cloud Manager All1One provides a unified interface for monitoring, updating, and scaling your applications with ease.
                </Typography>
                <br />
                <br />
                <Typography variant="body1" component={'p'} textAlign={'justify'}>
                    Whether you are a developer or an organization, streamline your operations by centralizing cloud management in one place.
                    Take control of your infrastructure with powerful tools, insightful analytics, and reliable support.
                </Typography>
            </Grid>

            {/* Login Column */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
                    <CardMedia
                        alt="Login"
                        component="img"
                        title="Cloud manager all 1 one"
                        image={logo}
                        sx={{ height: 'auto', borderRadius: '50%' }}
                    />
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                name="email"
                                fullWidth
                                margin="normal"
                                value={values.email}
                                onChange={handleChange}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                fullWidth
                                margin="normal"
                                value={values.password}
                                onChange={handleChange}
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Login
                            </Button>

                            {authResponse?.data?.message === "Account Authorized" ? (
                                <Alert variant="outlined" severity="success">
                                    Authorized, redirecting to dashboard....
                                </Alert>
                            ) : authResponse?.data?.message ===
                                "Authentication failed: Account not found" ? (
                                <Alert variant="outlined" severity="error">
                                    Account not found or Invalid credentials, please try again
                                </Alert>
                            ) : null}
                            <Divider sx={{ border: '1px solid', margin: '1rem' }} />
                            <Button
                                variant="outlined"
                                color="info"
                                fullWidth
                                onClick={() => {
                                    appNavigation('Create-Account');
                                }}
                            >
                                Need an account? please click here!!
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
