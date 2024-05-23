import React, { useContext } from 'react';
import '../../App.css';

import { NavContext } from '../../contexts/NavContext';

import { HiMenuAlt1 } from 'react-icons/hi';
import Logo from '../Logo';

import List from '../List';
import Contact from './Contact';
import Navigation from './siderBar/Navigation';

function NavBar() {
  const { isSticky, showModal, openModal, closeModal, setIsSidebarOpen } =
    useContext(NavContext);

  function handleMenuClick() {
    openModal();
    setIsSidebarOpen(true);
  }

  return (
    <div
      className={`navbar py-10 px-5 flex justify-between items-center ${
        isSticky ? 'sticky' : ''
      }`}
    >
      <Logo />

      <List />

      <Contact btnhide={true} closeModal={closeModal} />

      <HiMenuAlt1
        fill='#FFAA05'
        size='40'
        onClick={handleMenuClick}
        className=' block lg:hidden'
      />

      {showModal && <Navigation />}
    </div>
  );
}

export default NavBar;
