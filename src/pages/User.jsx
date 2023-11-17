// src/pages/User.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = ({ match }) => {
  const [user, setUser] = useState(null);
  const userId = match.params.id;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default User;
