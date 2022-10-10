import React from 'react'

export default function Chats() {
  return (
    <div>

      {/* User */}
      <div className='border-y border-[#2f2d52de] hover:bg-[#2f2d52] cursor-pointer'>
      <div className="flex space-x-2 m-2">
        <img
          className="h-[40px] w-[40px] rounded-3xl"
          src={require("../images/avatar_default.png")}
          alt=""
        />
        <div>
        <div className="text-[#ddddf7] font-semibold">Jane</div>
        <div className="text-[#ddddf7] text-sm">Hello</div>
        </div>
      </div>
      </div>

      {/* User */}
      <div className='border-y border-[#2f2d52de] hover:bg-[#2f2d52] cursor-pointer'>
      <div className="flex space-x-2 m-2">
        <img
          className="h-[40px] w-[40px] rounded-3xl"
          src={require("../images/avatar_default.png")}
          alt=""
        />
        <div>
        <div className="text-[#ddddf7] font-semibold">Jane</div>
        <div className="text-[#ddddf7] text-sm">Hello</div>
        </div>
      </div>
      </div>

      {/* User */}
      <div className='border-y border-[#2f2d52de] hover:bg-[#2f2d52] cursor-pointer'>
      <div className="flex space-x-2 m-2">
        <img
          className="h-[40px] w-[40px] rounded-3xl"
          src={require("../images/avatar_default.png")}
          alt=""
        />
        <div>
        <div className="text-[#ddddf7] font-semibold">Jane</div>
        <div className="text-[#ddddf7] text-sm">Hello</div>
        </div>
      </div>
      </div>


    </div>
    
  )
}
