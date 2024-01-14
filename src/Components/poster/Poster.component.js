import React, { useEffect, useState } from "react";



const Poster = (props) => {

// const [movieList, setMovieList] = useState([])

// const getMovie =()=>{
//   fetch("https://api.themoviedb.org/3/discover/movie?api_key=27686585f73b546ff5ecdbb27242c80c")
//   .then(res => res.json())
//   .then(json=> {setMovieList(json.results) 
//     console.log(json.results)})
// }


// useEffect(() => {
//   getMovie()
// }, [])

// console.log(movieList)
  return (
    <div>
      <div className=" flex flex-col justify-between items-center px-2">
        
          {/* // .map((movie) =>(          */}
        <div className="lg:w-64 rounded-lg">
         <div className=" rounded-lg mb-2">
          <img src={props.src} alt="hufr" className=" rounded-lg w-full h-full" />
         </div>
        <h3
          className={`lg:font-bold lg:text-xl md:text-sm sm:text-sm ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`lg:lg:text-sm sm:text-xs md:text-xs ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
          >
          {props.subtitle}
        </p>
          </div>
          {/* //  )) */}
          {/* } */}
      </div>
    </div>
  );
};

export default Poster;
