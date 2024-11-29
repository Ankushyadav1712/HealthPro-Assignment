import React from 'react'
import { useNavigate } from "react-router-dom";
import AgeRangeSelection from './Components/AgeRangeSelection'
import IVFSlider from './Components/IvfSlider'

import Radiolist from './Components/Radiolist'
import Checklist from './Components/Checklist'

const IVFCalculator = ({ selectedAge, setSelectedAge,value, setValue }) => {
  return (
    <>
      <AgeRangeSelection selectedAge={selectedAge} setSelectedAge={setSelectedAge}/>
      <IVFSlider value={value} setValue={setValue} />
      <Radiolist />
      <Checklist />
    </>
  );
};

export default IVFCalculator