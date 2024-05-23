import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { BsMoonStarsFill } from 'react-icons/bs';

function ThemeButton({ closeModal }) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className='flex items-center gap-2 border-2 border-secondary p-2 rounded-full cursor-pointer'
      onClick={() => {
        toggleTheme();
        closeModal();
      }}
    >
      <BsMoonStarsFill fill='#ffaa05' size='20' />

      <div className={`h-8 w-8 rounded-full  'bg-secondary`}></div>
    </div>
  );
}

export default ThemeButton;
