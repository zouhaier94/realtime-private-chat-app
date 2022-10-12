import React from 'react'

export default function Message() {

  //let type = "sent"
  let type = "received"


  return (
    <div className={type === "sent"? 'flex flex-row-reverse gap-1 border p-1':'flex flex-row gap-1 border p-1'}>

      <div>
      <img
        className="h-[40px] w-[40px] rounded-3xl ml-1"
        src={require("../images/avatar_default.png")}
        alt=""
      />
      <div className='text-xs text-gray-500'>Just now</div>
      </div>
      
      <div className='py-3 mx-1'>

      <div className={type === "sent"? 'p-1 bg-[#a3b6f5] rounded-md w-fit text-white'
                                :'p-1 bg-white rounded-md w-fit'}>Hello</div>
      <img
          className="h-[120px] w-[120px] mt-1 rounded-sm overflow-hidden"
          src={require("../images/avatar_default.png")}
          alt=""
        /> 
      </div>

    </div>
  )
}
