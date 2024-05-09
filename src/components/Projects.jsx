import React from 'react';
import ProjectList from './ProjectList';

function Projects() {
  return (
    <div className='pb-20' id='portfolio'>
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
