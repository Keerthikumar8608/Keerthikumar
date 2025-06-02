
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-orbitron font-bold text-gradient mb-4">
            404
          </h1>
          <div className="w-32 h-1 bg-ferrari-gradient mx-auto rounded-full"></div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-ferrari-silver mb-8 leading-relaxed"
        >
          The page you're looking for seems to have vanished into the digital void. 
          Let's get you back on track to explore my engineering portfolio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/" className="ferrari-button inline-flex items-center justify-center group">
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="border-2 border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-ferrari-silver/60 text-sm"
        >
          <p>Error Code: 404 | Path: {location.pathname}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
