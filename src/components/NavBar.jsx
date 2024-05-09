import React, { useEffect, useState } from 'react';
import '../App.css';

import { HiMenuAlt1 } from 'react-icons/hi';
import Logo from './Logo';
import ShowModal from './ShowModal';
import List from './List';
import Contact from './Contact';

function NavBar({ isLightMode, toggleMode }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    return window.scrollTo(0, 0); // Scrolls the page to the top
  };

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`navbar py-10 px-5 flex justify-between items-center ${
        isSticky ? 'sticky' : ''
      }`}
    >
      <Logo />
      <div className=' hidden lg:inline-block '>
        <List scrollToTop={scrollToTop} />
      </div>
      <Contact
        btnhide={true}
        closeModal={closeModal}
        isLightMode={isLightMode}
        toggleMode={toggleMode}
      />
      <div className=' block lg:hidden' onClick={openModal}>
        <HiMenuAlt1 fill='#FFAA05' size='40' />
      </div>
      {showModal && (
        <ShowModal
          closeModal={closeModal}
          handleClick={handleClick}
          isLightMode={isLightMode}
          toggleMode={toggleMode}
        />
      )}
    </div>
  );
}

export default NavBar;
