import React from 'react';
import { useParams } from 'react-router-dom';
import EUFooter from '../components/EUFooter';

const moduleDetails = {
  1: {
    title: "Digital Skills",
    description: `This comprehensive module focuses on essential digital skills needed in today's
    workplace. Participants will learn about digital literacy, online collaboration tools,
    data security, and basic programming concepts. The course is designed to be practical
    and hands-on, with real-world applications and exercises.`,
    content: [
      "Introduction to Digital Literacy",
      "Online Collaboration Tools",
      "Data Security and Privacy",
      "Basic Programming Concepts",
      "Digital Communication Skills"
    ],
    outcomes: [
      "Understanding of key digital concepts",
      "Ability to use common digital tools",
      "Knowledge of data security practices",
      "Basic programming skills",
      "Effective digital communication"
    ]
  },
  // Add similar objects for other modules
};

function ModuleDetails() {
  const { id } = useParams();
  const details = id ? moduleDetails[id as keyof typeof moduleDetails] : null;

  if (!details) {
    return <div>Module not found</div>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">{details.title}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {details.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Module Content</h3>
              <ul className="space-y-2">
                {details.content.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Learning Outcomes</h3>
              <ul className="space-y-2">
                {details.outcomes.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <EUFooter />
    </div>
  );
}

export default ModuleDetails;