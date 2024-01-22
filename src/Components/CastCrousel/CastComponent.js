import React from 'react'

const CastComponent = (props) => {
  return (
    <>
              <div className='flex flex-col gap-2 text-black items-center justify-center py-0'>
            <div className='w-17 h-17'>
            <img className='w-full h-full' src={props.src} alt="Cast Images" style={{borderRadius:'50%'}} />
            </div>
            <h2 className=' text-center font-bold text-xl'>{props.title}</h2>
            <p className='text-center'>Actor</p>
        </div>
    </>
  )
}

export default CastComponent