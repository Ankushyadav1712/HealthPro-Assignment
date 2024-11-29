import React from 'react'

const MainPage = () => {
  return (
    <>
    <div className="min-h-screen bg-[#303030]">
    <div className="relative w-full max-w-sm h-auto flex items-center justify-center mt-[20px] px-4">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-orange-500"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full"></div>
      </div>
    </div>
    </>
  )
}

export default MainPage