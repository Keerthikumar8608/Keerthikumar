import { motion } from "framer-motion";
import { MapPin, Calendar, Building } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      title: "In-Plant Training",
      company: "DICV-Daimler India Commercial Vehicles",
      location: "Chennai, India",
      duration: "December 2024 - January 2025",
      description: "Gained hands-on exposure to the Heavy-Duty Truck (HDT) chassis line, analyzing production efficiency, assembly operations, and workflow. Observed key systems like powertrain, braking, and transmissions, as well as welding techniques and robotic painting. Learned lean manufacturing practices including Kaizen, 5S, and takt time.",
      technologies: [
        "Powertrain & Transmission Systems",
        "Assembly Line & Production Analysis",
        "Lean Manufacturing",
        "Automation & Robotics",
        "Quality Control & Inspection"
      ],
      image: "/Daimler.jpg",
      delay: 0.2
    },
    {
      title: "Mahindra XUV 3XO R&D Workshop",
      company: "Mahindra Research Valley – R&D Center",
      location: "Chennai, India",
      duration: "June 2024",
      description: "Attended an exclusive workshop organized by Motor Vikatan and Mahindra, exploring advanced R&D labs including Powertrain Testing, Design & Simulation, Fatigue Testing, and EV Development. Delivered a featured talk on NVH research, which was later published on YouTube, and engaged with Mahindra's R&D team to gain real-world insights into automotive innovation and validation.",
      technologies: [
        "Powertrain Testing",
        "NVH Analysis",
        "Electric Vehicle Systems",
        "Fatigue Testing",
        "Design & Simulation",
        "Automotive R&D Exposure"
      ],
      image: "/Mahindra.jpg",
      delay: 0.4
    },
    {
      title: "Automobile Engineering Workshops – Vahana V7 & Eicher Training Center",
      company: "Eicher Motors Ltd.",
      location: "Coimbatore, India",
      duration: "February 2024",
      description: "Participated in the National Level Technical Symposium \"Vahana V7\" and workshops at the Eicher Training Center, including a focused session on CNG vehicle technology. Gained practical knowledge of CNG systems, braking, steering, instrument consoles, differentials, and Eicher's electronic architecture through hands-on exploration of cut-section models.",
      technologies: [
        "CNG Vehicle Technology",
        "Braking & Steering Systems",
        "Instrument Console & Differentials",
        "Electronic Vehicle Architecture",
        "Practical Automotive Systems Observation"
      ],
      image: "/Eicher.jpg",
      delay: 0.6
    },
    {
      title: "Reverse Engineering Event Coordinator",
      company: "National Engineering College",
      location: "Kovilpatti, India",
      duration: "23rd March 2024",
      description: "Our team organized the Reverse Engineering event at National Engineering College's symposium, where we disassembled, cleaned, and reassembled XL100 and Max100 motorcycles. This hands-on work enhanced our technical skills and understanding of mechanical components. Coordinating the event also strengthened our teamwork and leadership while guiding participants through the process.",
      technologies: [
        "Reverse Engineering",
        "Mechanical Assembly & Disassembly",
        "Hands-on Technical Skills",
        "Event Coordination",
        "Team Leadership"
      ],
      image: "/reverse.jpeg",
      delay: 0.8
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 pt-32 pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-space font-bold text-center mb-8"
        >
          Professional <span className="text-gradient-cyan">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-futuristic-platinum/80 text-center mb-16 max-w-3xl mx-auto"
        >
          My journey through industry experiences, internships, and professional workshops that shaped my engineering career.
        </motion.p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-futuristic-cyan shadow-[0_0_10px_#00FFFF]"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 1 || index === 3 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: experience.delay }}
              className={`relative flex items-center mb-12 ${
                index === 1 || index === 3 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                index === 1 || index === 3 ? "md:text-left md:pl-8" : "md:text-left md:pl-8"
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8 rounded-xl hover:border-futuristic-cyan/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-futuristic-cyan to-futuristic-magenta opacity-20"></div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-futuristic-cyan mr-2" />
                    <h3 className="text-gradient-cyan font-bold text-lg">{experience.company}</h3>
                  </div>
                  
                  <h4 className="text-futuristic-platinum font-semibold text-2xl mb-4">{experience.title}</h4>
                  
                  <div className="flex items-center text-futuristic-platinum/80 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                  
                  <div className="flex items-center text-futuristic-platinum/80 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  
                  <p className="text-futuristic-platinum/80 leading-relaxed mb-6">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-futuristic-cyan/20 text-futuristic-cyan rounded-full text-sm font-medium border border-futuristic-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-futuristic-cyan rounded-full border-4 border-futuristic-navy glow-cyan"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experiences;
