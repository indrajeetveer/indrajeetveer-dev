import React, { useState } from 'react'

const App = () => {

  const [username,setusername] = useState("")
  const [userimg,setuserimg] = useState("")
  const [userposition,setuserposition] = useState("")
  const [userDes,setuserDes] = useState("")
  
  const [allinfo,setallinfo] =useState([])

  const formHandle = (e)=>{
     e.preventDefault();
   //   console.log(username)
   //   console.log(userimg)
   //   console.log(userposition)
   //   console.log(userDes)

     let newarray =[...allinfo,{username,userimg,userposition,userDes}]
     setallinfo(newarray)
   
     setusername("")
     setuserimg("")
     setuserDes("")
     setuserposition("")
  }

  return (
    <div className='flex flex-wrap'>
         <form onSubmit={(e)=>{
            formHandle(e);
         }}>
            <input 
             value={username}
             onChange={(e)=>{
                setusername(e.target.value)
             }}
            className='text-xl border-1 px-4 py-2 rounded-xl m-2 font-bold' type="text" placeholder='Enter your name' required />

            <input 
              value={userimg}
              onChange={(e)=>{
                 setuserimg(e.target.value)
              }}
            className='text-xl border-1 px-4 py-2 rounded-xl m-2 font-bold' type="text" placeholder='Image url'/>

            <input 
              value={userposition}
              onChange={(e)=>{
                setuserposition(e.target.value)
              }}
            className='text-xl border-1 px-4 py-2 rounded-xl m-2 font-bold' type="text" placeholder='Position'/>

            <input 
              value={userDes}
              onChange={(e)=>{
               setuserDes(e.target.value)
              }}
            className='text-xl border-1 px-4 py-2 rounded-xl m-2 font-bold' type="text" placeholder='Description'/>

            <button  className=' active:scale-95 text-xl border-none px-68 bg-green-500 text-white py-2 rounded-xl m-2 font-bold'>Submit</button>
         </form>
         
         <div>
             {allinfo.map((e)=>{
               return <h1>hello</h1>
             })}
         </div>
    </div>
  )
}

export default App
