import React from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'

const HomePage = ({ivfDetails}) => {
  return (
    <>
        <Navbar/>
        <MainPage selectedAge={selectedAge} value={value} />
    </>
  )
}

export default HomePage