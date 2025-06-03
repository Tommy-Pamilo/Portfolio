import React from "react";
import type { Project } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";
import { useState } from "react";

type Props = {
  projects: Project[];
};

export default function ProjectListMobile({ projects }: Props) {
  const [zoomedProjectIndex, setZoomedProjectIndex] = useState<number | null>(
    null
  );
  return (
    <div className="min-h-screen bg-black p-4 text-white overflow-auto">
      <header className="text-center mb-8 sticky top-7  bg-black z-10 py-4 px-4">
        <h1 className="text-3xl font-bold mb-2 break-words leading-tight">
          Tommy Pamilo
        </h1>
        <p className="text-lg">Software Developer</p>
      </header>

      <main className="flex flex-col gap-6 max-w-lg mx-auto">
        {projects.map((project, index) => (
          <div key={project.title} onClick={() => setZoomedProjectIndex(index)}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              isSelected={true}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
