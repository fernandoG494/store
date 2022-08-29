import { halloweenTheme } from "./halloweenTheme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export const AppTheme = ({ children }) => {
    return(
        <ThemeProvider theme={ halloweenTheme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    );
};
