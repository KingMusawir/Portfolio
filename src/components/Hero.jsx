import React from 'react';
import '../index.css';
import FilePath from '../assets/resume.pdf';
import { Link as ScrollLink } from 'react-scroll';

import Textcontainer from './Textcontainer';
import Intro from './Intro';
import Button from './Button';
import KeyMouse from './KeyMouse';
import Profile from './Profile';

function Hero() {
  const specialWords = ['React', 'Tailwind', 'web'];
  const specialStyle = { color: 'yellow', fontWeight: 'bold' };
  return (
    <div>
      <div className='pt-40 text-center flex items-center justify-center flex-col gap-4 md:gap-6'>
        <Profile />
        <Intro />
        <Textcontainer
          text='Proficient in ReactJs and Tailwind CSS, I leverage innovative approaches
          to build compelling web applications.'
          speed={100}
          specialWords={specialWords}
          specialStyle={specialStyle}
        />

        <div className='flex items-center gap-8 font-semibold '>
          <ScrollLink
            activeClass='active'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button bg={true}>See my Dev work</Button>
          </ScrollLink>

          <Button>
            <a
              href={FilePath}
              download
              className=' text-[1.8rem] hover:text-[#fff] border-b-2 '
            >
              Download Resume
            </a>
          </Button>
        </div>
        <KeyMouse />
      </div>
    </div>
  );
}

export default Hero;
