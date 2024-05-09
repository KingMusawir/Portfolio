import React, { useState } from 'react';
import { RxPinTop } from 'react-icons/rx';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div
      className={`fixed bottom-8  right-8 cursor-pointer z-50 text-secondary ${
        isVisible ? '' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <RxPinTop size='40' stroke='#FFAA05' fill='#FFAA05' color='#ffaa05' />
    </div>
  );
}

export default ScrollToTop;
