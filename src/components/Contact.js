import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-24 md:py-28 lg:py-28 mt-8 md:mt-12 lg:mt-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-10">
          We’d love to hear from you! Whether you’re a potential partner, clinician, or
          patient, reach out to learn more about how NexaCura Healthcare can make a
          difference.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-5">Contact Us</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Email:{' '}
            <a
              href="mailto:info@nexacura.com"
              className="text-blue-500 font-medium hover:underline"
            >
              info@nexacura.com
            </a>
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Phone:{' '}
            <a
              href="tel:+1234567890"
              className="text-blue-500 font-medium hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;