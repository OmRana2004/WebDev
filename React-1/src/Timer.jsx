import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Clean up
  }, [isRunning]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{seconds} seconds elapsed</h2>
      <button onClick={() => setIsRunning(true)}>Start Timer</button>
    </div>
  );
}

export default Timer;
