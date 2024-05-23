import React, { useContext, useEffect } from 'react';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { SiMui } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import { BsFiletypeCss } from 'react-icons/bs';
import { SiBootstrap } from 'react-icons/si';
import { ThemeContext } from '../contexts/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function ProgLan() {
  const { iconColor } = useContext(ThemeContext);

  const programs = [
    {
      icon: <RiJavascriptFill size='40' fill={iconColor} />,
      header: 'Javascript',
      subheading: 'Strong JS Knowledge and advanced web development.',
    },
    {
      icon: <FaReact size='40' fill={iconColor} />,
      header: 'ReactJS',
      subheading: 'Build fast react App’s and websites.',
    },
    {
      icon: <SiVite size='40' fill={iconColor} />,
      header: 'Vites',
      subheading: 'I build web interfaces & one page applications using Vue.',
    },
    {
      icon: <SiMui size='40' fill={iconColor} />,
      header: 'MUI',
      subheading:
        'React Component tools for creating modern and visually appealing user interfaces',
    },
    {
      icon: <FaGitAlt size='40' fill={iconColor} />,
      header: 'Git',
      subheading: 'DevOps tool for source code management.',
    },
    {
      icon: <SiTailwindcss size='40' fill={iconColor} />,
      header: 'Tailwind',
      subheading: 'Widely used front-end framework.',
    },
    {
      icon: <BsFiletypeCss size='40' fill={iconColor} />,
      header: 'CSS & SASS',
      subheading: 'I use SASS as CSS pre-processor.',
    },
    {
      icon: <SiBootstrap size='40' fill={iconColor} />,
      header: 'Bootstrap',
      subheading: 'Widely used front-end framework.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div
      className='grid gap-20 grid-cols-2 md:grid-cols-4 items-center justify-center'
      data-aos='fade-up'
    >
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
