import React from "react";
import aboutYogaImage from "/yogas/about.png";

const AboutUs = () => {
  return (
    <div className="m-8 flex flex-col items-center">
      <div className="mt-10 text-3xl font-bold">About Us</div>
      <div className="text-lg text-center my-5 w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        obcaecati corporis dolores sed id illum, provident est vero numquam
        neque.
      </div>
      <img src={aboutYogaImage} alt="" />
      <div>
        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold px-16 py-4 rounded-lg uppercase my-8">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
