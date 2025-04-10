// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import KajianRutin from "./pages/KajianRutin";

function App() {
  return (
    <Router>
      {/* Topbar + Navbar fixed di atas */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Topbar />
        <Navbar />
      </div>

      {/* Konten di bawahnya diberi margin/padding-top agar tidak tertutup */}
      <div className="pt-[0rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/kajian-rutin" element={<KajianRutin />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;