import React, { useState } from "react";
import "../Components/AgeRangeSelector.css";

const AgeRangeSelection = () => {
  const [selectedAge, setSelectedAge] = useState("");
  const [ageData, setAgeData] = useState(
  const ageData = [
    { id: 1, text: "Under 30", first: 18, last: 29, active: false },
    { id: 2, text: "Between 30 - 34", first: 30, last: 34, active: false },
    { id: 3, text: "Between 35 - 37", first: 35, last: 37, active: false },
    { id: 4, text: "Between 38 - 40", first: 38, last: 40, active: false },
    { id: 5, text: "Between 41 - 43", first: 41, last: 43, active: false },
    { id: 6, text: "Above 43", first: 44, last: 60, active: false },
  ]);

  const handleChange = (id) => {
    const selectedAgeData = ageData.find((item) => item.id === id);

    if (selectedAgeData) {
      const { first, last } = selectedAgeData;

      const randomAge = Math.floor(Math.random() * (last - first + 1)) + first;

      setSelectedAge(randomAge);
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#eeeaea] mt-[150px]">
      <h1 className="text-3xl leading-42 mb-6 text-black">
        Which age range applies to you?
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {ageData.map((age) => (
          <label key={age.id} className="flex items-center space-x-3">
            <input
              type="radio"
              name="age"
              value={age.text}
              className="radio-input"
              onChange={() => handleChange(age.id)}
              // checked={selectedAge === ageRange}
            />
            <span
              className={
                age.active ? "text-black" : "text-gray-500"
              }
            >
              {age.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AgeRangeSelection;
