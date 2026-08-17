import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-amber-300  h-24  w-50 m-20 border-2 rounded-2xl'> 
       <h1 className='text-center mt-8 text-3xl'>{props.name}</h1>
    </div>
  )
}

export default Card
