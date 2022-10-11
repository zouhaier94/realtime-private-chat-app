import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

export default function Home() {
  return (
    <div className="shadow-md p-5 mx-auto h-screen bg-[#a7bcff]">

    <div className="container mx-auto my-10 w-[800px] bg-white rounded-lg overflow-hidden">

      <div className="shadow-xl flex flex-row justify-center h-[600px] ">
      <Sidebar/>
      <Chat />
      </div>

    </div>

</div>
  ) 
}



