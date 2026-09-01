import React from 'react'

const Card = ({user,randomUser}) => {
  return (
    <div>
        <h1 className='text-4xl font-semibold '>Name:{user.name}</h1>
        <h2 className='text-3xl font-semibold'>Email:{user.email}</h2>

        <button onClick={()=>randomUser()} className=' active:scale-90 text-xl border-1 rounded-sm px-3 py-1 bg-sky-400 text-white font-semibold'>RandomUser</button>
    </div>
  )
}

export default Card