import { useState } from "react";


function Counter() {
  const [count, setCount] = useState (0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button
      style={{
        backgroundColor: "lightgreen",
        color: "white",
        borderRadius: "50px",
        padding: "10px 20px",
        margin: "20px",
        cursor: "pointer"
      }}
       onClick={() => setCount (count+1)}>
        Increase
       </button>
      <button onClick={() => setCount (count > 0 ? count-1 : 0)}>Decrese</button>

    </div>
  )
}

  
  export default Counter;