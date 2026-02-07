import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sites/Home";
import Navbar from "./Components/Navbar";
import Contact from "./sites/Contact";
import Skills from "./sites/Skills";

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      
      <Routes>
       
        <Route path="/" element={<Home onContactClick={() => setIsContactOpen(true)} />} />
        <Route path="/Skills" element={<Skills />} />
        
        <Route path="/Contact" element={<Contact onClose={() => setIsContactOpen(false)} />} />
      </Routes>

      
      {isContactOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsContactOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Contact onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};
export default App;