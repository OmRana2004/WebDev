import { useEffect, useState } from "react";
import "./App.css";

const useDebounce = (value, delay) =>{
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect (()=> {
    const handler = setTimeout(() =>{
      setDebouncedValue(value);
    }, delay);
    return () =>{
      clearTimeout(handler);
    }
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200)

  function change(e) {
    setInputVal(e.target.value)
  }

  useEffect(() =>{
    console.log("expemsive operation");
  }, [debouncedValue])

  return(
   <>
   <input id="input" type="text" onChange={change}/>
   </>
  )
}

export default App;
