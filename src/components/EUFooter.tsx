import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function EUFooter() {
  return (
    <div className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img
            src={"/assets/images/Co-fundedbytheEU.png"}
            alt="EUth Wonders"
            className="h-10 bg-white object-cover mb-2 text-center"
          />
           <img
            src={"/assets/images/cc-by-NC-sa.jpeg"}
            alt="EUth Wonders"
            className="h-14 bg-white object-cover mb-2 text-center"
          />
          <h2 className="text-3xl font-bold text-center mb-8">
            Co-funded by Erasmus+
          </h2>
          <p className="text-center max-w-2xl">
            This project is co-funded by the Erasmus+ Programme of the European
            Union. Project number: 2023-1-DE02-KA210-VET-000151265
          </p>
          <p className="text-center max-w-2xl">
            Funded by the European Union. Views and opinions expressed are however those 
            of the author(s) only and do not necessarily reflect those of the European Union 
            or the European Education and Culture Executive Agency (EACEA). 
            Neither the European Union nor EACEA can be held responsible for them.
          </p>

          {/* Social Media Bar */}
          <div className="flex space-x-6 mt-8">
            <a
              href="https://www.facebook.com/tbgobra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="https://www.instagram.com/tbgobra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLRGtIoZ4RUS2slOc6_SrXVv892sJlRYgu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EUFooter;
