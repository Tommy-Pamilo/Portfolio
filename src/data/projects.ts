export interface Project {
  title: string;
  description: string;
  images: string[]; 
  tags: string[];   
  x?: number;       
  y?: number;      
}


const projectsData: Project[] = [
 
 {
  title: "Stylized Low-Poly Marketplace",
  description: "A game-ready interior environment featuring a variety of modular props. Optimized for real-time performance and stylized game projects.",
  images: [
    "/marketblender.png", 
    "/ylapuolikauppa.png", 
    "/sivustakauppa.png"
  ], 
  tags: ["Blender", "Low-Poly", "Game-Ready", "Stylized"],
},
  {
    title: "Portfolio Website",
    description: "Porfolio for 3D models and software projects. Built with React, Tailwind CSS, and TypeScript. Features a custom lightbox gallery and responsive design.",
    images: ["/portfolio.png"],
    tags: ["React", "TypeScript", "Tailwind CSS"],
  }
];

export default projectsData;