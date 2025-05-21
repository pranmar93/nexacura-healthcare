import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative text-white w-full max-w-full mt-4 md:mt-4 lg:mt-14 pb-0 md:pb-0 lg:pb-0"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero_banner.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 w-full max-w-2xl mx-auto px-2 sm:px-6 lg:px-8">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="NexaCura HealthCare Logo"
          className="h-28 mb-5 mx-auto md:h-32 w-full max-w-full object-contain"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-shadow-md">
          Revolutionizing Health, Connecting Mind and Body
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light mb-8 text-shadow-sm">
          NexaCura Healthcare is pioneering a 360° approach to wellness, integrating
          physiological and psychological insights for a truly personalized and proactive
          healthcare experience.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#solution"
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-transform hover:-translate-y-1"
          >
            Discover Our Solution
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;