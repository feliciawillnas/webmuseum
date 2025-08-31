import Lenis from "lenis";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./src/components/Header";
import { Gallery } from "./src/pages/Gallery";
import { Home } from "./src/pages/Home";
import { Information } from "./src/pages/Information";
import { Shop } from "./src/pages/Shop";
import { GlobalStyles } from "./src/styles/GlobalStyles";
import { mainTheme } from "./src/styles/theme";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
