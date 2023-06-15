import React from 'react'

const Poster = (props) => {
  return (
    <div>
        <div className='flex flex-col items-start gap-1'>
            <div className='h-60 px-1'>
                <img  src={props.img} className='w-full h-full rounded-xl' alt={props.origonal_title} />
            </div>
            <h3 className={`lg:font-bold lg:text-xl md:text-sm sm:text-sm ${
                props.isDark? 'text-white':'text-gray-800'
            }`}>{props. Heading}</h3>


            <p className={`lg:font-bold lg:text-sm sm:text-xs md:text-xs ${
                props.isDark? 'text-white':'text-gray-800'
            }`}>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default Poster