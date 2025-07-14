import './App.css'
import { useState, useRef } from 'react';

function App (){
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  const startClock = () => {
    let value = setInterval(() =>{setCurrentCount(c => c+1) }, 1000);
    timer.current = value;
  }

  const stopClock = () => {
    clearInterval(timer.current);
  }
  
  return (
    <div>
      {currentCount}
      <br />
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default App;