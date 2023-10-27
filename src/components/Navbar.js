import React,{useState} from "react";

import logo1 from "../assets/logo1.png";
import { FaBars, Fatimes } from "react-icons/fa";

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed flex justify-between h-[80px] w-full items-center px-4 bg-slate-900 text-gray-300 ">

      <div className="">
        <img src={logo1} alt="logo1" style={{ width: "50px" }} />
      </div>

        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {/* hamburger Menu */}
        <FaBars />
      </div>
      {/* mobile Menu */}
      <ul className="{!nav ? 'hidden' :'absolute top-5 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}">
        <li className="py-4 text-4xl">Home</li>
        <li className="py-4 text-4xl">About</li>
        <li className="py-4 text-4xl">Skills</li>
        <li className="py-4 text-4xl">Projects</li>
        <li className="py-4 text-4xl">Contact</li>
      </ul>

      {/* social icon  */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
