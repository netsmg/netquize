import React from 'react';
import {ChatBox } from '../components';


import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

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
