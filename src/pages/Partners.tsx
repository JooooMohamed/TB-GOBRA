import { Facebook, Twitter } from "lucide-react";
import EUFooter from "../components/EUFooter";
import { useState } from "react";

const partners = [
  {
    id: 1,
    name: "EUth Wonders e.V. (Germany)",
    image: "/assets/images/EUW-Logo.svg",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    description:
      "EUth Wonders is a youth-focused NGO based in Bonn, Germany, dedicated to promoting social inclusion, civic engagement, and intercultural dialogue through non-formal education. The organization works extensively with young people and educators to build innovative and inclusive learning environments. Within TB-GOBRA, EUth Wonders acts as the project coordinator, leading the overall design, communication, and implementation of activities. They also support the dissemination of results and organize local and international training activities, with a strong emphasis on sustainability and community participation.",
  },
  {
    id: 2,
    name: "University of Lapland (Finland)",
    image: "/assets/images/Lapin.png",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    description:
      "The University of Lapland, located in Rovaniemi, is a leading institution in Arctic art, design, and education. With deep expertise in sustainable development and traditional crafts, the university contributes to TB-GOBRA by integrating environmental values into craft-based learning. The Finnish team designed and delivered the Sustainable Craft Team Building module, including creative activities such as mushroom felting and traditional Himmeli crafting. They bring academic depth, creativity, and a strong focus on eco-friendly pedagogical approaches to the partnership.",
  },
  {
    id: 3,
    name: "IVI – Igor Vitale Internationale (Italy)",
    image: "/assets/images/logo-igor-vitale.jpg",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    description:
      "IVI is an Italian research and training institute that combines psychology, education, and well-being. With a strong background in adult learning and social integration, IVI contributed to TB-GOBRA through the development of the Sustainable Cooking Team Building module. Their team designed and led hands-on workshops promoting green values through culinary arts, while also evaluating the impact of the educational process. IVI plays a key role in ensuring the project’s methods are engaging, inclusive, and impactful for both learners and educators.",
  },
];

function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  return (
    <div>
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Our Partners
          </h1>

          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() =>
                  setSelectedPartner(
                    selectedPartner === partner.id.toString()
                      ? null
                      : partner.id.toString()
                  )
                }
              >
                <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary overflow-hidden mb-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-900">
                  {partner.name}
                </h3>
                <div className="flex space-x-4 mb-4">
                  <a
                    href={partner.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href={partner.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
                <button className="bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Partner Details */}
          <div className="max-w-3xl mx-auto">
            {partners.map(
              (partner) =>
                selectedPartner === partner.id.toString() && (
                  <div
                    key={partner.id}
                    className="bg-white p-8 rounded-lg shadow-lg mb-8"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      {partner.name}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {partner.description}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <EUFooter />
    </div>
  );
}

export default Partners;
