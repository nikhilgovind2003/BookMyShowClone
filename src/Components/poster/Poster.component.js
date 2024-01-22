import React from "react";

const Poster = (props) => {
  return (
    <div>
      <div className=" flex flex-col justify-between items-center px-2">
        <div className="lg:w-52 rounded-lg">
          <div className=" rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
              alt="hufr"
              className="rounded-lg w-full h-full"
            />
          </div>
          <h3
            className={`lg:font-bold lg:text-xl md:text-sm sm:text-sm mt-2 ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.original_title}
          </h3>
          <p
            className={`lg:lg:text-sm sm:text-xs md:text-xs ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
