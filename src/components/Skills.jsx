import React, { useEffect } from 'react';
import Myself from '../assets/myself.png';
import Textcontainer from './Textcontainer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  const mySkills = [
    {
      head: 'Bsc. Computer Science - (In-view)',
      paragraph:
        'Currently pursuing a Bachelor of Science in Computer Science at the Federal University of Technology Akure (FUTA). Previously graduated from Osun State Polytechnic with a strong foundation in computer science.',
    },
    {
      head: 'Specializing in React & Vanilla Js.',
      paragraph:
        'I am constantly working on learning new technologies & following industry trends.',
    },
    {
      head: 'Love working in team.',
      paragraph:
        'I enjoy working in a team environment, but  i can  also work independently.',
    },
  ];
  return (
    <>
      <div className='text-center mt-60' id='aboutme' data-aos='fade-up'>
        <p className='text-[3.8rem] md:text-[4.8rem]'>
          {'Problem Solver <coder>'}
        </p>
        <p className='text-[1.2rem] md:text-[1.8rem] text-[#b1b1b1]'>
          Frontend Developer with over 3 years of experience
        </p>
      </div>
      <div className=' border-b-2 border-[#b1b1b1] mb-60' data-aos='fade-up'>
        <div className=' pt-24 flex justify-center max-w-[1100px] mx-auto items-center'>
          <div className=''>
            {mySkills.map((skill, index) => (
              <div className=' flex flex-col mb-14' key={index}>
                <div className=' w-6 h-6 border-2 border-primary'></div>
                <p className='text-[1.6rem] pt-3 '>
                  <span className=' text-[2.4rem] font-semibold'>
                    {skill.head}
                  </span>{' '}
                  <Textcontainer text={skill.paragraph} textColor={true} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
