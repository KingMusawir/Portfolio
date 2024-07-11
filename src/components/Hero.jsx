import React from 'react';
import '../index.css';
import FilePath from '../assets/resume.pdf';

import Textcontainer from './Textcontainer';
import Intro from './Intro';
import Button from './Button';
import KeyMouse from './KeyMouse';

function Hero() {
  const specialWords = ['React', 'Tailwind', 'web'];
  const specialStyle = { color: 'yellow', fontWeight: 'bold' };
  return (
    <div>
      <div className='pt-40 text-center flex items-center justify-center flex-col gap-4 md:gap-6'>
        <Intro />
        <Textcontainer
          text='Proficient in ReactJs and Tailwind CSS, I leverage innovative approaches
          to build compelling web applications.'
          speed={100}
          specialWords={specialWords}
          specialStyle={specialStyle}
        />

        <div className='flex items-center gap-8 font-semibold '>
          <Button bg={true}>See my Dev work</Button>

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
