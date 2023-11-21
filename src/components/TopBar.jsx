// src/components/TopBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { useTheme, themes } from '../ThemeContext';
import './TopBar.css';

const TopBar = () => {
  const { theme } = useTheme();

  return (
    <nav
      className={`topbar ${theme === themes.dark ? 'dark-mode' : ''}`}
      style={{ color: theme.topbarTextColor, backgroundColor: theme.topbarBackgroundColor }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
