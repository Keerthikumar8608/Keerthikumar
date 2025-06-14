import { motion } from "framer-motion";
import { Award, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Certificates = () => {
  const [expandedCertificate, setExpandedCertificate] = useState<any | null>(null);

  useEffect(() => {
    // Prevent background scrolling when modal is open
    if (expandedCertificate !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedCertificate]);

  // Add ESC key event listener
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expandedCertificate !== null) {
        setExpandedCertificate(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [expandedCertificate]);

  const dassaultCertificates = [
    {
      title: "SOLIDWORKS CAD Design Associate",
      issuer: "Dassault Systèmes",
      date: "2024",
      description: "Earned certification as a SOLIDWORKS CAD Design Associate, demonstrating proficiency in 3D modeling, assemblies, part modifications, and engineering drawings. Gained hands-on experience with parametric design, design intent, and industry-standard CAD practices.",
      skills: ["3D Modeling & Assembly", "Parametric Design", "Engineering Documentation", "Design Intent Implementation"],
      level: "Associate",
      image: "./CAD Design.jpg",
      delay: 0.2
    },
    {
      title: "SOLIDWORKS Additive Manufacturing Associate",
      issuer: "Dassault Systèmes",
      date: "2024",
      description: "Officially certified by Dassault Systèmes upon successfully completing the SOLIDWORKS Additive Manufacturing Associate online academic exam through SOLIDWORKS Corp.",
      skills: ["Additive Manufacturing", "3D Printing Design", "Manufacturing Optimization", "Design for Manufacturing"],
      level: "Associate",
      image: "./Additive Manufacturing.jpg",
      delay: 0.4
    },
    {
      title: "SOLIDWORKS Sustainability Associate",
      issuer: "Dassault Systèmes",
      date: "2024",
      description: "Completed the SOLIDWORKS Sustainability Associate Certification by Dassault Systèmes, gaining knowledge in sustainable design and lifecycle assessment.",
      skills: ["Sustainable Design", "Lifecycle Assessment", "Environmental Impact Analysis", "Green Engineering"],
      level: "Associate",
      image: "./Sustainability.jpg",
      delay: 0.6
    }
  ];

  const nptelCertificates = [
    {
      title: "Product Design and Manufacturing",
      issuer: "NPTEL - IIT Kanpur",
      date: "Jan-Apr 2024",
      description: "Elite certification with 73% score (Assignments: 24.69/25, Exam: 48/75). Among 2952 certified candidates. Enhanced knowledge in product development, manufacturing processes, and design methodologies.",
      skills: ["Product Development", "Manufacturing Processes", "Design Strategy", "Industrial Engineering", "CAD/CAM"],
      level: "Elite",
      image: "./Product Design.jpg",
      delay: 0.2
    },
    {
      title: "Social Innovation in Industry 4.0",
      issuer: "NPTEL - IIT Kanpur",
      date: "Jan-Apr 2024",
      description: "Elite Silver certification in emerging technologies and innovation ecosystems. Focused on leveraging technology for societal impact and industrial transformation.",
      skills: ["Industry 4.0", "Innovation Management", "Technology Integration", "Sustainable Development", "Social Impact"],
      level: "Elite Silver",
      image: "./social.jpg",
      delay: 0.4
    },
    {
      title: "Automation in Production Systems and Management",
      issuer: "NPTEL - IIT Kharagpur",
      date: "Jul-Oct 2024",
      description: "Elite certification with 61% score (Assignments: 22.81/25, Exam: 38.25/75). Among 317 certified candidates. Focused on automation technologies and production management.",
      skills: ["Industrial Automation", "Production Planning", "System Integration", "Process Optimization", "Management Systems"],
      level: "Elite",
      image: "./automation.jpg",
      delay: 0.6
    },
    {
      title: "Advanced Materials and Processes",
      issuer: "NPTEL - IIT Kharagpur",
      date: "Jul-Oct 2024",
      description: "Elite certification with 54% score (Assignments: 21.25/25, Exam: 33/75). Among 139 certified candidates. Studied advanced materials and processing techniques.",
      skills: ["Material Science", "Process Engineering", "Material Testing", "Manufacturing Technology", "Material Analysis"],
      level: "Elite",
      image: "./advance materials.jpg",
      delay: 0.8
    },
    {
      title: "Soft Skills Development",
      issuer: "NPTEL",
      date: "2023",
      description: "Foundation course in professional communication and workplace behavior. Enhanced interpersonal skills and business etiquette.",
      skills: ["Communication", "Professional Etiquette", "Team Collaboration", "Workplace Ethics"],
      level: "Foundation",
      image: "./soft skill.jpg",
      delay: 1.0
    }
  ];

  const eventCertificates = [
    {
      title: "Second Prize - Sustainable Fuel Resources Research",
      issuer: "Anna University Regional Campus, Tirunelveli",
      date: "March 2024",
      description: "Awarded Second Prize at KALAM'24 Science Fair for the paper 'Sustainable Fuel Resources for Diverse Transportation Modes'. Presented research on sustainable transportation solutions to over 50 participants, demonstrating technical expertise and public speaking skills.",
      skills: ["Sustainable Technology", "Research Presentation", "Technical Writing", "Innovation in Transportation"],
      level: "Winner",
      image: "./cert-1.jpg",
      delay: 0.2
    },
    {
      title: "Third Prize - Paper Presentation on BMW Telelever Suspension",
      issuer: "Hindustan College of Engineering and Technology",
      date: "February 2024",
      description: "Secured Third Place for paper presentation on 'BMW Telelever Suspension System' at Vahana V7 national symposium. Participated in hands-on workshops including CNG vehicle technology and reverse engineering of automotive components.",
      skills: ["Automotive Systems", "Technical Analysis", "Mechanical Design", "Vehicle Technology"],
      level: "Winner",
      image: "./cert-2.jpg",
      delay: 0.4
    },
    {
      title: "Second Prize - Paper Presentation on Dodge Challenger",
      issuer: "Hi-Tech Fest 2K23",
      date: "2023",
      description: "Awarded 2nd Prize for Paper Presentation on the Dodge Challenger, recognized as the fastest production car ever made, demonstrating deep understanding of automotive engineering and performance vehicles.",
      skills: ["Performance Engineering", "Automotive Design", "Technical Documentation", "Engineering Analysis"],
      level: "Winner",
      image: "./cert-3.jpg",
      delay: 0.6
    },
    {
      title: "GD&T Certification",
      issuer: "Technical Symposium",
      date: "2023",
      description: "Certified Participant in Geometric Dimensioning and Tolerancing Webinar, gaining insights into precision design and manufacturing principles.",
      skills: ["Precision Engineering", "Manufacturing Standards", "Technical Drawing", "Quality Control"],
      level: "Webinar",
      image: "./cert-5.png",
      delay: 0.8
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional":
        return "text-futuristic-cyan border-futuristic-cyan/30 bg-futuristic-cyan/20";
      case "Advanced":
        return "text-futuristic-magenta border-futuristic-magenta/30 bg-futuristic-magenta/20";
      case "Specialist":
        return "text-futuristic-platinum border-futuristic-platinum/30 bg-futuristic-platinum/20";
      case "Winner":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-400/20";
      case "Elite":
        return "text-futuristic-cyan border-futuristic-cyan/30 bg-futuristic-cyan/20";
      default:
        return "text-futuristic-cyan border-futuristic-cyan/30 bg-futuristic-cyan/20";
    }
  };

  const handleCertificateClick = (certificate: any) => {
    setExpandedCertificate(certificate);
  };

  const handleCloseExpanded = () => {
    setExpandedCertificate(null);
  };

  const renderCertificateCard = (certificate: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: certificate.delay }}
      whileHover={{ scale: 1.02 }}
      onClick={() => handleCertificateClick(certificate)}
      className="glass-card rounded-xl overflow-hidden group hover:border-futuristic-cyan/40 transition-all duration-300 relative cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-48 md:h-64 object-contain bg-black/20 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-futuristic-cyan to-futuristic-magenta opacity-10"></div>
      </div>

      <div className="p-4 md:p-8 relative z-10">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-futuristic-cyan to-futuristic-magenta rounded-full flex items-center justify-center text-futuristic-navy group-hover:glow-cyan"
          >
            <Award className="w-4 h-4 md:w-6 md:h-6" />
          </motion.div>
          <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border ${getLevelColor(certificate.level)}`}>
            {certificate.level}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-futuristic-platinum mb-2 group-hover:text-gradient-cyan transition-colors">
          {certificate.title}
        </h3>

        <div className="flex items-center justify-between mb-3 md:mb-4">
          <p className="text-gradient-cyan font-semibold text-sm md:text-base">
            {certificate.issuer}
          </p>
          <span className="text-futuristic-platinum/70 text-xs md:text-sm">
            {certificate.date}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 md:gap-2 mb-3">
          {certificate.skills.map((skill: string, skillIndex: number) => (
            <span
              key={skillIndex}
              className="px-2 py-1 bg-futuristic-cyan/20 text-futuristic-cyan rounded text-xs font-medium border border-futuristic-cyan/30"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-1.5 text-futuristic-cyan/60 group">
          <span className="text-xs">View More</span>
          <ChevronDown size={14} className={`transition-transform duration-300 group-hover:translate-y-0.5`} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-center mb-6 md:mb-8"
        >
          Professional <span className="text-gradient-cyan">Certificates</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-futuristic-platinum/80 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          Industry-recognized certifications demonstrating expertise in CAD, engineering design, and emerging technologies.
        </motion.p>

        {/* Dassault Systèmes Section */}
        <section className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-space font-bold text-center mb-8 md:mb-12"
          >
            <span className="text-gradient-cyan">Dassault Systèmes</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dassaultCertificates.map((certificate, index) => renderCertificateCard(certificate, index))}
          </div>
        </section>

        {/* NPTEL Section */}
        <section className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-space font-bold text-center mb-8 md:mb-12"
          >
            <span className="text-gradient-cyan">NPTEL</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {nptelCertificates.map((certificate, index) => renderCertificateCard(certificate, index))}
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-space font-bold text-center mb-8 md:mb-12"
          >
            <span className="text-gradient-cyan">Events</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {eventCertificates.map((certificate, index) => renderCertificateCard(certificate, index))}
          </div>
        </section>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="glass-card p-6 md:p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gradient-cyan mb-4 md:mb-6">Certification Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "13+", label: "Total Certificates" },
                { number: "3", label: "Dassault Certifications" },
                { number: "5", label: "NPTEL Courses" },
                { number: "5", label: "Event Participations" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.h4
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                    className="text-2xl md:text-3xl font-space font-bold text-gradient-cyan mb-2"
                  >
                    {stat.number}
                  </motion.h4>
                  <p className="text-futuristic-platinum/80 font-medium text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Expanded Certificate Modal */}
      {expandedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseExpanded}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass-card max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gradient-cyan">{expandedCertificate.title}</h2>
                <button
                  onClick={handleCloseExpanded}
                  className="w-8 h-8 bg-futuristic-magenta rounded-full flex items-center justify-center text-futuristic-navy hover:bg-futuristic-magenta/80 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              
              <img
                src={expandedCertificate.image}
                alt={expandedCertificate.title}
                className="w-full rounded-lg mb-6 object-contain"
              />
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(expandedCertificate.level)}`}>
                  {expandedCertificate.level}
                </span>
                <p className="text-gradient-cyan font-semibold">
                  {expandedCertificate.issuer}
                </p>
                <span className="text-futuristic-platinum/70">
                  {expandedCertificate.date}
                </span>
              </div>
              
              <p className="text-futuristic-platinum/90 leading-relaxed mb-6">
                {expandedCertificate.description}
              </p>
              
              <div>
                <h3 className="text-futuristic-cyan text-lg font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {expandedCertificate.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-futuristic-cyan/20 text-futuristic-cyan rounded-full text-sm font-medium border border-futuristic-cyan/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-futuristic-platinum/60 text-sm">Press ESC to close</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certificates;
