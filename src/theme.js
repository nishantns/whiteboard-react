import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(",")
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none"
            }
        }
    }
});