import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState();

  function sendMessage() {
    if (!socket) {
      return;
    }
    // @ts-ignore
    socket.send("ping")
  }

 useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    
    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return (
    <div>
      <input type="text" placeholder='Message..' ></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App;

// To run this code, ensure you have a WebSocket server running on ws://localhost:8080.
// You can use a simple WebSocket server implementation in Node.js or any other language.
