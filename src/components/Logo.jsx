import React from 'react';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';

function Logo() {
  return (
    <div className='flex items-center gap-6 logo '>
      <div className=' '>
        <BsFillFileEarmarkCodeFill size='40' color='#ffff' fill='#FFAA05' />
      </div>
      <div className='flex flex-col leading-tight'>
        <p className=' text-[2.4rem] font-semibold'>
          abdul<span className=' text-secondary text-[3.6rem]'>M</span>usa
          <span className='border-b-2 border-secondary text-[2.4rem]'>w</span>
          ir
        </p>
        <p className=' text-[1.6rem] '>Frontend Developer</p>
      </div>
    </div>
  );
}

export default Logo;
