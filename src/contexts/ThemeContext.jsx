import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [iconColor, setIconColor] = useState('black');

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  useEffect(() => {
    document.body.className = theme;
    if (theme === 'dark') setIconColor('#fff');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, iconColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
