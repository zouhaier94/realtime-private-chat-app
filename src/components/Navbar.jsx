import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase'
import { AuthContext } from '../context/AuthContext'


export default function Navbar() {

  const {currentUser} = React.useContext(AuthContext)

  return (
    <div className='flex items-center bg-[#006AFF] md:h-[50px] h-[40px] justify-around'>
    <span className='p-1 font-semibold text-white md:text-xl text-lg'>Chat</span>

    <div className='flex md:space-x-4 space-x-2'>

    <div className='text-white md:text-lg text-md font-semibold'>{currentUser.displayName}</div>

    <img className='bg-[#ddddf7] md:h-[28px] h-[24px] md:w-[28px] w-[24px] rounded-xl' src={currentUser.photoURL} alt=''></img>

    <button onClick={()=> signOut(auth)} className='bg-white text-gray-500 border rounded-md px-1'>logout</button>

    </div>

    </div>
  )
}
