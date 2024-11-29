// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../Components/IvfForm.css'

// const IVFForm = ({ ivfDetails, setIvfDetails }) => {
//   const navigate = useNavigate();

//   const [ageData, setAgeData] = useState([
//     { id: 1, text: "Under 30", first: 18, last: 29, active: false },
//     { id: 2, text: "Between 30 - 34", first: 30, last: 34, active: false },
//     { id: 3, text: "Between 35 - 37", first: 35, last: 37, active: false },
//     { id: 4, text: "Between 38 - 40", first: 38, last: 40, active: false },
//     { id: 5, text: "Between 41 - 43", first: 41, last: 43, active: false },
//     { id: 6, text: "Above 43", first: 44, last: 60, active: false },
//   ]);

//   const [conditions, setConditions] = useState({
//     PCOS: false,
//     Endometriosis: false,
//     LowOvarianReserve: false,
//     MaleFactorInfertility: false,
//   });

//   const [error, setError] = useState("");

//   const handleAgeChange = (id) => {
//     const updatedAgeData = ageData.map((item) => ({
//       ...item,
//       active: item.id === id,
//     }));
//     setAgeData(updatedAgeData);

//     const selectedAgeData = updatedAgeData.find((item) => item.id === id);
//     if (selectedAgeData) {
//       const { first, last } = selectedAgeData;
//       const randomAge = Math.floor(Math.random() * (last - first + 1)) + first;
//       setIvfDetails((prev) => ({ ...prev, age: randomAge }));
//     }
//   };

//   const handleProcedureChange = (e) => {
//     if (e.target.name === "icsi") {
//       setIvfDetails((prev) => ({ ...prev, icsiProcedure: e.target.value }));
//     } else {
//       setIvfDetails((prev) => ({ ...prev, pgtTesting: e.target.value }));
//     }
//   };

//   const handleConditionChange = (e) => {
//     const { name, checked } = e.target;
//     setIvfDetails((prev) => {
//       const updatedConditions = {
//         ...prev,
//         medicalCondition: {
//           ...prev.medicalCondition,
//           [name]: checked,
//         },
//       };
//       if (
//         Object.values(updatedConditions.medicalCondition).some((value) => value)
//       ) {
//         setError("");
//       }
//       return updatedConditions;
//     });
//   };

//   const handleCalculate = () => {
//     const anyConditionSelected = Object.values(
//       ivfDetails.medicalCondition
//     ).some((value) => value);
//     if (!anyConditionSelected) {
//       setError("Please select at least one medical condition.");
//     } else {
//       setError("");
//       navigate("/result");
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center bg-[#eeeaea] mt-[150px] p-4">
//         {/* Age Range Selection */}
//         <h1 className="sm:text-2xl leading-42 mb-6 text-black text-xl font-medium ml-[-60px] sm:ml-[-20px]">
//           Which age range applies to you?
//         </h1>
//         <div className="sm:grid grid-cols-3 gap-4 flex flex-col ml-[-180px] sm:ml-[-20px]">
//           {ageData.map((age) => (
//             <label key={age.id} className="flex items-center space-x-3">
//               <input
//                 type="radio"
//                 name="age"
//                 value={age.text}
//                 className="radio-input"
//                 onChange={() => handleAgeChange(age.id)}
//                 required
//               />
//               <span className={age.active ? "text-black" : "text-gray-500"}>
//                 {age.text}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* IVF Slider */}
//       <div className="slider-div text-center font-poppins p-5 mt-5">
//         <h3 className="text-[#1E231E] sm:text-2xl mb-5 text-xl ml-[-120px] font-medium mt-[-30px] sm:ml-[-20px]">
//           Number of IVF Cycles?
//         </h3>
//         <div className="relative w-[300px] mx-auto">
//           <input
//             type="range"
//             min="1"
//             max="4"
//             value={ivfDetails.ivfCycle}
//             onChange={(e) =>
//               setIvfDetails((prev) => ({ ...prev, ivfCycle: e.target.value }))
//             }
//             className="w-full h-[6px] appearance-none bg-transparent cursor-pointer"
//             style={{ outline: "none" }}
//           />
//           <div className="absolute w-full h-[6px] bg-[#e5e7eb] rounded-full top-1/2 transform -translate-y-1/2 mt-[12]"></div>
//           <div
//             className="absolute h-[6px] bg-[#f38175] rounded-full top-1/2 transform -translate-y-1/2"
//             style={{
//               width: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
//               transition: "width 0.3s ease-in-out",
//             }}
//           ></div>
//           <div
//             style={{
//               position: "absolute",
//               left: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
//               top: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "14px",
//               height: "14px",
//               backgroundColor: "#f38175",
//               borderRadius: "50%",
//               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//               zIndex: "2",
//             }}
//           ></div>
//           <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2">
//             {[1, 2, 3, 4].map((dot, index) => (
//               <span
//                 key={index}
//                 style={{
//                   width: "8px",
//                   height: "8px",
//                   backgroundColor: "#b0b0b0",
//                   borderRadius: "50%",
//                 }}
//               />
//             ))}
//           </div>
//           <div
//             style={{
//               position: "absolute",
//               left: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
//               transform: "translateX(-50%)",
//               top: "-30px",
//               backgroundColor: "#f38175",
//               color: "white",
//               padding: "5px 10px",
//               borderRadius: "10px",
//               fontSize: "14px",
//               fontWeight: "bold",
//               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             {ivfDetails.ivfCycle}
//           </div>
//         </div>
//       </div>

//       {/* Radio List */}
//       <div className="flex flex-col items-center bg-[#eeeaea] mt-[30px]">
//         <h1 className="sm:text-2xl leading-42 text-xl ml-[25px] mb-6 text-black">
//           Have you undergone these procedures before?
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mt-[20px]">
//           <div className="flex flex-col items-center">
//             <div className="flex gap-4 ml-[-60px]">
//               <label className="flex items-center gap-4 text-black">
//                 ICSI Procedure:
//                 <input
//                   type="radio"
//                   name="icsi"
//                   value="yes"
//                   className="radio-input"
//                   onChange={handleProcedureChange}
//                 />
//                 Yes
//               </label>
//               <label className="flex items-center gap-4 text-black">
//                 <input
//                   type="radio"
//                   name="icsi"
//                   value="no"
//                   className="radio-input"
//                   onChange={handleProcedureChange}
//                 />
//                 No
//               </label>
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="flex ml-[-90px] mt-[-60px] sm:mt-[1px] sm:gap-4 sm:ml-[40px]">
//               <label className="flex items-center gap-4 text-black">
//                 PGT Testing:
//                 <input
//                   type="radio"
//                   name="pgt"
//                   value="yes"
//                   className="radio-input"
//                   onChange={handleProcedureChange}
//                 />
//                 Yes
//               </label>
//               <label className="flex items-center gap-4 text-black">
//                 <input
//                   type="radio"
//                   name="pgt"
//                   value="no"
//                   className="radio-input"
//                   onChange={handleProcedureChange}
//                 />
//                 No
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Checklist */}
//       <div className="flex flex-col items-center justify-center p-4">
//         <h1 className="sm:text-2xl leading-42 mb-6 text-black mt-[20px] leading-42 text-xl ml-[12px]">
//           Do you have any of these medical conditions?
//         </h1>
//         <div className="flex sm:flex-wrap items-start flex-col sm:flex-row gap-6 mb-6 ml-[-150px] sm:ml-[30px]">
//           {Object.keys(conditions).map((condition) => (
//             <label
//               key={condition}
//               className="flex items-center gap-2 text-gray-700 text-sm md:text-base"
//             >
//               <input
//                 type="checkbox"
//                 name={condition}
//                 checked={ivfDetails.medicalCondition[condition]}
//                 onChange={handleConditionChange}
//                 className="w-5 h-5 border-2 border-orange-500 bg-transparent rounded-sm focus:outline-none appearance-none checked:bg-orange-500 checked:border-orange-500 checked:focus:ring-orange-300 checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center"
//               />
//               {condition.replace(/([A-Z])/g, " $1").trim()}
//             </label>
//           ))}
//         </div>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <button
//           onClick={handleCalculate}
//           className="bg-[#e3776f] text-white px-6 py-2 text-sm md:text-base rounded-lg shadow-md hover:bg-[#d05d55] transition-colors"
//         >
//           Calculate
//         </button>
//       </div>
//     </>
//   );
// };



// export default IVFForm;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/IvfForm.css";

const IVFForm = ({ ivfDetails, setIvfDetails }) => {
  const navigate = useNavigate();

  const [ageData, setAgeData] = useState([
    { id: 1, text: "Under 30", first: 18, last: 29, active: false },
    { id: 2, text: "Between 30 - 34", first: 30, last: 34, active: false },
    { id: 3, text: "Between 35 - 37", first: 35, last: 37, active: false },
    { id: 4, text: "Between 38 - 40", first: 38, last: 40, active: false },
    { id: 5, text: "Between 41 - 43", first: 41, last: 43, active: false },
    { id: 6, text: "Above 43", first: 44, last: 60, active: false },
  ]);

  const [conditions, setConditions] = useState({
    PCOS: false,
    Endometriosis: false,
    LowOvarianReserve: false,
    MaleFactorInfertility: false,
  });

  const [error, setError] = useState("");
  const [radioSelections, setRadioSelections] = useState({
    age: false,
    icsi: false,
    pgt: false,
  });

  const handleAgeChange = (id) => {
    const updatedAgeData = ageData.map((item) => ({
      ...item,
      active: item.id === id,
    }));
    setAgeData(updatedAgeData);

    const selectedAgeData = updatedAgeData.find((item) => item.id === id);
    if (selectedAgeData) {
      const { first, last } = selectedAgeData;
      const randomAge = Math.floor(Math.random() * (last - first + 1)) + first;
      setIvfDetails((prev) => ({ ...prev, age: randomAge }));
      setRadioSelections((prev) => ({ ...prev, age: true }));
    }
  };

  const handleProcedureChange = (e) => {
    if (e.target.name === "icsi") {
      setIvfDetails((prev) => ({ ...prev, icsiProcedure: e.target.value }));
      setRadioSelections((prev) => ({ ...prev, icsi: true }));
    } else {
      setIvfDetails((prev) => ({ ...prev, pgtTesting: e.target.value }));
      setRadioSelections((prev) => ({ ...prev, pgt: true }));
    }
  };

  const handleConditionChange = (e) => {
    const { name, checked } = e.target;
    setIvfDetails((prev) => {
      const updatedConditions = {
        ...prev,
        medicalCondition: {
          ...prev.medicalCondition,
          [name]: checked,
        },
      };
      if (
        Object.values(updatedConditions.medicalCondition).some((value) => value)
      ) {
        setError("");
      }
      return updatedConditions;
    });
  };

  const isButtonEnabled = () => {
    return radioSelections.age && radioSelections.icsi && radioSelections.pgt;
  };

  const handleCalculate = () => {
    const anyConditionSelected = Object.values(
      ivfDetails.medicalCondition
    ).some((value) => value);
    if (!anyConditionSelected) {
      setError("Please select at least one medical condition.");
    } else {
      setError("");
      navigate("/result");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center bg-[#eeeaea] mt-[150px] p-4">
        {/* Age Range Selection */}
        <h1 className="sm:text-2xl leading-42 mb-6 text-black text-xl font-medium ml-[-60px] sm:ml-[-20px]">
          Which age range applies to you?
        </h1>
        <div className="sm:grid grid-cols-3 gap-4 flex flex-col ml-[-180px] sm:ml-[-20px]">
          {ageData.map((age) => (
            <label key={age.id} className="flex items-center space-x-3">
              <input
                type="radio"
                name="age"
                value={age.text}
                className="radio-input"
                onChange={() => handleAgeChange(age.id)}
                required
              />
              <span className={age.active ? "text-black" : "text-gray-500"}>
                {age.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rest of the component remains the same until the button */}

      {/* Button with disabled state */}
      <div className="flex flex-col items-center justify-center p-4">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleCalculate}
          disabled={!isButtonEnabled()}
          className={`${
            isButtonEnabled()
              ? "bg-[#e3776f] hover:bg-[#d05d55]"
              : "bg-gray-400 cursor-not-allowed"
          } text-white px-6 py-2 text-sm md:text-base rounded-lg shadow-md transition-colors`}
        >
          Calculate
        </button>
      </div>
    </>
  );
};

export default IVFForm;
