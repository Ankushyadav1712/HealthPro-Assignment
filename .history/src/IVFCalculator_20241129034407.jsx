import React from 'react'
import AgeRangeSelection from './Components/AgeRangeSelection'
import IVFSlider from './Components/IvfSlider'

import Radiolist from './Components/Radiolist'
import Checklist from './Components/Checklist'

const IVFCalculator = ({va}) => {
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