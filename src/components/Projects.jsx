import React, { useEffect } from 'react';
import ProjectList from './ProjectList';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div className='pb-20' id='portfolio' data-aos='fade-up'>
      <div className='text-center pt-32 md:pt-60'>
        <h2 className='text-[3.8rem] md:text-[4.8rem]'>
          {'My {Dev} projects'}
        </h2>
        <p className='text-[1.4rem] md:text-[1.8rem] text-[#b1b1b1]'>
          From Web Apps to Websites
        </p>
      </div>
      <ProjectList />
    </div>
  );
}

export default Projects;
