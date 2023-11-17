// src/pages/Todos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoTable from '../components/TodoTable';
import './Todos.css' 
const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todo data:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <TodoTable todos={todos} />
    </div>
  );
};

export default Todos;
