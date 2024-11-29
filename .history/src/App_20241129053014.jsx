import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import IVFCalculator from './IVFCalculator.jsx'
// import HomePage from './HomePage'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState(1)
  const [selectedAge, setSelectedAge] = useState("");


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route
            path="/calulator"
            element={
              <IVFCalculator
                selectedAge={selectedAge}
                setSelectedAge={setSelectedAge}
                value={value}
                setValue={setValue}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar/>
    <IVFCalculator selectedAge={selectedAge} setSelectedAge={setSelectedAge} value={value} setValue={setValue}/>
    
    <HomePage selectedAge={selectedAge} value={value}/>*/}
    </div>
  );
}

export default App
