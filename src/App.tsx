import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import About from "./pages/About";
import LocalActivities from "./pages/Media";
import ProjectResults from "./pages/EducationalManual";
import ActivityDetails from "./pages/ActivityDetails";
import ModuleDetails from "./pages/ModuleDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<LocalActivities />} />
          <Route path="/educationalManual" element={<ProjectResults />} />
          <Route path="/activity/:id" element={<ActivityDetails />} />
          <Route path="/module/:id" element={<ModuleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
