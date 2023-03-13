import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="text-3xl font-bold mb-8">
        Subsc<span className="underline underline-offset-8">ribe Our New</span>
        sletter
      </div>
      <form className="bg-white p-2 flex items-center justify center rounded-lg">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 text-black text-lg md:w-[18rem] outline-none"
        />
        <div>
          <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold px-16 py-4 uppercase rounded-lg">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
