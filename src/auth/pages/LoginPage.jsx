import React, { useMemo, useState } from 'react';
import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserWithPasswordAndEmail } from '../../store/auth/thunks';

const formData = {
    email: '',
    password: ''
};

const formValidators = {
    email: [(value) => {
        return value.includes('@') && value.includes('.');
    }, 'El correo no cumple con el formato establecido'],
    password: [(value) => {
        return value.length >= 6;
    }, 'La contraseña debe tener al menos seis caracteres']
};

export const LoginPage = () => {
    const dispatch = useDispatch();
    
    const [formSubmited, setFormSubmited] = useState(false);
    const { status, message } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const {
        email, emailValid, formState, isFormValid,
        password, passwordValid ,onInputChange
    } = useForm(formData, formValidators);
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmited(true);
        if ( !isFormValid ) return;
        dispatch(loginUserWithPasswordAndEmail(formState));
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
                        error={ !!emailValid && formSubmited }
                        helperText={ emailValid }
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
                        error={ !!passwordValid && formSubmited  }
                        helperText={ passwordValid }
                    />
                </Grid>
                <Grid 
                    container
                    display={ !!message ? '': 'none' }
                    sx={{ mt: 1 }}
                >
                    <Grid 
                        item 
                        xs={ 12 }
                    >
                        <Alert severity='error'>{ message }</Alert>
                    </Grid>
                </Grid>
                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button
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
                            disabled
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
