
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState(["hi there", "how are you?"]);

  useEffect(() => {
    const ws = new WebSocket('http://localhost:3000');
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data]);
    }
  }, []);
   
  return (
    <div  className='h-screen bg-black '>
      <div className='h-[95vh]'>
        {messages.map(message => <div>{message} </div>)}
      </div>
      <div className='w-full bg-white flex p-4'>
        <input className='flex-1'></input>
        <button className='bg-purple-600 text-white p-4'>
          Send Message
        </button>
      </div>
    </div>
  )
}

export default App;