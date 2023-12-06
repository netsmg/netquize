import React from 'react';
import {ChatBox } from '../components';


import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div className="Chat">
      
      {!user ? (
        
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}


export default Chat;
