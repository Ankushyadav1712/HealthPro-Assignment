import React from 'react'
import { useNavigate } from "react-router-dom";
import AgeRangeSelection from './Components/AgeRangeSelection'
import IVFSlider from './Components/IvfSlider'

import Radiolist from './Components/Radiolist'
import Checklist from './Components/Checklist'

const IVFCalculator = ({ selectedAge, setSelectedAge,value, setValue }) => {
  const navigate = useNavigate();

   const handleCalculateClick = () => {
     navigate("/home"); // Redirect to the HomePage
   };
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