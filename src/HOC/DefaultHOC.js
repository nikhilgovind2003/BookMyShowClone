import React from 'react'
import {Routes, Route } from "react-router-dom"

// layout-> DefaultLayout
import DefaultLayout from '../layout/DefaultLayout'



const DefaultHOC = ({ component : Component , ...rest }) => {

  //component
  //props -> path exact
  return (
    <>
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