import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='main-card-Container'>
          <div className='card-one'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/072/332/254/small/black-and-white-icon-of-a-tennis-court-layout-vector.jpg  " alt="img" />
              
              <h3 className="white-text">Professional hard courts</h3>
              <h3 className="normal-text">with tournamnet-grade</h3>
              <h3 className="normal-text">lighting & climate Control-</h3>
              <h3 className="normal-text">play in <spam>perfect conditions,</spam>
              </h3>
              <h3 className='white-text'>in any season.</h3>

              <div className='one-card-bottom'>
                   <div className='card-button'>
                      <button className='btn'>
                        <div className='circle'></div>
                      </button>
                   </div>
                     
                     <div className='one-card-bottom-text'>
                        <h3>Game Mode</h3>
                     </div>
              </div>
          </div>

          <div className='card-two'>
              <button>Private & group Lessons</button>
          </div>

          <div className='card-three'>
              
          </div>
    </div>
  )
}

export default Card
