import axios from "axios";

 export default async function BlogPage({params}: any) {
   const postId = params.blogId;
   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
   const data = res.data;

  return (
    <div>
      Title - {data.title}
        <br />
        Description - {data.body}
    </div>
  )
}

