import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import './App.css'
import Navbar from './Navbar'
import IVFCalculator from './IVFCalculator'
import HomePage from './HomePage'

function App() {
  const [value, setValue] = useState(1)
  const [selectedAge, setSelectedAge] = useState("");


  return (
    <>
      <Navbar />
      {/* <IVFCalculator selectedAge={selectedAge} setSelectedAge={setSelectedAge} value={value} setValue={setValue}/>

    <HomePage selectedAge={selectedAge} value={value}/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <IVFCalculator
                selectedAge={selectedAge}
                setSelectedAge={setSelectedAge}
                value={value}
                setValue={setValue}
              />
            }
          />
          <Route
            path="/home"
            element={<HomePage selectedAge={selectedAge} value={value} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App
