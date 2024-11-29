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
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 bg-orange-500 mt-[100px] sm:mt-[50px]"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full mt-[100px] mr-[100px] sm:mt-[50px] sm:mr-[20px]"></div>
        </div>

        <div className="mt-[-60px] pl-[200px] font-poppins font-medium text-[44px] leading-[70px] sm:pl-[20px] sm:text-[24px] sm:leading-[36px]">
          Your estimated IVF Success Rate is
        </div>

        <div className="text-center text-white">
          <div className="relative w-40 h-40 mt-[100px] mr-[100px] sm:mt-[50px] sm:mr-0 sm:w-32 sm:h-32">
            <div className="absolute border-[10px] border-green-500 p-4 rounded-full h-[200px] w-[200px] ml-[200px] sm:ml-0 sm:h-[150px] sm:w-[150px]">
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold sm:text-xl">
                {ivfSuccessRate}%
              </div>
            </div>
          </div>
          <div className="ml-[-850px] text-lg mt-[100px] sm:ml-0 sm:mt-[20px] sm:text-base">
            With {ivfDetail.ivfCycle} IVF Cycle
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-800 via-gray-900 to-gray-900 rounded-lg -z-10"></div>

        <div className="mt-[-450px] ml-[500px] gradient-background sm:mt-[-250px] sm:ml-0 sm:flex sm:justify-center">
          <img src={HomeImage} alt="" className="sm:w-11/12 sm:h-auto" />
        </div>
      </div>
    </>
  );
};

export default MainPage;
