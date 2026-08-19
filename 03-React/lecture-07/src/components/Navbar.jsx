import React from 'react'

const Navbar = (props) => {

  return (
    <nav style={{backgroundColor:props.color}} className='flex item-center justify-around text-2xl gap-50 p-3 mr-10 ml-10 bg-red-700 rounded-sm mt-1'>
        <div>
            <h1>{props.title}</h1>
        </div>

        <div>
            <ul className='flex item-center justify-center gap-10'>
               {props.links.map((elem,idx)=>{
                   return <h1 key={idx}>{elem}</h1>
               })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
