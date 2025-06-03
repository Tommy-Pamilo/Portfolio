import React from "react";
import { FaReact, FaUnity, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiCsharp, SiGithub } from "react-icons/si";
export type Skill = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const skillData: Skill[] = [
  {
    icon: <FaReact size={40} color="#61DAFB" />,
    title: "React",
    description:
      "I primarily develop with React/Next.js, utilizing React for personal projects.",
  },
  {
    icon: <SiCsharp size={40} color="#68217A" />,
    title: "C#",
    description: "The most projects were done in this language at school",
  },

  {
    icon: <SiTypescript size={40} color="#3178C6" />,
    title: "TypeScript",
    description: "I use this in react.",
  },
  {
    icon: <FaUnity size={40} color="#3178C6" />,
    title: "Unity",
    description: "I have been practicing making games..",
  },
  {
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    title: "CSS",
    description:
      "To improve the visual appearance, I consistently use CSS, mainly TailwindCSS, in almost all of my projects.",
  },
  {
    icon: <SiGithub size={40} color="#181717" />,
    title: "Github and Git",
    description:
      "I regularly use Git and GitHub across work, academic, and personal projects to manage version control.",
  },
  {
    icon: <FaDatabase size={40} color="#4479A1" />,
    title: "MySQL",
    description: "I use this database in my projects.",
  },
];
export default skillData;
