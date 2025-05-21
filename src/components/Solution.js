import React from 'react';

function Solution() {
  return (
    <section id="solution" className="bg-gray-100 py-24 md:py-28 lg:py-28 mt-8 md:mt-12 lg:mt-16 w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          Our Approach: A 360° View of Health
        </h2>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-5">
            NexaCura Healthcare is developing an innovative Software as a Medical Device
            (SaMD) platform, designed to be the cornerstone of a new era in proactive and
            personalized health management. Our solution centers on creating a
            comprehensive 360-degree health profile for each individual by seamlessly
            integrating physiological data from cutting-edge wearables with psychological
            and lifestyle insights.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            At this early stage, our vision is to empower patients and their care providers
            with actionable intelligence. By correlating diverse data streams—such as
            activity levels, sleep patterns, cardiovascular metrics, and stress
            indicators—our platform aims to identify early warning signs, understand the
            complex interplay of comorbidities, and offer personalized feedback. This
            holistic view is key to unlocking more effective chronic disease management and
            fostering overall well-being.
          </p>
        </div>
        <div className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/solution_diagram.png`}
            alt="NexaCura Solution Diagram - SaMD Platform and Data Flow"
            className="w-full max-w-full h-auto max-h-96 rounded-lg shadow-lg mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Solution;