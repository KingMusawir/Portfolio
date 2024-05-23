import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavContext } from '../contexts/NavContext';

function ListItem({ to, label, onClick }) {
  return (
    <li className='my-2 lg:my-0'>
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

function List({ listMobile }) {
  const { scrollToTop, closeModal } = useContext(NavContext);
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
      className={` navlist   ${
        listMobile
          ? ' flex flex-col text-2xl'
          : 'hidden lg:flex lg:flex-row lg:gap-12'
      } `}
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
