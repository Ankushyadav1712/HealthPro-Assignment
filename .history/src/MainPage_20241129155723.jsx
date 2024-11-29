import React, { useEffect, useState } from "react";

import HomeImage from "./assets/HomeImage.png";

const MainPage = ({ ivfDetail }) => {
    const circleStyle = {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `conic-gradient(
      #4caf50 0% ${ivfSuccessRate}%,
      #2b2b2b ${ivfSuccessRate}% 100%
    )`,
      position: "relative",
    };

    const percentageStyle = {
      position: "absolute",
      fontSize: "32px",
      fontWeight: "bold",
      color: "#ffffff",
    };
    
  const [ivfSuccessRate, setIvfSuccessRate] = useState(0);

  useEffect(() => {
    if (!ivfDetail.age) return;
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
      setIvfSuccessRate((cumulativeRate * 100).toFixed(2));
    };
    calculateIVFSuccessRate(ivfDetail.age, ivfDetail.ivfCycle);
  }, [ivfDetail]);

  return (
    <>
      <div className="min-h-screen bg-[rgb(48,48,48)] ">
        <div className="relative w-64 h-60 grid  ">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 bg-orange-500 mt-[100px]"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full mt-[100px] mr-[100px]"></div>
        </div>
        <div className=" mt-[-60px] pl-[200px] font-poppins font-medium text-[44px] leading-[70px]">
          {" "}
          Your estimated IVF Success Rate is{" "}
        </div>

        <div className="text-center text-white m">
          <div className="relative w-40 h-40 mt-[100px] mr-[100px]">
            <div style={{width: "150px",
      height: "150px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `conic-gradient(
      #4caf50 0% ${ivfSuccessRate}%,
      #2b2b2b ${ivfSuccessRate}% 100%}}>
              <div
                className="absolute inset-0 flex items-center justify-center text-2xl font-bold "
                style={percentageStyle}
              >
                {ivfSuccessRate}%
              </div>
            </div>
          </div>
          <div className=" ml-[-850px] text-lg mt-[100px] ">
            With {ivfDetail.ivfCycle} IVF Cycle
          </div>
        </div>



        

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-800 via-gray-900 to-gray-900 rounded-lg -z-10"></div>
        <div className="mt-[-450px]  ml-[500px] gradient-background">
          <img src={HomeImage} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default MainPage;
