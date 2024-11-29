import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import IVFCalculator from './IVFCalculator'
import HomePage from './HomePage'

function App() {
  const [value, setValue] = useState(1)
  const [selectedAge, setSelectedAge] = useState("");


  return (
    <>
    <Navbar/>
    <IVFCalculator selectedAge value={value} setValue={setValue}/>
    <HomePage value={value}/>
    </>
  )
}

export default App
