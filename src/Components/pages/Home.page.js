import React, { useEffect, useState } from 'react'
import EntertainmentCardSlider from '../Entertainment/Entertainment.component'
import HomeSlider from '../HomeSlider/HomeSlider.component'
import Premier from '../Premier/Premier.component'
import TempImages from '../Config/TenPosters.config'
import axios from 'axios';
const HomePage=()=> {


  const [PopularMovie, setPopularMovie] = useState([])
  useEffect(()=>{
    const requestPlayMovies = async()=>{
      const GetPopularMovie = await axios.get("/movie/popular")
      setPopularMovie(GetPopularMovie.data.result)
    }
  },[])







  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='py-10'>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="" />
        </div>
        <div className='py-6'>
            <h1 className='text-2xl font-bold text-gray-800'>The best of entertainment</h1>
            <EntertainmentCardSlider />
        </div>
      </div>

        <div className='bg-navcolor-200 py-16 '>
          <div>
            <div className='container mx-auto px-4'>
              <div>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Rupay"
                className='w-full h-full' />
              </div>
              <div>
                <HomeSlider 
                  images={PopularMovie} titile="premieres"
                  title="Premieres Products"
                  subtitle='Branded new release every Friday'
                  isDark ={true}
                />
              </div>
            </div>
          </div>
        </div>






        <div className='container mx-auto px-4'>
          <HomeSlider
            images ={PopularMovie}
            title = "Online Streaming Events"
            isDark ={false}
          />
        </div>



        <div className='container mx-auto px-4 sm:text-center '>
          <HomeSlider
            images ={PopularMovie}
            title = "Outdoor Events"
            isDark ={false}
          />
        </div>
    </>
  )
}

export default HomePage