import React from 'react'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";


export default function Message({ message }) {

  //let type = "sent"
  let type = "received"
  const { currentUser } = React.useContext(AuthContext);
  const { data } = React.useContext(ChatContext);

  const ref = React.useRef();

  React.useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  
  //console.log(new Date(new Date(0).setUTCSeconds(message.date)))

  const d = message.date.toDate();
  console.log(d)

  return (
    <div ref={ref} className={message.senderId === currentUser.uid ?
      'flex flex-row-reverse gap-1 p-1 md:mr-4 mr-1' :
      'flex flex-row gap-1 p-1'}>

      <div className="py-2">
        <img
          className="h-[40px] w-[40px] rounded-3xl ml-1"
          src={message.senderId === currentUser.uid
            ? currentUser.photoURL
            : data.user.photoURL}
          alt=""
        />
        <div className='text-xs text-gray-500'></div>
      </div>

      <div className='py-3 mx-1'>

        <div className={message.senderId === currentUser.uid ? 'p-1 bg-[#0084FF] rounded-md w-fit text-white'
          : 'p-1 bg-gray-100 rounded-md w-fit'}>{message.text}</div>
        {message.img && <img
          className="h-[120px] w-[120px] mt-1 rounded-sm overflow-hidden"
          src={message.img}
          alt=""
        />}
      </div>

    </div>
  )
}
