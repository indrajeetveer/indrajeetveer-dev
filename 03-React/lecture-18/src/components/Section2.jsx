import React, { useContext } from 'react'
import { ThemeDataContext } from '../contex/ThemeContext';

const Section2 = () => {
  const [theme,settheme] = useContext(ThemeDataContext);
  return (
    <div>Section2
      <h1>{theme}</h1>
    </div>
   
  )
}

export default Section2