/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, CardContent, TextField, Button, Typography, CardMedia, Divider } from '@mui/material';
import useLoginForm from './Hooks/useLoginForm';
import logo from '../../assets/logo/all1one.jpg'
import { useNavigate } from 'react-router';
export const Login = () => {
    const { values, errors, handleChange, handleSubmit } = useLoginForm();
    const appNavigation = useNavigate()
    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', mt: 5, padding: 3 }}>
            <CardMedia
                alt='Login'
                component="img"
                title='Cloud manager all 1 one'
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
                    <Divider sx={{ border: '1px solid', margin: '1rem' }} />
                    <Button variant="outlined" color="info" fullWidth onClick={() => { appNavigation('Create-Account') }}>
                        Need an account? please click here!!
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
