import "./todo.css"
import TodoItems from "./todoItems/TodoItems";

function Todo() {
  return (
    <div className="todo-container">
      <ol>
        <TodoItems />
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </ol>
    </div>
  );
}

export default Todo;
