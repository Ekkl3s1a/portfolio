// ScrollProgressBar.js

import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    let animationFrame;

    const updateScrollWidth = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = (scrollTop / documentHeight) * 100;
      setScrollWidth(scrollPosition);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateScrollWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50"
      aria-hidden="true"
    >
      <div
        style={{ width: `${scrollWidth}%` }}
        className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 transition-all duration-200 ease-out"
      />
    </div>
  );
};

export default ScrollProgressBar;
