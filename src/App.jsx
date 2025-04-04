// src/App.js
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import KajianRutin from "./pages/KajianRutin";

function App() {
  return (
    <>
      {/* Topbar + Navbar fixed di atas */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Topbar />
        <Navbar />
      </div>

      {/* Konten di bawahnya diberi margin/padding-top agar tidak tertutup */}
      <div className="pt-[0rem]">
        <Home />
        {/* <KajianRutin /> */}
      </div>
    </>
  );
}

export default App;
