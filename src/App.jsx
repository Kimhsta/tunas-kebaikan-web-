// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Donasi from "./pages/Donasi";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* Topbar + Navbar fixed di atas */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Topbar />
        <Navbar />
      </div>

      {/* Konten utama */}
      <div className="pt-[0rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/kajian-rutin" element={<KajianRutin />} /> */}
        </Routes>

        {/* Footer di bawah konten */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
