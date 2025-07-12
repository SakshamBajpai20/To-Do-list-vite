import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;

