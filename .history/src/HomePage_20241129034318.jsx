import React from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'

const HomePage = ({valu}) => {
  return (
    <>
        <Navbar/>
        <MainPage value={value} setValue={setValue} />
    </>
  )
}

export default HomePage