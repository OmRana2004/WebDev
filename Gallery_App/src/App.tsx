import axios from "axios";
import { useState } from "react";

interface ImageData {
  id: string;
  download_url: string;
}

function App() {
  const [images, setImages] = useState<ImageData[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=30"
      );
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <button
        onClick={getData}
className="inline-flex items-center justify-center bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white"
      >
        Get data
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((elem) => (
          <img
            key={elem.id}
            src={elem.download_url}
            alt="random"
            className="w-full h-40 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}

export default App;