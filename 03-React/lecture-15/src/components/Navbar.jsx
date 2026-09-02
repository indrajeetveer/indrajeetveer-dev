import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-40 bg-sky-300 py-2 font-semibold text-white'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/courses'}>Courses</NavLink>
    </div>
  )
}

export default Navbar