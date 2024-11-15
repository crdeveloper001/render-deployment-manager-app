/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardContent, TextField, Button, Typography, Grid, FormControl, MenuItem, InputLabel, Select, Divider } from '@mui/material';
import useCreateAccountForm from './hooks/useCreateAccount';
import { useNavigate } from 'react-router';
export const CreateAccount = () => {
    const appNavigation = useNavigate()
    const { fillDataAccount, handleSubmit, accountDetails, errorsInputs } = useCreateAccountForm();
    return (
        <Card sx={{ maxWidth: 800, margin: 'auto', mt: 5, padding: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Create an Account
                </Typography>
                <form >
                    <Grid container spacing={2}>
                        {/* Left Column */}
                        <Grid item xs={12} sm={6}>
                            <TextField

                                label="First Name"
                                name="accountName"
                                fullWidth
                                margin="normal"
                                onChange={fillDataAccount}
                                error={errorsInputs.accountName}
                                helperText={errorsInputs.accountName ? 'Name is required' : ''}
                            />
                            <TextField
                                label="Email"
                                name="accountEmail"
                                type="email"
                                fullWidth
                                margin="normal"
                                onChange={fillDataAccount}
                                error={errorsInputs.accountEmail}
                                helperText={errorsInputs.accountEmail ? 'Email is required' : ''}
                            />
                            <TextField
                                label="Alias Name"
                                name="accountAliasName"
                                fullWidth
                                margin="normal"
                                onChange={fillDataAccount}
                                error={errorsInputs.accountAliasName}
                                helperText={errorsInputs.accountAliasName ? 'Alias or Username is required' : ''}
                            />
                            <TextField
                                label="Password"
                                name="accountPassword"
                                type="password"
                                fullWidth
                                margin="normal"
                                onChange={fillDataAccount}
                                error={errorsInputs.accountPassword}
                                helperText={errorsInputs.accountPassword ? 'Password is required' : ''}
                            />
                        </Grid>

                        {/* Right Column */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                name="accountLastname"
                                fullWidth
                                margin="normal"
                                onChange={fillDataAccount}
                                error={errorsInputs.accountLastname}
                                helperText={errorsInputs.accountLastname ? 'Last name is required' : ''}
                            />
                            <TextField
                                label="Phone Number"
                                name="accountPhone"
                                type="number"
                                fullWidth
                                margin="normal"
                                onChange={fillDataAccount}
                                error={errorsInputs.accountPhone}
                                helperText={errorsInputs.accountPhone ? 'Phone Number is required' : ''}
                            />
                            <FormControl fullWidth margin="normal" >
                                <InputLabel>Role Type</InputLabel>
                                <Select
                                    label="Role Type"
                                    name="accountRoleType"
                                    onChange={fillDataAccount}
                                    error={errorsInputs.accountRoleType}
                                    helperText={errorsInputs.accountRoleType ? 'Role type is required' : ''}
                                >

                                    <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                                    <MenuItem value="IT Admin">IT Admin</MenuItem>
                                    <MenuItem value="Product Manager">Product Manager</MenuItem>
                                    <MenuItem value="HR Specialist">HR Specialist</MenuItem>
                                    <MenuItem value="Marketing Specialist">Marketing Specialist</MenuItem>
                                    <MenuItem value="Student">Student</MenuItem>
                                </Select>

                            </FormControl>
                        </Grid>
                    </Grid>

                    <Button onClick={handleSubmit} type="button" variant="contained" color="success" fullWidth sx={{ mt: 3 }}>
                        Create Account
                    </Button>
                    <Divider variant='fullWidth' component="div" sx={{ border: '0.5px solid', marginTop: '1rem' }} />
                    <Button onClick={() => { appNavigation('/') }} type="button" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Return to login
                    </Button>

                </form>
            </CardContent>


        </Card>
    );
};
