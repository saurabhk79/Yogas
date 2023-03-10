import React from "react";

const Hero = () => {
  return (
    <div className="bg-violet-500 h-screen text-white flex ">
      <div className="max-w-[1224px] mx-auto flex justify-center flex-col h-full">
        <div className="text-3xl font-bold">Represents you</div>
        <div className="text-[6rem] uppercase font-bold">
          Y<span className="text-orange-400"> O </span>G
          <span className="text-orange-400"> A </span>S
        </div>
        <div className="text-xl font-bold">
          The traditional and proven way <br /> to do yoga.
        </div>
        <div>
          <button className="px-16 py-4 my-8 text-white bg-slate-900 rounded-lg uppercase font-bold hover:bg-slate-700">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
