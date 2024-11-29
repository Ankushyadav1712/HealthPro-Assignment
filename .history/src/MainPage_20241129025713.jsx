import React from 'react'

import HomeImage from './assets/HomeImage.png'
import AgeRangeSelection from '../src/Components/AgeRangeSelection.jsx'
import IVFSlider from '../src/Components/IvfSlider.jsx'

const MainPage = () => {
    const [selectedAge, setSelectedAge] = useState(null);
    const [value, setValue] = useState(1);
  return (
    <>
    <AgeRangeSelection selectedAge={selectedAge} setSelectedAge={setSelectedAge} />
      <IVFSlider ivfCycles={ivfCycles} setIvfCycles={setIvfCycles} />
    <div className="min-h-screen bg-[rgb(48,48,48)] ">
      <div className="relative w-64 h-60 grid  ">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 bg-orange-500 mt-[100px]"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full mt-[100px] mr-[100px]"></div>

      </div>
      <div className=' mt-[-60px] pl-[200px] font-poppins font-medium text-[44px] leading-[70px]'> Your estimated IVF Success Rate is  </div>

      <div className="text-center text-white m">
                    <div className="relative w-40 h-40 mt-[100px] mr-[100px]">
                    <div className=" absolute border-[10px] border-green-500 p-4 rounded-full h-[200px] w-[200px] ml-[200px]">
                        {/* <svg className="absolute top-0 left-0" viewBox="0 0 36 36" width="100%" height="100%">
                            <path
                                className="text-green-500"
                                strokeDasharray="64, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="text-gray-700"
                                strokeDasharray="36, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                        </svg> */}
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold ">
                            64%
                        </div>
                    </div>
                    </div>
                    <div className=" ml-[-850px] text-lg mt-[100px] ">With {value} IVF Cycle</div>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-800 via-gray-900 to-gray-900 rounded-lg -z-10"></div>
                <div className='mt-[-450px]  ml-[500px] gradient-background'>
                    <img src={HomeImage} alt="" className='' />
                </div>
    </div>
    </>
  )
}

export default MainPage