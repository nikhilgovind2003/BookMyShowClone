import React from "react";
import TempImages from "../Config/TenPosters.config";
import settings from "../Config/Settings.config";
import Slider from "react-slick";
import Poster from "../poster/Poster.component";




const Premier = (props) => {
  return (
    <div className=" fflex flex-col items-start">
      <div className=" py-4 px-2 flex flex-col items-start">
        <h3 className=" font-bold text-xl text-white">Premier Component</h3>
        <p className=" text-sm text-white">Brand new release every Friday</p>
      </div>
      <Slider {...settings}>
        {TempImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </div>
  );
};
export default Premier;
