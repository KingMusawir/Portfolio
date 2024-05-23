import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

const NavigationLink = ({ children, to, label, onClick }) => {
  return (
    <ScrollLink
      activeClass='active'
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
      onClick={onClick}
      className='flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 text-4xl'
    >
      {children}
      <p className='text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide'>
        {label}
      </p>
    </ScrollLink>
  );
};

export default NavigationLink;
