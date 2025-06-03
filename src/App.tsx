import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectGallery from "./pages/ProjectGallery";
import Experiences from "./pages/Experiences";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import MechanicalParticles from "./components/MechanicalParticles";
import "./styles/imageProtection.css";

const App = () => (
  <Router>
    <div className="relative min-h-screen bg-professional-gradient overflow-hidden">
      <MechanicalParticles />
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-gallery" element={<ProjectGallery />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  </Router>
);

export default App;
