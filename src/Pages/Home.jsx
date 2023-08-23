import React from 'react'
import Navbar from '../Components/Navbar'
import FoodItems from '../Components/FoodItems'
import Offers from '../Components/Offers'
import Trending from '../Components/Trending'
import Popular from '../Components/Popular'
import Mostseller from '../Components/Mostseller'

const Home = () => {
  return (
    <>
      <Navbar/>
      <FoodItems/>
      <Offers/>
      <Trending/>
      <Popular/>
      <Mostseller/>
    </>
  )
}

export default Home