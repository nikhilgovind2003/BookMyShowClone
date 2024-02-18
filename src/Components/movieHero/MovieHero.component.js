import React from "react";
import "../../App.css";
import { BiChevronRight } from "react-icons/bi";
// import CastCarousel from "../CastCrousel/CastCarousel";
import { IoMdStar } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import CastCarousel from "../CastCrousel/CastCarousel";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const SmImage = () => {
  return (
    <div className=" px-4">
      {/* image */}
      <div className=" relative">
        <img
          className=" rounded-md h-full w-full"
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/shivrayancha-chhava-et00370805-1705302615.jpg"
          alt="sm_image"
        />
        <div className=" text-center py-2 rounded-md absolute bottom-0 text-xs text-white w-full font-semibold bg-black">
          <p>in cinemas</p>
        </div>
        <div className=" text-white flex items-center justify-center absolute top-[50%] right-[75%] font-bold bg-gray-700 bg-opacity-50">
          <FaPlay />
          <p>Trailers (3)</p>
        </div>
      </div>

      {/* rating */}
      <div className=" flex flex-col justify-center gap-2">
        <div className=" flex items-center mt-4 gap-1">
          <span className=" font-medium text-lg flex items-center justify-center">
            <IoMdStar className=" text-red-500" size={20} />
            9.1/10
          </span>
          <span className=" flex text-gray-600 items-center font-normal">
            <p>1.6k votes</p>
            <BiChevronRight className="" />
          </span>
        </div>

        <div className=" flex text-xs font-medium items-center gap-2">
          <div className=" p-1 bg-gray-200">
            <p>2D</p>
          </div>
          <div className=" p-1 bg-gray-200">
            <p>MARATHI</p>
          </div>
        </div>
        <p className=" text-xs">
          2h 25m • Action, Drama, Historical • UA • 16 Feb, 2024
        </p>
        <p className=" text-xs">
          Aurangzeb wished to turn Burhanpur into the capital city and appointed
          Bahadur Khan as the Subhedar who made the lives of its residents
          miserable. Unable to tolerate this, Chhatrapati Sambhaji Maharaj raids
          the city and saves the people from the unjust rule.{" "}
          <button className=" text-red-500">...less</button>
        </p>
      </div>

      {/* trending */}
      <div className=" w-full p-2 shadow-xl border-2 mt-6 rounded-xl flex items-center gap-3">
        <div className=" flex items-center gap-2 text-sm bg-blue-500 text-white p-2 rounded-md">
          <AiOutlineRise size={20} />
          Trending
        </div>
        <p className=" font-semibold">
          <span className=" text-green-700">1.74K </span>
          tickets booked in last 1 hour
        </p>
      </div>
    </div>
  );
};

// const MdImage = () => {
//   return (
//     <div>
//       <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/live-malayalam-et00355771-1683012470.jpg" alt="Movie Image" />
//     </div>
//   )
// }

const LargeImage = (props) => {
  return (
    <>
      <div className="">
        <div
          className="relative w-full h-[500px] z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)",
            url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shivrayancha-chhava-et00370805-1705302615.jpg",
          }}
        >
          <div className="flex py-8 px-32">
            {/* image logo */}
            <div className=" relative">
              <img
                className=" rounded-lg"
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shivrayancha-chhava-et00370805-1705302615.jpg"
                alt=""
              />
              <div className=" bg-black text-white text-sm text-center bottom-0 absolute w-full p-2">
                <p>in cinemas</p>
              </div>
              <div className=" text-white flex items-center justify-center absolute top-[50%] left-[30%] font-bold bg-gray-900 bg-opacity-70 px-2 py-1 rounded-lg ">
                <FaPlay />
                <p>Trailers (3)</p>
              </div>
            </div>

            {/* description */}
            <div className=" z-50 text-white mx-8 mt-8">
              <h1 className=" text-4xl font-semibold">Shivrayancha Chhava</h1>
              <div className=" flex items-end my-4 gap-1">
                <span className=" font-medium text-2xl text-white flex items-center justify-center">
                  <IoMdStar className=" text-red-500" size={30} />
                  9.1/10
                </span>
                <span className=" flex items-center font-normal text-md">
                  <p> 1.6k votes</p>
                  <BiChevronRight className=" mt-1" />
                </span>
              </div>
              {/* rate now */}
              <div className=" py-4 bg-gray-700 w-[450px] rounded-lg flex justify-between px-4">
                <div>
                  <h1 className=" text-white font-medium text-lg">
                    Add your rating & review
                  </h1>
                  <p className=" text-md text-gray-300">Your ratings matter</p>
                </div>
                <button className=" bg-white text-black rounded-lg px-3 text-xl my-1 font-semibold">
                  Rate now
                </button>
              </div>

              {/* 2d malayalam */}
              <div className=" flex text-md font-medium mt-4 text-black items-center gap-2">
                <div className=" px-2 py-1 bg-gray-200 rounded-sm">
                  <p>
                    <a href="2d">2D</a>
                  </p>
                </div>
                <div className=" px-2 py-1 bg-gray-200 rounded-sm">
                  <p className="">
                    <a href="language">Marathi</a>
                  </p>
                </div>
              </div>

              {/* Type */}
              <div className=" mt-6">
                2h 25m • <a href="action">Action</a> , <a href="drama">Drama</a>{" "}
                , <a href="historical">Historical</a> • UA • 16 Feb, 2024
              </div>

              {/* button */}
              <Link to="/buytickets">
                <button className=" text-white bg-red-400 p-2 mt-8 px-8  rounded-lg font-semibold">
                  Book Tickets
                </button>
              </Link>
            </div>

            {/* share */}
            <div className=" flex items-center absolute top-12 text-white right-24 gap-4 rounded-md px-6 py-2 bg-gray-900 opacity-50 font-semibold text-lg">
              <CiShare2 size={40} />
              Share
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <div className=" fixed bottom-0 h-16 bg-white shadow-lg w-full border flex items-center px-4">
      <button className=" w-full bg-red-500 text-white rounded-xl p-2">
        Book Tickets
      </button>
    </div>
  );
};

const MovieHero = () => {
  return (
    <>
      <div className="lg:hidden pt-12 w-full">
        <SmImage />
        <Footer />
      </div>

      <div className=" hidden lg:block">
        <LargeImage />
      </div>
    </>
  );
};

export default MovieHero;
