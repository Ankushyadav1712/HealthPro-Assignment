import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import IVFCalculator from './IVFCalculator'
import HomePage from './HomePage'

function App() {
  const [value, setValue] = useState(1)


  return (
    <>
    <Navbar/>
    <IVFCalculator value={}/>
    <HomePage value={value} setValue={setValue}/>
    </>
  )
}

export default App