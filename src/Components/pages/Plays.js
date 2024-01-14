import React from "react";
import Poster from "../poster/Poster.component";
import PosterSlider from "../PosterSlider/PosterSlider";

const Plays = () => {
  return (
    <>
      <div className=" container mx-auto px-4">
        <div></div>
        <div className=" w-full">
          <h2 className=" font-bold text-lg">Plays in Delhi-NCR</h2>
          <div className=" flex flex-wrap">
            <div className=" w-1/2 my-3 md:w-1/3">
              <Poster
                className=" w-1/2 my-3"
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382271-yxrqhjwnlq-portrait.jpg"
                title="GALIB IN NEW DELHI (Hindi comedy play)"
                subtitle="Excelsior American School Hindi ₹200"
              />
            </div>
            <div className=" w-1/2 my-3 md:w-1/3">
              <Poster
                className=" w-1/2 my-3"
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382271-yxrqhjwnlq-portrait.jpg"
                title="GALIB IN NEW DELHI (Hindi comedy play)"
                subtitle="Excelsior American School Hindi ₹200"
              />
            </div>
            <div className=" w-1/2 my-3 md:w-1/3">
              <Poster
                className=" w-1/2 my-3"
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382271-yxrqhjwnlq-portrait.jpg"
                title="GALIB IN NEW DELHI (Hindi comedy play)"
                subtitle="Excelsior American School Hindi ₹200"
              />
            </div>
            <div className=" w-1/2 my-3 md:w-1/3">
              <Poster
                className=" w-1/2 my-3"
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382271-yxrqhjwnlq-portrait.jpg"
                title="GALIB IN NEW DELHI (Hindi comedy play)"
                subtitle="Excelsior American School Hindi ₹200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
