import React, { useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { Link as ScrollLink } from 'react-scroll';

function Contact({ btnhide, closeModal, isLightMode, toggleMode }) {
  const handleToggleAndClose = () => {
    toggleMode(); // Toggle mode
    closeModal(); // Close modal
  };
  return (
    <div>
      <div className={`${btnhide ? 'hidden lg:block' : 'block pt-10'}`}>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-8'>
          <ScrollLink
            activeClass='active'
            to='contactme'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={closeModal}
          >
            <button className='transition-all duration-[600ms] ease-in-out border-2 border-secondary hover:border-secondary hover:text-secondary px-4 rounded-full'>
              Contact me
            </button>
          </ScrollLink>

          <div
            className='flex items-center gap-2 border-2 border-secondary p-2 rounded-full cursor-pointer'
            onClick={handleToggleAndClose}
          >
            <BsMoonStarsFill fill='#ffaa05' size='20' />

            <div
              className={`h-8 w-8 rounded-full ${
                isLightMode ? 'bg-secondary' : 'bg-secondary'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
