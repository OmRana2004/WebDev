import axios from "axios";
import { useEffect, useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);

    useEffect(() =>{

        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            setTodos = res.data
        })
    }, [])
    return(
            <div>
                <h1>TODOS: </h1>
                <ol>
                    {todos.map (todo => {
                        return <li>{todo.title}</li>
                    })}
                </ol>
            </div>

    )
}

export default Todo;