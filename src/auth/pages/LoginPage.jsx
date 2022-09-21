import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useForm } from '../../hooks/useForm';

const formData = {
    email: '',
    password: '',
    displayName: ''
};

const formValidators = {
    email: [(value) => {
        return value.includes('@') && value.includes('.');
    }, 'El correo no cumple con el formato establecido'],
    password: [(value) => {
        return value.length >= 6;
    }, 'La contraseña debe tener al menos seis caracteres'],
    displayName: [(value) => {
        return value.length >= 2;
    }, 'El nombre debe tener al menos dos caracteres'],
};

export const LoginPage = () => {
    const { email, password, onInputChange } = useForm(formData, formValidators);

    const onSubmit = () => {
        console.log('login ejecuted');
    };

    return (
        <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField
                        label="Correo" 
                        type="email" 
                        placeholder='correo@google.com' 
                        fullWidth
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                    />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                        label="Contraseña" 
                        type="password" 
                        placeholder='Contraseña' 
                        fullWidth
                        name="password"
                        value={ password }
                        onChange={ onInputChange }
                    />
                </Grid>
                <Grid 
                    container
                    // display={ !!errorMessage ? '': 'none' }
                    sx={{ mt: 1 }}
                >
                    <Grid 
                        item 
                        xs={ 12 }
                    >
                        {/* <Alert severity='error'>{ errorMessage }</Alert> */}
                    </Grid>
                </Grid>
                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button
                            // disabled={ isAuthenticating }
                            type="submit" 
                            variant='contained' 
                            fullWidth
                        >
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button
                            // disabled={ isAuthenticating }
                            variant='contained' 
                            fullWidth
                            // onClick={ onGoogleSignIn }
                        >
                            <Google />
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};
