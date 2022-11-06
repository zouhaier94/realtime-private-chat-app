import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'

export default function Sidebar() {
  return (
    <div className='md:w-[300px] w-[210px] bg-white border-r border-gray-200'>
      <Navbar />
      <Search />
      <Chats/>
    </div>
  )
}
 