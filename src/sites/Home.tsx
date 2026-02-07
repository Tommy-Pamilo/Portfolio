import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import projectsData from "../data/projects";
import skillData from "../data/skills"; 
import { MdEmail } from "react-icons/md"; 


interface HomeProps {
  onContactClick: () => void;
}

export default function Home({ onContactClick }: HomeProps) {
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setCurrentIdx(index);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryImages) {
      setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryImages) {
      setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 selection:bg-zinc-700 selection:text-white relative font-sans">
      
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: "radial-gradient(circle, #444 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-20 z-10">
        
        <header className="mb-20">
          <h1 className="text-white text-4xl font-bold mb-8 tracking-tight italic uppercase">
            Tommy Pamilo
          </h1>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            <span className="text-white font-medium">Junior 3D Modeler</span> focused on game assets and diverse creative projects. 
            Based in Finland, I also <span className="text-white font-medium">occasionally engage in web development</span>, building clean and modern websites.
          </p>
        </header>

        {/* projects */}
        <section className="mb-24">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
            Featured Projects
          </h2>
          <div className="space-y-4">
            {projectsData.map((p, index) => (
              <ProjectCard 
                key={index}
                title={p.title}
                description={p.description}
                images={p.images}
                tags={p.tags}
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </section>

        {/* skills */}
        <section className="mb-20">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillData.map((skill, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-colors group"
              >
                <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                  {React.cloneElement(skill.icon as React.ReactElement, { size: 28 })}
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">{skill.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* gallery arrows */}
        {galleryImages && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setGalleryImages(null)}>
            {galleryImages.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors text-4xl p-4 z-[110]">{"<"}</button>
                <button onClick={nextImg} className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors text-4xl p-4 z-[110]">{">"}</button>
              </>
            )}
            <div className="relative max-w-5xl flex flex-col items-center">
                <img src={galleryImages[currentIdx]} className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl shadow-red-500/10" onClick={(e) => e.stopPropagation()}/>
                <div className="mt-4 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{currentIdx + 1} / {galleryImages.length}</div>
            </div>
          </div>
        )}

    
        
<button 
  onClick={onContactClick}
  className="hidden md:block fixed bottom-8 right-8 z-[140] bg-white hover:bg-red-600 text-black hover:text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group"
>
  <MdEmail size={24} className="group-hover:rotate-12 transition-transform" />
</button>

        <footer className="mt-20 pt-8 border-t border-zinc-900 text-[10px] tracking-widest text-zinc-600 uppercase">
          © {new Date().getFullYear()} Tommy Pamilo • Portfolio
        </footer>
      </div>
    </div>
  );
}