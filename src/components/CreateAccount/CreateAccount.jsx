/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Grid,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
    Divider,
    IconButton,
    InputAdornment,
    Alert,
    AlertTitle,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useCreateAccountForm from './hooks/useCreateAccount';
import { useNavigate } from 'react-router';

export const CreateAccount = () => {
    const appNavigation = useNavigate();
    const { fillDataAccount, handleSubmit, closeAlertWindow, accountDetails, errorsInputs, statusResponse, openAlert } = useCreateAccountForm();

    const [showPassword, setShowPassword] = useState(false);
    const [roleType, setRoleType] = useState('');

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
    const handleRoleTypeChange = (event) => {
        setRoleType(event.target.value);
        fillDataAccount(event);
    };

    return (
        <Grid container spacing={2} sx={{ minHeight: '100vh', padding: 4 }}>
            {/* Description Column */}
            <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
                <Typography variant="h4" gutterBottom>
                    Join Cloud Manager All1One
                </Typography>
                <Typography variant="body1" component={'p'} textAlign={'justify'}>
                    Simplify your cloud management with Cloud Manager All1One. Whether you are working with Render, Azure, AWS, or GCP, our platform offers a centralized interface to deploy, monitor, and manage your services efficiently.
                </Typography>
                <br />
                <br />
                <Typography variant="body1" component={'p'} textAlign={'justify'}>
                    Create your account today to unlock a suite of tools designed for modern cloud workflows. Collaborate with teams, gain insights, and automate repetitive tasks—all from one place.
                </Typography>
                <Typography variant="body1">
                    Your journey to seamless cloud management starts here. Join us and take control of your infrastructure.
                </Typography>
            </Grid>

            {/* Create Account Column */}
            <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Create an Account
                        </Typography>
                        <form onSubmit={handleSubmit}>
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
                                        helperText={errorsInputs?.accountName ? 'Name is required' : ''}
                                    />
                                    <TextField
                                        label="Email"
                                        name="accountEmail"
                                        type="email"
                                        fullWidth
                                        margin="normal"
                                        onChange={fillDataAccount}
                                        error={errorsInputs.accountEmail}
                                        helperText={errorsInputs?.accountEmail ? 'Email is required' : ''}
                                    />
                                    <TextField
                                        label="Alias Name"
                                        name="accountAliasName"
                                        fullWidth
                                        margin="normal"
                                        onChange={fillDataAccount}
                                        error={errorsInputs.accountAliasName}
                                        helperText={errorsInputs?.accountAliasName ? 'Alias or Username is required' : ''}
                                    />
                                    <TextField
                                        label="Password"
                                        name="accountPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        fullWidth
                                        margin="normal"
                                        onChange={fillDataAccount}
                                        error={errorsInputs.accountPassword}
                                        helperText={errorsInputs?.accountPassword ? 'Password is required' : ''}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShowPassword} edge="end">
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
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
                                        helperText={errorsInputs?.accountLastname ? 'Last name is required' : ''}
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
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Role Type</InputLabel>
                                        <Select
                                            label="Role Type"
                                            name="accountRoleType"
                                            value={roleType}
                                            onChange={handleRoleTypeChange}
                                            error={errorsInputs.accountRoleType}
                                            helpertext={errorsInputs?.accountRoleType ? 'Role type is required' : ''}
                                        >
                                            <MenuItem value="">Select a Role</MenuItem>
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

                            <Button
                                onClick={handleSubmit}
                                type="submit"
                                variant="contained"
                                color="success"
                                fullWidth
                                sx={{ mt: 3 }}
                            >
                                Create Account
                            </Button>

                            {statusResponse && (
                                <Alert
                                    icon={<CheckIcon fontSize="inherit" />}
                                    severity="success"
                                    action={
                                        <IconButton
                                            size="small"
                                            aria-label="close"
                                            color="inherit"
                                            onClick={closeAlertWindow}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    }
                                >
                                    <AlertTitle>Success</AlertTitle>
                                    Your account has been created successfully! Please log in with your email: <strong>{accountDetails.accountEmail}</strong>.
                                </Alert>
                            )}

                            <Divider sx={{ border: '0.1px solid', marginTop: '1rem' }} />
                            <Button
                                onClick={() => {
                                    appNavigation('/');
                                }}
                                type="button"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2 }}
                            >
                                Return to login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
