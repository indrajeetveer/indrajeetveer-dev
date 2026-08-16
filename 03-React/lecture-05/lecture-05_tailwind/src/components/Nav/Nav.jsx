import React from 'react'

const Nav = () => {
  return (
    <nav className='m-5 flex items-center justify-around bg-amber-600 px-10 py-5'>
      
      <div>
        <h1 className='text-white text-xl'>Logo</h1>
      </div>

      <div>
        <ul className='flex items-center justify-center gap-20 text-xl text-white'>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Links</li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav