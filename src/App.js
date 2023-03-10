
import { Form } from './components/Form'
import { Todolist } from './components/Todolist'
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState('todas')

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completadas':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'pendientes':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
  
    };

    const saveLocalTodos = () =>{
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    filterHandler();
     saveLocalTodos();
     

  }, [todos, status]);



  /*const filterHandler = () => {
    switch (status) {
      case 'completadas':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'pendientes':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

  };*/
  
  //Guardar en LocalStorage
  /*const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos));
  };*/

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse (localStorage.getItem('todos'))
      setTodos(todoLocal);
    }

  };

  


  return (
    <div className='App'>
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos} />

    </div>
  )
}

export default App