import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=>}>Increase Value</button>
        </div>
    )
}