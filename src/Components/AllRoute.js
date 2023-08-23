import React from 'react'
import Home from '../Pages/Home'
import { Routes,Route } from 'react-router-dom'
import MenuItems from '../Pages/MenuItems'


const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/menu' element={<MenuItems/>}/>
    </Routes>
  )
}

export default AllRoute