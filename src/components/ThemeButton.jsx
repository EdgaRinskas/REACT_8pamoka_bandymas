// src/components/ThemeButton.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';
import { themes } from '../ThemeContext'; // Add this line to import themes

const ThemeButton = () => {
  const { theme, toggleTheme, setDarkTheme, setLightTheme } = useTheme();

  const handleButtonClick = () => {
    toggleTheme();
    theme === themes.light ? setDarkTheme() : setLightTheme();
  };

  return (
    <button className="themeButton" onClick={handleButtonClick}>
      {theme === themes.light ? (
        <i className={`ci/${theme.sunIcon}`} /> // Assuming 'ci' is the correct class for your icons
      ) : (
        <i className={`fa/${theme.moonIcon}`} /> // Assuming 'fa' is the correct class for your icons
      )}
    </button>
  );
};

export default ThemeButton;
