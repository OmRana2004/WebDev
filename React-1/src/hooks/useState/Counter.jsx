import { useState } from "react"

function Counter (){
  const [count, setCount] = useState(0);
  return (
    <div>

    <h1>Count: {count}</h1>

      <button onClick={() => setCount (count+1)}>INC</button>
      <button onClick={() => setCount (count-1)}>DES</button>

    </div>
  )
}

export default Counter;

// https://jsonplaceholder.typicode.com/posts




