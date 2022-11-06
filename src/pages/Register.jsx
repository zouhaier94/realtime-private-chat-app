import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase"; // We have to take this from our file
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

  const [err, setErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (err) => {
          setErr(true);
          setErrMsg(err.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL
            })
            await setDoc(doc(db,"users", res.user.uid),{
              uid:res.user.uid,
              displayName,
              email,
              photoURL:downloadURL
            })
            await setDoc(doc(db,"userChats",res.user.uid),{})
          }); 
        }
      );
      navigate('/login')
    } catch (err) {
      setErr(true);
      setErrMsg(err.message)
    }
  }

  return (
    <div className="p-5 mx-auto">
      <div className="container mx-auto my-14 w-[400px] border border-gray-300 bg-white rounded-sm">
        <div className="p-5 space-y-5 shadow-xl">
          <div>
          <h4 className="text-3xl font-bold text-[#1c1e21]">Sign Up</h4>
          <p>It’s quick and easy.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 ">
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Display Name"
              />

              <input
                type="email"
                className="border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Email"
              />

              <input
                type="password"
                className="border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Password"
              />

              <input type="file" id="file" className="hidden"/>

              <label htmlFor="file" className="w-fit">
                <img
                  className="h-16 cursor-grab"
                  src={require("../images/add--img.png")}
                  alt=""
                ></img>
              </label>
            </div>
            <div className="flex justify-center">
            <input
              type="submit"
              value="Sign Up"
              className="cursor-pointer mt-5 bg-[#00a400] px-4 py-1 text-white font-bold w-[220px] text-lg rounded-md"
            />
            </div>
            

            <p className="mx-16 pt-2">You do have an account? <Link to="/login">Login</Link></p>
          </form>
          {err && alert(errMsg)}
        </div>
      </div>
    </div>
  );
}
