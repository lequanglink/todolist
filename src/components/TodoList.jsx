import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, updateTodo, editIndex, editText, setEditText }) => {
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {editIndex === index ? (
            <>
              <input type="text" value={editText} onChange={handleEditChange} />
              <button onClick={() => updateTodo(index, editText)}>Update</button>
            </>
          ) : (
            <>
              <span onClick={() => toggleTodo(index)}>{todo.text}</span>
              <button onClick={() => editTodo(index, todo.text)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
