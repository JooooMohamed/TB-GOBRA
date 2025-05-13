import { Link } from "react-router-dom";
import EUFooter from "../components/EUFooter";

const activities = [
  {
    id: 1,
    country: "spain",
    image: "/assets/images/EUW-Logo.svg",
    title: "Green Agri-Food Production",
  },
  {
    id: 2,
    country: "germany",
    image: "/assets/images/Lapin.png",
    title: "Sustainable Craft Team Building",
  },
  {
    id: 3,
    country: "italy",
    image: "/assets/images/logo-igor-vitale.jpg",
    title: "Sustainable Cooking Team Building",
  },
];

function LocalActivities() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Media
        </h1>
        <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={activity.image}
                alt={`${activity.country} flag`}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{activity.title}</h3>

                <Link
                  to={`/activity/${activity.id}`}
                  className="bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-colors"
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
