import * as React from 'react';
import {Box, ThemeProvider} from "@mui/material";
import {AppTheme} from "./theme/AppTheme";

export default function App() {
    return (
        <ThemeProvider theme={AppTheme}>
            <Box>
                TEST
            </Box>
        </ThemeProvider>
    );
}
