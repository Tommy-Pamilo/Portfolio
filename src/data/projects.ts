export type Project = {
  title: string;
  description: string;
  x: number;
  y: number;
  imageUrl?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "React + Tailwind",
    x: 200,
    y: 150,
    imageUrl: "",
  },
  {
    title: "Todo App",
    description: "Full-stack project with Node.js backend",
    x: 500,
    y: 100,
  },
  {
    title: "Game Demo",
    description: "unity Game",
    x: 300,
    y: 400,
  },
  {
    title: "Weather App",
    description: "Real-time weather data from OpenWeatherMap API",
    x: 700,
    y: 300,
  },
];

export default projects;
