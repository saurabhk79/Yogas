import React from "react";

const Pricing = () => {
  return (
    <div className="m-4">
      <div className="text-3xl font-semibold my-8 text-center">Pricing</div>
      <div className="text-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        voluptas
      </div>
      <div className="grid gap-4 md:grid-cols-3 mt-12">
        <div className="flex flex-col justify-center items-center mt-12 md:mt-0">
          <div className="uppercase text-3xl font-semibold my-4">starter</div>
          <div className="text-7xl font-bold">
            <span className="text-orange-400">$</span>60
          </div>
          <div className="font-semibold my-8 text-center mx-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            ratione aperiam amet vero eaque nulla.
          </div>
          <div>
            <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold px-16 py-4 rounded-full uppercase my-8">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-12 md:mt-0">
          <div className="uppercase text-3xl font-semibold my-4">
            intermediate
          </div>
          <div className="text-7xl font-bold">
            <span className="text-orange-400">$</span>90
          </div>
          <div className="font-semibold my-8 text-center mx-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            ratione aperiam amet vero eaque nulla.
          </div>
          <div>
            <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold px-16 py-4 rounded-full uppercase my-8">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-12 md:mt-0 ">
          <div className="uppercase text-3xl font-semibold my-4">advance</div>
          <div className="text-7xl font-bold">
            <span className="text-orange-400">$</span>120
          </div>
          <div className="font-semibold my-8 text-center mx-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            ratione aperiam amet vero eaque nulla.
          </div>
          <div>
            <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold px-16 py-4 rounded-full uppercase my-8">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
