import React from 'react';

function Button({ children, bg }) {
  return (
    <div
      className={`transition-all duration-[500ms] ease-in-out text-[1.8rem] hover:text-primary ${
        bg ? 'bg-[#966725a9]' : ''
      } hover:bg-secondary p-6 rounded-full cursor-pointer `}
    >
      {children}
    </div>
  );
}

export default Button;
