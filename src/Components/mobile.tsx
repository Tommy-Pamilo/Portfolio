import React, { useState } from "react";
import type { Project } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectListMobile({ projects }: Props) {
  const [zoomedProjectIndex, setZoomedProjectIndex] = useState<number | null>(
    null
  );

  return (
    <div className="min-h-screen bg-black p-4 text-white overflow-auto">
      <header className="text-center mb-8 sticky top-7 bg-black z-10 py-4 px-4">
        <h1 className="text-3xl font-bold mb-2 break-words leading-tight">
          Tommy Pamilo
        </h1>
        <p className="text-lg">Software Developer</p>
      </header>

      <main className="flex flex-col gap-5 max-w-lg mx-auto pb-32">
        {projects.map((project, index) => (
          <div key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              isSelected={true}
              onZoom={() => setZoomedProjectIndex(index)}
            />
          </div>
        ))}
      </main>

      {zoomedProjectIndex !== null &&
        projects[zoomedProjectIndex]?.imageUrl && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setZoomedProjectIndex(null)}
          >
            <div
              className="p-2 rounded-lg shadow-xl w-full max-full border-4 border-gray-300 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[zoomedProjectIndex].imageUrl}
                alt={projects[zoomedProjectIndex].title}
                className="object-contain w-full h-full rounded"
              />
            </div>
          </div>
        )}
    </div>
  );
}
