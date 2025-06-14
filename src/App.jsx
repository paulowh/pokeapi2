import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Pokedex from "./pages/Pokedex";
// import MyPokedex from "./pages/MyPokedex";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/my-pokedex" element={<MyPokedex />} /> */}
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </Router>
  );
}
