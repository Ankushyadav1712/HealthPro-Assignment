import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IVFForm = () => {
  const navigate = useNavigate();

  const [ivfDetails, setIvfDetails] = useState({
    age: 0,
    ivfCycle: 1,
    icsiProcedure: "",
    pgtTesting: "",
    medicalCondition: {
      PCOS: false,
      Endometriosis: false,
      LowOvarianReserve: false,
      MaleFactorInfertility: false,
    },
  });

  const [ageData, setAgeData] = useState([
    { id: 1, text: "Under 30", first: 18, last: 29, active: false },
    { id: 2, text: "Between 30 - 34", first: 30, last: 34, active: false },
    { id: 3, text: "Between 35 - 37", first: 35, last: 37, active: false },
    { id: 4, text: "Between 38 - 40", first: 38, last: 40, active: false },
    { id: 5, text: "Between 41 - 43", first: 41, last: 43, active: false },
    { id: 6, text: "Above 43", first: 44, last: 60, active: false },
  ]);

  const [error, setError] = useState("");

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
    }
  };

  const handleProcedureChange = (e) => {
    const { name, value } = e.target;
    setIvfDetails((prev) => ({
      ...prev,
      [name === "icsi" ? "icsiProcedure" : "pgtTesting"]: value,
    }));
  };

  const handleConditionChange = (e) => {
    const { name, checked } = e.target;
    setIvfDetails((prev) => ({
      ...prev,
      medicalCondition: {
        ...prev.medicalCondition,
        [name]: checked,
      },
    }));
    if (checked) setError("");
  };

  const handleCalculate = () => {
    const anyConditionSelected = Object.values(
      ivfDetails.medicalCondition
    ).some((value) => value);
    if (!anyConditionSelected) {
      setError("Please select at least one medical condition.");
      return;
    }
    navigate("/result");
  };

  return (
    <div className="flex flex-col items-center bg-[#eeeaea] p-4">
      {/* Age Range Selection */}
      <div className="mt-[150px] w-full">
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

      {/* IVF Cycle Slider */}
      <div className="slider-div text-center font-poppins p-5 mt-5 w-full">
        <h3 className="text-[#1E231E] sm:text-2xl mb-5 text-xl ml-[-120px] font-medium mt-[-30px] sm:ml-[-20px]">
          Number of IVF Cycles?
        </h3>
        <div className="relative w-[300px] mx-auto">
          <input
            type="range"
            min="1"
            max="4"
            value={ivfDetails.ivfCycle}
            onChange={(e) =>
              setIvfDetails((prev) => ({ ...prev, ivfCycle: e.target.value }))
            }
            className="w-full h-[6px] appearance-none bg-transparent cursor-pointer"
          />
          <div className="absolute w-full h-[6px] bg-[#e5e7eb] rounded-full top-1/2 transform -translate-y-1/2"></div>
          <div
            className="absolute h-[6px] bg-[#f38175] rounded-full top-1/2 transform -translate-y-1/2"
            style={{
              width: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />
          <div
            className="absolute w-3.5 h-3.5 bg-[#f38175] rounded-full shadow-md"
            style={{
              left: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          />
          <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2">
            {[1, 2, 3, 4].map((dot) => (
              <span key={dot} className="w-2 h-2 bg-[#b0b0b0] rounded-full" />
            ))}
          </div>
          <div
            className="absolute bg-[#f38175] text-white px-2.5 py-1 rounded-lg text-sm font-bold shadow-md"
            style={{
              left: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
              transform: "translateX(-50%)",
              top: "-30px",
            }}
          >
            {ivfDetails.ivfCycle}
          </div>
        </div>
      </div>

      {/* Procedures Radio Buttons */}
      <div className="mt-8 w-full">
        <h1 className="sm:text-2xl text-xl mb-6 text-black text-center">
          Have you undergone these procedures before?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center gap-4">
            <span className="text-black">ICSI Procedure:</span>
            <label className="flex items-center gap-2 text-black">
              <input
                type="radio"
                name="icsi"
                value="yes"
                onChange={handleProcedureChange}
                className="radio-input"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-black">
              <input
                type="radio"
                name="icsi"
                value="no"
                onChange={handleProcedureChange}
                className="radio-input"
              />
              No
            </label>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-black">PGT Testing:</span>
            <label className="flex items-center gap-2 text-black">
              <input
                type="radio"
                name="pgt"
                value="yes"
                onChange={handleProcedureChange}
                className="radio-input"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-black">
              <input
                type="radio"
                name="pgt"
                value="no"
                onChange={handleProcedureChange}
                className="radio-input"
              />
              No
            </label>
          </div>
        </div>
      </div>

      {/* Medical Conditions Checklist */}
      <div className="mt-8 w-full">
        <h1 className="sm:text-2xl text-xl mb-6 text-black text-center">
          Do you have any of these medical conditions?
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(ivfDetails.medicalCondition).map((condition) => (
            <label
              key={condition}
              className="flex items-center gap-2 text-gray-700"
            >
              <input
                type="checkbox"
                name={condition}
                checked={ivfDetails.medicalCondition[condition]}
                onChange={handleConditionChange}
                className="w-5 h-5 border-2 border-orange-500 bg-transparent rounded-sm focus:outline-none appearance-none checked:bg-orange-500 checked:border-orange-500"
              />
              {condition.replace(/([A-Z])/g, " $1").trim()}
            </label>
          ))}
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleCalculate}
            className="bg-[#e3776f] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#d05d55] transition-colors"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default IVFForm;
