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
      <div className="min-h-screen bg-[rgb(48,48,48)] ">
  {/* Container for the layout */}
  <div className="relative w-full md:w-64 h-60 grid">
    {/* Horizontal line */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 bg-orange-500 md:mt-[100px]"></div>
    {/* Circle */}
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full md:mt-[100px] md:mr-[100px]"></div>
  </div>

  {/* Heading */}
  <div className="text-center md:mt-[-60px] pl-4 md:pl-[200px] font-poppins font-medium text-[32px] md:text-[44px] leading-[50px] md:leading-[70px]">
    Your estimated IVF Success Rate is
  </div>

  {/* Circle with success rate */}
  <div className="flex justify-center items-center text-white mt-[20px] md:mt-[100px]">
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <div className="absolute border-[6px] md:border-[10px] border-green-500 p-4 rounded-full h-full w-full flex items-center justify-center text-2xl md:text-3xl font-bold">
        {ivfSuccessRate}%
      </div>
    </div>
  </div>

  {/* IVF cycle details */}
  <div className="text-center text-lg md:text-lg mt-[-20px] md:mt-[100px]">
    With {ivfDetail.ivfCycle} IVF Cycle
  </div>

  {/* Background gradient */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-800 via-gray-900 to-gray-900 rounded-lg -z-10"></div>

  {/* Image at the bottom for mobile view */}
  <div className="block md:hidden mt-[50px]">
    <img src={HomeImage} alt="IVF Success" className="w-full" />
  </div>
</div>

    </>
  );
};

export default MainPage;
