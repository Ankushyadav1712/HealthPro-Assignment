// App.js
import React, { useState } from "react";
import "<div className="" />
<IVFCalculator></IVFCalculator>.css";

const App = () => {
  const [selectedAge, setSelectedAge] = useState(null);

  const ageRanges = [
    "Under 30",
    "Between 30 - 34",
    "Between 35 - 37",
    "Between 38 - 40",
    "Between 41 - 43",
    "Above 43",
  ];

  const handleChange = (event) => {
    setSelectedAge(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Which age range applies to you?</h1>
      <div className="grid grid-cols-3 gap-4">
        {ageRanges.map((ageRange, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="age"
              value={ageRange}
              className={`form-radio ${
                selectedAge === ageRange ? "text-primary" : "text-gray-400"
              }`}
              onChange={handleChange}
              checked={selectedAge === ageRange}
            />
            <span className={selectedAge === ageRange ? "text-black" : "text-gray-400"}>
              {ageRange}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default App;
