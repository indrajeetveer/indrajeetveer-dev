import React from 'react'
import Nav from './components/Nav/Nav.jsx'
import Section from './components/Section/Section.jsx'
import SmallSection from './components/SmallSection/SmallSection.jsx'
import Card from './components/Card/Card.jsx'
import Logoes from './components/Logoes/Logoes.jsx'

const App = () => {
  return (
    <div> 
      <Nav/>
      <Section/>
      <SmallSection/>
      <Card/>
      <Logoes/>
    </div>
  )
}

export default App
