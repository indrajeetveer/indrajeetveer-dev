import React, { useContext } from 'react'
import ThemeContext, { ThemeDataContext } from '../contex/ThemeContext'

const Footer = () => {
  const [theme,settheme] = useContext(ThemeDataContext)
  return (
    <div>
        <h1>Footer</h1>
        <h2>{theme}</h2>
    </div>
  )
}

export default Footer