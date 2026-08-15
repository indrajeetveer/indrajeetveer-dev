import React from 'react'
import "./Nav.css";

const Nav = () => {
  return (
    <div className='main'>
       <div className='logo'>
           <h2>Horizon Courts</h2>
       </div>

       <div  className='menu'>
          <ul className='ui_List'>
             <li>About_US</li>
             <li>Services</li>
             <li>Coaches</li>
             <li>Events</li>
             <li>Contacts</li>
          </ul>
       </div>

       <div>
        <button className='book_button'>
            Book Now 
            <i class="ri-arrow-right-up-long-line"></i>
        </button>
       </div>
    </div>
  )
}

export default Nav
