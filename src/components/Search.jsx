import React from "react";
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc,serverTimestamp } from "firebase/firestore";
import {db} from "../Firebase"
import { AuthContext } from "../context/AuthContext";

export default function Search() {

  const [username, setUsername] = React.useState("")
  const [user, setUser] = React.useState(null)
 
  const handleSearch = async () => {

  const q = query(collection(db,"users"),where("displayName","==", username));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {setUser(doc.data())});
  };

  const handleKey = (e) =>{e.code === "Enter" && handleSearch();}

  const {currentUser} = React.useContext(AuthContext)

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    
    const combinedId = currentUser.uid > user.uid ? 
                        currentUser.uid + user.uid: 
                        user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db,"chats",combinedId))
      if(!res.exists()){
        // creat a chat in chats collection
        await setDoc(doc(db,"chats",combinedId),{messages:[]})

        // create user chats 
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

      }
    } catch (err) {}
    
    setUser(null)
    setUsername("")
  }

  return (
    <div className="h-auto flex flex-col border-b border-gray-300  pl-2">

      <div className="py-1 px-2">
        <input
          className=" basis-1/5 bg-transparent text-black rounded-sm placeholder-gray-300 outline-none "
          placeholder="Find a User"
          onChange={e => setUsername(e.target.value)}
          onKeyDown={handleKey}
          value={username}
        />
      </div>

      { user &&
      <div 
      className="basis-4/5 flex space-x-2 m-1 hover:bg-gray-100 cursor-pointer py-2 px-2"
      onClick={handleSelect}
      >
        <img
          className="h-[30px] w-[30px] rounded-3xl"
          src={user.photoURL}
          alt=""
        />
        <div className="text-gray-500 font-medium pt-1">{user.displayName}</div>
      </div>
      }
    </div>
  );
}
