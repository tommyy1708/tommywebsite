import React, {useEffect, createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [myTheme, setMyTheme] = useState(() => {
      const savedTheme = localStorage.getItem('myTheme');
      return savedTheme !== null ? JSON.parse(savedTheme) : false;
    });


  useEffect(() => {
     localStorage.setItem('myTheme', JSON.stringify(myTheme));
  }, [myTheme]);

  function themeChange() {
    setMyTheme((prevTheme) => !prevTheme);
  }

  const useProviderValues = {
    myTheme,
    setMyTheme,
    themeChange,
  };


  return (
    <ThemeContext.Provider value={useProviderValues}>
      {children}
    </ThemeContext.Provider>
  );
};
