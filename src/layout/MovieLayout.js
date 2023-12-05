import React from 'react'
import '../../src/App.css'
import MovieNavbar from '../Components/navbar/MovieNavbar'
const MovietLayout = (props) => {
  return (
    <>
    <MovieNavbar />
      {props.children}
    </>
  )
}

export default MovietLayout