import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sites/Home";
import Navbar from "./Components/Navbar";
import Contact from "./sites/Contact";

import Skills from "./sites/Skills";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
