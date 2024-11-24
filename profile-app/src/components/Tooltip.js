// Tooltip.js

import React from "react";

const Tooltip = ({ children, tooltipText, delay = 200 }) => {
  return (
    <div
      className="relative group focus-within:ring focus-within:ring-blue-400"
      aria-label={tooltipText}
    >
      {children}
      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block group-focus:block bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-900 text-sm rounded px-2 py-1 shadow-lg z-10 transition-opacity duration-${delay} ease-in-out opacity-0 group-hover:opacity-100`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {tooltipText}
      </div>
    </div>
  );
};  

export default Tooltip;
