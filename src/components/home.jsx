import React from 'react'
import bgImg from "../assets/home-img.jpg"

const Home = () => {
  return (
      <div className="relative w-full h-[500px] mt-4 back bg-[url('./assets/home-img.jpg')] bg-cover	 ">
           {/* <img className='absolute w-full h-[500px] z-[-10] ' src={bgImg} alt="" /> */}
           <div className='z-[50] mt-10 ml-10 '>
            <h2 className='text-white text-2xl font-bold'>Treading New Hits </h2>
            <div className='mt-14 ml-14'>
            <p className='text-white text-8xl font-bold'>Up To U</p>
            <p className='mt-5 text-white text-3xl font-medium'>Dhanda Nyoliwala</p>
            <div className= 'mt-8 w-48 h-10 flex justify-center items-center bg-gradient-to-r from-red-600 to-black rounded-lg' >
                <p className='text-white'>
                    Listen Now
                </p>
            </div>

            </div>
          
           </div>
      </div> 
  )
}

export default Home
