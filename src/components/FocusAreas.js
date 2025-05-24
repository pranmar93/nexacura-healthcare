import React from 'react';

function FocusAreas() {
  return (
    <section id="focus-areas" className="bg-white pt-20 pb-6 md:pyt-20 md:pb-6 lg:pt-20 lg:pb-6 mt-8 md:mt-12 lg:mt-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          Empowering a Healthier Future, Together
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-center max-w-md mx-auto mb-10">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              NexaCura Healthcare is dedicated to fostering a collaborative ecosystem. Our
              360-degree health insights platform is envisioned to provide significant value
              across the healthcare spectrum, addressing the complex interplay of
              physiological and psychological factors in chronic conditions and supporting
              the management of comorbidities.
            </p>
          </div>
          <div className="mb-10 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/focus_areas_banner.jpg`}
              alt="Diverse focus areas of NexaCura HealthCare"
              className="w-full max-w-full h-96 rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-4">
              Pharmaceutical Partners
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We aim to support pharmaceutical companies by enhancing clinical trial
              efficiency through richer data, facilitating remote patient monitoring, and
              providing deeper insights into drug efficacy and patient response in
              real-world settings. Our platform can help uncover novel digital biomarkers
              and support post-market surveillance.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-4">
              Hospitals & Clinicians
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              For hospitals and clinicians, NexaCura offers the potential for improved
              patient management through early detection of deteriorating conditions,
              data-driven insights for personalized treatment optimization, and tools to
              support patient adherence, ultimately aiming to reduce readmissions and
              improve care quality.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-4">
              Patients & Caregivers
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We empower patients by providing them with a comprehensive understanding of
              their health, personalized insights, and tools to actively participate in
              their care. For caregivers, our platform can offer peace of mind and timely
              information to better support their loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;