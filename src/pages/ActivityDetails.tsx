import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EUFooter from "../components/EUFooter";
import ImageModal from "../components/ImageModal";

const activityDetails: Record<
  number,
  {
    title: string;
    Trainers: string;
    Filming: string;
    EditedBy: string;
    description: string;
    images: string[];
    videos: string[];
  }
> = {
  1: {
    title: "Green Agri-Food Production",
    description: `Learn how sustainable farming and eco-conscious food practices can be integrated into teamwork and adult education.`,
    Trainers: `Mahmoud ElSayed`,
    Filming: `Mauri Lähdesmäki`,
    EditedBy: `Media Route`,
    images: [
      "/assets/images/AGRIFOOD/2EDC4FB1-44B8-41D5-AFE6-76051BF99F33.jpg",
      "/assets/images/AGRIFOOD/7c4b0b7e-0542-49c7-9009-adccef0d18a7.jpg",
      "/assets/images/AGRIFOOD/IMG_0244.JPG",
      "/assets/images/AGRIFOOD/IMG_0249.JPG",
      "/assets/images/AGRIFOOD/IMG_0273.JPG",
      "/assets/images/AGRIFOOD/IMG_0340.JPG",
      "/assets/images/AGRIFOOD/IMG_0351.JPG",
      "/assets/images/AGRIFOOD/IMG_0352.JPG",
    ],
    videos: [
      "/assets/images/AGRIFOOD/IMG_0241.MOV",
      "/assets/images/AGRIFOOD/IMG_0255.MOV",
    ],
  },
  2: {
    title: "Sustainable Craft Team Building",
    description: `Discover traditional and sustainable crafts as a way to strengthen team dynamics and creative collaboration.`,
    Trainers: `Fabiola Hernandez Cervantes & Maria Huhmarniemi`,
    Filming: `Mauri Lähdesmäki`,
    EditedBy: `Media Route`,
    images: [
      "/assets/images/CRAFTS/9662badf-97fd-4705-8c5d-134fe67d50d0.jpg",
      "/assets/images/CRAFTS/acb1968b-7461-4f41-9021-c3555ac1844e.jpg",
      "/assets/images/CRAFTS/IMG_0240.JPG",
      "/assets/images/CRAFTS/IMG_0421.JPG",
      "/assets/images/CRAFTS/IMG_0463.JPG",
      "/assets/images/CRAFTS/IMG_0465.JPG",
      "/assets/images/CRAFTS/IMG_0468.JPG",
      "/assets/images/CRAFTS/IMG_0470.JPG",
      "/assets/images/CRAFTS/IMG_0472.JPG",
      "/assets/images/CRAFTS/IMG_0479.JPG",
      "/assets/images/CRAFTS/IMG_0484.JPG",
    ],
    videos: [
      "/assets/images/CRAFTS/IMG_0417.MOV",
      "/assets/images/CRAFTS/IMG_0432.MOV",
    ],
  },
  3: {
    title: "Sustainable Cooking Team Building",
    description: `Explore how cooking together with sustainable ingredients can create strong group cohesion and environmental awareness.`,
    Trainers: `Mariella Segreti, Igor Vitale, Agnese Gobbi`,
    Filming: `Mauri Lähdesmäki`,
    EditedBy: `Media Route`,
    images: [
      "/assets/images/Cookin/IMG-20240922-WA0018.jpg",
      "/assets/images/Cookin/IMG_0021.JPG",
      "/assets/images/Cookin/IMG_0032.JPG",
      "/assets/images/Cookin/IMG_0040.JPG",
      "/assets/images/Cookin/IMG_0047.JPG",
      "/assets/images/Cookin/IMG_0053.JPG",
      "/assets/images/Cookin/IMG_0056.JPG",
      "/assets/images/Cookin/IMG_0068.JPG",
      "/assets/images/Cookin/IMG_0077.JPG",
      "/assets/images/Cookin/IMG_0079.JPG",
      "/assets/images/Cookin/IMG_0239.JPG",
      "/assets/images/Cookin/IMG_0289.JPG",
    ],
    videos: ["/assets/images/Cookin/MVI_0005.MP4"],
  },
  // Add similar objects for other countries
};
function ActivityDetails() {
  const { id } = useParams();
  const numericId = Number(id);

  const details = activityDetails[numericId];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!details) {
    return <div>Activity not found</div>;
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          {details.title}
        </h1>
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            {details.description}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {"Trainer: "}
            {details.Trainers}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {"Filming: "}
            {details.Filming}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {"Edited by: "}
            {details.EditedBy}
          </p>
        </div>

        {/* Images Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        {details.videos && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Video Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.videos.map((videoUrl, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  {videoUrl.includes("youtube.com") ||
                  videoUrl.includes("youtu.be") ? (
                    <iframe
                      src={
                        videoUrl.includes("?")
                          ? `${videoUrl}&autoplay=0`
                          : `${videoUrl}?autoplay=0`
                      }
                      title={`Video ${index + 1}`}
                      className="w-full h-[300px] rounded-lg shadow-md"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={videoUrl}
                      title={`Video ${index + 1}`}
                      className="w-full h-[300px] rounded-lg shadow-md"
                      controls
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageModal
        imageUrl={selectedImage || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <EUFooter />
    </div>
  );
}

export default ActivityDetails;
