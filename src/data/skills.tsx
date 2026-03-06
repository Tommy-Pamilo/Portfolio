import React from "react";
import skillData from "../data/skills"; 

type Skill = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function SkillBox({ icon, title, description }: Skill) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-full h-full flex flex-col">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {Array.isArray(skillData) && skillData.map((skill: Skill, index: number) => (
          <SkillBox
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}