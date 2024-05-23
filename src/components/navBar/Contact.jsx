import React, { useContext } from 'react';
import { NavContext } from '../../contexts/NavContext';

import { Link as ScrollLink } from 'react-scroll';
import ThemeButton from './ThemeButton';

function Contact({ btnhide, color }) {
  const { closeModal } = useContext(NavContext);
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
            <button
              className={`transition-all duration-[600ms] ease-in-out border-2 border-secondary hover:border-secondary hover:text-secondary px-4 rounded-full ${
                color ? 'text-[#7e7e7e]' : ''
              } `}
            >
              Contact me
            </button>
          </ScrollLink>
          <ThemeButton closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
