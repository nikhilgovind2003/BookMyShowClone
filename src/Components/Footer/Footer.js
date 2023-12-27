import React from "react";
import { MdOutlineFort } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full bg-gray-800 h-64 text-white py-6">
      <div className=" flex items-center justify-between px-24">
        <div className=" flex items-center gap-4 text-lg">
          <MdOutlineFort size={32} />
          <span>List Your Show</span>
          <span>
            Got a show, event, activity or a greate experience? Partner with us
            & get listed on BookMyShow
          </span>
        </div>
        <Link to="/list-yoyur-show">
          <button className=" bg-red-500 text-white p-4 font-semibold text-lg rounded-md py-2 ">
            Contact Today!
          </button>
        </Link>
      </div>

      <div className=" flex items-center justify-between">
        <div>
          <FaUserTie />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
