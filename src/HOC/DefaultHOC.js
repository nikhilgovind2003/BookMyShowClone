import React from 'react'
import {Routes, Route } from "react-router-dom"

// layout-> DefaultLayout



import NavBar from '../Components/navbar/NavBar'
import DefaultLayout from '../layout/DefaultLayout'



const DefaultHOC = ({ component : Component , ...rest }) => {

  //component
  //props -> path exact
  return (
    <>
      <NavBar />
    <Routes>
        <Route 
          {...rest} 
          
          component = {(props)=>(
            <DefaultLayout>
              <Component {...props}/>
            </DefaultLayout>
          )}
        />
    </Routes>
    </>
  )
}

export default DefaultHOC;