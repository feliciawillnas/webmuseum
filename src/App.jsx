import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Information } from "./pages/Information";
import { GlobalStyles } from "./styles/GlobalStyles";
import { mainTheme } from "./styles/theme";

function App() {
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
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
