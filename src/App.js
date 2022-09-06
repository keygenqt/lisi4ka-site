import * as React from 'react';
import {Box, ThemeProvider} from "@mui/material";
import {AppTheme} from "./theme/AppTheme";
import {NavigateContext} from "./base";
import {useContext} from "react";

export default function App() {

    const {route} = useContext(NavigateContext)

    return (
        <ThemeProvider theme={AppTheme}>
            <Box id={"pageSelection"} className={"ScrollSection"}>
                {route.render()}
            </Box>
        </ThemeProvider>
    );
}
