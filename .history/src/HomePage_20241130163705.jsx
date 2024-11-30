import React from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'

const HomePage = ({ivfDetails}) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <>
        <Navbar/>
        <MainPage ivfDetail={ivfDetails} />
    </>
  )
}

export default HomePage