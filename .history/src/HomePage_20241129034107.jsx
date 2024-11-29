import React from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'

const HomePage = ({value, setValue}) => {
  return (
    <>
        <Navbar/>
        <MainPage value={value}  />
    </>
  )
}

export default HomePage