import EUFooter from "../components/EUFooter";

const activity = {
    country: "UK",
    flag: "/assets/images/Header-Gobra.svg",
    title: "Report Download - Impact Studies",
    link: "/assets/pdfs/Impact Studies - TB GOBRA.pdf",
};
const videoUrl = "https://www.youtube.com/embed/4PkZcF4YD7A"

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
            Impact Studies: Validating the TB-GOBRA Methodology
          </h2>
          <p className="flex text-start items-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">           
            The TB-GOBRA project carried out an in-depth impact study to validate its innovative methodology that combines team building, sustainable crafts, green agri-food practices, and eco-conscious cooking. Led by Igor Vitale International (Italy) in collaboration with EUth Wonders e.V. (Germany) and the University of Lapland (Finland), the study analyzed both qualitative reflections and quantitative data collected during piloting sessions.
          </p>
           <p className="flex text-start items-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">           
               Participants completed pre- and post-activity evaluations, allowing the team to measure growth in green awareness, teamwork effectiveness, and sustainable behavioral change. The results showed significant improvement in participants’ understanding of environmental responsibility, creative collaboration, and the value of experiential learning through traditional crafts and agri-food activities.
           </p>
           <p className="flex text-start items-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">           
            The findings confirm that the TB-GOBRA methodology is not only an engaging educational tool but also an effective model for developing soft and green skills in VET and adult learning contexts. The impact study strengthens the project’s scientific credibility and supports its wider adoption in eco-tourism, sustainable gastronomy, and vocational education sectors.
           </p>
         </div>
        <div className="aspect-w-16 mb-12 aspect-h-9 max-w-4xl mx-auto">
          <iframe
             src={videoUrl}
             title={`Video ${videoUrl?.split('=')[1] || 1}`}
             className="w-full h-[300px] rounded-lg shadow-md"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen>
          </iframe>                       
        </div>
        
        <div className="mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer flex justify-center">
            <div              
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
        </div>
      </div>
      <EUFooter />
    </div>
  );
}

export default ProjectResults;
