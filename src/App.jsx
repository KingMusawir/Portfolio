// App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './page/Home';

function App({ isLightMode, toggleMode }) {
  console.log('isLightMode in App:', isLightMode);
  return (
    <div>
      <NavBar isLightMode={isLightMode} toggleMode={toggleMode} />
      <Home isLightMode={isLightMode} />
      <ScrollToTop />
    </div>
  );
}

export default App;
