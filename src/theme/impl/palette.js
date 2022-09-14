/**
 * Colors MUI
 * @link https://mui.com/material-ui/customization/palette/
 */
export const palette = (colors) => {
    return {
        primary: {
            light: colors?.primaryLight,
            main: colors?.primaryMain,
            dark: colors?.primaryDark,
        },
        secondary: {
            light: colors?.secondaryLight,
            main: colors?.secondaryMain,
            dark: colors?.secondaryDark,
        },
        error: {
            light: colors?.errorLight,
            main: colors?.errorMain,
            dark: colors?.errorDark
        },
        warning: {
            light: colors?.warningLight,
            main: colors?.warningMain,
            dark: colors?.warningDark
        },
        info: {
            light: colors?.infoLight,
            main: colors?.infoMain,
            dark: colors?.infoDark
        },
        success: {
            light: colors?.successLight,
            main: colors?.successMain,
            dark: colors?.successDark
        },
        gray: {
            light: colors?.grayLight,
            main: colors?.grayMain,
            dark: colors?.grayDark
        },
    }
}