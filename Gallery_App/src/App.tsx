import { useEffect, useState } from "react";
import axios from "axios";

interface ImageData {
  id: string;
  author: string;
  download_url: string;
}

function App() {
  const [data, setData] = useState<ImageData[]>([]);

  const getData = async () => {
    const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
    setData(res.data)
  } ;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button
        onClick={getData}
        className="bg-green-400 flex p-2 m-2 rounded-lg"
      >
        Get Data
      </button>

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
    </div>
  );
}

export default App;