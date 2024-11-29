import React, { useState } from 'react';
import "../Components/AgeRangeSelector.css";


const AgeRangeSelection = () => {
    const [selectedAge, setSelectedAge] = useState(null);
    const [firstValue, setFirstValue] = useState(null);

    const handleChange = (event) => {
        const SelectedValue = setSelectedAge(event.target.value);
        setSelectedAge(selectedValue);
    };
    const match = selectedValue.match(/(\d+)\s*-\s*(\d+)/);
    if (match) {
        const start = parseInt(match[1], 10);
        setFirstValue(start);
    } else if (selectedValue.includes('Under')) {
        setFirstValue(0); // Example for "Under 30", assuming the first value is 0
    } else if (selectedValue.includes('Above')) {
        setFirstValue(44); // Example for "Above 43", assuming the first value is 44
    } else {
        setFirstValue(null);
    }
};

    return (
        <div className="flex flex-col items-center    bg-[#eeeaea] mt-[150px] ">
            <h1 className="text-3xl leading-42 mb-6 text-black">Which age range applies to you?</h1>
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
            <div className="ml-[-850px] text-lg mt-[100px]">
                Selected Age Range First Value: {firstValue !== null ? firstValue : '...'}
            </div>
        </div>

        



    );
};

export default AgeRangeSelection;
