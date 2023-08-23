import React from 'react'
import './App.css';
import AllRoute from './Components/AllRoute';
import { CartProvider } from './Components/Context/Cartcontext';

const App = () => {
  return (
    <CartProvider>
      <AllRoute/>
    </CartProvider>
  )
}

export default App