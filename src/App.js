import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Problem from './components/Problem';
import Solution from './components/Solution';
import FocusAreas from './components/FocusAreas';
import Vision from './components/Vision';
import Team from './components/Team';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 md:py-4 mt-6 md:mt-8 lg:mt-12 text-center">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} NexaCura Healthcare. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full max-w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <Problem />
      <Solution />
      <FocusAreas />
      <Vision />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;