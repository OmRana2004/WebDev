import { useState } from "react"

const Counter = ()=> {
  const [count, setCount] = useState(0);
  return(
    <div>
        <h1>Count:{count}</h1>

        <button onClick={() => setCount (count +1)}>Increase</button>
        <button onClick={() => setCount (count > 0 ? count -1 : 0)}>Decrease</button>
        <input type="text" />
    </div>
  )
}

export default Counter;