import React from 'react'
import MovieHero from '../movieHero/MovieHero.component'
import CastCarousel from '../CastCrousel/CastCarousel'
// import CastCarousel from '../CastCrousel/CastCarousel'
// import CastComponent from '../CastCrousel/CastComponent'

const MoviePage = () => {
  return (
    <div>
      <MovieHero />
      <CastCarousel />
      {/* <CastComponent /> */}

    </div>
  )
}

export default MoviePage
