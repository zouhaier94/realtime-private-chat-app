import React from 'react'
import Messages from './Messages'
import  Input  from '../components/Input'
import { ChatContext } from "../context/ChatContext";

export default function Chat() {

  const { data } = React.useContext(ChatContext);


  return (
    <div className='md:w-[600px] w-[290px] md:h-[600px] h-[500px]'>

      <div className='flex bg-[#006AFF] md:p-3 p-1 md:h-[50px] h-[40px]'>

        <div className='md:w-[400px] w-[300px] font-semibold text-white'>{data.user?.displayName}</div>

        <div className='md:w-[100px] w-[100px] flex place-content-end ml-1 md:mr-6 mr-2' >
        <img className='h-7 cursor-pointer' src={require('../images/cam.png')} alt='' />
        <img className='h-7 cursor-pointer' src={require('../images/add.png')} alt='' />
        <img className='h-7 cursor-pointer' src={require('../images/more.png')} alt='' />
        </div>

      </div>
      <Messages/>
      <Input />

    </div>
  )
}
