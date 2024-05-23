import React from 'react';

import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProgLan from '../components/ProgLan';
import Projects from '../components/Projects';
import Form from '../components/Form';

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <ProgLan />
      <Projects />
      <Form />
    </div>
  );
}

export default Home;
