import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate} from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import { AppTheme } from '../ui/theme/AppTheme';

const StoreAppRouter = () => {
    const { status } = useSelector(state => state.auth);
    console.log(status);

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