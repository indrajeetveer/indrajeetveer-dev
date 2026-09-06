import React from 'react'
import { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Footer = () => {

  const data = useContext(userDataContext)
  return (
    <div className='absolute bg-red-400 bottom-0 w-full text-3xl text-white pb-4'>
        <h1>This is an footer{data}</h1>
    </div>
  )
}

export default Footer