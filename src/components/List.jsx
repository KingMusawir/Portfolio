import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function ListItem({ to, label, onClick }) {
  return (
    <li>
      <ScrollLink
        activeClass='active'
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        onClick={onClick}
      >
        {label}
      </ScrollLink>
    </li>
  );
}

function List({ listMobile, closeModal, scrollToTop }) {
  const links = [
    { to: '/', label: 'Home' },
    { to: 'aboutme', label: 'About me' },
    { to: 'portfolio', label: 'Portfolio' },
    { to: 'blog', label: 'Blog' },
  ];
  const scrollToTopAndCloseModal = () => {
    scrollToTop();
    closeModal();
  };

  return (
    <ul
      className={`flex gap-12 ${
        listMobile ? 'flex-col text-[2.4rem]' : 'flex-row'
      } navlist`}
    >
      {links.map((link, index) => (
        <ListItem
          key={index}
          to={link.to}
          label={link.label}
          onClick={link.to === '/' ? scrollToTopAndCloseModal : closeModal}
        />
      ))}
    </ul>
  );
}

export default List;
