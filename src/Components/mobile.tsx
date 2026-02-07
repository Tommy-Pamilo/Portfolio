import React, { useState } from "react";
import type { Project } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectListMobile({ projects }: Props) {

  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setCurrentIdx(index);
  };

  const closeGallery = () => setGalleryImages(null);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryImages) setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryImages) setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 selection:bg-zinc-700 selection:text-white overflow-auto px-6">
      {/* HEADER */}
      <header className="py-16 border-b border-zinc-900 mb-12">
        <p className="text-zinc-400 leading-relaxed text-[15px]">
          <span className="text-white font-medium">3D Modeler & Software Developer</span> based in Finland. 
          I currently focus on creating high-quality 3D assets and building scalable web systems.
        </p>
        <p className="text-zinc-400 leading-relaxed text-[15px] mt-4">
          I value clean code, security, and minimalist design.
        </p>
      </header>

      {/*projects*/}
      <main className="flex flex-col gap-6 pb-20">
        <h2 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">
          Projects
        </h2>
        {projects.map((project) => (
          <div key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              images={project.images}
              tags={project.tags || []}
              onOpenGallery={openGallery} 
            />
          </div>
        ))}
      </main>

      {galleryImages && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4"
          onClick={closeGallery}
        >
          {/* close button */}
          <button className="absolute top-6 right-6 text-zinc-400">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* scaled for mobil */}
          {galleryImages.length > 1 && (
            <>
              <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 text-white/40 p-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 p-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}

          <div className="flex flex-col items-center w-full">
              <img 
                src={galleryImages[currentIdx]} 
                className="max-w-full max-h-[70vh] object-contain rounded shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="mt-6 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                {currentIdx + 1} / {galleryImages.length}
              </div>
          </div>
        </div>
      )}

      <footer className="pb-10 text-[11px] text-zinc-700 text-center">
        © {new Date().getFullYear()} Tommy Pamilo
      </footer>
    </div>
  );
}