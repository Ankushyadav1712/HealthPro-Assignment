import React from 'react'

const MainPage = () => {
  return (
    <>
    <div className="min-h-screen bg-[#303030]">
      <div className="relative w-64 h-64 flex items-center justify-center ">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-orange-500 mt-[100px]"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full mt-[100px]"></div>
        <div></div>
      </div>
    </div>
    </>
  )
}

export default MainPage