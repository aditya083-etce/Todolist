import React from 'react'

const ToDo = ({ todo, todos, setTodos }) => {

    function deleteHandler () {
        setTodos(todos.filter(ele => ele.id !== todo.id))
    }

    function completeHandler () {
        setTodos(todos.map(ele => {
            if (ele.id === todo.id) {
                return {...ele, completed: !ele.completed};
            }
            return ele;
        }))
    }

    return (
      <div className={`todo ${todo.completed ? "completed" : ""}`}>
          <li className="todo-list">{ todo.text }</li>
          <button onClick={completeHandler} className="complete-btn"><i className='fas fa-check'></i></button>
          <button onClick={deleteHandler} className="trash-btn"><i className='fas fa-trash'></i></button>
      </div>
    )
}

const Todolist = ({ todos, setTodos, filteredtodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredtodos.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                )})
            }
            </ul>
        </div>
    )
}

export default Todolist;
