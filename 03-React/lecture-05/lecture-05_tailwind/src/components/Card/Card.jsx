import React from 'react'

const Card = () => {
  return (
    <div className=' mt-10 flex items-center justify-center gap-6 mb-20'>
       <div className=' bg-cover bg-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwaW1nfGVufDB8fDB8fHww")] rounded-2xl bg-amber-500 w-[700px] h-[200px]'>
            <h1 className='text-5xl m-4'>Capital That Grow</h1>
            <div className='mt-10 ml-5 text-xl'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            
       </div>   
       
       <div className='rounded-2xl bg-purple-950 h-[200px] w-[300px] text-white'>
           <h1 className=' ml-4 text-[29px] text-white'>Always Liquid, always stable</h1>
           
           <p className='ml-4 mt-11 text-1xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis.</p>
       </div>

       <div className='rounded-2xl bg-purple-950 h-[200px] w-[300px]'>
             <h1 className='text-4xl text-white mt-4 ml-5'>100%</h1>
             <h1 className='text-white mt-3 ml-5  text-4xl'>hand-free</h1>

             <p className='mt-3 text-white ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem.</p>
       </div>
    </div>
  )
}

export default Card
