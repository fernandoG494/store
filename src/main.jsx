import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StoreAppRouter from './routers/StoreAppRouter';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <StoreAppRouter />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
