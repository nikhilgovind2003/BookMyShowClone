import React, { useEffect } from 'react';
import '../../App.css'
import { BiChevronRight } from 'react-icons/bi';
import CastCarousel from '../CastCrousel/CastCarousel';


// const SmImage = () => {
//   return (
//     <div className='relative'> 
//     <div className='absolute w-full h-full z-10' style={{ backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)" }} />
//     <div className='absolute top-5 left-5 w-64 z-30'>
//       <div className='bg-black py-2 pt-0 rounded-xl text-center'>
//       <img className="w-full h-full rounded-lg" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/live-malayalam-et00355771-1683012470.jpg" alt="" />
//         <p className='text-white text-xl font-semibold'>In cinnemas</p>
//       </div>
//     </div>


//     <div className='absolute w-full h-full z-20 top-10 left-64 mx-14 flex flex-col text-white items-start'>

//       <h1 className=' text-4xl font-semibold '>Live(Malayalam)</h1>

//       <span className='flex items-end gap-3 py-4 px-0'>
//         <use className='text-red-800 hover:cursor-pointer' href="/chunks/icons/common-icons-dfbc572c.svg#icon-star" alt="Star" > </use>
//         <h2 className='font-semibold text-2xl'>7.4/10</h2>
//         <div className='flex items-center justify-center'>
//         <p className=' text-md'>50 votes</p>
//         <BiChevronRight />
//         </div>
//       </span>


//       {/* GRADIENT BUTTON */}
//       <div className=' flex justify-between items-center w-3/5 bg-black px-6 py-3 rounded-lg' 
//       style={{background:"linear-gradient(to right, #526D82 0%, #27374D 100%)"}}>
//         <div className=''>
//         <h3 className='font-fold text-xl'>Add your rating & review</h3>
//         <p>Your ratings matter</p>
//         </div>
//         <div className='bg-white flex px-4 py-2 rounded-lg'>
//           <button className='text-black font-semibold text-lg'>Rate Now</button>
//         </div>
//       </div>

//       <div className='flex gap-3 items-center pl-0  mt-7'>
//         {/* 2D */}
//         <div className='bg-gray-200 px-2 py-1 rounded'>
//           <p className='text-black font-semibold'><a href="#">2D</a></p>
//         </div>
//         {/* Malaylam ink */}
//         <div className='bg-gray-200 px-1 py-1 rounded'>
//           <p className='text-black font-semibold'><a href="#">Malayalam</a></p>
//         </div>
//       </div>

//       <div className='py-3'>
//         <p>
//           2h 5m
//           •
//           <span className='hover: hover:curcer-pointer' style={{TextDecoder: 'underline'}}> Social </span>
//             ,
//           <span> Thriller </span>
//           •
//           U
//           •
//           26 May, 2023
//         </p>
//       </div>
//       <div>
//         <button className='bg-red-500 px-14 font-semibold text-lg py-2 rounded-md hover:cursor-pointer mt-7'>Book tickets</button>
//       </div>
//     </div>

//       <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/live-malayalam-et00355771-1683012470.jpg" alt="Movie Image"
//       className='w-full  h-full'  style={{height: "calc(60vw)"}} />
//   </div>
//   )
// }

// const MdImage = () => {
//   return (
//     <div>
//       <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/live-malayalam-et00355771-1683012470.jpg" alt="Movie Image" />
//     </div>
//   )
// }

const LgImage = () => {
  return(
  <>
    <div className='relative'> 
      <div className='absolute w-full h-full z-10' style={{ backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)" }} />

      <div className='absolute top-10 left-36 h-96 w-64 z-30'>
        <img className="w-full h-full rounded-lg" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dunki-et00326964-1703064829.jpg" alt="" />
        <div className='bg-black py-2 text-center'>
          <p className='text-white text-xl font-semibold'>In cinnemas</p>
        </div>
      </div>


      <div className='absolute w-full h-full z-40 top-20 left-1/3 flex flex-col text-white items-start'>

        <h1 className=' text-4xl font-semibold '>Live(Malayalam)</h1>

        <span className='flex items-end gap-3 py-4 px-0'>
          <use className='text-red-800 hover:cursor-pointer' href="/chunks/icons/common-icons-dfbc572c.svg#icon-star" alt="Star" > </use>
          <h2 className='font-semibold text-2xl'>7.4/10</h2>
          <div className='flex items-center justify-center'>
          <p className=' text-md'>50 votes</p>
          <BiChevronRight />
          </div>
        </span>

        <div className=' flex justify-between items-center w-1/3 bg-black px-6 py-3 rounded-lg' 
        style={{background:"linear-gradient(to right, #526D82 0%, #27374D 100%)"}}>
          <div className=''>
          <h3 className='font-fold text-xl'>Add yourr rating & review</h3>
          <p>Your ratings matter</p>
          </div>
          <div className='bg-white flex px-4 py-2 rounded-lg'>
            <button className='text-black font-semibold text-lg'>Rate Now</button>
          </div>
        </div>

        <div className='flex gap-3 items-center pl-0  mt-7'>
          {/* 2D */}
          <div className='bg-gray-200 px-2 py-1 rounded'>
            <p className='text-black font-semibold'><a href="#">2D</a></p>
          </div>
          {/* Malaylam ink */}
          <div className='bg-gray-200 px-1 py-1 rounded'>
            <p className='text-black font-semibold'><a href="#">Malayalam</a></p>
          </div>
        </div>

        <div className='py-3'>
          <p>
            2h 5m
            •
            <span className='hover: hover:curcer-pointer' style={{TextDecoder: 'underline'}}> Social </span>
              ,
            <span> Thriller </span>
            •
            U
            •
            26 May, 2023
          </p>
        </div>
        <div>
          <button className='bg-red-500 px-14 font-semibold text-lg py-2 rounded-md hover:cursor-pointer mt-7'>Book tickets</button>
        </div>
      </div>
        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dunki-et00326964-1703064829.jpg" alt="Movie Image"
        className='w-full h-full' />
    </div>


    <div className='w-2/3 container mx-auto my-10'>

        {/* ABUOUT THE MOVIE */}
        <div className='flex items-start gap-3 flex-col'>
          <h1 className='text-2xl text-black font-semibold'>About the movie</h1>
          <p className='text-md text-gray-600'>Live follows Anna, who is a victim of fake news and Dr. Amala, who`s also facing Cyber harassment. They come together to fight against the media mafia.</p>
        </div>
        <div className='py-7'>
          <hr/>
        </div>


      <div className='container mx-auto my-10'>

        {/* Top offers for you */}
        <div className='flex items-start gap-3 w-96 flex-col'>
          <h1 className='text-2xl text-black font-semibold'>Top offers for you</h1>
          <div className='flex items-start px-2 justify-start gap-3 rounded-xl py-3 w-96 bg-orange-100 border-dashed border-orange-400 border-2'>
            <div className='w-6 h-6'>
              <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dunki-et00326964-1703064829.jpg" alt="" />
            </div>
          <div className=''>
            <h3 className='text-black text-xl '>10% off on movie munchies!</h3>
            <p className='text-gray-700 text-sm'>Tap to view details</p>
          </div>
        </div>
        </div>

        <div className='py-7'>
          <hr/>
        </div>
      </div>


      {/* CAST */}
      <div className='flex flex-row gap-3 items-start'>
        <CastCarousel title="Cast"/>
      </div>

      <div className='py-7'>
          <hr />
        </div>
      {/* Crew */}
      <div className='flex flex-row gap-3 items-start'>
        <CastCarousel title="Crew"/>
      </div>
    </div>
</>
  )
}


const MovieHero = () => {
  return (
    <div>
        <div className='hidden lg:block' style={{height: '40rem'}}>
           <LgImage />
        </div>
    </div>
  )
}

export default MovieHero


