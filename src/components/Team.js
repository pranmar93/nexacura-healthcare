import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: 'Shivendra Singh',
      role: 'Founder & CEO',
      bio: 'Shivendra is a visionary leader with a passion for leveraging technology to solve complex healthcare challenges. His experience in Medical Technology Automation, Robotics, Neuro-Linguistic Programming and Artificial Intelligence drives NexaCura\'s mission to create a more integrated and proactive healthcare future. He empowers individuals to understand how everything they consume, from nutrition to environmental factors, affects their wellbeing. This holistic perspective drives NexaCura\'s mission to help people make informed decisions for healthier lives.',
      imgSrc: '/images/shivendra_singh.jpg',
    },
    {
      name: 'Frank Yam',
      role: 'Co-founder & Director, Cybersecurity',
      bio: 'Professor Frank Yam brings over 35 years of executive management experience as an IT and cybersecurity specialist. As a global business leader, serial entrepreneur, and angel investor, his expertise is pivotal in ensuring the security and integrity of the NexaCura platform. Frank has held numerous leadership roles in international professional bodies, including ISACA and ACFE, and is a renowned speaker on emerging technologies, risk management, and cybersecurity. His deep knowledge in these areas provides NexaCura with a robust foundation for data protection and compliance.',
      imgSrc: '/images/frank_yam.png',
    },
    {
      name: 'Praneet Maroo',
      role: 'Head of Technology',
      bio: 'Praneet is a seasoned technology expert with deep expertise in both hardware and software domain. He leads the development of NexaCura\'s innovative SaMD platform, ensuring its scalability, reliability, and cutting-edge capabilities. After graduating from prestigious IIT Kharagpur, Praneet held various engineering position, driving complex projects across global teams. He has extensive experience in system architecture, end-to-end product development, and applied ML/AI - having worked on multiple AI-driven initiatives from concept to deployment.',
      imgSrc: '/images/praneet_maroo.jpeg',
    },
  ];

  return (
    <section id="team" className="bg-white pt-20 pb-6 md:pt-20 md:pb-6 lg:pt-20 lg:pb-8 mt-8 md:mt-12 lg:mt-16 w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          Our Leadership Team
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-10">
          Meet the dedicated individuals driving NexaCura Healthcare's vision forward.
          Our team combines expertise in healthcare, technology, and business to build
          solutions that make a meaningful impact.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <img
                src={`${process.env.PUBLIC_URL}${member.imgSrc}`}
                alt={`Image of ${member.name}`}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-5 border-4 border-blue-500 max-w-full"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-500 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-xs sm:text-sm text-left">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;