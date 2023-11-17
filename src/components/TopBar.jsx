// src/components/TopBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css'; // Import the CSS file

const TopBar = () => {
  return (
    <nav className="topbar full-width"> {/* Add the "full-width" class */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/todos">Todos</Link></li>
      </ul>
    </nav>
  );
};

export default TopBar;
