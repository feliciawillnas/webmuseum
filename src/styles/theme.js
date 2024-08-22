import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22231E",
    },
    secondary: {
      main: "#F3F3F3",
    },
    background: {
      primary: "#F5F5F5",
      secondary: "#E8E5E4",
    },
    text: {
      primary: "#0D0D0D",
      secondary: "#747474",
    },
  },

  typography: {
    fontFamily: "Times New Roman, Times, serif",

    // h1: {
    //   fontFamily: "Times New Roman, Times, serif",
    //   fontSize: "5rem",
    //   fontWeight: 500,
    // },
    // h2: {
    //   fontFamily: "Helvetica Neue, Arial, sans-serif",
    //   fontSize: "2rem",
    //   fontWeight: 500,
    // },
    // h3: {
    //   fontFamily: "Monsieur La Doulaise, cursive",
    //   fontSize: "1.75rem",
    //   fontWeight: 500,
    // },
    title: {
      fontFamily: "Noto Serif, serif",
      fontSize: "3.5rem",
      fontWeight: 400,
    },
    p: {
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});

export default theme;
