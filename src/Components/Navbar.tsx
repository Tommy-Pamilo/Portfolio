import React from "react";
import { NavLink } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full h-16 text-white flex items-center justify-between px-8 shadow-md z-50 bg-[#111]"
        style={{
          backgroundImage: "radial-gradient(circle, #222 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        {/* Vasemmalla someikonit */}
        <div className="flex gap-4 items-center">
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

        {/* Oikealla navigointilinkit, mutta eivät ihan reunassa */}
        <div
          className="hidden md:flex gap-6 items-center uppercase"
          style={{ marginRight: "2rem" }}
        >
          <NavLink
            className="rounded-md hover:text-white hover:bg-black hover:shadow-[0_0_20px_2px_#dc2626] py-3 px-4"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="rounded-md hover:text-white hover:shadow-[0_0_20px_2px_#dc2626] py-3 px-4"
            to="/Skills"
          >
            Skills
          </NavLink>
          <NavLink
            className="rounded-md hover:text-white hover:bg-black hover:shadow-[0_0_20px_2px_#dc2626] py-3 px-4"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Mobiilin alapalkki navigointilinkkejä varten */}
      <nav
        className="fixed bottom-0 left-0 w-full h-16 bg-[#111] flex justify-around items-center shadow-md z-50 md:hidden"
        style={{
          backgroundImage: "radial-gradient(circle, #222 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-zinc-200 hover:text-red-500 uppercase font-semibold ${
              isActive ? "text-red-500" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-zinc-200 hover:text-red-500 uppercase font-semibold ${
              isActive ? "text-red-500" : ""
            }`
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-zinc-200 hover:text-red-500 uppercase font-semibold ${
              isActive ? "text-red-500" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
