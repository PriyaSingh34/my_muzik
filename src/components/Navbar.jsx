import React from "react";
import logo from "../assets/music-logo.png";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-24 z-[100]">
    <nav className="w-full h-full flex  flex-row justify-between bg-gradient-to-r from-red-600 to-black">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 p-2 ml-6 " />
        </Link>
      </div>
      <Searchbar />
    </nav>
    </div>
  );
};

export default Navbar;
