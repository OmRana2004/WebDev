import { useEffect, useState } from "react";
import axios from "axios";

interface ImageData {
  id: string;
  author: string;
  download_url: string;
}

function App() {
  const [data, setData] = useState<ImageData[]>([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    setData(res.data)
  } ;
    getData();
  }, [page]);

  return (
    <div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg bg-gray-800 p-2 shadow-lg">
            <img src= {image.download_url} 
            alt={image.author} 
            className="h-24 w-full object-cover rounded"
            />
            <p className="mt-0.5 text-center text-sm font-semibold text-gray-600 pb-3">{image.author}</p>
          </div>
        ))}
      </div>

      <div className="flex item center justify-between p-4">

        <button 
        disabled = {page === 1}
        onClick={() => setPage(page - 1)}
        className={`rounded-lg px-4 py-2 ${
           page === 1 
           ? "bg-amber-400 opacity-50 cursor-not-allowed"
           : "bg-amber-400 cursor-pointer"
          }`}>
          prev
          </button>

            <span className="font-bold text-lg">Page {page}</span>

        <button onClick={() => setPage(page + 1)}
        className="rounded-lg bg-amber-400 px-4 py-2 cursor-pointer">
          next
          </button>
      </div>
    </div>
  );
}

export default App;