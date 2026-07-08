import { useState } from "react"
import Prop from "./Props"

export default function PostCard({children}: {children: React.ReactNode}) {
  // ✅ FIXED: Move state inside the component function
  // ✅ FIXED: Changed string "true" to a real boolean true
  const [toggel, setToggel] = useState(true)
  const [isDark, setIsDark] = useState(false)
  const [count, setCount] = useState(0)


  return(
    <div >
      {children}
      <div className={`p-4 rounded-2xl flex gap-4 w-72 justify-between items-center ${
        isDark
        ? "bg-gray-900 text-white"
        : "bg-amber-400 text-black"
      }`}>
        {/* Conditional Rendering */}
        {toggel && (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkc7N6zMrHurqmJOSina8edatLCG0LWrcOSt9Yk8KXgg&s=10" 
            alt="100x" 
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        
        {/* Text Container */}
        <div>
          <h2 className="font-bold text-lg">100x devs</h2>
          <p className="text-sm mb-2">{toggel ? "this is a card with image": "this is a card without image"}</p>
          <button 
            className="bg-red-600 text-white px-3 py-1 rounded-xl" 
            onClick={() => setToggel(!toggel)}
          >
            {/* Dynamic button text */}
            {toggel ? "Hide Image" : "Show Image"}
          </button>
          
          <button className="bg-blue-600 text-white px-3 py-1 rounded-xl"
          onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>

        <p>count: {count}</p>
          <button onClick={() => setCount(count+1)} className="bg-gray-400 p-2 rounded-lg">ADD</button>

          <button onClick={() => setCount(count-1)}>Sub</button>
          <p>Count: {count}</p>
        </div>
      </div>

        <Prop command="Yes Sir"/>
        <Prop command="Hi Sir"/>

      </div>
  )
}
