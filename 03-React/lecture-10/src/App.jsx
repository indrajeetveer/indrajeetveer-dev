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

  const removeCrad = (id)=>{
      let copy = [...allinfo]
      copy.splice(id,1);
      setallinfo(copy)
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
         
         <div className='flex flex-wrap m-10 gap-5'>
             {allinfo.map((e,id)=>{
                return(
                   <div className='border-1 h-[340px] w-[350px] text-center rounded-3xl'>
                  <h1 className='flex item-center justify-center mt-6'>
                    <img className='shadow-2xl bg-center bg-cover  border-none h-[100px] w-[100px] rounded-[50%] ' src={e.userimg} alt="img" />
                  </h1>

                  <h1 className='text-3xl mt-2 font-bold text-sky-500'>{e.username}</h1>
                  <h2 className='mt-3 text-2xl font-bold text-amber-500'>{e.userposition}</h2>
                  <p className='text-md mt-2 font-semibold'>{e.userDes}</p>
                  <button onClick={()=>{
                      removeCrad(id)
                  }} className=' active:scale-95 mt-5 border-none px-6 py-1 font-bold rounded-md bg-red-700 text-white '>Delete</button>
             </div>
                )
             })}
         </div>
    </div>
  )
}

export default App
