import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks/useForm';
import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, TextField } from '@mui/material';
import { startCreatingUserPasswordEmail } from '../../store/auth/thunks';

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

export const RegisterPage = () => {
    const dispatch = useDispatch();
    
    const [formSubmited, setFormSubmited] = useState(false);
    const { status, message } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid, 
    } = useForm(formData, formValidators);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmited(true);
        if ( !isFormValid ) return;
        dispatch(startCreatingUserPasswordEmail(formState));
    };

    
    return (
        <form onSubmit={onSubmit} >
            <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField
                        label="Nombre completo" 
                        type="text" 
                        placeholder='Nombre completo' 
                        fullWidth
                        name="displayName"
                        value={ displayName }
                        onChange={ onInputChange }
                        error={ !!displayNameValid && formSubmited }
                        helperText={ displayNameValid }
                    />
                </Grid>
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

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                    <Grid
                        item 
                        xs={ 12 }
                        display={ !!message ? '': 'none' }
                    >
                        <Alert severity='error'>{ message }</Alert>
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Button
                            disabled={ !!isCheckingAuthentication }
                            type="submit"
                            variant='contained' 
                            fullWidth
                        >
                            Crear cuenta
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};
