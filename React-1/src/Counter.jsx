import { useState } from "react";

function Counter() {
    // 1️⃣ count naam ka ek state banaya jisme initial value 0 hai.
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
        </div>
    )
}

export default Counter;