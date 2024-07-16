import React from 'react';
import ProfilePicture from '../../src/assets/profile-picture.png';

function Profile() {
  return (
    <div>
      <div className='relative flex flex-col justify-center items-center'>
        <div className='text-[#c5c5c5] text-3xl w-full absolute top-[26%] right-[117%]'>
          Meet Me: Raji Musawir
        </div>
        <img
          src='https://cdn.prod.website-files.com/659907fff299860dc8722053/659907fff299860dc87220f1_arrow%20avatar.svg'
          loading='eager'
          alt=''
          className='w-[60px] absolute top-[9%] bottom-auto left-auto right-[116%] block max-w-full'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          loading='eager'
          alt=''
          className='w-[60px] absolute top-[52%] bottom-auto left-[5%] right-[52%] block max-w-full'
        />
        <div className='rounded-[40px] flex-wrap content-center justify-center items-stretch w-[140px] h-[140px] mb-[61px] flex static overflow-hidden'>
          <div
            className='bg-cover bg-center w-full h-full'
            style={{
              backgroundImage: `url(${ProfilePicture})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
