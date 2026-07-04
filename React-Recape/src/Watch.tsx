import { useEffect, useState } from "react"

export default function Watch() {

const [count, setCount] = useState (1)

 const watch = () => {
    setCount((currvlu) => currvlu +1);
        }

useEffect(() => {
    setInterval(watch, 1000)
}, [])

    return( 
        <div>
  <span className="font-extraboldu bg-red-400">WATCH- </span>
  <span className="text-4xl m-4">
  {count}
  </span>
  </div>
    )
}