import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import GameStore from "./contex/GameStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GameStore>
        <App />
      </GameStore>
    </BrowserRouter>
  </React.StrictMode>
);
{
  /* <Routes>
  <Route path="/" element={<App />}>
    <Route path="/blogs" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/projects" element={<AddMovie />} />
    <Route path="/about" element={<Navbar />} />
    <Route path="/contact" element={<App />} />
  </Route>
</Routes>; */
}
