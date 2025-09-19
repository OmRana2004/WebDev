import axios from "axios";
import { useEffect } from "react";

// async function getBlogs() {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
//     return response.data;
// }


async function getBlogs() {
    const res = await
    axios.get ("https://jsonplaceholder.typicode.com/todos/");
    return res.data;
}

export default async function Blogs() {

    const blogs = await getBlogs();

    return <div>
        {blogs.map((blog: ITodo, idx: number) => (
            <Todo key={idx} title={blog.title} completed={blog.completed} />
        ))}
    </div>
}

interface ITodo {
    title: string;
    completed: boolean;
}

function Todo({title, completed}: ITodo) {
    return <div>
        {title}{completed ? "done!" : "not done"}
    </div>
}