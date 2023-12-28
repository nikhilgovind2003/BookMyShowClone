import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import image1 from "../../Images/1698603955302_web.avif";
import image2 from "../../Images/1699965931661_sunburncolombowebshowcase1240x300.avif";
import image3 from "../../Images/1700146033284_webpage.avif";

import HeroSlider from "react-slick";
import { PrevArrow, NextArrow } from "./Arrows.components";
// import { useState } from "react";
// import { useEffect } from "react";

const HeroCarousel = () => {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     const requestPlayMovies = async () => {
  //       const getImage = await axios.get("/movie/now_playing");
  //       setImages(getImage.data.result);
  //     };
  //     requestPlayMovies();
  //   }, []);

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

  const images = [image1, image2, image3];
  return (
    <>
      {/* mobile view */}
      <div className="lg:hidden bg-red-700 ">
        <HeroSlider {...settings}>
          {images.map((image) => (
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
      <div className="hidden lg:block bg-gray-200">
        <HeroSlider {...settingsLg}>
          {images.map((image) => (
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
