// src/ThemeContext.js
import { createContext, useContext, useState } from 'react';

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
    moonIcon: 'FaRegMoon', // Assuming 'FaRegMoon' is the correct class for Font Awesome moon icon
    sunIcon: 'FaRegSun', // Assuming 'FaRegSun' is the correct class for Font Awesome sun icon
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
    moonIcon: 'FaRegMoon',
    sunIcon: 'FaRegSun',
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
