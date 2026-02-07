import React from "react";
import { NavLink } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 text-white flex items-center justify-between px-6 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 font-sans">
      
      <div className="flex gap-5 items-center">
        <a href="https://www.linkedin.com/in/tommy-pamilo-303879264/" rel="noreferrer" target="_blank" className="transition-transform hover:scale-110">
          <FiLinkedin className="hover:text-red-500 text-zinc-400 text-xl" />
        </a>
        <a href="https://github.com/Tommy-Pamilo" rel="noreferrer" target="_blank" className="transition-transform hover:scale-110">
          <FaGithub className="hover:text-red-500 text-zinc-400 text-xl" />
        </a>

     
        <button 
          onClick={onContactClick}
          className="md:hidden transition-transform hover:scale-110 focus:outline-none"
        >
          <MdEmail className="hover:text-red-500 text-zinc-400 text-2xl" />
        </button>
      </div>

      <div className="flex gap-8 uppercase tracking-widest text-sm">
      </div>
    </nav>
  );
};

export default Navbar;