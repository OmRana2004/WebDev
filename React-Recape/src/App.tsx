import { useState } from "react";
import PostCard from "./Card";
import Counter from "./Counter"
import Watch from "./Watch"
import Child from "./Child";


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
        return <PostCard key={index} children={undefined} />;
      })}
    </div>

<div className="px-8  flex items-center  gap-4 mask-top">
  <Counter />
  <Watch />
</div>

      <div>
        <Child>
          <h1>Hello om</h1>
          <p>I am a Children</p>
        </Child>
      </div>
    </div>
  );
}