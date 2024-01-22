import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
import PosterSlider from "../PosterSlider/PosterSlider";
import TempImages from "../Config/TenPosters.config";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const [PopularMovie, setPopularMovie] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [TopRatedMovie, setTopRatedMovie] = useState([]);

  const getData = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=27686585f73b546ff5ecdbb27242c80c"
    )
      .then((res) => res.json())
      .then((json) => setPopularMovie(json.results))
      .catch((error) => console.log(error));
  };
  const upComing = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=27686585f73b546ff5ecdbb27242c80c"
    )
      .then((res) => res.json())
      .then((json) => setUpcomingMovies(json.results))
      .catch((error) => console.log(error));
  };
  const getNowPlaying = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=27686585f73b546ff5ecdbb27242c80c"
    )
      .then((res) => res.json())
      .then((json) => setNowPlaying(json.results))
      .catch((error) => console.log(error));
  };
  const TopRated = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=27686585f73b546ff5ecdbb27242c80c"
    )
      .then((res) => res.json())
      .then((json) => setTopRatedMovie(json.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
    getNowPlaying()
    upComing()
    TopRated()
  }, []);

  console.log({ PopularMovie });
  return (
    <>
      <div className="lg:container lg:mx-auto lg:px-4 mt-12">
        <div className=" mx-24">
          <PosterSlider
            images={NowPlaying}
            title="Outdoor Events"
            isDark={false}
          />
        </div>
        <div className="py-10 px-28">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt=""
          />
        </div>

        <div className="py-6 px-28">
          <h1 className="text-2xl font-bold text-gray-800">
            The best of entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
      </div>

      <div className="bg-navcolor-200 py-4">
        <div className=" mx-24">
          <div className="lg:container lg:mx-auto px-4">
            <div className="px-2">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Rupay"
                className="w-full h-full px-4"
              />
            </div>
            <PosterSlider
              images={PopularMovie}
              title={"Premier Component"}
              paragraph={"Brand new release every Friday"}
              isDark={true}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-24">
        <div className=" mx-24">
          <PosterSlider
            images={UpcomingMovies}
            title="Online Streaming Events"
            isDark={false}
          />

          <div className="container mx-auto sm:text-center mt-24 ">
            <PosterSlider
              images={TopRatedMovie}
              title="Outdoor Events"
              isDark={false}
            />
          </div>
        </div>
      </div>
      {/* <div className=" h-44 w-full"></div> */}
      <Footer />
    </>
  );
};

export default HomePage;
