import React from 'react'
import settings from '../Config/Settings.config';
import Slider from 'react-slick';
import Poster from '../poster/Poster.component'

const HomeSlider = (props) => {
  return (
    <div>
        <div className='flex items-start flex-col py-4'>
            <h3 className={`text-3xl font-bold md:text-sm sm:text-xl ${
                props.isDark?"text-white":'text-gray-800'
            }`
            }>{props.title}</h3>
            <p className={`text-sm md:text-xs sm:text-xs ${
                props.isDark?"text-white":'text-gray-800'
            }`
            }>{props.subtitle}</p>
        </div>
       <Slider {...settings}>
        {
            props.images.map((image)=>(
                <Poster {...image} isDark = {props.isDark} />
            ))
        }
        </Slider> 
    </div>
  )
}

export default HomeSlider