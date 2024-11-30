import React from 'react'
import IVFForm from './Components/ivfForm';



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