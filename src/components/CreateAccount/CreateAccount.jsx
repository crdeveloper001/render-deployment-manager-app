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
import { Visibility, VisibilityOff } from '@mui/icons-material';  // Import icons
import useCreateAccountForm from './hooks/useCreateAccount';
import { useNavigate } from 'react-router';

export const CreateAccount = () => {
    const appNavigation = useNavigate();
    const { fillDataAccount, handleSubmit, closeAlertWindow, accountDetails, errorsInputs, statusResponse, openAlert } = useCreateAccountForm();

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);



    // Toggle password visibility
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);

    // Default value for accountRoleType (empty string or one of the valid options)
    const [roleType, setRoleType] = useState('');

    const handleRoleTypeChange = (event) => {
        setRoleType(event.target.value);
        fillDataAccount(event); // Assuming fillDataAccount updates the form data
    };

    return (
        <Card sx={{ maxWidth: 800, margin: 'auto', mt: 5, padding: 3 }}>
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
                                type={showPassword ? 'text' : 'password'}  // Toggle password visibility
                                fullWidth
                                margin="normal"
                                onChange={fillDataAccount}
                                error={errorsInputs.accountPassword}
                                helperText={errorsInputs.accountPassword ? 'Password is required' : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
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
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Role Type</InputLabel>
                                <Select
                                    label="Role Type"
                                    name="accountRoleType"
                                    value={roleType}  // Set the value to the state variable
                                    onChange={handleRoleTypeChange}  // Handle changes
                                    error={errorsInputs.accountRoleType}
                                    helperText={errorsInputs.accountRoleType ? 'Role type is required' : ''}
                                >
                                    <MenuItem value="">Select a Role</MenuItem>  {/* Default empty value */}
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

                    <Button onClick={handleSubmit} type="submit" variant="contained" color="success" fullWidth sx={{ mt: 3 }}>
                        Create Account
                    </Button>
                    {statusResponse ?
                        <Alert
                            icon={<CheckIcon fontSize="inherit" />}
                            severity="success"
                            action={
                                <IconButton
                                    size="small"
                                    aria-label="close"
                                    color="inherit"
                                    onClick={closeAlertWindow} // Close the alert on click
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            }
                        >
                            <AlertTitle>Success</AlertTitle>
                            <Typography variant="body1" gutterBottom>
                                Your account has been created successfully! Please log in with your email: <strong>{accountDetails.accountEmail}</strong>.
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <strong>Important:</strong> After creating your account, you need to configure your render account and with the following information:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Render Account Email"
                                        secondary="(e.g., example@render.com)"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Render Account ID"
                                        secondary="(Your unique ID for render services)"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Render Account Name"
                                        secondary="(e.g., John Doe's Render)"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Render Role Type"
                                        secondary="(Specify the role type such as Admin or User)"
                                    />
                                </ListItem>
                            </List>
                            <Typography variant="body2" gutterBottom>
                                Please make sure to fill in these details to use your account effectively and manage your applications from this app
                            </Typography>
                        </Alert>

                        : ""}

                    <Divider variant='fullWidth' component="div" sx={{ border: '0.1px solid', marginTop: '1rem' }} />
                    <Button onClick={() => { appNavigation('/') }} type="button" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Return to login
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
};
