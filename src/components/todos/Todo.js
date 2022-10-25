import React from 'react';

const Todo = ({todo, delete:deleteTodo}) => {
  return (
   <li>
    <span>{todo.text}</span>
    <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
   </li>
  );
};

export default Todo;