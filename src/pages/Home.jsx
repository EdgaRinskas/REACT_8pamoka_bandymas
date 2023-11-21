// src/pages/Home.jsx
import React, { useContext } from 'react';
import { useTheme } from '../ThemeContext';
import './Home.css'; // Import the CSS file

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="home-container" style={{ color: theme.homeContainerTextColor, backgroundColor: theme.homeContainerBackgroundColor }}>
      <h2>Welcome to the Home Page!</h2>
      <p>This is a simple React application demonstrating routing and API data fetching.</p>
      <p>Feel free to explore the Users and Todos sections using the navigation bar above.</p>
    </div>
  );
};

export default Home;
