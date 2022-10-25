import React, { useEffect } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase';
import { AuthContext } from "../context/AuthContext";

export default function Chats() {

  const [chats, setChats] = React.useState([])

  const { currentUser } = React.useContext(AuthContext)


  useEffect(() => {

    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      });
      return () => { unsub() }
    }

    currentUser.uid && getChats()
  }, [currentUser.uid])

  console.log(Object.entries(chats))

  return (
    <div>

      {Object.entries(chats)?.map((chat) => (


        <div key={chat[0]} className='border-y border-[#2f2d52de] hover:bg-[#2f2d52] cursor-pointer'>
          <div className="flex space-x-2 m-2">
            <img
              className="h-[40px] w-[40px] rounded-3xl"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div>
              <div className="text-[#ddddf7] font-semibold">{chat[1].userInfo.displayName}</div>
              <div className="text-[#ddddf7] text-sm">{chat[1].userInfo.lastMessage?.text}</div>
            </div>
          </div>
        </div>
      ))}



    </div>

  )
}
