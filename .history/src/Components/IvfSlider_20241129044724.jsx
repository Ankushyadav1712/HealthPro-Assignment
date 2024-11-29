import React, { useState } from "react";

import '../MainPage.jsx'


const IVFSlider = ({value, setValue}) => {
  // const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-div text-center font-poppins p-5 mt-5">
      <h3 className="text-black text-2xl mb-5">
        Number of IVF Cycles?
      </h3>
      <div className="relative w-[300px] mx-auto">
        
        {/* Slider input */}
        <input
          type="range"
          min="1"
          max="4"
          value={value}
          onChange={handleChange}

          className="w-full appearance-none bg-transparent h-[4px] cursor-pointer"
        />
        {/* Custom slider track */}
        <div className="absolute w-full h-[12px] bg-[#e5e7eb] rounded-[2px] top-1/2 transform -translate-y-1/2"/>


        {/* Active track */}
        <div className="h-[8px] bg-[#f38175] rounded-[2px] top-1/2 transform -translate-y-1/2 z-[1]"
          style={{
            position: "absolute",
            width: `${((value - 1) / 3) * 100}%`,
          }}/>

        {/* Slider thumb */}
        <div
          style={{
            position: "absolute",
            left: `${((value - 1) / 3) * 100}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "14px",
            height: "14px",
            backgroundColor: "#f38175",
            borderRadius: "50%",
            zIndex: "1",
          }}
        />


        {/* Dots */}
        <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2">
          {[1, 2, 3, 4].map((dot, index) => (
            <span
              key={index}
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#b0b0b0", 
                borderRadius: "50%",
              }}
            />
          ))}
        </div>


        {/* Bubble */}

        <div
          style={{
            position: "absolute",
            left: `${((value - 1) / 3) * 100}%`,
            transform: "translateX(-50%)",
            top: "-35px",
            backgroundColor: "#f38175", 
            color: "white",
            padding: "5px 10px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {value}
        </div>
      </div>

    </div>
  );
};

export default IVFSlider;
