import {v4 as uuidv4} from 'uuid';

 export const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
    const inputTextHandler= (e) =>{
        setInputText(e.target.value)
         
    }

    const submitTodoHandler = (e)=>{
        e.preventDefault();
        let newTodo={id:uuidv4(), text: inputText, completed: false}
        setTodos([...todos, newTodo]);

        setInputText('');
    }
    
    const statusHandler=(e) => {
     setStatus(e.target.value)
    }

  return (
    <div>
     <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="pendientes">Pendientes</option>
        </select>
      </div>
    </form>

    </div>
  )
}



