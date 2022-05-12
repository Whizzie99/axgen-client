import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import Home from "./pages/Home/Home";
import Navbar from "./components/shared/Navbar/Navbar";
import Mint from "./pages/Mint/Mint";

// AOS styles
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
