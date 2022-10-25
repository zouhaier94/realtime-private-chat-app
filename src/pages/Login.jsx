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
    <div className="shadow-md p-5 mx-auto">
    <div className="container mx-auto my-14 w-[400px] border border-gray-300 bg-white rounded-md">
        <div className="p-5 space-y-5 shadow-xl">
            <h4 className="text-center text-2xl">Login</h4>

            <form onSubmit={handleSubmit}>

            <div className="flex flex-col gap-5">
            <input type="email"  className="border border-gray-300 px-4 py-2 rounded-md"  placeholder="Email"  />  
            <input type="password" className="border border-gray-300 px-4 py-2 rounded-md"  placeholder="Password" /> 
            </div>
            <input type="submit" value='Sign In' className="mt-5 bg-[#2d3436] px-4 py-2 text-white font-bold w-full rounded-md" />  
            <p className='mx-12 pt-2'>You don't have an account? <Link to="/register">Register</Link></p>
            </form>
             
        </div>
    </div>
</div>
  )
}
