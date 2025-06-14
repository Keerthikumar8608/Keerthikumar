import { motion, AnimatePresence } from "framer-motion";
import OptimizedImage from "./OptimizedImage";
import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";

const projects = [
  {
    title: "IoT-Based Energy Meter",
    description: "An innovative IoT-based energy meter system that enables real-time monitoring, data visualization, and smart energy management through cloud integration and mobile connectivity.",
    image: "/i1.png",
    link: "https://github.com/keerthikumar-2003/IOT-based-Energy-Meter",
    technologies: ["IoT", "Arduino", "ESP8266", "Cloud Computing", "Mobile App"],
  },
  {
    title: "Robotic Arm",
    description: "A sophisticated robotic arm project that combines mechanical engineering with advanced control systems, featuring precise movement control and object manipulation capabilities.",
    image: "/robotic-arm-1.png",
    link: "https://github.com/keerthikumar-2003/Robotic-Arm",
    technologies: ["Arduino", "Servo Motors", "3D Printing", "Control Systems"],
  },
  {
    title: "4-Speed Sequential Drift Gearbox",
    description: "A high-performance sequential gearbox designed for drift applications, featuring precise gear engagement and smooth shifting mechanisms.",
    image: "/placeholder.svg",
    link: "#",
    technologies: ["Mechanical Engineering", "CAD", "3D Printing", "Automotive"],
  },
  {
    title: "Project 4",
    description: "🚧 Project Under Development 🚧",
    image: "/placeholder.svg",
    link: "#",
    technologies: ["Coming Soon"],
  },
  {
    title: "Project 5",
    description: "🚧 Project Under Development 🚧",
    image: "/placeholder.svg",
    link: "#",
    technologies: ["Coming Soon"],
  },
  {
    title: "Project 6",
    description: "🚧 Project Under Development 🚧",
    image: "/placeholder.svg",
    link: "#",
    technologies: ["Coming Soon"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-futuristic-navy/30 rounded-lg overflow-hidden shadow-lg hover:shadow-futuristic-cyan/20 transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          priority={index < 2} // Prioritize loading for first two projects
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-futuristic-cyan">
          {project.title}
        </h3>
        <p className="text-futuristic-platinum/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-futuristic-cyan/10 text-futuristic-cyan rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-futuristic-cyan hover:text-futuristic-cyan/80 transition-colors"
        >
          View Project <ArrowUpRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const PersonalProjects = () => {
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-futuristic-cyan">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {memoizedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PersonalProjects; 