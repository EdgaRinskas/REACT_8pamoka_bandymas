// src/components/TodoTable.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../ThemeContext'; // Add this line
import './TodoTable.css';

const TodoTable = ({ todos }) => {
  const { theme } = useTheme(); // Add this line

  return (
    <table className="todo-table" style={{ color: theme.textColor, backgroundColor: theme.backgroundColor }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            {/* Add more table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // Add more prop types as needed
    })
  ).isRequired,
};

export default TodoTable;
