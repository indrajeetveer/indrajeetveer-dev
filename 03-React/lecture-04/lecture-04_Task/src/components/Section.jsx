import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <div className='section_Main'>
        <div className='Main_Content'>
            <h1>Unleash your Inner Champion Today</h1>
            <h1>All In One Place</h1>
        </div>

        <div className='subContent_div'>
           <p>Join the ultimate tennis exprence-where passion meets performance</p>
           <p>and every swing brings your closer to vectory</p>
        </div>

        <div className='Section_button'>
            <button className='Section_button btn'>
                Start Your own Jounary
                <i class="ri-arrow-right-up-long-line"></i>
            </button>
        </div>

        <div className='Section_footer'>
            <div className='footer_one'>
                <div className='footer_info'>
                   <p>Train with real Professionals</p>
                   <p>Get the real result</p>
                </div>

                <div className='footer_img'>
                    <div className='user-one'><img src="https://images.unsplash.com/photo-1730573520193-6ae0b1070621?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBpbWclMjB3aXRoJTIwcHJvcGVyJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="img" /></div>
                    <div  className='user-two'><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltZyUyMHdpdGglMjBwcm9wZXIlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="img" /></div>
                    <div className='user-three'><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltZyUyMHdpdGglMjBwcm9wZXIlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="img" /></div>
                </div>
                 
            </div>

            <div className='footer_two'>
                 <ul className='footer_list'>
                    <li>Instragrem
                        <i class="ri-arrow-right-up-long-line"></i>
                    </li>
                    <li>Facebook
                        <i class="ri-arrow-right-up-long-line"></i>
                    </li>
                    <li>Youthube
                        <i class="ri-arrow-right-up-long-line"></i>
                    </li>
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default Section
