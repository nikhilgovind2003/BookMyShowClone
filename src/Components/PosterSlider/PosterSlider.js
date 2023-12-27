import React from "react";
import settings from "../Config/Settings.config";
import Slider from "react-slick/lib/slider";
import TempImages from "../Config/TenPosters.config";
import Poster from "../poster/Poster.component";
import { Link } from "react-router-dom";

const PosterSlider = (props) => {

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
          {TempImages.map((image) => (
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
