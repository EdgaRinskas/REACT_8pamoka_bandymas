// ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

export const themes = {
  light: {
    textColor: 'black',
    backgroundColor: 'white',
    buttonColor: 'white',
    buttonOutline: 'none',
    topbarTextColor: 'black',
    topbarBackgroundColor: 'gray',
    homeContainerTextColor: 'gray',
    homeContainerBackgroundColor: 'black',
    footerBackgroundColor: 'gray',
    moonIcon: <FaRegMoon size={20} color="gray" />,
    sunIcon: <FaRegSun size={20} color="yellow" />,
  },
  dark: {
    textColor: 'white',
    backgroundColor: 'black',
    buttonColor: 'black',
    buttonOutline: '2px solid white',
    topbarTextColor: 'black',
    topbarBackgroundColor: 'gray',
    homeContainerTextColor: 'gray',
    homeContainerBackgroundColor: 'black',
    footerBackgroundColor: 'gray',
    moonIcon: <FaRegMoon size={20} color="gray" />,
    sunIcon: <FaRegSun size={20} color="yellow" />,
  },
};

export const ThemeContext = createContext(themes.light);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  const setDarkTheme = () => {
    setTheme(themes.dark);
  };

  const setLightTheme = () => {
    setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
