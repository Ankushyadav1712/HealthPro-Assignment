import React, { useState } from 'react';

const AgeRangeSelection = () => {
    const [selectedAge, setSelectedAge] = useState(null);

    const handleChange = (event) => {
        setSelectedAge(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#eeeaea]">
            <h1 className="text-2xl font-bold mb-6 text-black">Which age range applies to you?</h1>
            <div className="grid grid-cols-3 gap-4">
                {['Under 30', 'Between 30 - 34', 'Between 35 - 37', 'Between 38 - 40', 'Between 41 - 43', 'Above 43'].map((ageRange, index) => (
                    <label key={index} className="flex items-center space-x-2">
                        <input 
                            type="radio" 
                            name="age" 
                            value={ageRange} 
                            className="form-radio text-orange-500" 
                            onChange={handleChange} 
                            checked={selectedAge === ageRange} 
                        />
                        <span className={selectedAge === ageRange ? 'text-black' : 'text-gray-400'}>{ageRange}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default AgeRangeSelection;