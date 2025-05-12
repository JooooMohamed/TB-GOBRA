import { Link } from "react-router-dom";
import EUFooter from "../components/EUFooter";

const activities = [
  {
    id: 1,
    country: "spain",
    flag: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=300",
    title: "Green Agri-Food Production",
  },
  {
    id: 2,
    country: "germany",
    flag: "https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?auto=format&fit=crop&w=300",
    title: "Sustainable Craft Team Building",
  },
  {
    id: 3,
    country: "italy",
    flag: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=300",
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
                src={activity.flag}
                alt={`${activity.country} flag`}
                className="w-full h-48 object-cover"
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
