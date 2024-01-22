import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import HeroSlider from "react-slick";
import { PrevArrow, NextArrow } from "./Arrows.components";
import Poster from "../poster/Poster.component";

const HeroCarousel = () => {
  const Posters = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1703930188975_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1704958137348_desklolla.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1705670802176_warnerdesk.jpg",
  ];

  const settingsLg = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "135px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const settings = {
    arrows: true,
    centerMode: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      {/* mobile view */}
      <div className="lg:hidden w-full h-64">
        <HeroSlider {...settings}>
          {Posters.map((image) => (
            <div className="w-full h-44 md:64 py-3">
              <img
                className="w-full h-full md:rounded"
                src={image}
                alt="seting"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      {/* DeskTop */}
      <div className="hidden lg:block bg-gray-200 h-54">
        <HeroSlider {...settingsLg}>
          {Posters.map((image) => (
            <div className="w-full h-full px-1 py-1">
              <img src={image} className="w-full h-full" alt="testing" />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
