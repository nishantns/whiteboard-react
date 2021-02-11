import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        textPrimary: "#3e3f42"
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none"
            }
        }
    }
});