import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {

   let user1 = {
    name:"Veer",
    age:22,
    gender:"Male"
   }

   let user2 = {
    name:"Rakhi",
    age:20,
    gender:"Femal"
   }

   let user3 = {
    name:"Om",
    age:23,
    gender:"Male"
   }
  return (
    <div>
      {/* <Navbar title="Navbar" color="red" links={["Home","About","Services","Contact"]} />
       <Navbar title="Navbar" color="red" links={["Home","About","Services","Contact","Contact","Courses"]} /> */}
          
      {user1.age === 22 ? <Men/>:<Women/>}

    </div>
  )
}

export default App
