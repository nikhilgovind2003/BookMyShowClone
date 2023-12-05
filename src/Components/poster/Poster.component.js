import React from "react";


const Poster = (props) => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="mx-2 lg:w-44 md: w24">
          <img
            src={props.src}
            className="w-full h-full rounded-xl"
            alt={props.Heading}
          />

        <h3
          className={`lg:font-bold lg:text-xl md:text-sm sm:text-sm ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.Heading}
        </h3>
        <p
          className={`lg:lg:text-sm sm:text-xs md:text-xs ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
          >
          {props.paragraph}
        </p>
          </div>
      </div>
    </div>
  );
};

export default Poster;
