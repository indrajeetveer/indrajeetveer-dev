import React from 'react'
import logo from '../../assets/flower-fill.png'

const Section = () => {
  return (
    <div className='mt-8 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat rounded-3xl h-[620px] mx-[40px]  bg-[url("https://images.unsplash.com/photo-1617201947772-5581fac22966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHB1cnBsZSUyMGZsb3dlciUyMGluJTIwb2NjZW4lMjBib290b20lMjBpbWd8ZW58MHx8MHx8fDA%3D")]'>
       <div className="bg-white h-9 w-9 flex items-center justify-center">
            <img src={logo} alt="img" className="" />
       </div>

       <div>
          <h1 className='text-8xl text-white'>Where Money Grows</h1>
       </div>

       <div className='text-white text-3xl text-center my-6'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum dolor.</p>
          
       </div>

       <div className='mb-40'>
        <button className='text-white text-2xl bg-black  px-10 py-4 rounded-[18px]'>Try it Now</button>
       </div>
    </div>
  )
}

export default Section
