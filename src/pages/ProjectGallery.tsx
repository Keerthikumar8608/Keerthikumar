import { motion } from "framer-motion";
import ProjectGalleryBlock from "../components/ProjectGalleryBlock";

const ProjectGallery = () => {
  const collegeProjects = [
    {
      title: "5-Axis Robotic Arm – Prototype Development",
      coverImage: "./r2.png",
      images: [
        {
          url: "./r2.png",
          caption: "5-Axis Robotic Arm Design"
        }
      ]
    },
    {
      title: "IoT-Enhanced Smart Energy and Remote Management Solution",
      coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      images: []
    },
    {
      title: "Fire-Fighting Robot with Dual Control",
      coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      images: []
    },
    {
      title: "CFD Analysis of Heat Transfer Enhancement Using Two Fluidic Oscillators",
      coverImage: "https://images.unsplash.com/photo-1581093458791-9d42aed2af6b",
      images: []
    },
    {
      title: "Redesign and 3D Printing of Drone T-Joint",
      coverImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
      images: []
    },
    {
      title: "Design and Development of Custom Macro Keypad (MarcoPad)",
      coverImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      images: []
    }
  ];

  const personalProjects = [
    {
      title: "Red9 Inspired CAD Model",
      coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      images: []
    },
    {
      title: "4-Speed Sequential Drift Gearbox",
      coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      images: []
    },
    {
      title: "HDT Truck Chassis",
      coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      images: []
    },
    {
      title: "Lightweight Racing Drone",
      coverImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      images: []
    },
    {
      title: "Electric Vehicle Conversion Kit",
      coverImage: "https://images.unsplash.com/photo-1593941707874-ef2d9c58601a",
      images: []
    },
    {
      title: "Modular Tool Storage System",
      coverImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3",
      images: []
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-center mb-6 md:mb-8"
        >
          Project <span className="text-gradient-cyan">Gallery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-lg md:text-xl text-futuristic-platinum/80 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          Explore detailed images and documentation from my engineering projects
        </motion.p>

        {/* College Projects Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-2 h-12 bg-gradient-to-b from-futuristic-cyan to-futuristic-blue rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-space font-bold">
                College <span className="text-gradient-cyan">Projects</span>
              </h2>
            </div>
            <p className="mt-4 ml-6 text-futuristic-platinum/80 text-lg">
              Academic projects showcasing engineering excellence and innovation
            </p>
          </motion.div>
          <div className="space-y-4">
            {collegeProjects.map((project, index) => (
              <ProjectGalleryBlock
                key={index}
                title={project.title}
                coverImage={project.coverImage}
                images={project.images}
                category="college"
              />
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-2 h-12 bg-gradient-to-b from-futuristic-cyan to-futuristic-blue rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-space font-bold">
                Personal <span className="text-gradient-cyan">Projects</span>
              </h2>
            </div>
            <p className="mt-4 ml-6 text-futuristic-platinum/80 text-lg">
              Self-driven projects exploring mechanical design and engineering
            </p>
          </motion.div>
          <div className="space-y-4">
            {personalProjects.map((project, index) => (
              <ProjectGalleryBlock
                key={index}
                title={project.title}
                coverImage={project.coverImage}
                images={project.images}
                category="personal"
              />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectGallery; 