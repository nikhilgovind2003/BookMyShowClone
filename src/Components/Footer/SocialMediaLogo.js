import React from "react";
import LogoModel from "./LogoModel";
import { Link } from "react-router-dom";
import { RiFacebookFill,RiYoutubeFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
const logo = [
  {
    logo: <RiFacebookFill size={30} />,
  },
  {
    logo: <RiTwitterFill size={30} />,
  },
  {
    logo: <RiYoutubeFill  size={30} />,
  },
  {
    logo: <FaLinkedinIn size={30} />,
  },
  
];

const SocialMediaLogo = () => {
  return (
    <div className=" flex items-center justify-center w-[400px] gap-4 container mx-auto  py-4">
      {logo.map((logos) => (
        <Link>
          <LogoModel {...logos} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLogo;
