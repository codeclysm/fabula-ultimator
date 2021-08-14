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
    h3: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
      fontSize: "1rem",
      lineHeight: "1.125rem",
    },
    cardtitle: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
      textAlign: "center",
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
      background: "#264137",
      color: "#ffffff",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
  },
});

export default FabulaUltimator;
