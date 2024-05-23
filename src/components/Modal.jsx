import React, { useState } from 'react';
import { motion } from 'framer-motion';
import List from './List';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '200px',
        height: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
      }}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ marginBottom: '20px', color: '#fff' }}
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      {/* <List /> */}
      <ul>
        <li>
          <a href='#home' style={{ color: '#fff' }}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' style={{ color: '#fff' }}>
            About
          </a>
        </li>
        <li>
          <a href='#contact' style={{ color: '#fff' }}>
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Modal;
