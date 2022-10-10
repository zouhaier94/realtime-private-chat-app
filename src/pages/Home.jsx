import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

export default function Home() {
  return (
    <div className="shadow-md p-5 mx-auto h-screen bg-[#a7bcff]">

    <div className="overflow-hidden container mx-auto my-10 w-[800px] border border-gray-300 bg-white rounded-lg">

      <div className=" shadow-xl flex flex-row gap-1 justify-center h-[600px]">

      <Sidebar/>
      <Chat />
  
      </div>

    </div>

</div>
  ) 
}



