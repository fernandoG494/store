import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate} from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import { AppTheme } from '../ui/theme/AppTheme';
import CheckAuth from '../ui/components/CheckAuth';
import StoreRoutes from '../storeApp/routes/StoreRoutes';

const StoreAppRouter = () => {
    const { status } = useSelector(state => state.auth);

    if(status === 'checking'){
        return <CheckAuth />
    };

    return (
        <AppTheme>
            <Routes>
                {
                    (status === 'authenticated')
                    ? <Route path='/*' element={ <StoreRoutes /> }/>
                    : <Route path='/auth/*' element={ <AuthRoutes /> } />
                }
                <Route path='/*' element={ <Navigate to='/auth/' /> }/>
            </Routes>
        </AppTheme>
    );
};

export default StoreAppRouter;
