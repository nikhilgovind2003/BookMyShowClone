import React from "react";


const Poster = (props) => {
  return (
    <div>
      <div className=" flex flex-col justify-between items-center">
        <div className="lg:w-64 rounded-lg">
         <div className=" rounded-lg mb-2">
          <img src={props.src} alt="hufr" className=" rounded-lg w-full h-full" />
         </div>
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
