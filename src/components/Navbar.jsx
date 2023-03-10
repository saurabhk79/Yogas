import React, { useState } from "react";
import Menu from "/bx-menu.svg";
import cross from "/bx-x.svg";

const Navbar = () => {
  const [navTrig, setNavTrig] = useState(true);
  const handleNav = () => {
    setNavTrig(!navTrig);
  };
  return (
    <div className="absolute w-full">
      <div className="max-w-[1224px] mx-auto flex items-center justify-between bg-transparent">
        <div className="text-3xl font-bold m-4 text-white">YOGAS</div>

        <ul className="uppercase font-semibold lg:flex hidden mr-4">
          <li className="m-2 px-4 py-2 rounded-lg hover:text-white hover:bg-slate-700">
            home
          </li>
          <li className="m-2 px-4 py-2 rounded-lg hover:text-white hover:bg-slate-700">
            classes
          </li>
          <li className="m-2 px-4 py-2 rounded-lg hover:text-white hover:bg-slate-700">
            about
          </li>
          <li className="m-2 px-4 py-2 rounded-lg hover:text-white hover:bg-slate-700">
            yoga
          </li>
          <li className="m-2 px-4 py-2 rounded-lg hover:text-white hover:bg-slate-700">
            pricing
          </li>
          <li className="m-2 px-4 py-2 rounded-lg hover:text-white hover:bg-slate-700">
            contact us
          </li>
        </ul>
        <div
          className="px-4 block lg:hidden cursor-pointer"
          onClick={handleNav}
        >
          {navTrig ? <img src={Menu} /> : <img src={cross} />}
        </div>
      </div>

      {navTrig ? null : (
        <ul className="bg-slate-900 font-semibold text-white m-6 uppercase p-4 lg:hidden rounded-lg">
          <li className="p-2 rounded-lg hover:text-white hover:bg-slate-700">
            home
          </li>
          <li className="p-2 rounded-lg hover:text-white hover:bg-slate-700">
            classes
          </li>
          <li className="p-2 rounded-lg hover:text-white hover:bg-slate-700">
            about
          </li>
          <li className="p-2 rounded-lg hover:text-white hover:bg-slate-700">
            yoga
          </li>
          <li className="p-2 rounded-lg hover:text-white hover:bg-slate-700">
            pricing
          </li>
          <li className="p-2 rounded-lg hover:text-white hover:bg-slate-700">
            contact us
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
