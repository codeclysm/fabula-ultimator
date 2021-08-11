import { createTheme } from "@material-ui/core/styles";

const FabulaUltimator = createTheme({
  palette: {
    primary: {
      main: "#264137",
    },
    secondary: {
      main: "#85C3B1",
    },
    background: {
      main: "#E2F3EE",
    },
  },
  typography: {
    fontFamily: ["PT Sans Narrow", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
    },
  },
});

export default FabulaUltimator;
