import React, { useState, useEffect, useRef } from "react";
import projectsData from "../data/projects";
import ProjectCard from "../Components/ProjectCard";
import ProjectListMobile from "../Components/mobile";

type Project = (typeof projectsData)[0];

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export default function ProjectMap() {
  const isMobile = useIsMobile();

  const [originalPositions, setOriginalPositions] = useState<
    Record<number, { x: number; y: number }>
  >({});
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [zoomedProjectIndex, setZoomedProjectIndex] = useState<number | null>(
    null
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    if (isDragging.current) return;

    const margin = 40;
    const cardWidth = 400;
    const cardHeight = 400;

    const currentX = projects[index].x;
    const currentY = projects[index].y;

    if (selectedProjectIndex === index) {
      if (originalPositions[index]) {
        setProjects((prev) => {
          const newProjects = [...prev];
          newProjects[index] = {
            ...newProjects[index],
            x: originalPositions[index].x,
            y: originalPositions[index].y,
          };
          return newProjects;
        });
      }

      setSelectedProjectIndex(null);
      setZoomedProjectIndex(null);
      return;
    }

    setOriginalPositions((prev) => ({
      ...prev,
      [index]: prev[index] || { x: currentX, y: currentY },
    }));

    let newX = currentX;
    let newY = currentY;

    const bottomY = currentY + cardHeight + margin;
    if (bottomY > window.innerHeight) {
      const offset = bottomY - window.innerHeight;
      newY = Math.max(currentY - offset, margin);
    }

    if (currentX < margin) {
      newX = margin;
    }

    const rightX = currentX + cardWidth;
    if (rightX > window.innerWidth - margin) {
      const offset = rightX - (window.innerWidth - margin);
      newX = currentX - offset;
    }

    setProjects((prev) => {
      const newProjects = [...prev];
      newProjects[index] = {
        ...newProjects[index],
        x: newX,
        y: newY,
      };
      return newProjects;
    });

    setSelectedProjectIndex(index);
    setZoomedProjectIndex(null);
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

            return (
              <line
                key={idx}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
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
            ref={(el) => (cardRefs.current[i] = el)}
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
            <div className="w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md absolute -top-2 -left-2"></div>

            <div className="mt-6 ml-6">
              <ProjectCard
                title={p.title}
                description={p.description}
                isSelected={selectedProjectIndex === i}
                imageUrl={p.imageUrl}
                onZoom={() => setZoomedProjectIndex(i)}
              />
            </div>
          </div>
        ))}

        {zoomedProjectIndex !== null &&
          projects[zoomedProjectIndex]?.imageUrl && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setZoomedProjectIndex(null)}
            >
              <div
                className="p-2 rounded-lg shadow-xl max-w-[95vw] max-h-[90vh] border-4 border-gray-300 bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={projects[zoomedProjectIndex].imageUrl}
                  alt={projects[zoomedProjectIndex].title}
                  className="object-contain max-w-[85vw] max-h-[85vh] rounded"
                />
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
