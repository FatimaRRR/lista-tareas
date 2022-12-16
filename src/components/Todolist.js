import { Todo } from "./Todo"

export const Todolist = ({ todos, setTodos, filteredTodos }) => {
  return (

    <div className="todo-container">
      <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Todo 
        key={todo.id} 
        text={todo.text} 
        todo={todo}
        todos={todos} 
        setTodos={setTodos} />
      ))}
      </ul>
    </div>

  )
}

