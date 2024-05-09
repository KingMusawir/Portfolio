import React from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import List from './List';
import Contact from './Contact';

function ShowModal({ closeModal, isLightMode, toggleMode }) {
  const gradientColors = { right: '#00C566', left: '#00FFA3' };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <nav className=' absolute top-0 left-0 w-[100%] h-[100vh] bg-[#766a5dee] z-50 flex flex-col justify-center items-center'>
      <List
        listMobile={true}
        closeModal={closeModal}
        scrollToTop={scrollToTop}
      />
      <Contact
        closeModal={closeModal}
        isLightMode={isLightMode}
        toggleMode={toggleMode}
      />
      <IoClose
        size='40px'
        color='#FFAA05'
        onClick={closeModal}
        className=' absolute top-10 right-3 cursor-pointer'
      />
    </nav>
  );
}

export default ShowModal;
