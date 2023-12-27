import React from "react";

export const PrevArrow = (props) => {
  return (
    <div>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "20px",
          width: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-45px",
          borderRadius: "3px",
        }}
        onClick={props.onClick}
      />
    </div>
  );
};

export const PrevArrow1 = (props) => {
  return (
    <div>
      <div
        className={props.className}
        style={{
          ...props.style,
         
        }}
        onClick={props.onClick}
      />
    </div>
  );
};

export const NextArrow = (props) => {
  return (
    <div>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "60px",
          padding: "30px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "35px",
          marginRight: "-47px",
          borderRadius: "3px",
        }}
        onClick={props.onClick}
      />
    </div>
  );
};

export const NextArrow1 = (props) => {
  return (
    <div>
      <div
        className={props.className}
        style={{
          ...props.style,
        
        }}
        onClick={props.onClick}
      />
    </div>
  );
};
