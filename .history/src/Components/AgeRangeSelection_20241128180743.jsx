import React, { useState } from 'react';
import "../Components/AgeRangeSelector.css";


const AgeRangeSelection = () => {
    const [selectedAge, setSelectedAge] = useState(null);

    const handleChange = (event) => {
        setSelectedAge(event.target.value);
    };

    return (
        <div className="flex flex-col items-center    bg-[#eeeaea] mt-[200px]">
            <h1 className="text-2xl font-bold mb-6 text-black">Which age range applies to you?</h1>
            <div className="grid grid-cols-3 gap-4">
                {['Under 30', 'Between 30 - 34', 'Between 35 - 37', 'Between 38 - 40', 'Between 41 - 43', 'Above 43'].map((ageRange, index) => (
                    <label key={index} className="flex items-center space-x-3">
                    <input 
                        type="radio" 
                        name="age" 
                        value={ageRange} 
                        className="radio-input"
                        onChange={handleChange} 
                        checked={selectedAge === ageRange} 
                    />
                    <span className={selectedAge === ageRange ? 'text-black' : 'text-gray-500'}>{ageRange}</span>
                    </label>
                ))}
            </div>
        </div>


import React, { useState } from "react";

const IVFSlider = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h3 style={{ marginBottom: "20px" }}>Number of IVF Cycles?</h3>
      <div style={{ position: "relative", width: "300px", margin: "0 auto" }}>
        <input
          type="range"
          min="1"
          max="4"
          value={value}
          onChange={handleChange}
          style={{
            width: "100%",
            appearance: "none",
            backgroundColor: "#e5e7eb",
            height: "4px",
            outline: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: `${((value - 1) / 3) * 100}%`,
            transform: "translateX(-50%)",
            top: "-35px",
            backgroundColor: "#fca5a5",
            color: "white",
            padding: "5px 10px",
            borderRadius: "15px",
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

    );
};

export default AgeRangeSelection;
