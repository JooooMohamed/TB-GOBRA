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
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400",
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/M7lc1UVf-VE",
    ],
  },
  2: {
    title: "Sustainable Craft Team Building",
    description: `Discover traditional and sustainable crafts as a way to strengthen team dynamics and creative collaboration.`,
    Trainers: `Fabiola Hernandez Cervantes & Maria Huhmarniemi`,
    Filming: `Mauri Lähdesmäki`,
    EditedBy: `Media Route`,
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400",
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/M7lc1UVf-VE",
    ],
  },
  3: {
    title: "Sustainable Cooking Team Building",
    description: `Explore how cooking together with sustainable ingredients can create strong group cohesion and environmental awareness.`,
    Trainers: `Mariella Segreti, Igor Vitale, Agnese Gobbi`,
    Filming: `Mauri Lähdesmäki`,
    EditedBy: `Media Route`,
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400",
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/M7lc1UVf-VE",
    ],
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
