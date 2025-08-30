import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      br  
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
