import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../index.css';

function Textcontainer({ text, textColor }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const textContainers = document.querySelectorAll('.text-container');

      textContainers.forEach((container) => {
        const words = container.textContent.split(' ');
        container.innerHTML = '';

        words.forEach((word, index) => {
          const span = document.createElement('span');
          span.textContent = word + ' '; // Add space to separate words
          span.style.animationDelay = `${index * 0.1}s`;

          if (word === 'React' || word === 'Tailwind' || word === 'web') {
            span.style.color = '#ffaa05';
          }
          container.appendChild(span);
        });
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <h1
        className={`text-[3.2rem] pb-10 text-container ${
          textColor ? 'text-[#b1b1b1]' : ''
        }`}
      >
        {text}
      </h1>
    </div>
  );
}

export default Textcontainer;
