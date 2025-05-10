import React from 'react';
import { Facebook, Twitter } from 'lucide-react';
import EUFooter from '../components/EUFooter';

const partners = [
  {
    name: "Digital Innovation Hub",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Tech Academy",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Education First",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Future Skills Institute",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=300",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Innovation Center",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  }
];

function Partners() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Our Partners</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-center mb-4">{partner.name}</h3>
              <div className="flex space-x-4">
                <a href={partner.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Facebook size={24} />
                </a>
                <a href={partner.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <Twitter size={24} />
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

export default Partners;