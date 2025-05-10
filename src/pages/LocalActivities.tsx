import React from 'react';
import { Link } from 'react-router-dom';
import EUFooter from '../components/EUFooter';

const activities = [
  {
    country: "spain",
    flag: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=300",
    title: "Spanish Initiative"
  },
  {
    country: "germany",
    flag: "https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?auto=format&fit=crop&w=300",
    title: "German Program"
  },
  {
    country: "italy",
    flag: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=300",
    title: "Italian Project"
  },
  {
    country: "france",
    flag: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300",
    title: "French Activities"
  }
];

function LocalActivities() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Local Activities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={activity.flag} 
                alt={`${activity.country} flag`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{activity.title}</h3>
                <Link 
                  to={`/activity/${activity.country}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EUFooter />
    </div>
  );
}

export default LocalActivities;