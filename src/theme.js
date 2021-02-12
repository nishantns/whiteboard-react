import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
          main: "#5ac568",
        },
        secondary: {
            main: "#9bbdcb",
        },
        text: {
            secondary: "#5f7381",
        },
    },
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        textPrimary: "#3e3f42",
        h2: {
            fontSize: "20px",
            fontWeight: 600,
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.3,
            letterSpacing: "0.2px",
          },
        h4: {
            fontSize: "16px",
            fontWeight: 500,
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.5,
            letterSpacing: "0.1px",
          },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none"
            }
        }
    }
});