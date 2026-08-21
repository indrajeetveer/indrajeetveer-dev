import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [first, setfirst] = useState(0)

  // increment
  let inc =()=>{
    setfirst(first+1)
  }

  // decrement
  let dec =()=>{
    if(first>0){
       setfirst(first-1)
    }
  }

  // reset
  let reset =()=>{
    setfirst(0)
  }

  return (
    <div>
        <h1 className='text-8xl text-center mb-3'>{first}</h1>
        <div className='flex gap-3'>
        <button onClick={()=>inc()} className='border-1 px-3 rounded-sm text-2xl '>Increment</button>
        <button onClick={()=>reset()} className='border-1 px-3 rounded-sm text-2xl '>Reset</button>
        <button onClick={()=>dec()} className='border-1 px-3 rounded-sm text-2xl '>Decrement</button>
        </div>
        
    </div>
  )
}

export default App
