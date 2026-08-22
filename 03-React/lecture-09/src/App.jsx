import React, { useState } from 'react'

const App = () => {

   const [name, setname] = useState("")
   const [user, setuser] = useState(["Ram"])

  const formHandler = (e)=>{
     e.preventDefault();

     const newusers = [...user]
     newusers.push(name)
     setuser(newusers)
     console.log(newusers)
     setname("")

  }

  return (
    <div className='bg-sky-300'>
        <form className='p-10 text-xl'onSubmit={(e)=>{
            formHandler(e)
        }} >
          Name:<input className='bg-white text-xl border-1 text-center px-10' type="text" placeholder='Enter your name '  
          value={name}
          required
          onChange={(e)=>{
            setname(e.target.value)
          }}
         />
          <button className='border-1 px-10 mt-3  font-bold rounded-sm mx-14 bg-white'>Submit</button>
        </form>

        {user.map((e)=>{
          return <h1>{e}</h1>
        })}
    </div>
  )
}

export default App
