import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around bg-amber-400 text-white p-2'>
       <h1 className='text-2xl font-semibold'>Navbar</h1> 
       <div className='flex item-center gap-20'>
          <Link className='text-2xl font-semibold' to='/'>Home</Link>
          <Link className='text-2xl font-semibold' to='/products'>Products</Link>
       </div>
    </div>
  )
}

export default Navbar