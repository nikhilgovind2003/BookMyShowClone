import React from 'react'
import axios from 'axios';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroSlider from "react-slick"
import { PrevArrow,NextArrow } from './Arrows.components';
import { useState } from 'react';
import { useEffect } from 'react';


function HeroCarousel() {


    const [images, setImages] = useState([]);
    useEffect (()=>{
        const requestPlayMovies = async()=>{
            const getImage = await axios.get('/movie/now_playing');
            setImages(getImage.data.result)
        }
        requestPlayMovies();
    }, [])










    const settingsLg= {
        arrows: true,
        centerMode : true,
        centerPadding: "300px",
        autopay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<PrevArrow />,
        nextArrow:<NextArrow />
      };
    const settings = {
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<PrevArrow />,
        nextArrow:<NextArrow />
      };
    
  return (
    <>
    {/* mobile view */}
    <div className='lg:hidden '>
    <HeroSlider {...settings}>
            {
                images.map((image) =>(
                    <div className='h-auto px-1 py-2'>
                        <img className='w-full h-full md:rounded' src={`https://image.tmdb.org/t/p/original/${image.backgrop_path}`} alt="This is caraosel image" />
                    </div>
                ))
            }
        </HeroSlider>
    </div>



    {/* DeskTop */}
    <div className='hidden lg:block'>
    <HeroSlider {...settingsLg}>
            {
                images.map((image) =>(
                    <div className='h-96 px-2 py-3 w-full rounded'>
                        <img className='w-full h-full rounded' src={`https://image.tmdb.org/t/p/original/${image.backgrop_path}`} alt="This is caraosel image" />
                    </div>
                ))
            }
        </HeroSlider>
    </div>
        
    </>
  )
}

export default HeroCarousel