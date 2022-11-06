import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';


export default function Login() {

  const [err, setErr] = React.useState(false)
  const [errMsg, setErrMsg] = React.useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setErr(true);
      setErrMsg(err.message)
    }
  }

  return (
    <div className="p-5 mx-auto">

    <div className="container mx-auto my-14 w-[500px] bg-white">
    
        <div className="p-5 space-y-5">
          <div className='flex justify-center'>
          <img className="h-16 " src={require("../images/Messenger_logo.png")}alt=""/>
          </div>
            <div className="text-center text-3xl">Connect with your favorite people.</div>

            <form onSubmit={handleSubmit}>

            <div className="flex flex-col gap-5 items-center">
            <input type="email"  className="w-[350px] border border-gray-300 px-4 py-2 rounded-md mt-4 text-lg"  placeholder="Email"  />  
            <input type="password" className=" w-[350px] border border-gray-300 px-4 py-2 rounded-md text-lg"  placeholder="Password" /> 
            <input type="submit" value='Continue' className="mt-5 bg-[#0a7cff] px-4 py-2 text-white w-fit rounded-3xl" />  
            <p className='mx-12'>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
            
           
            </form>
             
        </div>

    </div>


</div>
  )
}
