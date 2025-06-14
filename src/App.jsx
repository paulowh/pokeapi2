import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListPokedex from "./pages/ListPokedex";
// import MyPokedex from "./pages/MyPokedex";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listpokedex" element={<ListPokedex />} />
        {/* <Route path="/my-pokedex" element={<MyPokedex />} /> */}
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </Router>
  );
}
