import React from "react";
import { NavLink } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 text-white flex items-center justify-around px-8 shadow-md z-50"
      style={{
        backgroundImage: "radial-gradient(circle, #222 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundColor: "#111",
      }}
    >
      <div className="flex mr-96 gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/tommy-pamilo-303879264/"
          rel="noreferrer"
          target="_blank"
        >
          <FiLinkedin className="hover:text-red-500 text-zinc-200 text-2xl" />
        </a>

        <a
          href="https://github.com/Tommy-Pamilo"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub className="hover:text-red-500 text-zinc-200 text-2xl" />
        </a>
      </div>

      <div className="flex gap-2 items-center uppercase">
        <NavLink
          className="rounded-md hover:text-white hover:bg-black hover:shadow-[0_0_20px_2px_#dc2626] py-3 px-4"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="rounded-md hover:text-white hover:shadow-[0_0_20px_2px_#dc2626] py-3 px-4"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="rounded-md hover:text-white hover:bg-black hover:shadow-[0_0_20px_2px_#dc2626] py-3 px-4"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
