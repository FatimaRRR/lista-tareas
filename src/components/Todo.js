

export const Todo = ({text, todos, todo, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    
    };

    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return todo;
        }));
    };
    

  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? 'completada' : ''} `} >{text}</li>
        <button onClick={completeHandler} className="complete-btn">
            <i class="fa-solid fa-list-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
            <i class="fa-solid fa-trash-can"></i>
        </button>
        
        
    </div>
  )
}



