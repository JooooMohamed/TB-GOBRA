import EUFooter from "../components/EUFooter";

// const trainingModules = [
//   {
//     id: 1,
//     title: "Digital Skills",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400",
//     description: "Learn essential digital skills for the modern workplace",
//   },
//   {
//     id: 2,
//     title: "Communication",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400",
//     description: "Master effective communication techniques",
//   },
//   {
//     id: 3,
//     title: "Leadership",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400",
//     description: "Develop strong leadership capabilities",
//   },
//   {
//     id: 4,
//     title: "Project Management",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400",
//     description: "Learn project management methodologies",
//   },
//   {
//     id: 5,
//     title: "Innovation",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400",
//     description: "Foster innovation and creative thinking",
//   },
// ];

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

const activityDetails = [
  "https://www.youtube.com/embed/HEnOE-W2OeQ",
  "https://www.youtube.com/embed/wPb314vIKOA",
  "https://www.youtube.com/embed/NI_82jWNbkw",
];
const handleCardClick = (item: { link: string; title: string }) => {
  if (item?.link === "") return;
  const link = item?.link;
  window.open(link, "_blank");
};
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/assets/images/Header-Gobra.svg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            {/* <h1 className="text-5xl font-bold mb-4">Welcome to TB-GOBRA</h1> */}
            <p className="text-xl"></p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Welcome to TB-GOBRA
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Team Building for Green Organizational Behavior in Rural Areas
            (TB-GOBRA) is a European project that promotes sustainability,
            creativity, and collaboration in rural enterprises. Our aim is to
            equip trainers, adult educators, and rural professionals with
            innovative team-building methods that combine green values,
            traditional crafts, sustainable food, and environmental awareness.
            This platform offers free access to the TB-GOBRA Manual, which
            presents our full methodology along with practical activities for
            training and capacity-building.
          </p>
        </div>
      </section>

      {/* Training Modules Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Training Modules
          </h2>
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
      </section> */}

      {/* Project Video Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center mb-3">
              Project Video Showcase
            </h2>
            <h1 className="text-xl font-bold text-center mb-12">
              Watch Our Project in Action
            </h1>
            <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              <ul className="list-disc">
                <li className="text-xl font-semibold mb-3 text-primary">
                  Discover how we bring green team-building to life through our
                  3 main themes
                </li>
                <li className="text-xl font-semibold mb-3 text-primary">
                  Each chapter shows real training sessions and sustainable
                  practices developed with our partners.
                </li>
                <li className="text-xl font-semibold mb-3 text-primary">
                  Embedded Videos:
                </li>
              </ul>

              {/* {trainingModules.map((module) => (
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
            ))} */}
              {activityDetails && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activityDetails.map((videoUrl, index) => (
                      <div key={index} className="aspect-w-16 aspect-h-9">
                        <iframe
                          src={videoUrl}
                          title={`Video ${index + 1}`}
                          className="w-full h-[300px] rounded-lg shadow-md"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Manual Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Download the TB-GOBRA Manual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
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
        </div>
      </section>

      {/* About Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              About TB-GOBRA
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TB-GOBRA brings together partners from Germany, Finland, and Italy
              to support adult learners and small rural organizations through
              eco-conscious team-building activities. Learn more about our
              approach, partners, and training tools.
            </p>
            <section className="relative py-6 justify-center items-center text-center">
              <div className="overflow-hidden">
                <p className="text-gray-700 text-base px-10 md:text-lg mb-8">
                  Meet our partners, explore our methodology, and learn how
                  we’re helping communities go green.
                </p>

                <a
                  href="/about"
                  className="inline-block cent bg-primary text-white font-semibold text-base px-5 py-4 rounded-md shadow-lg hover:bg-green-700 transition-colors"
                >
                  Go to About the Project
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <EUFooter />
    </div>
  );
}

export default Home;
