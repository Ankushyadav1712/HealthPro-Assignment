import React from 'react'
import AgeRangeSelection from './Components/AgeRangeSelection'
import IVFSlider from './Components/IvfSlider'
// import Checklist from './Components/Checklist'

const IVFCalculator = () => {
  return (
    <>
        <AgeRangeSelection/>
        <IVFSlider/>
        <Checklist/>
    </>
  )
}

export default IVFCalculator