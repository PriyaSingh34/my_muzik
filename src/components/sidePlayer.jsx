import React from 'react'
import bgImg from "../assets/home-img.jpg"
import MusicPlayer from './MusicPlayer'

const SidePlayer = () => {
  return (
    <div className='w-full h-full'>
       <p className='text-3xl text-white font-bold flex justify-center mt-5'>
        Player
       </p>
       <div className='w-full flex flex-col items-center justify-center mt-8 shadow-lg bg-gradient-to-r from-red-600 to-black p-6 rounded-md'>
        <img className=' rounded-md w-40 h-32' src={bgImg} alt="" />
        <p className='text-3xl font-bold   text-white mt-5'>Sadqay</p>
        <p className='text-xl font-bold  text-white mt-1'>Ashir wajahat</p>
        <MusicPlayer/>
       </div>
    </div>
  )
}

export default SidePlayer
