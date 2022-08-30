import { Button, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthPage } from '../../store/auth/authSlice';
import { LoginPage, RegisterPage } from '../pages/';

const AuthLayout = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState('login');
    const { authPage } = useSelector(state => state.auth);
    
    useEffect(() => {
        dispatch(setAuthPage({ page }));
    }, [page]);

    const handleLogin = () => {
        setPage('login');
    };
    const handleRegister = () => {
        setPage('register');
    };

    return (
        <Grid
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'background.main', padding: 4 }}
        >
            <Grid
                item
                className='box-shadow'
                xs={ 3 }
                sx={{ 
                    width: 300,
                    backgroundColor: 'white', 
                    padding: 3, 
                    borderRadius: 2 
                }}
            >
                <Grid
                    container
                    direction='column'
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={ 12 } sx={{mb: 1}}>
                        <Typography variant='h6'>{ authPage.toUpperCase() }</Typography>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        spacing={1}
                        justifyContent="center"
                    >
                        <Grid item>
                            <Button
                                disabled={authPage==='login'}
                                variant='contained'
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                disabled={authPage==='register'}
                                variant='contained'
                                onClick={handleRegister}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>

                    {/* REGISTER OR LOGIN PAGE */}
                    {authPage==='login' ? (
                        <LoginPage />
                    ) :(
                        <RegisterPage />
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AuthLayout;
