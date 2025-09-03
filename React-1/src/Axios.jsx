import { useEffect, useState } from "react"
import axios from "axios";

function Todo() {
const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(res =>{
            setTodos (res.data)
        })
    }, [])

    return(
        <div>
            <h2>Todos Data: </h2>
            <ol>
                {todos.map(todo => {
            return <li key={todo.id} >
                {todo.title}</li>
        })}
            </ol>

        

        </div>
    )
}

export default Todo;