import React from 'react'
import IVFForm from './Components/ivfForm';
import { useNavigate } from 'react-router-dom';



const IVFCalculator = ({ivfDetails, setIvfDetails }) => {
const navigate = useNavigate();
useEffect(() => {
  navigate("/");
}, []);


  return (
    <>
      <IVFForm ivfDetails={ivfDetails} setIvfDetails={setIvfDetails} />
    </>
  );
};

export default IVFCalculator;