import React, { useEffect, useState } from "react";

import HomeImage from "./assets/HomeImage.png";

const MainPage = ({ ivfDetail }) => {
  const [ivfSuccessRate, setIvfSuccessRate] = useState(0);

  useEffect(() => {
    if(!ivfDetail.age) return;
    const calculateIVFSuccessRate = (age, cycles) => {
      let baselineRate;

      // Set baseline rate based on age
      if (age < 35) baselineRate = 0.45; // 45% success for under 35
      else if (age <= 37) baselineRate = 0.4; // 40% success for 35-37
      else if (age <= 40) baselineRate = 0.25; // 25% success for 38-40
      else baselineRate = 0.15; // 15% success for above 40

      // Calculate cumulative success rate after given number of cycles
      const cumulativeRate = 1 - Math.pow(1 - baselineRate, cycles);

      // Return the success rate as a percentage
      setIvfSuccessRate((cumulativeRate*100).toFixed(2))
    };
    calculateIVFSuccessRate(ivfDetail.age, ivfDetail.ivfCycle)
  
  }, [ivfDetail])
  
  
  return (
    <>
      <div className="min-h-screen bg-[rgb(48,48,48)]">
        <div className="relative grid w-64 h-60">
          {/* Orange Line and Circle */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 bg-orange-500 mt-[100px]"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full mt-[100px] mr-[100px]"></div>
        </div>

        {/* Heading Section */}
        <div className="mt-[-80px] px-4 md:pl-[200px] font-poppins font-medium text-[24px] md:text-[44px] leading-[30px] md:leading-[70px] text-center md:text-left sm:text-2xl lg:mt-4">
          Your estimated IVF Success Rate is
        </div>

        {/* Success Rate Circle */}
        <div className="flex flex-col items-center text-white">
          <div className="relative w-40 h-40 mt-10">
            <div className="absolute border-[10px] border-green-500 rounded-full h-[200px] w-[200px] md:flex items-center justify-center">
              <div className="text-2xl font-bold">{ivfSuccessRate}%</div>
            </div>
          </div>
          <div className="text-lg mt-12 ml-10 ">
            With {ivfDetail.ivfCycle} IVF Cycle
          </div>
        </div>

        {/* Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-800 via-gray-900 to-gray-900 rounded-lg -z-10"></div>

        {/* Image Section */}
        <div className="mt-8 flex justify-center">
          <img
            src={HomeImage}
            alt="Couple"
            className="rounded-lg w-[90%] md:w-auto"
          />
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-10 px-4">
          <button className="bg-orange-500 text-white py-3 px-6 rounded-full text-lg shadow-md hover:bg-orange-600 transition">
            Start private consultation →
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
