import React, { useState } from 'react';
import Blues from '../assets/blues.png';
import Hucsters from '../assets/hucksters.png';
import Selenia from '../assets/selenia.png';
import Worldwise from '../assets/worldwise.png';
import Pizza from '../assets/Pizza.png';

function ProjectList({ setProject }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setProject(project);
    setSelectedProject(project);
  };

  return (
    <ul className='flex gap-20 project-list items-center justify-center pt-20 pb-20'>
      <li
        onClick={() => handleProjectClick('app')}
        className={
          selectedProject === 'app' ? 'bg-secondary opacity-70 rounded-2xl' : ''
        }
      >
        App
      </li>
      <li
        onClick={() => handleProjectClick('website')}
        className={
          selectedProject === 'website'
            ? 'bg-secondary opacity-70 rounded-2xl'
            : ''
        }
      >
        Website
      </li>
    </ul>
  );
}

function Project() {
  const projects = [
    {
      image: Blues,
      programs: 'React App · Tailwind · CSS · SCSS',
      link: 'https://blues-blue.vercel.app/',
      type: 'Real Estate Website',
      subhead:
        'This React application empowers users to effortlessly explore an extensive range of rental properties, streamlining the search for their ideal home.',
    },
    {
      image: Hucsters,
      programs: 'React App · Tailwind · CSS ',
      type: 'E-Commerce Website',
      subhead:
        'Seamlessly Manage User Accounts and Empower Vendors, Redefining the E-commerce Landscape With Intuitive Functionality and Dynamic Features for Enhanced Engagement and Efficiency.',
      github: 'https://github.com/HuckstersEngineering/huckstersweb',
    },
    {
      image: Selenia,
      programs: 'React App · Tailwind · CSS · SCSS',
      type: 'Cryptocurrency Website',
      subhead:
        'React Website for Accessing Live Prices of All Cryptocurrencies and Discover the Selenia Crypto App, Your Ultimate Companion for Staying Informed and Making Informed Investment Decisions.',
    },
    {
      image: Worldwise,
      programs: 'React App · Tailwind · CSS · SCSS',
      link: 'https://world-visitation.vercel.app/',
      type: 'Location Tracking App',
      subhead:
        'This React application allows users to keep records of the locations they visit. Users must log in to access the app, ensuring secure and personalized tracking. By clicking "Get Position," users can automatically retrieve their current location, add a note about the place, and save it for future reference. Currently, the application is designed to be tested on localhost, as there is no backend yet.',
    },
    {
      image: Pizza,
      programs: 'React App · Tailwind · CSS ',
      type: 'Mini Pizza App',
      subhead:
        'Seamlessly Manage User Accounts and Empower Vendors, Redefining the E-commerce Landscape With Intuitive Functionality and Dynamic Features for Enhanced Engagement and Efficiency. The Pizza App is a mini application built with React and Redux Toolkit. Users can order pizzas, adjust quantities, and remove unwanted items from their cart. They can also set delivery priority and choose payment on delivery. Experience a streamlined and efficient ordering process designed to enhance user satisfaction.',
      link: 'https://pizza-cyan-ten.vercel.app/',
    },
    {
      image: Selenia,
      programs: 'React App · Tailwind · CSS · SCSS',
      type: 'Cryptocurrency Website',
      subhead:
        'React Website for Accessing Live Prices of All Cryptocurrencies and Discover the Selenia Crypto App, Your Ultimate Companion for Staying Informed and Making Informed Investment Decisions.',
      link: 'https://www.google.com/',
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const isTabletOrLarger = window.matchMedia('(min-width: 800px)').matches;

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-20'>
      {projects.map((project, index) => (
        <div
          className={`project block ${
            showMore || index < (isTabletOrLarger ? 3 : 2) ? '' : 'hidden'
          }`}
          key={index}
        >
          <a href={project.link} target='_blank'>
            <img
              src={project.image}
              alt='Real Estate Website'
              className='transition-all duration-[400ms] ease-in-out h-[100px] lg:h-[300px] w-full cursor-pointer hover:opacity-50'
            />
          </a>
          <p className='text-[1.6rem] font-medium'>{project.programs}</p>
          <p className='text-[2rem] font-semibold pt-4'>{project.type}</p>
          <p className='text-[1.2rem] pt-2 italic'>{project.subhead}</p>
          <div className=' pt-4 flex items-center gap-4'>
            <a
              href={project.link}
              className=' transition-all duration-[400ms] ease-in-out p-2  rounded-2xl text-[1.4rem] border-2 border-secondary hover:bg-secondary '
            >
              See Live
            </a>
            <a
              href={project.github}
              className=' transition-all duration-[400ms] ease-in-out text-[1.4rem] border-b-2 border-secondary hover:text-secondary'
            >
              See on GitHub
            </a>
          </div>
        </div>
      ))}
      {!showMore && (
        <div className='text-center'>
          <button
            className='transition-all duration-[400ms] ease-in-out text-secondary hover:opacity-50 active:opacity-70'
            onClick={() => setShowMore(true)}
          >
            See More...
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectContainer() {
  const [selectedProject, setSelectedProject] = useState('');

  return (
    <div>
      <ProjectList setProject={setSelectedProject} />
      <div className='projects'>{selectedProject && <Project key={1} />}</div>
    </div>
  );
}

export default ProjectContainer;
