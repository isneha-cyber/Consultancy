
// SmoothScrollButton.jsx
import React from 'react';

const SmoothScrollButton = ({ 
  to, 
  children, 
  className = "",
  offset = 0 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    const targetId = to.startsWith('#') ? to.substring(1) : to;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - offset;
      const duration = 1000; // 1 second
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} cursor-pointer`}
      aria-label={`Scroll to ${to}`}
    >
      {children}
    </button>
  );
};

export default SmoothScrollButton;