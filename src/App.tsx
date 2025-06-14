import { HashRouter as Router } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import Navigation from "./components/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load components with prefetch
const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-futuristic-cyan border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Preload critical routes
const preloadRoutes = () => {
  const routes = [
    () => import("./pages/Index"),
    () => import("./pages/Projects"),
    () => import("./pages/Experiences"),
    () => import("./pages/Certificates"),
    () => import("./pages/Contact")
  ];
  routes.forEach(route => {
    route();
  });
};

// Start preloading after initial render
if (typeof window !== 'undefined') {
  window.requestIdleCallback(() => {
    preloadRoutes();
  });
}

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <LazyMotion features={domAnimation}>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </LazyMotion>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-futuristic-navy to-futuristic-navy/90 text-futuristic-platinum relative overflow-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-futuristic-cyan/5 via-transparent to-transparent pointer-events-none" />
        <Navigation />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
