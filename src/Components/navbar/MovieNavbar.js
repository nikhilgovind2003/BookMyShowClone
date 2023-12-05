import React from "react";
import { BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci"
import { FaAngleLeft } from "react-icons/fa"
const NavSm = (props) => {
  return (
    <>
      <div className="text-black bg-red-500 flex items-center justify-between">
         <div className=" flex items-center gap-3">
         <FaAngleLeft />
         <h2>{props.title}</h2>
         </div>
         <CiShare2 />
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2">
          <div className="w-12 h-12">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
            <BiSearch />
            <input
              type="search"
              className="w-full focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
            Bhubaneswar
            <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
const MovieNavbar = () => {
  return (
    <>
      <nav className=" bg-gray-100 text-black px-4 py-2">
        <div className="lg:hidden md:hidden">
          {
            /*Tablet Screen*/
            <NavSm />
          }
        </div>
        <div className="hidden lg:flex">
          {
            /*desktop Screen*/
            <NavLg />
          }
        </div>
      </nav>
    </>
  );
};
export default MovieNavbar;
