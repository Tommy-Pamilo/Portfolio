import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sites/Home";
import About from "./sites/About";
import Navbar from "./Components/Navbar";
import Contact from "./sites/Contact";

const App: React.FC = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
   )
}
export default App;

