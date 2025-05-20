import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <a
          href="#home"
          className="flex items-center text-gray-800 text-xl font-bold"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <img src="/images/logo.png" alt="NexaCura HealthCare Logo" className="h-10 mr-2" />
          NexaCura Healthcare
        </a>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            )}
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          {['home', 'problem', 'solution', 'focus-areas', 'vision', 'team', 'contact'].map((section) => (
            <li key={section} className="md:ml-6 py-2 md:py-0">
              <a
                href={`#${section}`}
                className="text-gray-600 font-medium hover:text-blue-500 transition-colors"
                onClick={(e) => handleNavClick(e, `#${section}`)}
              >
                {section === 'home'
                  ? 'Home'
                  : section === 'focus-areas'
                  ? 'Focus Areas'
                  : section === 'problem'
                  ? 'The Problem'
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;