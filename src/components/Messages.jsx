import { onSnapshot, doc } from 'firebase/firestore';
import React from 'react'
import Message from '../components/Message'
import { ChatContext } from "../context/ChatContext";
import { db } from '../Firebase';


export default function Messages() {

  const [messages, setMessages] = React.useState([]);
  const { data } = React.useContext(ChatContext);

  React.useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);


  return (
    <div className='bg-white p-1 md:h-[500px] h-[400px] overflow-y-scroll '>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}

    </div>
  )
}
