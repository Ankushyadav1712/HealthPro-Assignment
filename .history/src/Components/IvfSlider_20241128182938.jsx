// import React, { useState } from "react";

// const IVFSlider = () => {
//   const [value, setValue] = useState(1);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div
//       style={{ textAlign: "center", fontFamily: "Poppins, sans-serif", padding: "20px", marginTop: "20px" }}
//       className="text-3xl"
//     >
//       <h3 style={{ marginBottom: "20px" }} className="text-black">
//         Number of IVF Cycles?
//       </h3>
//       <div style={{ position: "relative", width: "300px", margin: "0 auto" }}>
//         {/* Slider */}
//         <input
//           type="range"
//           min="1"
//           max="4"
//           value={value}
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             appearance: "none",
//             backgroundColor: "transparent", // Transparent for better styling
//             height: "4px",
//             outline: "none",
//             cursor: "pointer",
//           }}
//           className="slider-track"
//         />

//         {/* Custom track with orange color */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "4px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "#fdba74", // Orange background
//             zIndex: "-1",
//             borderRadius: "2px",
//           }}
//         />

//         {/* Slider bubble */}
//         <div
//           style={{
//             position: "absolute",
//             left: `${((value - 1) / 3) * 100}%`,
//             transform: "translateX(-50%)",
//             top: "-35px",
//             backgroundColor: "#fca5a5",
//             color: "white",
//             padding: "5px 10px",
//             borderRadius: "15px",
//             fontSize: "14px",
//             fontWeight: "bold",
//           }}
//         >
//           {value}
//         </div>

//         {/* Dots */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "4px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           {[1, 2, 3, 4].map((_, index) => (
//             <span
//               key={index}
//               style={{
//                 width: "8px",
//                 height: "8px",
//                 backgroundColor: "#f97316", // Orange dots
//                 borderRadius: "50%",
//                 zIndex: "1",
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IVFSlider;


import React, { useState } from "react";

const IVFSlider = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Poppins",
        padding: "20px",
        marginTop: "20px",
        backgroundColor: "",
      }}
    >
      <h3
style={{ marginBottom: "20px" }} className="text-black text-2xl"
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
            height: "4px",
            backgroundColor: "#e5e7eb", // Light gray track
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
            height: "4px",
            backgroundColor: "#f38175", // Matching active color (orange)
            borderRadius: "2px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: "1",
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
            backgroundColor: "#f38175", // Matching thumb color
            borderRadius: "50%",
            zIndex: "2",
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
                backgroundColor: "#b0b0b0", // Gray dots
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
            backgroundColor: "#", // Matching bubble color
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
