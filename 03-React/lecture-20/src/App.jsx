import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:productID' element={<Product/>}></Route>
      </Routes>
    </div>
  )
}

export default App