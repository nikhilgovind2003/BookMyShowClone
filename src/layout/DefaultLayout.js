import React from 'react'
import NavBar from '../Components/navbar/NavBar'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel'
import '../../src/App.css'
const DefaultLayout = (props) => {
  return (
    <>
        <NavBar />
        <HeroCarousel />
        {props.children}
    </>
  )
}

export default DefaultLayout