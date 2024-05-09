import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProgLan from '../components/ProgLan';
import Projects from '../components/Projects';
import Form from '../components/Form';

function Home({ isLightMode }) {
  console.log('isLightMode in Home:', isLightMode); // Log isLightMode
  return (
    <div>
      <Hero />
      <Skills />
      <ProgLan isLightMode={isLightMode} />
      <Projects />
      <Form />
    </div>
  );
}

export default Home;
