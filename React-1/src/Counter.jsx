import { useState } from "react";

function Counter() {
    // Initilazing A useState
    const [count, setCount] = useState(0);// It is State
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>Increase Count</button>
        </div>
    )
}

export default Counter;