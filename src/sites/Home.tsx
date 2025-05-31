import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  document.title = "Home";

  return (
    <div className="justify-center select-none items-center flex flex-col">
      <div className=" text-7xl  font-semibold bg-[#0f172a] text-white mt-80 gap-2 flex flex-row">
        <p className="uppercase text-black ">Tommy</p>
        <p className="uppercase text-red-600">Pamilo</p>
      </div>

      <div className="flex text-2xl font-bold gap-2 mt-8 bg-[#0f172a]">
        <p className="uppercase text-red-600 ">Software</p>
        <p className="uppercase text-black">Developer</p>
      </div>
    </div>
  );
};

export default Home;
