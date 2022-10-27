import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material';

export const halloweenTheme = createTheme({
    palette: {
        primary: {
            main: '#F58840'
        },
        secondary: {
            main: '#B85252'
        },
        error: {
            main: red[700]
        },
        background: {
            main: '#EADEDE'
        },
        text: {
            main: '#000000'
        },
        iconCard: {
            main: '#0a06e2',
        },
        money: {
            main: '#00a650',
        }
    }
});
