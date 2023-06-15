import React from 'react'
import TempImages from '../Config/TenPosters.config'
import settings from '../Config/Settings.config'
import Slider from 'react-slick'
import Poster from '../poster/Poster.component'
const Premier = () => {
    return (
    <>
    <div>
       <Slider {...settings}>
        {
            TempImages.map((image)=>(
                <Poster {...image} isDark />
            ))
        }
        </Slider> 
    </div>
    </>
  )
}
export default Premier;