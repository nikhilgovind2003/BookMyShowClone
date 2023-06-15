import React from 'react'

export const PrevArrow =(props)=> {
  return (
    <div>
        <div 
        className= {props.className}
        style = {{ ...props.style, backgroundColor:'gray', padding:'20px' , 
    marginLeft:'-50px',
    display:'flex',
    alignItems: 'center',
    justifyContent:'center'




}}
        onClick = {props.onClick} />
    </div>
  )
}
export const NextArrow =(props)=> {
  return (
    <div>    
        <div 
        className= {props.className}
        style= {{ ...props.style,backgroundColor:'gray', padding:'20px' , 
        marginRight:'-50px',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center' }}
        onClick = {props.onClick} />
        </div> 
  )
}
