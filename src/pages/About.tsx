import { FaLeaf, FaSeedling, FaUtensils } from "react-icons/fa";
import EUFooter from "../components/EUFooter";

const AboutPage = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-50">
        {/* Intro Paragraph */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            About TB-GOBRA
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            TB-GOBRA stands for Team Building through Green Values in
            Sustainable Crafting, Cooking, and Agri-Food Production. The project
            aims to enhance collaboration and team spirit through
            environmentally sustainable practices. By integrating crafting,
            cooking, and agri-food production into educational settings, we
            provide practical, eco-conscious activities that foster both skills
            development and green awareness.
          </p>
        </div>

        {/* Section 1: Project Objectives */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Project Objectives
          </h3>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>🌱 Promote team-building using sustainable practices</li>
            <li>
              👐 Strengthen fine motor skills, collaboration, and environmental
              responsibility
            </li>
            <li>
              🌍 Introduce eco-friendly traditions and crafts suitable for
              diverse learners
            </li>
            <li>
              📚 Equip educators with practical tools for teaching
              sustainability
            </li>
          </ul>
        </div>

        {/* Section 2: Key Themes of the Project */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Key Themes of the Project
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaLeaf className="text-primary text-6xl mb-4 mx-auto w-24" />
              <h4 className="text-xl font-semibold mb-2">
                Green Agri-Food Production
              </h4>
              <p className="text-gray-600">
                Promoting eco-friendly agriculture for sustainable food
                production.
              </p>
            </div>
            <div className="text-center">
              <FaSeedling className="text-primary text-6xl mb-4 mx-auto w-24" />
              <h4 className="text-xl font-semibold mb-2">
                Sustainable Craft Team Building
              </h4>
              <p className="text-gray-600">
                Encouraging creativity through sustainable crafting methods.
              </p>
            </div>
            <div className="text-center">
              <FaUtensils className="text-primary text-6xl mb-4 mx-auto w-24" />
              <h4 className="text-xl font-semibold mb-2">
                Sustainable Cooking Team Building
              </h4>
              <p className="text-gray-600">
                Building collaboration through eco-friendly cooking activities.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Project Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Project Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="max-w-6xl mx-auto  bg-white rounded-lg shadow-md overflow-hidden">
              <div className=" gap-8 cursor-pointer">
                <div className="text-center mb-8">
                  <img
                    src={"/assets/images/EUW-Logo.svg"}
                    alt="EUth Wonders"
                    className="w-full h-48 object-cover mb-2"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    EUth Wonders (Germany)
                  </h4>
                  <p className="text-gray-600">
                    Lead partner; coordination, training & dissemination.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto  bg-white rounded-lg shadow-md overflow-hidden">
              <div className=" gap-8 cursor-pointer ">
                <div className="text-center ">
                  <img
                    src={"/assets/images/Lapin.png"}
                    alt="University of Lapland"
                    className="w-full h-48 object-cover mb-2"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    University of Lapland (Finland)
                  </h4>
                  <p className="text-gray-600">
                    Crafting methodology & research partner.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto  bg-white rounded-lg shadow-md overflow-hidden">
              <div className=" gap-8 cursor-pointer">
                <div className="text-center">
                  <img
                    src={"/assets/images/logo-igor-vitale.jpg"}
                    alt="IVI"
                    className="w-full h-48 object-cover mb-2"
                  />
                  <h4 className="text-xl font-semibold mb-2">IVI (Italy)</h4>
                  <p className="text-gray-600">
                    Cooking training and evaluation; developed the sustainable
                    cooking module.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Project Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Project Timeline
          </h3>
          <ul className="text-lg text-gray-700 space-y-4">
            <li>🗓️ November 2023 – Project Launch</li>
            <li>🗓️ 2023-2024 – Workshops & Module Development</li>
            <li>🗓️ September 2024 – Pilot Implementation & Video Production</li>
            <li>
              🗓️ April 2025 – Final Event in Bonn + Website & Manual Publication
            </li>
          </ul>
        </div>
      </section>
      <EUFooter />
    </div>
  );
};

export default AboutPage;
