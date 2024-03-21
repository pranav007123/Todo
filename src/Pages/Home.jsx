import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from '../Redux/Slices/todoSlice';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(
        addTodo({
          id: Date.now(),
          text: inputValue,
          completed: false,
        })
      );
      setInputValue('');
    }
  };

  const handleToggleComplete = id => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div>
      <h1 style={{ margin: '30px' }} className='text-bold'>TODO APP</h1>
      <input style={{ margin: '10px', borderRadius: '5px', width: '250px' }} type="text" value={inputValue} onChange={handleInputChange} />
      <button className='btn btn-primary' onClick={handleAddTodo}>Add Todo</button>
      <p>Completed Todos: {completedTodosCount}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className='d-flex justify-content-between' style={{backgroundColor: todo.completed ? 'lightgreen' : 'white'}}>
            <div>
              <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} />
              <span style={{ textDecoration: todo.completed ? 'none' : 'none' }}>
                {todo.text}
              </span>
            </div>
            <button className='btn btn-info ms-1' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
