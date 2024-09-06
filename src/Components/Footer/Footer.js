import React from "react";
import { MdOutlineFort } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import SocialMediaLogo from "./SocialMediaLogo";
import LogoModel from "./LogoModel";
import {Inbox, Ticket} from "lucide-react"
const Footer = () => {



  return (
    <div className=" w-full bg-slate-900 h-64 text-white py-6">
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

      <div className=" flex items-center justify-center gap-64 py-4 text-gray-500 my-4 bg-gray-600">
        <Link className=" flex flex-col items-center gap-4">
          <FaUserTie size={54} />
          24/7 CUSTOMER CARE
        </Link>

        <Link className=" flex flex-col items-center gap-4">
          <Ticket size={54} />
          RESEND BOOKING CONFIRMATION
        </Link>

        <Link className=" flex flex-col items-center gap-4">
          <Inbox size={54} />
          SUBSCRIBE TO THE NEWSLETTER
        </Link>
      </div>

      <div className=" bg-slate-900 px-24 pt-4 flex flex-col gap-6 text-gray-500">
        <div className=" flex flex-col gap-2">
          <h1>MOVIE NOW SHOWING IN KOCHI</h1>
          <div className=" flex items-center gap-2">
           
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>UPCOMING MOVIES IN KOCHI</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>MOVIES BY GENERE</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>MOVIES BY LANGUAGE</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>SPORTS EVENT IN KOCHI</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>EVENT IN TOP CITIES</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>CENEMAS IN TOP CITIES</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>PLAYES IN TOP CITIES</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>ACTTIVITIES IN TOP CITIES</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>MOVIES NOW SHOWING</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>COUNTRIES</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>HELP</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>BOOKMYSHOW EXCLUSSIVE</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1>NEW YEAR EVE & CHRISTMAS CELEBRATION KOCHI</h1>
          <div className=" flex items-center gap-2">
            <Link>Neru</Link> |<Link>SALAR PART 1</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link> |<Link>Neru</Link> |<Link>Neru</Link> |
            <Link>Neru</Link>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <div className=" bg-gray-500 w-[50%] h-[1px]"></div>
          <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
          <div className=" bg-gray-500 w-[50%] h-[1px]"></div>
        </div>

        <div className=" py-4">
          <SocialMediaLogo />
        </div>

        <div className="text-center text-gray-600 pb-12 text-sm">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus reiciendis voluptates quasi corrupti rem?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga, nostrum reprehenderit beatae, eius, culpa facilis repudiandae aperiam possimus quaerat sapiente iusto. Quod sapiente nemo aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae praesentium
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
