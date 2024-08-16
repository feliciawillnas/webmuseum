import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Navigation } from "./pages/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
