import React from 'react'

export default function Input() {
  return (
    <div className='h-[50px] bg-white border p-1 flex'>

      <input className="w-[400px] outline-none placeholder-gray-300" type="text" placeholder='Type something...'></input>

      <img className="my-1 cursor-grab" src={require('../images/attach.png')} alt="" />

      <input  type="file" className='hidden' />

      <label  className="my-1 mr-1 cursor-grab" htmlFor='file'>
      <img src={require('../images/img.png')} alt="" />
      </label>

      <button className='bg-[#5d5b8d] text-[#ddddf7] rounded-md m-1 px-3 py-1 text-md'>Send</button>
    </div>
  )
}
