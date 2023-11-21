// src/pages/User.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // Add this line
import './User.css';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { theme } = useTheme(); // Add this line

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="user-container" style={{ color: theme.textColor, backgroundColor: theme.backgroundColor }}>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Additional user details go here */}
    </div>
  );
};

export default User;
