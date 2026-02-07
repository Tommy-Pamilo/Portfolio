import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  onOpenGallery: (images: string[], index: number) => void; 
}

export default function ProjectCard({ title, description, images, tags, onOpenGallery }: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 p-5 rounded-xl transition-all mb-4">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Image area - Click to open gallery*/}
        <div 
          onClick={() => onOpenGallery(images, 0)}
          className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-800 cursor-zoom-in group/img"
        >
          {images.length > 0 ? (
            <>
              <img 
                src={images[0]} 
                alt={title} 
                className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-opacity"
              />
              {/* Overlay icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-600 text-xs">No image</div>
          )}
        </div>

        {/* Text area */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <svg className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}