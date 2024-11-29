import React from 'react'

const MainPage = () => {
  return (
    <>
    <div className="min-h-screen bg-[#303030] flex items-center justify-center">
      <div className="relative flex items-center justify-center mt-[100px]">
        <div className="flex items-center">
          <div className="w-full sm:w-[75%] md:w-[50%] h-0.5 bg-orange-500"></div>
        </div>
        <div className="ml-4 text-white">Your estimated IVF Success Rate is</div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full"></div>
      </div>
    </div>
    </>
  )
}

export default MainPage