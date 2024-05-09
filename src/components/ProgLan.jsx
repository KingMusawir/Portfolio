import React from 'react';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { SiMui } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import { BsFiletypeCss } from 'react-icons/bs';
import { SiBootstrap } from 'react-icons/si';

function ProgLan({ isLightMode }) {
  console.log('isLightMode in ProgLan:', isLightMode); // Log isLightMode
  const programs = [
    {
      icon: (
        <RiJavascriptFill size='40' fill={isLightMode ? 'black' : 'white'} />
      ),
      header: 'Javascript',
      subheading: 'Strong JS Knowledge and advanced web development.',
    },
    {
      icon: <FaReact size='40' fill={isLightMode ? 'black' : 'white'} />,
      header: 'ReactJS',
      subheading: 'Build fast react App’s and websites.',
    },
    {
      icon: <SiVite size='40' fill={isLightMode ? 'black' : 'white'} />,
      header: 'Vites',
      subheading: 'I build web interfaces & one page applications using Vue.',
    },
    {
      icon: <SiMui size='40' fill={isLightMode ? 'black' : 'white'} />,
      header: 'MUI',
      subheading:
        'React Component tools for creating modern and visually appealing user interfaces',
    },
    {
      icon: <FaGitAlt size='40' fill={isLightMode ? 'black' : 'white'} />,
      header: 'Git',
      subheading: 'DevOps tool for source code management.',
    },
    {
      icon: <SiTailwindcss size='40' fill={isLightMode ? 'black' : 'white'} />,
      header: 'Tailwind',
      subheading: 'Widely used front-end framework.',
    },
    {
      icon: <BsFiletypeCss size='40' fill={isLightMode ? 'black' : 'white'} />,
      header: 'CSS & SASS',
      subheading: 'I use SASS as CSS pre-processor.',
    },
    {
      icon: <SiBootstrap size='40' fill={isLightMode ? 'black' : 'white'} />,
      header: 'Bootstrap',
      subheading: 'Widely used front-end framework.',
    },
  ];

  return (
    <div className='grid gap-20 grid-cols-2 md:grid-cols-4 items-center justify-center'>
      {programs.map((program, index) => (
        <div className=' flex gap-1 flex-col hover:text-secondary' key={index}>
          <div className=' pb-4 hover:text-secondary '>{program.icon}</div>
          <p className=' text-[1.8rem] font-semibold '>{program.header}</p>
          <div className='subheading text-[1.4rem] text-[#b1b1b1]'>
            {program.subheading}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgLan;
