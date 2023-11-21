// src/components/UserCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../ThemeContext'; // Add this line
import './UserCard.css';

const UserCard = ({ user }) => {
  const { theme } = useTheme(); // Add this line

  return (
    <div className="user-card" style={{ color: theme.textColor, backgroundColor: theme.backgroundColor }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      {/* Additional user details go here */}
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // Add more prop types as needed
  }).isRequired,
};

export default UserCard;
