import React from 'react'

export const PrevArrow =(props)=> {
  return (
    <div>
        <div 
        className= {props.className}
        style = {{ ...props.style, backgroundColor:'rgba(0,0,0,0.5)', padding:'20px' , 
    display:'flex',
    alignItems: 'center',
    color: "white",
    marginLeft: "-34px",
    borderRadius: "3px",
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
        style= {{ ...props.style,backgroundColor:'rgba(0,0,0,0.5)', padding:'20px' ,
        marginRight: "-34px",
        display:'flex',
        alignItems: 'center',
        justifyContent:'center' }}
        onClick = {props.onClick} />
        </div> 
  )
}
