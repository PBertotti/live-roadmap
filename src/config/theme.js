import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: { main: "#00a335" },
    secondary: { main: "#fff" },
  },
  typography: {
    fontFamily: ["Nunito Sans, sans-serif"].join(","),
  },
});

export default theme;
