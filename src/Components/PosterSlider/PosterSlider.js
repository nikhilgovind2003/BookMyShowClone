import React, { useEffect, useState } from "react";
import settings from "../Config/Settings.config";
import Slider from "react-slick/lib/slider";
import TempImages from "../Config/TenPosters.config";
import Poster from "../poster/Poster.component";
import { Link } from "react-router-dom";

const PosterSlider = (props) => {
  const [movieList, setMovieList] = useState([])

  const getMovie =()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=27686585f73b546ff5ecdbb27242c80c")
    .then(res => res.json())
    .then(json=> setMovieList(json.results))
  }
  
  console.log()
  useEffect(() => {
    getMovie()
  }, [])
  
  
  return (
    <div>
      <div className=" fflex flex-col items-start">
        <div className=" py-4 flex flex-col items-start">
          <h3
            className={`font-bold md:text-3xl sm:text-xl text-2xl ${
              props.isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {props.title}
          </h3>
          <p className=" text-sm text-white">{props.paragraph}</p>
        </div>
        <Slider {...settings}>
          {movieList.map((image) => (
            <Link to="/movie/:id">
              <Poster {...image} isDark={props.isDark} />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PosterSlider;
