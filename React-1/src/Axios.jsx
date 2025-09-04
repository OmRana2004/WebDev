import { useEffect, useState } from "react"
import axios from "axios";

function Todo() {
const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            setTodos(res.data)
        })
    })

    return(
        <div>
            <h2>Todos Data: </h2>
            <ul>
                {todos.map (todo => {
                   return <li>{todo.title}</li>
                })}
            </ul>
        

        </div>
    )
}

export default Todo;