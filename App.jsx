import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { fetchArtworks } from "./api";
import { Header } from "./src/components/Header";
import { Gallery } from "./src/pages/Gallery";
import { Home } from "./src/pages/Home";
import { Information } from "./src/pages/Information";
import { Shop } from "./src/pages/Shop";
import { GlobalStyles } from "./src/styles/GlobalStyles";
import { mainTheme } from "./src/styles/theme";

function App() {
  // Problem: scroll stops middle of page in gallery
  // because content is not fully loaded
  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis({
  //     autoRaf: true,
  //   });

  //   // Listen for the scroll event and log the event data
  //   lenis.on("scroll", (e) => {
  //     console.log(e);
  //   });
  // }, []);

  // Initialize state for artworks
  const [artworks, setArtworks] = useState([]);

  // Fetch artworks from api
  async function loadFallbackArtworks() {
    const res = await fetch("./src/data/allArtworks.jsonl");
    const text = await res.text();
    return text
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));
  }

  useEffect(() => {
    async function loadData() {
      // Call fetchArtworks (api.js) store in data
      const data = await fetchArtworks();

      // Filter public domain artworks and store
      setArtworks(data.filter((art) => art.is_public_domain));
    }
    loadData();
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
            <Route path="/gallery" element={<Gallery artworks={artworks} />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
