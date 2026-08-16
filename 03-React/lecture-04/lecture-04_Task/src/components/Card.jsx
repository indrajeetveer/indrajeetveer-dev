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
                <h1>100+</h1>
                <h2>Pro Coaches</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                
                <div className='card-three-div1'>
                     <div>
                        <h3>Beginner</h3>
                     </div>

                     <div className='Dotes'>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                     </div>

                     <h1>55</h1>
                </div>

                <div className='card-three-div2'>
                     <div>
                        <h3>Intermediate</h3>
                     </div>

                       <div className='Dotes1'>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                     </div>

                     <h1>40</h1>
                </div>

                <div className='card-three-div3'>
                      <div>
                        <h3>Advance</h3>
                     </div>

                      <div className='Dotes2'>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                          <h1></h1>
                     </div>

                     <h1>35</h1>
                </div>
          </div>
    </div>
  )
}

export default Card
