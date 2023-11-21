// src/components/ThemeButton.jsx
import React from 'react';
import { useTheme, themes } from '../ThemeContext'; // Add this line

const ThemeButton = () => {
  const { theme, toggleTheme, setDarkTheme, setLightTheme } = useTheme();

  const handleButtonClick = () => {
    toggleTheme();
    theme === themes.light ? setDarkTheme() : setLightTheme();
  };

  return (
    <button className="themeButton" onClick={handleButtonClick}>
      {theme === themes.light ? (
        <i className={`ci/${theme.sunIcon}`} />
      ) : (
        <i className={`fa/${theme.moonIcon}`} />
      )}
    </button>
  );
};

export default ThemeButton;
