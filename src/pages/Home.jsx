import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

export default function Home() {
  return (
    <div className="shadow-md p-5 mx-auto h-screen bg-[#a7bcff]">

    <div className="container mx-auto my-10 md:w-[800px] w-[500px] bg-white rounded-lg overflow-hidden md:h-[600px] h-[500px]">

      <div className="shadow-xl flex flex-row justify-center md:w-[800px] w-[500px]">
      <Sidebar/>
      <Chat />
      </div>

    </div>

</div>
  ) 
}



