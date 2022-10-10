import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'

export default function Sidebar() {
  return (
    <div className='border basis-1/3 bg-[#3e3c61]'>
      <Navbar />
      <Search />
      <Chats/>
    </div>
  )
}
 