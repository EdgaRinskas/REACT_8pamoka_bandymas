// src/components/UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserCard;
