import { useState } from "react"
import Child from "./Child"
import Card from "./Card"

export default function Counter() {

    const [count, setCount] = useState(0)

   const Inc = () => {
        setCount((pre) => pre+1)
    }
   const Des = () => {
        setCount((pre) => pre-1)
    }

    return (
        <div className="flex h-auto  items-center justify-center bg-amber-200 rounded-xl p-1.5 m-12">

         <button onClick={Inc} className="bg-amber-700 rounded-xl p-1 m-1.5">
                Add
            </button>
         <button onClick={Des} className="bg-amber-700 rounded-xl p-1 m-1.5">
                Sub
            </button>
            <p>Count: {count}</p>

                <Child>
                    <h1>I am a Children of Counter.</h1>
                </Child>

                <Card> 
                   <></>
                </Card>
       </div>
    )
}