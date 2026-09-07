import React, { useContext } from 'react'
import { ThemeDataContext } from '../contex/ThemeContext'

const Navbar = () => {
  const [theme,settheme]= useContext(ThemeDataContext)
  return (
    <div className='flex items-center justify-between text-2xl'>
      <h1>Navbar</h1>
      <h2>{theme}</h2>
      <button 
       onClick={()=>{
         if(theme == 'light'){
          settheme('Dark')
         }else{
          settheme('light')
         }
       }}
      className='font-semibold  rounded px-2 py-1 bg-sky-500 text-white'>Chanhe theme</button>
    </div>
  )
}

export default Navbar