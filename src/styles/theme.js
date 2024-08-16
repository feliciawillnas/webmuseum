import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#fffff6",
    },
  },
  typography: {
    fontFamily: "Times New Roman, Times, serif",
    // fontFamily: "Monsieur La Doulaise, cursive",

    h1: {
      fontFamily: "Times New Roman, Times, serif",
      fontSize: "5rem",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "Monsieur La Doulaise, cursive",
      fontSize: "1.75rem",
      fontWeight: 500,
    },
  },
});

export default theme;
