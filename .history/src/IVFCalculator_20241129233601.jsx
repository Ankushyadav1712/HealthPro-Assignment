import React from 'react'

import AgeRangeSelection from './Components/AgeRangeSelection'
import IVFSlider from './Components/IvfSlider'

import Radiolist from './Components/Radiolist'
import Checklist from './Components/Checklist'
import Navbar from './Navbar'
import IVFForm from './Components/ivfForm'

const IVFCalculator = ({ivfDetails, setIvfDetails }) => {



  return (
    <>
      {/* <Navbar/> */}
      {/* <AgeRangeSelection setIvfDetails={setIvfDetails} />
      <IVFSlider ivfDetails={ivfDetails} setIvfDetails={setIvfDetails} />
      <Radiolist setIvfDetails={setIvfDetails} />
      <Checklist setIvfDetails={setIvfDetails} /> */}
      <IVFForm/>
    </>
  );
};

export default IVFCalculator