import React from 'react'
import '../../src/App.css'
import MovieNavbar from '../Components/navbar/MovieNavbar'
import MovieHero from '../Components/movieHero/MovieHero.component'
const MovietLayout = (props) => {
  return (
    <>
    <MovieNavbar />
    <MovieHero />
      {props.children}
    </>
  )
}

export default MovietLayout