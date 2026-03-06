import React from "react";
import { FaBlender, FaReact, FaNodeJs, FaPython, FaUnity } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiThreedotjs } from "react-icons/si";

export type Skill = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const skillData: Skill[] = [
  {
    icon: <FaBlender size={24} />,
    title: "Blender",
    description: "3D modeling, texturing, and animation for games and visualizations"
  },
  {
    icon: <FaReact size={24} />,
    title: "React",
    description: "Building interactive user interfaces with modern JavaScript framework"
  },
  {
    icon: <SiTypescript size={24} />,
    title: "TypeScript",
    description: "Type-safe JavaScript development for robust web applications"
  },
  {
    icon: <SiTailwindcss size={24} />,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development"
  },
  {
    icon: <FaNodeJs size={24} />,
    title: "Node.js",
    description: "Server-side JavaScript runtime for backend development"
  },
  {
    icon: <FaPython size={24} />,
    title: "Python",
    description: "General-purpose programming for automation and data processing"
  },
  {
    icon: <FaUnity size={24} />,
    title: "Unity",
    description: "Game development engine for creating interactive 3D experiences"
  },
  {
    icon: <SiThreedotjs size={24} />,
    title: "Three.js",
    description: "JavaScript 3D library for web-based 3D graphics and animations"
  }
];

export default skillData;