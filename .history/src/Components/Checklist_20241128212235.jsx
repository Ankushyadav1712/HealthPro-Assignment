import React, { useState } from "react";

const Checklist = () => {
  const [conditions, setConditions] = useState({
    PCOS: false,
    Endometriosis: false,
    LowOvarianReserve: false,
    MaleFactorInfertility: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setConditions((prev) => ({ ...prev, [name]: checked }));
  };



  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-lg md:text-2xl font-semibold text-black text-center mb-6 mt-[20px]">
        Do you have any of these medical conditions?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.keys(conditions).map((condition) => (
          <label
            key={condition}
            className="flex items-center gap-2 text-gray-700 text-sm md:text-base"
          >
            <input
              type="checkbox"
              name={condition}
              checked={conditions[condition]}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-2 border-orange-500  bg-transparent  rounded-   focus:outline-none appearance-none checked:text-white"

            />
            {condition.replace(/([A-Z])/g, " $1").trim()}
          </label>
        ))}
      </div>
      <button
        // onClick={handleCalculate}
        className="bg-[#e3776f] text-white px-6 py-2 text-sm md:text-base rounded-lg shadow-md hover:bg-[#d05d55] transition-colors"
      >
        Calculate
      </button>
    </div>
  );
};

export default Checklist;
