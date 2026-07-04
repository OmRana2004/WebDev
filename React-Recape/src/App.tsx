import { useState } from "react";
import PostComp from "./Card";
import Counter from "./Counter"
import Watch from "./Watch"

export default function App() {
  const [posts, setPosts] = useState<{ id: number  }[]>([]);

  function addPost() {
    setPosts([...posts, { id: Date.now() }]);
  }

  return (
    <div>
      <div className="flex grid-rows-4 grid-cols-4 items-center gap-4 p-2">
      <button
        onClick={addPost}
        className="p-2 rounded-xl bg-cyan-300"
      >
        Add Post
      </button>

      {posts.map((_post, index) => {
        return <PostComp key={index} />;
      })}
    </div>
<div className="px-8  flex items-center  gap-4 mask-top">
  <Counter />
  <Watch />
</div>
    </div>
  );
}