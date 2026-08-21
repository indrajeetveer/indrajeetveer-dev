import React, { useState } from 'react'

const Toggle = () => {

    const [value, setValue] = useState("ON")

    let change = () =>{
        if(value === "ON"){
            setValue("OFF")
        }else{
            setValue("ON")
        }
    }
  return (
    <div>
       <h1 className='text-6xl mt-10 font-bold ml-20'>The Light is {value}</h1>
       <button onClick={change} className='text-4xl border-1 px-8 py-2 rounded-3xl bg-amber-500 text-white ml-50 mt-7'>Click</button>
    </div>
  )
}

export default Toggle
