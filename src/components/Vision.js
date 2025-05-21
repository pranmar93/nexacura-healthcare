import React from 'react';

function Vision() {
  return (
    <section id="vision" className="bg-gray-100 pt-20 pb-6 md:pt-20 md:pb-6 lg:pt-20 lg:pb-0 mt-8 md:mt-12 lg:mt-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          Our Vision
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-500 mb-4">
              Transforming Healthcare
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-5">
              At NexaCura Healthcare, our vision is to redefine healthcare by creating a
              seamless integration of technology and human-centric care. We aim to empower
              individuals and healthcare providers with tools that foster proactive health
              management and personalized care.
            </p>
            <ul className="text-gray-600 text-sm sm:text-base md:text-lg list-inside">
              <li className='lg:py-4'>‣ Integrate advanced analytics for real-time health insights.</li>
              <li className='lg:py-4'>‣ Promote collaboration across the healthcare ecosystem.</li>
              <li className='lg:py-4'>‣ Enhance patient outcomes through data-driven decisions.</li>
            </ul>
          </div>
          <div className="flex-none md:w-2/5 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/vision_section.jpg`}
              alt="Vision of NexaCura HealthCare"
              className="w-full max-w-full h-auto rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;