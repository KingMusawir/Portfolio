import React, { useEffect, useState } from 'react';
import '../index.css';
import FilePath from '../assets/resume.pdf';
import Keyboard from '../assets/keyboard.png';
import Mouse from '../assets/mouse.png';
import Textcontainer from './Textcontainer';

function Hero() {
  return (
    <div>
      <div className='pt-40 text-center flex items-center justify-center flex-col gap-4 md:gap-6'>
        <p className='text-[4.8rem] font-bold'>DEV abdulMUSAWIR</p>
        <p className='text-[1.4rem] md:text-[2.4rem] text-[#c1c1c1]'>
          {'{ JavaScript, React, Mui, Bootstrap, Tailwind CSS, Sass... }'}
        </p>
        <Textcontainer
          text='Proficient in React and Tailwind CSS, I leverage innovative approaches
          to build compelling web applications.'
        />

        <div className='flex items-center gap-8 font-semibold '>
          <button className='transition-all duration-[600ms] ease-in-out text-[1.8rem] hover:text-primary bg-[#966725a9] hover:bg-secondary p-6 rounded-full '>
            See my Dev work
          </button>
          <a
            href={FilePath}
            download
            className='transition-all duration-[600ms] ease-in-out text-[1.8rem] hover:text-secondary border-b-2 border-secondary'
          >
            Download Resume
          </a>
        </div>
        <div className='transition-all duration-[600ms] ease-in-out flex gap-20 mt-36 opacity-30 hover:opacity-80'>
          <img src={Keyboard} alt='' />
          <img src={Mouse} alt='' className=' hidden lg:inline-block w-72' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
