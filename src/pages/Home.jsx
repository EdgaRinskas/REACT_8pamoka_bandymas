// src/pages/Home.jsx
import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h2>Puslapėlis skirtas pasibandymui!</h2>
      <p>Tai tik visai paprastas React'o app'sas demonstrating routing and API data fetching.</p>
      <p>Feel free to explore the Users and Todos sections using the navigation bar above.</p>
    </div>
  );
};

export default Home;
