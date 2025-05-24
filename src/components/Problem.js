import React from 'react';

function Problem() {
  return (
    <section id="problem" className="bg-white pt-20 pb-6 md:pt-20 md:pb-6 lg:pt-20 lg:pb-0 mt-8 md:mt-12 lg:mt-16 w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          The Unseen Interplay: Challenges in Modern Healthcare
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-5">
              In today's healthcare landscape, chronic conditions are increasingly prevalent,
              yet their management often remains fragmented. There's a critical disconnect in
              how we monitor and understand the intricate relationship between a patient's
              physiological health and their psychological well-being. This siloed approach
              means early warning signs are missed, comorbidities are inadequately addressed,
              and patients lack a holistic view of their own health journey.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Healthcare providers, pharmaceutical companies, and caregivers alike face
              challenges in accessing integrated data that paints a complete picture. This gap
              hinders the development of truly personalized treatment plans, slows down
              clinical research, and ultimately impacts patient outcomes and quality of life.
              NexaCura Healthcare was founded to bridge this critical divide.
            </p>
          </div>
          <div className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/problem_section.jpg`}
              alt="Conceptual image representing healthcare challenges"
              className="w-full max-w-full h-96 rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;