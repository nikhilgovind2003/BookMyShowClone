import React from "react";
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
import HomeSlider from "../HomeSlider/HomeSlider.component";
import PosterSlider from "../PosterSlider/PosterSlider";
import TempImages from "../Config/TenPosters.config";
import Poster from "../poster/Poster.component";
import Footer from "../Footer/Footer";

// import axios from 'axios';
const  HomePage = () => {
  // const [PopularMovie, setPopularMovie] = useState([])
  // useEffect(()=>{
  //   const requestPlayMovies = async()=>{
  //     const GetPopularMovie = await axios.get("/movie/popular")
  //     setPopularMovie(GetPopularMovie.data.result)
  //   }
  // },[])

  return (
    <>
      <div className="lg:container mx-auto lg:px-14 mt-12">
        <div>
          <PosterSlider
            images={TempImages}
            title="Outdoor Events"
            isDark={false}
          />
        </div>
        <div className="py-10">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt=""
          />
        </div>

        <div className="py-6">
          <h1 className="text-2xl font-bold text-gray-800">
            The best of entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
      </div>

      <div className="bg-navcolor-200 py-4">
        <div>
          <div className="container mx-auto px-4">
            <div className="px-2">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div> 
            <PosterSlider
              images={TempImages}
              title={"Premier Component"}
              paragraph={"Brand new release every Friday"}
              isDark={true}
            />
           </div>
        </div>
      </div>

      <div className="container mx-auto mt-24">
        <PosterSlider
          images={TempImages}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto sm:text-center mt-24 ">
        <PosterSlider
          images={TempImages}
          title="Outdoor Events"
          isDark={false}
        />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
