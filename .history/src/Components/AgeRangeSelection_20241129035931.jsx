import React, { useState } from 'react';
import "../Components/AgeRangeSelector.css";

const AgeRangeSelection = () => {
    const [selectedAge, setSelectedAge] = useState(null);
    const ageData = [
        { id: 1, text: 'Under 30', first: 18, last: 29 },
        { id: 2, text: 'Between 30 - 34', first: 30, last: 34 },
        { id: 3, text: 'Between 35 - 37', first: 35, last: 37 },
        { id: 4, text: 'Between 38 - 40', first: 38, last: 40 },
        { id: 5, text: 'Between 41 - 43', first: 41, last: 43 },
        { id: 6, text: 'Above 43', first: 44, last: 60 },
      ];

    const handleChange = (id) => {
        const selectedAgeData = ageData.find(item => item.id === id) 

    
        if (selectedAgeData) {
            const { first, last } = selectedAgeData;

            // Generate a random integer between first and last
            const randomAge = Math.floor(Math.random() * (last - first + 1)) + first;

            console.log(`Selected Age Range: ${selectedAgeData.text}`);
            console.log(`Random Age Generated: ${randomAge}`);
            
            return randomAge; // Return the random age if needed
        } else {
            console.error("Invalid ID or Age Data not found.");
            return null;
        }
    };

    return (
        <div className="flex flex-col items-center bg-[#eeeaea] mt-[150px]">
            <h1 className="text-3xl leading-42 mb-6 text-black">Which age range applies to you?</h1>
            <div className="grid grid-cols-3 gap-4">
                {ageData.map((age) => (
                    <label key={age.id} className="flex items-center space-x-3">
                        <input 
                            type="radio" 
                            name="age" 
                            value={age.text} 
                            className="radio-input"
                            onChange={()=> handleChange(age.id)} 
                            // checked={selectedAge === ageRange} 
                        />
                        <span className={selectedAge === ageRange ? 'text-black' : 'text-gray-500'}>{age.text}</span>
                    </label>
                ))}
            </div>

            {/* Display the first value */}
            <div className="ml-[-850px] text-lg mt-[100px] text-black">
                Selected Age Range First Value: {firstValue !== null ? firstValue : ''}
            </div>
        </div>
    );
};

export default AgeRangeSelection;