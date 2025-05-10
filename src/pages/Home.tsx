import React from 'react';
import { Link } from 'react-router-dom';
import EUFooter from '../components/EUFooter';

const trainingModules = [
  {
    id: 1,
    title: "Digital Skills",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400",
    description: "Learn essential digital skills for the modern workplace"
  },
  {
    id: 2,
    title: "Communication",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400",
    description: "Master effective communication techniques"
  },
  {
    id: 3,
    title: "Leadership",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400",
    description: "Develop strong leadership capabilities"
  },
  {
    id: 4,
    title: "Project Management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400",
    description: "Learn project management methodologies"
  },
  {
    id: 5,
    title: "Innovation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400",
    description: "Foster innovation and creative thinking"
  }
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Project</h1>
            <p className="text-xl">Empowering through education and collaboration</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our project aims to bridge educational gaps and foster international collaboration
            through innovative learning approaches. We bring together partners from across
            Europe to create comprehensive training modules and facilitate knowledge exchange.
            Through our initiatives, we strive to develop skills that are essential for
            success in today's rapidly evolving global landscape.
          </p>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingModules.map((module) => (
              <Link 
                key={module.id}
                to={`/module/${module.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EUFooter />
    </div>
  );
}

export default Home;