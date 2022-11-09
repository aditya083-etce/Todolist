import React from 'react'

const Form = ({ setinputText, inputText, setTodos, todos, setFilter}) => {
    function handleChange(e) {
        setinputText(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                text: inputText,
                completed: false,
                id: Math.random() * 100
            }
        ]);
        setinputText('');
    }

    function handleChangeFilter(e) {
        setFilter(e.target.value)
    }

    return (
        <div>
            <form>
                <input value={inputText} onChange={handleChange} type="text" className="todo-input"/>
                <button onClick={handleClick} className="todo-button" type="submit">
                <i className='fa-light fa-plus'></i></button>
                <div className="select">
                    <select onChange={handleChangeFilter} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;
