import React from 'react'

export default function Navbar() {

  return (
    <div className='flex items-center bg-[#2f2d52] h-[50px]  justify-around'>
    <span className='p-1 font-semibold text-white text-lg'>Logo</span>

    <div className='flex space-x-4 '>

    <div className='text-white'>Zou</div>

    <img className='bg-[#ddddf7] h-[24px] w-[24px] rounded-xl' src={require('../images/avatar_default.png')} alt=''></img>

    <button className='bg-[#5d5b8d] text-[#ddddf7] rounded-md px-1 '>logout</button>

    </div>

    </div>
  )
}
