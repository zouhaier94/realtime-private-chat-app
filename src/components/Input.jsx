import React from 'react'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {arrayUnion, doc, serverTimestamp, Timestamp, updateDoc,} from "firebase/firestore";
import { db, storage } from "../Firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default function Input() {

  const [text, setText] = React.useState("");
  const [img, setImg] = React.useState(null);

  const { currentUser } = React.useContext(AuthContext);
  const { data } = React.useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className='h-[50px] bg-white p-1 flex border-t'>

      <input 
      className="lg:w-[450px] md:w-[410px] w-[180px] outline-none placeholder-gray-300" 
      type="text" 
      placeholder='Type something...' 
      onChange={(e) => setText(e.target.value)}
      value={text}
      ></input>


      <input  type="file" className='hidden' id="file" onChange={(e) => setImg(e.target.files[0])}/>
      <label  className="mt-1 mr-1 cursor-grab" htmlFor='file'>
      <img src={require('../images/img.png')} alt="" />
      </label>

      <button 
      className='bg-[#006AFF] text-white rounded-md m-1 px-2 py-1 text-md'
      onClick={handleSend}
      >Send</button>
    </div>
  )
}
