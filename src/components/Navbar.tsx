import { useState } from "react";
import { Home, Users, Info, Activity, FileText, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Home Link */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Home size={20} />
            <span>Home</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Links for large screens */}
          <div className="hidden sm:flex space-x-8">
            <NavLinks />
          </div>
        </div>

        {/* Mobile menu (only shows when menuOpen is true) */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col space-y-4 py-4">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
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
    </>
  );
}
