import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
<<<<<<< HEAD
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=>}>Increase Value</button>
        </div>
    )
}
=======

    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=> setCount(count+1)}>Increase Value</button>
            <button onClick={()=> setCount(count-1)}>Decereese Value</button>
        </div>
    )
}

export default Counter;
>>>>>>> 4ea699b0bf3d19f4b42173b714b078b004fdbb3b
