import React, { useEffect } from 'react'
import IVFForm from './Components/ivfForm';
import { useNavigate } from 'react-router-dom';



const IVFCalculator = ({ivfDetails, setIvfDetails }) => {


  return (
    <>
      <IVFForm ivfDetails={ivfDetails} setIvfDetails={setIvfDetails} />
    </>
  );
};

export default IVFCalculator;