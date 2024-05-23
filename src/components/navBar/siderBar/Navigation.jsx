import { motion, useAnimationControls } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import { NavContext } from '../../../contexts/NavContext';

import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline';

import NavigationLink from './NavigationLink';
import Contact from '../Contact';

const containerVariants = {
  close: {
    width: '5rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const { isSidebarOpen, setIsSidebarOpen, closeModal, scrollToTop } =
    useContext(NavContext);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isSidebarOpen) {
      containerControls.start('open');
      svgControls.start('open');
    } else {
      closeModal();
    }
  }, [isSidebarOpen, containerControls, svgControls, closeModal]);

  const handleOpenClose = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  function scrollToTopAndCloseModal() {
    scrollToTop();
    closeModal();
  }

  const links = [
    {
      to: '/',
      label: 'Home',
      icon: (
        <ChartBarIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
      ),
    },
    {
      to: 'aboutme',
      label: 'About me',
      icon: (
        <Square2StackIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
      ),
    },
    {
      to: 'portfolio',
      label: 'Portfolio',
      icon: (
        <DocumentCheckIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
      ),
    },
    {
      to: 'blog',
      label: 'Blog',
      icon: (
        <ChartPieIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
      ),
    },
  ];

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial='close'
        className='bg-neutral-900 flex flex-col z-10 gap-20 p-5 fixed top-0 right-0 h-full shadow shadow-neutral-600'
      >
        <div className='flex flex-row w-full justify-between place-items-center'>
          <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full' />
          <button
            className='p-1 rounded-full flex'
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-8 h-8 stroke-neutral-200'
            >
              <motion.path
                strokeLinecap='round'
                strokeLinejoin='round'
                variants={svgVariants}
                animate={svgControls}
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col gap-3'>
          {links.map((link, index) => (
            <NavigationLink
              key={index}
              to={link.to}
              label={link.label}
              onClick={link.to === '/' ? scrollToTopAndCloseModal : closeModal}
            />
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <Contact color={'#525252'} />
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
