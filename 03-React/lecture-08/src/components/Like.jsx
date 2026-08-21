import React from 'react'
import { useState } from 'react'

const Like = () => {

    const [like, setlike] = useState(0)
    const [dislike,setdislike] = useState(0)
    
    let likePhoto = ()=>{
        setlike(like + 1)
    }

    let notlike = ()=>{
       setdislike(dislike + 1)
    }


  return (
    <div>
        <div className='mt-10'>
            <img  className='h-[300px] ml-20 box-border rounded-2xl shadow-2xl' src="https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlaW1nfGVufDB8fDB8fHww" alt="img" />
        </div>

        <button onClick={likePhoto} className='text-3xl font-bold border-1 px-8 py-2 rounded-3xl mt-10 bg-sky-300 text-white ml-30 active:scale-95'>Like - {like}</button>
        <button onClick={notlike} className='text-3xl font-bold border-1 px-8 py-2 rounded-3xl mt-10 bg-sky-300 text-white ml-10 active:scale-95'>Dislike - {dislike}</button>
    </div>
  )
}

export default Like
