import React from 'react'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel'
import '../../src/App.css'
import NavBar from '../Components/navbar/NavBar'
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