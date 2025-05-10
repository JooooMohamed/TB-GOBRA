import React from 'react';
import EUFooter from '../components/EUFooter';

const results = [
  {
    country: "Spain",
    flag: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=300",
    description: "Implementation of digital skills training program",
    pdfUrl: "/path-to-pdf1.pdf"
  },
  {
    country: "Germany",
    flag: "https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?auto=format&fit=crop&w=300",
    description: "Development of innovative teaching methodologies",
    pdfUrl: "/path-to-pdf2.pdf"
  },
  {
    country: "Italy",
    flag: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=300",
    description: "Research on educational technology integration",
    pdfUrl: "/path-to-pdf3.pdf"
  },
  {
    country: "France",
    flag: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300",
    description: "Analysis of learning outcomes and impact",
    pdfUrl: "/path-to-pdf4.pdf"
  }
];

function ProjectResults() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Project Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-6">
              <img 
                src={result.flag} 
                alt={`${result.country} flag`}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{result.country}</h3>
                <p className="text-gray-600 mb-4">{result.description}</p>
                <a 
                  href={result.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EUFooter />
    </div>
  );
}

export default ProjectResults;