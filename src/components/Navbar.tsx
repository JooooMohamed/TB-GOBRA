import { Link } from "react-router-dom";
import { Home, Users, Activity, FileText, Info } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-secondary"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/partners"
              className="flex items-center space-x-2 text-white hover:text-secondary"
            >
              <Users size={20} />
              <span>Partners</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-white hover:text-secondary"
            >
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link
              to="/media"
              className="flex items-center space-x-2 text-white hover:text-secondary"
            >
              <Activity size={20} />
              <span>Media</span>
            </Link>
            <Link
              to="/educationalManual"
              className="flex items-center space-x-2 text-white hover:text-secondary"
            >
              <FileText size={20} />
              <span>Manual</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
