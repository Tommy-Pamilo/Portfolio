import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sites/Home";
import Navbar from "./Components/Navbar";
import Skills from "./sites/Skills";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;