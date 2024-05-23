// App.jsx
import React from 'react';
import NavBar from './components/navBar/NavBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './page/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavProvider } from './contexts/NavContext';

function App() {
  return (
    <ThemeProvider>
      <NavProvider>
        <NavBar />
        <Home />
        <ScrollToTop />
      </NavProvider>
    </ThemeProvider>
  );
}

export default App;
