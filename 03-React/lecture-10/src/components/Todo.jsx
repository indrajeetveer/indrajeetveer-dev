import React, { useState } from 'react'

const Todo = () => {

    const [name, setname] = useState("")
    const [alltodo, setalltodo] = useState([])

    let addItem =()=>{
        let newarray = [...alltodo]
        newarray.push(name)
        setalltodo(newarray)
        setname("")
    }

  return (
    <div className='flex item-center justify-center h-screen w-full bg-linear-to-b from-red-500 to-yellow-400'>
        <div className='border-none p-9 bg-white rounded-sm h-120 overflow-y-auto hide-scrollbar mt-45 ml-20'>
            <h1 className='text-5xl font-bold'>Todo App</h1>

            <input className='mt-7 border-1 px-10 py-[6px] text-xl rounded-sm ' type="text" placeholder="Add your new todo"
              value={name}
              onChange={(e)=>{
                 setname(e.target.value)
              }}
            />

            <button onClick={()=>{
                addItem()
            }} className='border-1 ml-2 text-3xl px-4 py-[2.5px] bg-blue-600 text-white rounded-sm'>+</button>

            <div className='mt-4'>
                {alltodo.map((e,idx)=>{
                    return <h1 key={idx} className='text-xl mt-2 font-medium border-none px-3 py-2 rounded-sm bg-gray-300'>{e}</h1>
                })}
                
            </div>
        </div>
          
    </div>
  )
}

export default Todo
