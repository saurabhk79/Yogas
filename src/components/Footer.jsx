import React from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-slate-900 p-4 text-white pb-8 shadow-lg">
      <Newsletter />
      <hr className="border-2 border-white" />
      <div className="mt-8 grid md:grid-cols-3">
        <div className="mx-5">
          <div className="uppercase font-semibold text-2xl my-4">
            quick links
          </div>
          <ul>
            <li className="my-2 hover:bg-slate-700 rounded-lg p-2">Home</li>
            <li className="my-2 hover:bg-slate-700 rounded-lg p-2">About</li>
            <li className="my-2 hover:bg-slate-700 rounded-lg p-2">Classes</li>
            <li className="my-2 hover:bg-slate-700 rounded-lg p-2">Yoga</li>
            <li className="my-2 hover:bg-slate-700 rounded-lg p-2">Pricing</li>
            <li className="my-2 hover:bg-slate-700 rounded-lg p-2">
              Contact us
            </li>
          </ul>
        </div>
        <div className="mx-5">
          <div className="uppercase font-semibold text-2xl my-4">top yoga</div>
          <div className="text-lg">
            <h2 className="text-4xl mb-4">Just a dummy project</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet alias
            quaerat praesentium, numquam reprehenderit delectus facere quod
            neque ipsum? Et?
          </div>
        </div>
        <div className="mx-5">
          <div className="uppercase font-semibold text-2xl my-4">contact</div>
          <ul>
            <li className="my-4"> Location: Delhi, India </li>
            <li className="my-4"> Email: demo@email.com </li>
            <li className="my-4"> Call: 1234567890 </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
