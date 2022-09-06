import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const CheckAuth = () => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
        >
            <CircularProgress style={{'color': '#F58840'}}/>
      </Backdrop>
    );
};

export default CheckAuth;