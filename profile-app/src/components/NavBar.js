// NavBar.js

import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = [
    { id: "profile", label: "Profile" },
    { id: "social", label: "Social" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "competencies", label: "Core Competencies" },
    { id: "interests", label: "Interests" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust this value for your offset
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu on section selection
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show Back to Top button if scrolled down more than 200px
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
          {/* Logo/Brand */}
          <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            My Portfolio
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-800 dark:text-gray-200 hover:underline underline-offset-4 decoration-blue-500 transition"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-300 to-blue-500 dark:from-gray-900 dark:to-gray-600 rounded-full shadow-lg focus:outline-none hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            <span
              className={`h-1 w-6 bg-white rounded transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-1 w-6 bg-white rounded transition-opacity duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-1 w-6 bg-white rounded transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-md bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col items-start space-y-4 bg-gray-100 dark:bg-gray-900 p-4 shadow-lg">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-800 dark:text-gray-200 hover:underline underline-offset-4 decoration-blue-500 transition"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-5 right-5">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 shadow-lg transition-transform transform hover:scale-110 focus:outline-none"
            aria-label="Back to top"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </button>
          <div className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-900 text-xs rounded px-2 py-1 shadow-md">
            Back to Top
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
