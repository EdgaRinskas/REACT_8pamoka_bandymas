// src/pages/Todos.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TodoTable from '../components/TodoTable';
import { useTheme } from '../ThemeContext'; // Add this line
import './Todos.css';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { theme } = useTheme(); // Add this line

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="todos-container" style={{ color: theme.textColor, backgroundColor: theme.backgroundColor }}>
      <h1>Todos</h1>
      <Link to="/todos/new">Add New Todo</Link>
      <TodoTable todos={todos} />
    </div>
  );
};

export default Todos;
