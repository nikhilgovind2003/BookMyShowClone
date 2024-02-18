import React from 'react'
import CastComponent from './CastComponent'
import CastSlide from 'react-slick';
import settings from '../Config/Settings.config';
// import TempImages from '../Config/TenPosters.config';


const CastCarousel = (props) => {

    const Cast =[
    {
        src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dhanush-3988-18-09-2017-03-32-21.jpg",
        title:"Mamta Mohandas"
    },

    {
        src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/soubin-shahir-1065318-1683013079.jpg",
        title:"Soubin Shahir"
    },
    {
        src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/soubin-shahir-1065318-1683013079.jpg",
        title:"Shine Tom Chacko"
    },
    {
        src:  "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priya-prakash-varrier-1090347-1683013195.jpg",
        title:"Priyanka Varrier"
    },
    {
        src: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priya-prakash-varrier-1090347-1683013195.jpg",
        title:"Krishna Praba"
    },
    {
        src:  "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/reshmi-soman-2027651-1683013282.jpg",
        title:"Reshmi Soman"
    },
]



  return (
    <div className='flex flex-col gap-10 items-start mx-0'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
            <CastSlide {...settings}>
                {
                    Cast.map((value)=>(
                        <CastComponent {...value}/>
                    ))
                }
            </CastSlide>

    </div>
  )
}

export default CastCarousel