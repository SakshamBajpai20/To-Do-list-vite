import React, { useState } from 'react';
import './ToDoItem.css';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="button-group">
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? '✅' : '⭕'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
