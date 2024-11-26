// ScrollProgressBar.js

import React, { useEffect, useState } from "react";
import clsx from "clsx";

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame;
    let timeout;

    const updateScrollWidth = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = (scrollTop / documentHeight) * 100;
      setScrollWidth(scrollPosition);
      setIsVisible(scrollPosition > 0 && scrollPosition < 100);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateScrollWidth);
      }
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 1000); // Hide after 1 second of no scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-1 z-50 transition-opacity duration-300",
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        }
      )}
      role="progressbar"
      aria-label="Scroll progress indicator"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={scrollWidth.toFixed(0)}
    >
      <div
        style={{ width: `${scrollWidth}%` }}
        className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
        dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 
        animate-gradient-x"
      />
    </div>
  );
};

export default ScrollProgressBar;
