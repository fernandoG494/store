import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import StorePage from '../pages/StorePage';

const StoreRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <StorePage /> } />
            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    );
};

export default StoreRoutes;