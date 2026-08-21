import React from 'react'
import Like from './components/Like'
import Toggle from './components/Toggle'
import Todo from './components/Todo'
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

  // let name =["Indrajeet","Omkar","Ram","Shree","Vijay","Om","Mayuresh"]
 
  // const [num, setnum] = useState(0);
  // const randomName = ()=>{
  //     let random = Math.floor(Math.random()*name.length)
  //     setnum(random);
  // }
  

  // const [marks,setmarks] = useState([46,68,98,33,6,3])
  // const [added,setadded] = useState(false)

  // function check(){
  //   if(!added){
  //    const newarray = marks.map((elem)=>elem+5);
  //     setmarks(newarray)
  //    setadded(true)
  //   }
  // }

  const [gender, setgender] = useState("Male")

  let change = ()=>{
    if(gender === "Male"){
      setgender("Female")
    }else{
      setgender("Male")
    }
  }

  return (
    <div>
        {/* <h1 className='text-8xl ml-40 mb-3'>{first}</h1>
        <div className='flex gap-3'>
        <button onClick={()=>inc()} className='border-1 px-3 rounded-sm text-2xl '>Increment</button>
        <button onClick={()=>reset()} className='border-1 px-3 rounded-sm text-2xl '>Reset</button>
        <button onClick={()=>dec()} className='border-1 px-3 rounded-sm text-2xl '>Decrement</button>
        </div> */}
        

        {/* <div>
             <h1 className='text-5xl font-bold'>{name[num]}</h1>
             <button onClick={()=>{randomName()}} className='active:scale-90 border-none px-6 py-2 font-bold text-xl rounded-3xl mt-4 bg-blue-400 '>Click to change</button>
        </div> */}

       {/* {marks.map((elem,idx)=>{
        return <h1 key={idx}>The student marks is ={elem} ({elem>35?"pass":"fail"})</h1>
       })}

       <button className='text-xl border-none px-10 py-1 rounded-2xl bg-amber-400 ' onClick={()=>{check()}}>add the marks</button> */}

       <h1 className='text-5xl font-bold'>{gender}</h1>

       <button onClick={()=>{change()}} className='border-1 px-10 py-3 rounded-3xl text-xl bg-sky-300 text-white active:scale-90 mt-2'>Change Gender</button>


       <Like/>
       <Toggle/>
       <Todo/>

    </div>
  )
}

export default App
