import React from 'react'

export default function Register() {
  return (

    <div className="shadow-md p-5 mx-auto">
    <div className="container mx-auto my-14 w-[400px] border border-gray-300 bg-white rounded-md">
        <div className="p-5 space-y-5 shadow-xl">
            <h4 className="text-center text-2xl">Register</h4>

            <form >

            <div className="flex flex-col gap-5">
            <input type="text"  className="border border-gray-300 px-4 py-2 rounded-md"  placeholder="Display Name"  />  
            <input type="email"  className="border border-gray-300 px-4 py-2 rounded-md"  placeholder="Email"  />  
            <input type="password" className="border border-gray-300 px-4 py-2 rounded-md"  placeholder="Password" />
            <input type="file" id="file" className='hidden'/> 
            <label htmlFor='file'><img className='h-14 cursor-grab' src={require("../images/addImg.png")} alt=""></img></label>     
            </div>
            <input type="submit" value="Register" className="mt-5 bg-[#2d3436] px-4 py-2 text-white font-bold w-full rounded-md" />  
            <p className='mx-12 pt-2'>You don't have an account? Register</p>
            </form>
             
        </div>
    </div>
</div>
  )
}
