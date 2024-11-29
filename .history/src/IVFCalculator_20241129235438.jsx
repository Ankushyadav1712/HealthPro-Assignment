import React from 'react'
import IVFForm from './Components/ivfForm';

// import AgeRangeSelection from './Components/AgeRangeSelection'
// import IVFSlider from './Components/IvfSlider'

// import Radiolist from './Components/Radiolist'
// import Checklist from './Components/Checklist'
// import Navbar from './Navbar'


const IVFCalculator = ({ivfDetails, setIvfDetails }) => {



  return (
    <>
      <IVFForm ivfDetails={ivfDetails} setIvfDetails={setIvfDetails} />
    </>
  );
};

export default IVFCalculator;