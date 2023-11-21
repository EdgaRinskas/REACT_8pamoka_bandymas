// src/components/Footer.jsx
import React from 'react';
import { useTheme } from '../ThemeContext'; // Add this line
import './Footer.css';

const Footer = () => {
  const { theme } = useTheme(); // Add this line

  return (
    <footer className="footer" style={{ backgroundColor: theme.footerBackgroundColor, color: theme.textColor }}>
      <p>&copy; 2023 Your Company</p>
    </footer>
  );
};

export default Footer;
