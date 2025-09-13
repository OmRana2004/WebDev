import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // store interval ID

  const Inc = () => {
    setCount((cv) => cv + 1);
  };

  const start = () => {
    if (intervalRef.current === null) {   // prevent multiple intervals
      intervalRef.current = setInterval(Inc, 1000);
    }
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stop(); // cleanup when component unmounts
  }, []);

  return (
    <div> 
      <h1>{count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default App;
