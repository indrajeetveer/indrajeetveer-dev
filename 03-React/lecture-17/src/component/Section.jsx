import React, { useContext } from "react"
import { postContext } from "../context/PostContext"

const Section = () => {
    const data = useContext(postContext)
    console.log(data)
  return (
    <div className='h-90 bg-zinc-900'>
        <h1 className='text-4xl text-white'>All Sections</h1>
    </div>
  )
}

export default Section