import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //not-authenticated, authenticated, checking
        authPage: '',
        uid: null,
        email: null,
        displayName: null,
        message: ''
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.authPage = payload.authPage;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.authPage = '';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.message = payload.message
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
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
