import React from 'react'
import logo from '../../assets/flower-fill.png'

const Nav = () => {
  return (
     <nav className=' text-xl flex  items-center  justify-between mx-12 my-3'>
        <div className='flex gap-5'>
           <img src={logo} alt="img" />
           <h1>BloomFi</h1>
        </div>

        <div>
          <ul className='flex items-center justify-center gap-10'>
            <li>USD bloom</li>
            <li>Business</li>
            <li>Treasury</li>
            <li>Developers</li>
            <li>join us</li>
          </ul>
        </div>

        <div>
          <button className='text-white bg-black border-2 px-6 py-2 rounded-[18px]'>Launch Beta</button>
        </div>
     </nav>
  )
}

export default Nav