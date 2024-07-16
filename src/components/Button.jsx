import React from 'react';

function Button({ children, bg, onClick }) {
  return (
    <button
      className={`transition-all duration-[500ms] ease-in-out text-[1.8rem] hover:text-primary cursor-pointer ${
        bg ? 'bg-[#966725a9]' : ''
      } hover:bg-secondary p-6 rounded-full cursor-pointer `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
