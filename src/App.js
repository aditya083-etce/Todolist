import { useState, useEffect } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Form from './components/Form';

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredtodos, setFilteredTodos] = useState([]);

  
  function filterHandler() {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
        setFilteredTodos(todos);
        break;
      }
    }
    
    //Save to local
    function saveToLocalStorage() {
      if (todos.length > 0) {
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    }
    
  function getFromLocalStorage() {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  }
  
  useEffect(() => {
    getFromLocalStorage();
  },[])
  
  useEffect(() => {
    filterHandler();
    saveToLocalStorage();
  }, [todos, filter])
  
  return (
    <div className="App">
      <header> <h1>To Do List</h1> </header>
      <Form
        inputText={inputText}
        setinputText={setinputText}
        todos={todos} setTodos={setTodos}
        setFilter={setFilter} />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        filteredtodos={filteredtodos} />
    </div>
  );
}

export default App;
