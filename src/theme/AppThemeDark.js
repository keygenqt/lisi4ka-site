import {createTheme} from '@mui/material/styles';
import {paletteDark} from "./impl/paletteDark";
import {typography} from "./impl/typography.js";

export const AppThemeDark = createTheme({
    breakpoints: {
        values: {
            xs: 420,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: paletteDark(),
    typography: typography,
});