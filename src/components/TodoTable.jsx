import React from 'react';
import PropTypes from 'prop-types';

const TodoTable = ({ todos }) => {
  return (
    <table>
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
