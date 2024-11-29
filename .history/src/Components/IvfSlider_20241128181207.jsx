import React, { useState } from "react";

const IVFSlider = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "poopins", padding: "20px",marginTop:"20px" }} className="font-">
      <h3 style={{ marginBottom: "20px" }} className="text-black ">Number of IVF Cycles?</h3>
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
