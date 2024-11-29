import React from 'react'
import AgeRangeSelection from './Components/AgeRangeSelection'
import IVFSlider from './Components/IvfSlider'
import Checklist from './Components/Radiolist'
import Radiolist from './Components/Radiolist'

const IVFCalculator = () => {
  return (
    <>
        <AgeRangeSelection/>
        <IVFSlider/>
        <Radiolist/>
        <Checklist/>

    </>
  )
}

export default IVFCalculator