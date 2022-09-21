import { checkingCredentials, login, logout } from './authSlice';
import { api } from '../../api/axiosConnection';

export const checkAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startCreatingUserPasswordEmail = ({ displayName, email, password }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const { data } = await api.post('/user/', {
            displayName,
            email,
            password
        });

        if(data.status === 200){
            const { displayName, email, _id } = data.data;
            dispatch(login({
                authPage: 'login',
                uid: _id,
                email: email,
                displayName: displayName,
            }))
        }else{
            dispatch(logout({message: data.message}));
        };
    };
};

export const loginUserWithPasswordAndEmail = ({ email, password }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const { data } = await api.post('/auth/', {
            email, password
        });

        if(data.status === 200){
            const { displayName, email, _id } = data.data;
            dispatch(login({
                authPage: 'login',
                uid: _id,
                email: email,
                displayName: displayName,
            }))
        }else{
            dispatch(logout({message: data.message}));   
        };
    };
};
