import React, { useEffect } from 'react';

import Keyboard from '../assets/keyboard.png';
import Mouse from '../assets/mouse.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function KeyMouse() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);

  return (
    <div className='transition-all duration-[600ms] ease-in-out flex gap-20 mt-36 opacity-30 hover:opacity-80'>
      <img src={Keyboard} alt='' data-aos='fade-left' />
      <img
        src={Mouse}
        alt=''
        className=' hidden lg:inline-block w-72'
        data-aos='fade-right'
      />
    </div>
  );
}

export default KeyMouse;
