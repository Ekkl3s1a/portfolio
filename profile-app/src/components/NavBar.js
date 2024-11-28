// NavBar.js

import React, { useState, useEffect, useMemo } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Memoize the sections array to prevent unnecessary re-renders
  const sections = useMemo(
    () => [
      { id: "profile", label: "Profile" },
      { id: "social", label: "Social" },
      { id: "certifications", label: "Certifications" },
      { id: "projects", label: "Projects" },
      { id: "competencies", label: "Core Competencies" },
      { id: "interests", label: "Interests" },
    ],
    []
  );

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

    const options = {
      rootMargin: "0px",
      threshold: 0.9, // 90% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [sections]);

  return (
    <>
      <nav className="sticky place-self-stretch top-0 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] shadow-md z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
          {/* Logo/Brand */}
          <div className="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)]">
            My Portfolio
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`${
                    activeSection === section.id
                      ? "text-blue-500"
                      : "text-[var(--text-light)] dark:text-[var(--text-dark)]"
                  } hover:underline underline-offset-4 decoration-blue-500 transition`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-12 h-12 bg-[var(--card-light)] dark:bg-[var(--card-dark)] rounded-full shadow-lg focus:outline-none hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            <span
              className={`h-1 w-6 bg-[var(--text-light)] dark:bg-[var(--text-dark)] rounded transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-1 w-6 bg-[var(--text-light)] dark:bg-[var(--text-dark)] rounded transition-opacity duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-1 w-6 bg-[var(--text-light)] dark:bg-[var(--text-dark)] rounded transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] dark:hover:bg-[var(--hover-dark)] hover:bg-[var(--hover-light)] focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
          <ul className="md:hidden flex flex-col items-start space-y-4 bg-[var(--card-light)] dark:bg-[var(--card-dark)] p-4 shadow-lg">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:underline underline-offset-4 decoration-blue-500 transition"
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
            className="p-3 rounded-full bg-[var(--card-light)] dark:bg-[var(--card-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] shadow-lg transition-transform transform hover:scale-110 focus:outline-none"
            aria-label="Back to top"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
