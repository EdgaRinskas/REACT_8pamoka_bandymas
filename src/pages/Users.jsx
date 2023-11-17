// src/pages/Users.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <div>
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
