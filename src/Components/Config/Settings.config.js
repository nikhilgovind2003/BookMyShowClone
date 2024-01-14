import { PrevArrow1, NextArrow1 } from "../HeroCarousel/Arrows.components";

let settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2 ,
    prevArrow: <PrevArrow1 />,
    nextArrow: <NextArrow1 />,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: <PrevArrow1 />,
        nextArrow: <NextArrow1 />   
      }
    },
      {
      breakpoint: 768,
      settings: {
        prevArrow: <PrevArrow1 />,
        nextArrow: <NextArrow1 />  ,
        slidesToShow: 3,
        slidesToScroll: 2   
      }
    },
      {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <PrevArrow1 />,
        nextArrow: <NextArrow1 />   
      }
    }
      
    ]
  }

export default settings;