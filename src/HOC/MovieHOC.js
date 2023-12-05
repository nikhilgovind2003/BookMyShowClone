import React from 'react'
import {Routes, Route } from "react-router-dom"

// layout-> DefaultLayout
import MovieLayout from '../layout/MovieLayout'

const MovieHOC = ({ component : Component , ...rest }) => {

  //component
  //props -> path exact
  return (
    <>
    <Routes>
        <Route 
          {...rest} 
          component = {(props)=>(
            <MovieLayout>
              <Component {...props}/>
            </MovieLayout>
          )}
        />
    </Routes>
    </>
  )
}

export default MovieHOC;