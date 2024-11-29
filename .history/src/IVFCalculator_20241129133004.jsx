import React from 'react'

import AgeRangeSelection from './Components/AgeRangeSelection'
import IVFSlider from './Components/IvfSlider'

import Radiolist from './Components/Radiolist'
import Checklist from './Components/Checklist'
import Navbar from './Navbar'

const IVFCalculator = ({ivfDetails, setIvfDetails, selectedAge, setSelectedAge,value, setValue }) => {



  return (
    <>
      {/* <Navbar/> */}
      <AgeRangeSelection
        setIvfDetails={setIvfDetails}
      />
      <IVFSlider
        ivfDetails={ivfDetails}
        setIvfDetails={setIvfDetails}
      />
      <Radiolist setIvfDetails />
      <Checklist />
    </>
  );
};

export default IVFCalculator