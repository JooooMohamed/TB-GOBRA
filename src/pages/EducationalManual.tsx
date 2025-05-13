import EUFooter from "../components/EUFooter";

const activities = [
  {
    country: "UK",
    flag: "/assets/images/UK_flag.png",
    title: "Download in English",
    link: "https://drive.google.com/file/d/1lFgyhJAVQ1sOXAycSgi915mUPGqwgJ-r/view?usp=drive_link",
  },
  {
    country: "germany",
    flag: "/assets/images/Flag_of_Germany.svg.png",
    title: "Download in German",
    link: "https://drive.google.com/file/d/1Z55KkXUmrj0SrQTKC0JKQxmATVxdfXAy/view?usp=drive_link",
  },
  {
    country: "italy",
    flag: "/assets/images/Flag_of_Italy.png",
    title: "Download in Italian",
    link: "",
  },
  {
    country: "finland",
    flag: "/assets/images/Flag_of_Finland.svg.png",
    title: "Download in Finnish",
    link: "https://drive.google.com/file/d/1ttpUxQXbgxGoS80-o5Vt5x8TzX3JlE1F/view?usp=drive_link",
  },
];
const handleCardClick = (item: { link: string; title: string }) => {
  if (item?.link === "") return;
  const link = item?.link;
  window.open(link, "_blank");
};
function ProjectResults() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            TB-GOBRA Educational Manual
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Download the full manual in your preferred language:
          </p>
        </div>

        <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              onClick={() => handleCardClick(activity)}
            >
              <img
                src={activity.flag}
                alt={`${activity.country} flag`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary text-center">
                  {activity.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid px-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <ul className="list-disc px-8 text-lg text-gray-700 space-y-4">
            <li className="mb-6 ">
              <h2 className="text-2xl font-semibold mb-2 text-primary">
                Chapter 1: The Science Behind Team Building
              </h2>
              <p className="text-lg text-gray-700">
                This chapter delves into the psychological and educational
                principles that underpin the TB-GOBRA methodology. It explores
                how teamwork, creativity, and shared ecological practices
                contribute to effective adult learning. Grounded in scientific
                research, it provides trainers and educators with the
                theoretical tools to understand group dynamics, motivation, and
                experiential learning within green and inclusive contexts.
              </p>
            </li>

            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">
                Chapter 2: Green Agri-Food Production
              </h2>
              <p className="text-lg text-gray-700">
                This chapter promotes awareness of sustainable farming and local
                food systems as tools for green education. It provides educators
                with theoretical insights and practical group activities to
                explore eco-conscious agriculture, gardening, and seasonal food
                cycles. The goal is to reconnect people with nature through
                hands-on learning that nurtures environmental responsibility.{" "}
              </p>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">
                Chapter 3: Sustainable Craft Team Building
              </h2>
              <p className="text-lg text-gray-700">
                Here, participants explore traditional and ecological crafts to
                strengthen teamwork, creativity, and fine motor skills. The
                chapter introduces techniques such as wool felting and
                Himmeli-making using biodegradable materials. These practices
                create opportunities for bonding while promoting environmental
                values and preserving European cultural heritage.
              </p>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-primary">
                Chapter 4: Sustainable Cooking Team Building
              </h2>
              <p className="text-lg text-gray-700">
                Cooking becomes a tool for collaboration, education, and
                environmental awareness in this chapter. Activities center on
                preparing meals together using seasonal, local ingredients,
                encouraging participants to reflect on food sustainability,
                cultural exchange, and the impact of our consumption choices.
                Ideal for building inclusive and respectful learning
                environments.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <EUFooter />
    </div>
  );
}

export default ProjectResults;
