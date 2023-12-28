import React from 'react'
const LogoModel = (props) => {
  return (
    <>
        <div className=' bg-gray-400 rounded-full flex items-center justify-center p-2 hover:bg-white'>
       {props.logo}
        </div>   
    </>
  )
}

export default LogoModel