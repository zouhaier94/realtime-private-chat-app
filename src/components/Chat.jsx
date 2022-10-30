import React from 'react'
import Messages from './Messages'
import  Input  from '../components/Input'
import { ChatContext } from "../context/ChatContext";

export default function Chat() {

  const { data } = React.useContext(ChatContext);


  return (
    <div className='basis-2/3'>

      <div className='flex bg-[#5d5b8d] p-3 h-[50px]'>

        <div className='basis-4/5 font-semibold text-[#ddddf7]'>{data.user?.displayName}</div>

        <div className='basis-1/5 flex ml-8'>
        <img className='h-7 mr-1 cursor-pointer' src={require('../images/cam.png')} alt='' />
        <img className='h-7 mr-1 cursor-pointer' src={require('../images/add.png')} alt='' />
        <img className='h-7 cursor-pointer' src={require('../images/more.png')} alt='' />
        </div>

      </div>
      <Messages/>
      <Input />

    </div>
  )
}
