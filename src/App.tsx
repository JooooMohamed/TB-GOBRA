import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import About from "./pages/About";
import LocalActivities from "./pages/LocalActivities";
import ProjectResults from "./pages/ProjectResults";
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
          <Route path="/local-activities" element={<LocalActivities />} />
          <Route path="/project-results" element={<ProjectResults />} />
          <Route path="/activity/:country" element={<ActivityDetails />} />
          <Route path="/module/:id" element={<ModuleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
