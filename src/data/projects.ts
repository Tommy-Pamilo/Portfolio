import porttiImg from "../public/images/portti.jpg";
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
    description:
      "Personal portfolio page with project and skill management. Created with react and Tailwind",
    x: 789,
    y: 614,
    imageUrl: porttiImg,
  },
  {
    title: "Todo App",
    description: "Full-stack project with Node.js backend",
    x: 1462,
    y: 300,
  },
  {
    title: "Game Demo",
    description: "unity Game",
    x: 93,
    y: 537,
  },
  {
    title: "Weather App",
    description: "Real-time weather data from OpenWeatherMap API",
    x: 1022,
    y: 121,
  },
];

export default projects;
