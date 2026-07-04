import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(1);
  const [start, setStart] = useState(false);

  const watch = () => {
    setCount((currvlu) => currvlu + 1);
  };

  useEffect(() => {
    if (!start) return;
    const id = setInterval(watch, 1000);

    return () => {
      clearInterval(id);
    };
  }, [start]);

  return (
    <div className="flex min-h-screen items-center justify-center text-white font-sans p-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-700/50 p-8 shadow-xl backdrop-blur-md text-center">
        
        {/* Count Display */}
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-2">
            Current Count
          </p>
          <p className="text-6xl font-black tracking-tight text-indigo-400 tabular-nums">
            {count}
          </p>
        </div>

        {/* Controls Layout */}
        <div className="flex gap-4 justify-center text-lg font-medium">
          <button 
            disabled={start}
            onClick={() => setStart(true)}
            className="flex-1 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-600/20 active:scale-95 cursor-pointer"
          >
            Start
          </button>  
          
          <button 
            disabled={!start}
            onClick={() => setStart(false)}
            className="flex-1 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-40 disabled:hover:bg-rose-600 transition-all shadow-lg shadow-rose-600/20 active:scale-95 cursor-pointer"
          >
            Stop
          </button>  
        </div>

      </div>
    </div>
  );
}

export default Count;