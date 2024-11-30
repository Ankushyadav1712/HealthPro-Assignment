import React, { useEffect } from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ivfDetails}) => {
  const navigate = useNavigate();
  useEffect(()=>{
if(ivfDetails.age == "") navigate('/')
return
  }, [ivfDetails])
    return (
    <>
        <Navbar/>
        <MainPage ivfDetail={ivfDetails} />
    </>
  )
}

export default HomePage