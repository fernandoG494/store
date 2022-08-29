import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null
    },
    reducers: {
        login: (state, {payload}) => {},
        logout: (state, {payload}) => {},
        checkingCredentials: (state, {payload}) => {}
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;
