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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-37px",
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
          marginLeft: "-35px",
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          borderRadius: "50%",
          padding: "20px",
          background: "rgba(0,0,0,0.5)"
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
          padding: "20px",
          marginRight: "-35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "20px",
          marginRight: "-34px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%"
        }}
        onClick={props.onClick}
      />
    </div>
  );
};
