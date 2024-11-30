import React from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'

const HomePage = ({ivfDetails}) => {
  const
  return (
    <>
        <Navbar/>
        <MainPage ivfDetail={ivfDetails} />
    </>
  )
}

export default HomePage