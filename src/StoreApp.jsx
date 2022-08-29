import React from 'react';
import StoreAppRouter from './routers/StoreAppRouter';
import { AppTheme } from './ui/theme/AppTheme';

const StoreApp = () => {
    return (
        <AppTheme>
            <StoreAppRouter />
        </AppTheme>
    );
};

export default StoreApp;