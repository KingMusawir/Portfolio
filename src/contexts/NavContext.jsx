import React, { createContext, useEffect, useState } from 'react';

const NavContext = createContext();

function NavProvider({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick() {
    return window.scrollTo(0, 0); // Scrolls the page to the top
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setIsSidebarOpen(false);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <NavContext.Provider
      value={{
        isSticky,
        showModal,
        handleClick,
        openModal,
        closeModal,
        scrollToTop,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider };
