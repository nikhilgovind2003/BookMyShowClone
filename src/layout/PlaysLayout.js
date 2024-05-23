import React from "react";
import Poster from "../Components/poster/Poster.component";
import Plays from "../Components/pages/Plays"
import HeroNavbar from "./../Components/navbar/NavBar"
import BottomNavbar from "./../Components/navbar/BottomNavBar"
const PlaysLayout = () => {
  return(
    <>
    <HeroNavbar/>
    <Plays />
    </>
  )
};

export default PlaysLayout;
