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
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/calculator" element={<IVFCalculator />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>

      {/* <HomePage selectedAge={selectedAge} value={value}/> */}
    </div>
  );
}

export default App