import React from "react";
import yogaOne from "/yogas/our_yoga1.png";
import yogaTwo from "/yogas/our_yoga2.png";
import yogaThree from "/yogas/our_yoga3.png";
import yogaFour from "/yogas/our_yoga4.png";

const Classes = () => {
  return (
    <div className="flex items-center m-4 flex-col text-center">
      <div className="text-4xl mt-8 font-semibold">Our classes</div>
      <div className="lead mt-4 font-medium">
        We teach the most effective way to get a spiritual connection
      </div>
      <div className="mt-8 flex flex-wrap">
        <div className="flex flex-col items-center justify-center w-full">
          <img width={200} src={yogaOne} alt="padmasan" />
          <div className="text-2xl font-bold mt-2 uppercase">padmasan</div>
          <div className="text-slate-500 font-bold">Lorem ipsum dolor sit</div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div>
            <img width={200} src={yogaTwo} alt="padmasan" />
            <div className="text-2xl font-bold mt-2 uppercase text-center">
              Trikonasan
            </div>
            <div className="text-slate-500 font-bold">
              Lorem ipsum dolor sit
            </div>
          </div>
          <div>
            <img width={200} src={yogaThree} alt="padmasan" />
            <div className="text-2xl font-bold mt-2 uppercase text-center">
              Trikonasan
            </div>
            <div className="text-slate-500 font-bold">
              Lorem ipsum dolor sit
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <img width={200} src={yogaFour} alt="padmasan" />
          <div className="text-2xl font-bold mt-2 uppercase text-center">
            padmasan
          </div>
          <div className="text-slate-500 font-bold">Lorem ipsum dolor sit</div>
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        <button className="bg-slate-900 text-white font-bold px-16 py-4 rounded-lg hover:bg-slate-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Classes;
