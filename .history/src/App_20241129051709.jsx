import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import IVFCalculator from './IVFCalculator'
import HomePage from './HomePage'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState(1)
  const [selectedAge, setSelectedAge] = useState("");


  return (
    <>

    {/* <Navbar/>
    <IVFCalculator selectedAge={selectedAge} setSelectedAge={setSelectedAge} value={value} setValue={setValue}/>
    
    <HomePage selectedAge={selectedAge} value={value}/>
    </> */}
  )
}

export default App