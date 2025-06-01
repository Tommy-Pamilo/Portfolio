import React, { useState, useEffect, useRef } from "react";
import projectsData from "../data/projects";
import ProjectCard from "../Components/ProjectCard";

type Project = (typeof projectsData)[0];

const LOCAL_STORAGE_KEY = "myPortfolioProjectsPositions";

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
];

export default function ProjectMap() {
  const getStoredProjects = (): Project[] => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return projectsData;
      }
    }
    return projectsData;
  };

  const [projects, setProjects] = useState<Project[]>(getStoredProjects);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const draggingIndex = useRef<number | null>(null);
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const centerWidth = 350;
  const centerHeight = 120;
  const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    draggingIndex.current = index;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    dragOffset.current = { x: projects[index].x, y: projects[index].y };
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingIndex.current === null || !dragStartPos.current) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    if (!isDragging.current && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      isDragging.current = true;
    }

    if (isDragging.current) {
      setProjects((prevProjects) => {
        const newProjects = [...prevProjects];
        newProjects[draggingIndex.current!] = {
          ...newProjects[draggingIndex.current!],
          x: dragOffset.current.x + dx,
          y: dragOffset.current.y + dy,
        };
        return newProjects;
      });
    }
  };

  const handleMouseUp = () => {
    draggingIndex.current = null;
    dragStartPos.current = null;
    isDragging.current = false;
  };

  const handleProjectClick = (index: number) => {
    if (!isDragging.current) {
      setSelectedProjectIndex(index === selectedProjectIndex ? null : index);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="relative"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "radial-gradient(circle, #222 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div
          className="absolute text-center text-white select-none"
          style={{
            top: center.y - centerHeight / 2,
            left: center.x - centerWidth / 2,
            width: centerWidth,
            height: centerHeight,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <h1 className="text-4xl font-bold mb-2">Tommy Pamilo</h1>
          <p className="text-lg">Software Developer</p>
        </div>

        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 15 }}
        >
          {connections.map(([fromIndex, toIndex], idx) => {
            const from = projects[fromIndex];
            const to = projects[toIndex];
            if (!from || !to) return null;

            const fromX = from.x;
            const fromY = from.y;
            const toX = to.x;
            const toY = to.y;

            return (
              <line
                key={idx}
                x1={fromX}
                y1={fromY}
                x2={toX}
                y2={toY}
                stroke="#f87171"
                strokeWidth={2}
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {projects.map((p, i) => (
          <div
            key={i}
            className={`absolute select-none ${
              draggingIndex.current === i && isDragging.current
                ? "cursor-grabbing"
                : "cursor-pointer"
            }`}
            style={{
              top: p.y,
              left: p.x,
              zIndex: selectedProjectIndex === i ? 30 : 20,
              transition: isDragging.current ? "none" : "all 0.3s ease",
              userSelect: "none",
            }}
            onMouseDown={(e) => handleMouseDown(e, i)}
            onClick={() => handleProjectClick(i)}
          >
            <div
              className="w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md absolute -top-2 -left-2"
              title={p.title}
            ></div>

            <div className="mt-6 ml-6">
              <ProjectCard
                title={p.title}
                description={p.description}
                isSelected={selectedProjectIndex === i}
                imageUrl={p.imageUrl}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
