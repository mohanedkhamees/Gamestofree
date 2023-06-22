import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/projects" element={<AddMovie />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact" element={<App />} />
        {/* </Route> */}
      </Routes>
      ;
    </div>
  );
}

export default App;
