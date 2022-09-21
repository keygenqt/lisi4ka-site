import {createTheme} from '@mui/material/styles';

import {palette} from "./impl/palette.js";
import {typography} from "./impl/typography.js";

// assets
import colors from './../assets/scss/colors.scss';

export const AppTheme = createTheme({
    breakpoints: {
        values: {
            xs: 420,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: palette(colors),
    typography: typography,
});