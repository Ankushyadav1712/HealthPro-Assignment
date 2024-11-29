import React, { useState } from "react";

const IVFSlider = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-div text-center font-poppins p-5 mt-5"
      // style={{
      //   textAlign: "center",
      //   fontFamily: "Poppins",
      //   padding: "20px",
      //   marginTop: "20px",
      // }}
    >
      <h3
style={{ marginBottom: "20px" }} className="text-black text-2xl "
      >
        Number of IVF Cycles?
      </h3>
      <div
        style={{
          position: "relative",
          width: "300px",
          margin: "0 auto",
        }}
      >
        {/* Slider input */}
        <input
          type="range"
          min="1"
          max="4"
          value={value}
          onChange={handleChange}
          style={{
            width: "100%",
            appearance: "none",
            backgroundColor: "transparent", // Transparent for customization
            height: "4px",
            cursor: "pointer",
          }}
        />
        {/* Custom slider track */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "8px",
            backgroundColor: "#e5e7eb",
            borderRadius: "2px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        {/* Active track */}
        <div
          style={{
            position: "absolute",
            width: `${((value - 1) / 3) * 100}%`,
            height: "8px",
            backgroundColor: "#f38175", 
            borderRadius: "2px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: '1',
          }}
        />
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
        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
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
