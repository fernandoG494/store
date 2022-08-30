import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        authPage: '',
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null
    },
    reducers: {
        login: (state, {payload}) => {},
        logout: (state, {payload}) => {},
        checkingCredentials: (state, {payload}) => {},
        setAuthPage: (state, {payload}) => {
            state.authPage = payload.page;
        }
    }
});

export const {
    login,
    logout,
    checkingCredentials,
    setAuthPage
} = authSlice.actions;
