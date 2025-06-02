import { motion } from "framer-motion";
import { ArrowRight, Award, GraduationCap, Briefcase, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Sustainable Fuel Resources for Future Transportation",
      description: "Awarded 2nd prize at Anna University Tirunelveli for research on innovative sustainable fuels for future transportation.",
      delay: 0.2
    },
    {
      icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "SolidWorks CAD Design Associate Certification",
      description: "Certified SolidWorks CAD Design Associate with proven skills in 3D modeling, assembly, and technical drawing creation.",
      delay: 0.4
    },
    {
      icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />,
      title: "In-Plant Training at Daimler",
      description: "In-plant trainee at Daimler India, gained hands-on experience in heavy-duty truck assembly, welding, robotic painting, and lean manufacturing.",
      delay: 0.6
    }
  ];

  const educationTimeline = [
    {
      year: "2022-2026",
      degree: "B.E. Mechanical Engineering",
      institution: "National Engineering College",
      grade: "CGPA: 7.5/10",
      delay: 0.3
    },
    {
      year: "2020-2022",
      degree: "Higher Secondary Education",
      institution: "Kalaimagal Vidhya Mandhir Matric Hr Sec School",
      grade: "Percentage: 70%",
      delay: 0.5
    },
    {
      year: "2019-2020",
      degree: "SSLC",
      institution: "Kalaimagal Vidhya Mandhir Matric Hr Sec School",
      grade: "Percentage: 65%",
      delay: 0.7
    }
  ];

  const handlePortfolioDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/portfolio.pdf'; // You'll need to add this file to your public folder
    link.download = 'Keerthi_Kumar_M_Design_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 pt-16"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-5xl font-space font-bold mb-6 text-justify"
              >
                <span className="text-futuristic-platinum font-bold text-4xl md:text-6xl">Keerthi Kumar M</span>
                <br />
                <span className="text-gradient-cyan glow-cyan font-bold text-2xl md:text-4xl">Mechanical Engineer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-futuristic-platinum/80 mb-8 leading-relaxed font-thin italic text-base md:text-lg"
              >
                "Design isn't just drafting lines — it's a holistic journey weaving user experience, manufacturing, logistics, and real-world impact into every detail. With the entire lifecycle in mind, concepts evolve into meaningful, living products."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="futuristic-button inline-flex items-center justify-center group">
                  <Download className="mr-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </button>
                <button 
                  onClick={handlePortfolioDownload}
                  className="futuristic-button-outline inline-flex items-center justify-center"
                >
                  Download Portfolio
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - About Me with Picture */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden border-4 border-futuristic-cyan animate-glow-cyan"
                >
                  <img 
                    src="/keerthi.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-2xl md:text-3xl font-space font-bold mb-4 text-gradient-cyan text-center"
                >
                  About Me
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-futuristic-platinum/80 leading-relaxed text-sm md:text-base font-light text-justify"
                >
                  Mechanical Engineering student passionate about automotive design, motorsport innovation, and future-focused engineering. Certified SolidWorks Associate with hands-on experience at Daimler India (DICV). Experienced in projects spanning product development, research, mechatronics, automation, and energy. Skilled in leadership, communication, and public speaking—turning bold ideas into impactful, user-centered designs.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-center mb-12 md:mb-16"
          >
            Featured <span className="text-gradient-cyan">Highlights</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: achievement.delay }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 md:p-8 rounded-xl text-center group hover:border-futuristic-cyan/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-futuristic-cyan rounded-full flex items-center justify-center text-futuristic-navy group-hover:animate-glow-cyan"
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-futuristic-platinum mb-3 md:mb-4">{achievement.title}</h3>
                <p className="text-sm md:text-base text-futuristic-platinum/70">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-center mb-12 md:mb-16"
          >
            Education <span className="text-gradient-cyan">Journey</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-futuristic-cyan"></div>
            
            {educationTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                className={`relative flex items-center mb-8 md:mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-4 md:pr-8" : "text-left pl-4 md:pl-8"}`}>
                  <div className="glass-card p-4 md:p-6 rounded-xl">
                    <h3 className="text-futuristic-cyan font-bold text-base md:text-lg mb-2">{item.year}</h3>
                    <h4 className="text-futuristic-platinum font-semibold text-lg md:text-xl mb-2">{item.degree}</h4>
                    <p className="text-futuristic-platinum/70 mb-2 text-sm md:text-base">{item.institution}</p>
                    <p className="text-futuristic-magenta font-semibold glow-magenta text-sm md:text-base">{item.grade}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-futuristic-cyan rounded-full border-4 border-futuristic-navy animate-glow-cyan"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Index;
