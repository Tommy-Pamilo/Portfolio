import React from "react";
import { FaReact, FaUnity, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiCsharp, SiGithub } from "react-icons/si";

type SkillBoxProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function SkillBox({ icon, title, description }: SkillBoxProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md max-w-sm w-64 h-48 flex flex-col">
      <div className="flex items-center gap-4 mb-3">
        <div>{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-white flex-grow overflow-hidden">{description}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="p-4 max-w-6xl mx-auto mt-20 mb-20 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <SkillBox
          icon={<FaReact size={40} color="#61DAFB" />}
          title="React"
          description="I primarily develop with React/Next.js, utilizing React for personal projects.

"
        />
        <SkillBox
          icon={<SiCsharp size={40} color="#68217A" />}
          title="C#"
          description="The most projects were done in this language at school"
        />

        <SkillBox
          icon={<FaUnity size={40} color="#000000" />}
          title="Unity"
          description="I have been practicing making games.."
        />
        <SkillBox
          icon={<SiTypescript size={40} color="#3178C6" />}
          title="TypeScript"
          description="I use this in react."
        />

        <SkillBox
          icon={<FaCss3Alt size={40} color="#1572B6" />}
          title="CSS"
          description="To improve the visual appearance, I consistently use CSS, mainly TailwindCSS, in almost all of my projects."
        />

        <SkillBox
          icon={<SiGithub size={40} color="#181717" />}
          title="Github and Git"
          description="I regularly use Git and GitHub across work, academic, and personal projects to manage version control."
        />
        <SkillBox
          icon={<FaDatabase size={40} color="#4479A1" />}
          title="MySQL"
          description="I use this database in my projects."
        />
      </div>
    </div>
  );
}
