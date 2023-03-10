import React from "react";

const Form = () => {
  return (
    <form className="bg-white max-w-[580px] mx-auto p-4 text-black rounded-lg">
      <input
        type="text"
        placeholder="Name"
        className="px-6 py-3 hover:shadow-md outline-none rounded-lg w-full my-4 hover:bg-slate-50"
      />
      <input
        type="email"
        placeholder="Email"
        className="px-6 py-3 hover:shadow-md outline-none rounded-lg w-full my-4 hover:bg-slate-50"
      />
      <input
        type="number"
        placeholder="Phone number"
        className="px-6 py-3 hover:shadow-md outline-none rounded-lg w-full my-4 hover:bg-slate-50"
      />
      <textarea
        className="px-4 resize-none hover:bg-slate-50 w-full my-4 py-3 hover:shadow-md outline-none rounded-lg"
        rows="5"
        placeholder="Message"
      ></textarea>
      <div>
        <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold px-16 py-4 rounded-lg uppercase my-8">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
