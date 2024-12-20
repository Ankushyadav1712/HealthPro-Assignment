import React, { useEffect, useState } from "react";
import HomeImage from "./assets/HomeImage.png";

const MainPage = ({ ivfDetail }) => {
  const [ivfSuccessRate, setIvfSuccessRate] = useState(0);

  useEffect(() => {
    if (!ivfDetail.age) return;
    const calculateIVFSuccessRate = (age, cycles) => {
      let baselineRate;

      // Set baseline rate based on age
      if (age < 35) baselineRate = 0.45; 
      else if (age <= 37) baselineRate = 0.4; 
      else if (age <= 40) baselineRate = 0.25; 
      else baselineRate = 0.15; 

      const cumulativeRate = 1 - Math.pow(1 - baselineRate, cycles);

      setIvfSuccessRate((cumulativeRate * 100).toFixed(2));
    };
    calculateIVFSuccessRate(ivfDetail.age, ivfDetail.ivfCycle);
  }, [ivfDetail]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (circumference * ivfSuccessRate) / 100;

  return (
    <>
      <div className="min-h-screen bg-[rgb(48,48,48)]">
        <div className="relative grid w-64 h-60">
          {/* Orange Line and Circle */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 bg-orange-500 mt-[100px]"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full mt-[100px] mr-[100px]"></div>
        </div>

        {/* Heading Section */}
        <div className="mt-[-35px] px-4 md:pl-[200px] font-poppins font-medium text-[13px] md:text-[44px] leading-[30px] md:leading-[70px] text-center md:text-left sm:text-2xl lg:mt-[-53px] ml-[130px] sm:ml-[10px]">
          Your estimated IVF Success Rate is
        </div>

                  <div className=" ml-[200px]">
            <nav className="text-white text-sm mb-[-70px]">
              <ul className="flex items-center space-x-2 ">
                <li className="mb-[100px]">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <span className="text-gray-500 mb-[100px]">/</span>
                <li className="font-bold text-white mb-[100px]">
                  IVF Success Rate Calculator
                </li>
                <span className="text-gray-500 mb-[100px]">/</span>
                <li className="font-bold text-white mb-[100px]">Result</li>
              </ul>
            </nav>
          </div>

        {/* Success Rate Circle */}
        <div className="flex flex-col items-center text-white  md:mr-[700px] md:mt-[150px] ">
          <div className="relative w-64 h-64 mt-10 md:w-64 md:h-64 md:mt-0  md:ml-[-20px] md:items-start ">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#5BD489"
                opacity="30%"
                strokeWidth="40"
                fill="none"
                className="transition-all duration-300"
              />
              {/* Progress circle */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#5BD489"
                strokeWidth="40"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold md:text-3xl sm:text-xl ">
              {ivfSuccessRate}%
            </div>
          </div>
          <div className="text-lg mt-12 md:ml-[-20px] ">
            With {ivfDetail.ivfCycle} IVF Cycle
          </div>
        </div>

        {/* Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-800 via-gray-700 to-gray-900 rounded-lg -z-10"></div>

        {/* Image Section */}
        <div className="mt-8 flex justify-center gradient-background md:mt-[-500px] md:ml-[500px]">
          <img
            src={HomeImage}
            alt="Couple"
            className="rounded-lg w-[90%] md:w-auto"
          />
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-10 px-4 md:hidden">
          <button className="bg-orange-500 text-white py-3 px-6 rounded-full text-lg shadow-md hover:bg-orange-600 transition">
            Start private consultation →
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;

