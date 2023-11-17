// src/pages/Todo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = ({ match }) => {
  const [todo, setTodo] = useState(null);
  const todoId = match.params.id;

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        setTodo(response.data);
      } catch (error) {
        console.error('Error fetching todo data:', error);
      }
    };

    fetchTodo();
  }, [todoId]);

  return (
    <div>
      <h2>Todo Details</h2>
      {todo && (
        <div>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          {/* Add more todo details as needed */}
        </div>
      )}
    </div>
  );
};

export default Todo;
