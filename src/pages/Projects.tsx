import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import OptimizedImage from "../components/OptimizedImage";
import ProjectImageGallery from "../components/ProjectImageGallery";

interface ProjectImage {
  url: string;
  caption: string;
}

interface BaseProject {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  delay: number;
  projectImages?: ProjectImage[];
}

interface CollegeProject extends BaseProject {
  teamMembers: string;
  completion: string;
  links?: {
    design: string;
    simulation: string;
  };
  role: string;
  mentor?: string;
}

interface PersonalProject extends BaseProject {
  teamMembers?: string;
  completion?: string;
  links?: {
    design?: string;
    simulation?: string;
  };
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const collegeProjects: CollegeProject[] = [
    {
      title: "5-Axis Robotic Arm – Prototype Development",
      description: "Led the development of a fully functional 5-axis robotic arm as Team Lead, focusing on precise multi-directional motion control and complete prototype development cycle.",
      fullDescription: "As Team Lead, I successfully guided our team in designing and developing a fully functional 5-axis robotic arm capable of precise, multi-directional motion for applications in automation, research, and assembly. The project covered the complete development cycle from concept to working prototype.\n\nKey Highlights:\n• Led the overall system design and team coordination throughout development\n• Created 3D CAD models using SolidWorks and validated performance through simulation\n• Fabricated mechanical parts via 3D printing for lightweight, cost-effective assembly\n• Integrated electronics using Arduino, servo motors, and custom circuitry\n• Conducted full system assembly and functional testing for accuracy and reliability\n• Collaborated effectively as a team throughout design, integration, and validation\n\nNote: You can check my LinkedIn profile for simulation and render models.",
      technologies: [
        "SolidWorks CAD & Simulation",
        "3D Printing",
        "Arduino",
        "Prototyping",
        "Mechanical-Electronics Integration"
      ],
      image: "./r2.png",
      delay: 0.2,
      teamMembers: "Keerthi Kumar M (Team Lead) | Johanan S A | Prabod Arjun Kumar S | Maha Naveen Kumar K",
      completion: "October 2024",
      links: {
        design: "https://l1nk.dev/JnaVM",
        simulation: "https://l1nk.dev/gsyUb"
      },
      role: "Team Lead",
      mentor: "Dr. Veera Ajay",
      projectImages: [
        {
          url: "./r2.png",
          caption: "5-Axis Robotic Arm - Front View"
        },
        {
          url: "./r1.png",
          caption: "5-Axis Robotic Arm - Side View"
        },
        {
          url: "./r3.png",
          caption: "5-Axis Robotic Arm - Detailed View"
        }
      ]
    },
    {
      title: "IoT-Enhanced Smart Energy and Remote Management Solution",
      description: "Led the development of a smart energy monitoring system as Team Lead, implementing IoT technology for real-time tracking and remote infrastructure management.",
      fullDescription: "As Team Lead, I spearheaded the development of a smart energy monitoring and remote control system tailored for industrial applications. Our team successfully implemented IoT technology, enabling real-time energy tracking, cloud-based analytics, and remote infrastructure management, promoting efficiency, predictive maintenance, and sustainability in industrial settings.\n\nKey Highlights:\n• Led project planning and team coordination for successful implementation\n• Selected IoT-compatible sensors, ESP32, and RTC module for reliable electronics integration\n• Designed and validated circuit layout with 3D modeling for precise component fit\n• Procured quality electronic parts suitable for industrial applications\n• Performed thermal and dimensional analysis to ensure heat management and proper casing fit\n• Created CAD models for PCB mounting and durable acrylic/3D printed enclosure\n• Optimized component placement for efficient layout and interference reduction\n• Assembled and tested the complete system with integrated IoT control and mobile app\n\nNote: You can check my LinkedIn profile for simulation and render models.",
      technologies: [
        "ESP32",
        "Firebase",
        "Energy Metering Sensors",
        "Acrylic Laser Cutting",
        "3D Printing"
      ],
      image: "/reverse.jpeg",
      delay: 0.3,
      teamMembers: "Keerthi Kumar M (Team Lead) | Kajenthira S | Naveen Raja T",
      completion: "April 2024",
      mentor: "Ms. K.R. Indira, M.E.",
      role: "Team Lead",
      projectImages: []
    },
    {
      title: "Fire-Fighting Robot with Dual Control",
      description: "Led the development of an autonomous fire-fighting robot as Team Lead, successfully integrating flame detection, water spraying mechanisms, and dual-mode control system.",
      fullDescription: "As Team Lead, I successfully led the design and development of a fire-fighting robot with both autonomous and manual control modes. Our team created a sophisticated system capable of detecting and extinguishing flames, integrating sensor-based fire detection, precise water spraying mechanisms, and Bluetooth-enabled remote control, culminating in a fully functional prototype.\n\nKey Highlights:\n• Led system architecture design and team coordination for project completion\n• Developed dual-mode control (autonomous + manual) using Arduino Nano\n• Designed a custom circuit on preboard integrating all modules and sensors\n• Integrated IR flame sensor for fire detection with fast response programming in C\n• Used a 5V water pump with relay control and servo motor for directional spraying\n• Enabled vehicle motion using 4 BO motors controlled via motor driver\n• Powered the entire system with an 11.2V source and regulated using a buck converter\n• Achieved Bluetooth-based control for remote manual operation\n\nNote: You can check my LinkedIn profile for circuit designs, hardware setup, and video demonstrations.",
      technologies: [
        "Arduino Nano",
        "Embedded C",
        "IR Flame Sensor",
        "Servo Motor",
        "Bluetooth Module",
        "Relay Module"
      ],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      delay: 0.4,
      teamMembers: "Keerthi Kumar M (Team Lead) | Mithunbharathi M | Deepakkumar M",
      completion: "March 2024",
      mentor: "Dr. Iyah Raja S., Head of the Department, Mechanical Engineering",
      role: "Team Lead",
      projectImages: []
    },
    {
      title: "CFD Analysis of Heat Transfer Enhancement Using Two Fluidic Oscillators in ANSYS Fluent",
      description: "Investigated thermal and flow characteristics of a two-feedback-channel fluidic oscillator using CFD simulations in ANSYS Fluent, focusing on heat transfer enhancement through self-sustaining oscillations.",
      fullDescription: "This project investigates the thermal and flow characteristics of a two-feedback-channel fluidic oscillator using CFD simulations in ANSYS Fluent. The oscillator, designed with no moving parts, utilizes the Coandă effect and vortex dynamics to create self-sustaining oscillations that enhance heat transfer. CAD models were developed in SolidWorks and tested with transient simulations to analyze the performance under varying geometric parameters and boundary conditions using water as the working fluid.\n\nKey Highlights:\n• Designed and optimized a no-moving-part fluidic oscillator based on the Coandă effect.\n• Modeled various geometries using SolidWorks and evaluated them using CFD in ANSYS Fluent.\n• Demonstrated heat transfer enhancement and efficient turbulent flow through oscillatory jets.\n• Achieved effective oscillation stability and validated pressure, velocity, and thermal gradients.\n• Applied SST k-ω turbulence model for precise simulation of complex flow dynamics.",
      technologies: [
        "ANSYS Fluent",
        "SolidWorks",
        "CFD Analysis",
        "SST k-ω Model",
        "Heat Transfer",
        "Mesh Generation"
      ],
      image: "https://images.unsplash.com/photo-1581093458791-9d42aed2af6b",
      delay: 0.5,
      teamMembers: "Keerthi Kumar M",
      completion: "February 2024",
      role: "Individual Project",
      mentor: "Mr. B Prince Abraham",
      projectImages: []
    },
    {
      title: "Redesign and 3D Printing of Drone T-Joint for Enhanced Landing Stability",
      description: "Led the redesign and rapid prototyping of a critical T-joint component for a 3 kg-payload agricultural drone, ensuring structural integrity and flight safety.",
      fullDescription: "This project involved the redesign and rapid prototyping of a structurally compromised T-joint in the landing gear of a 3 kg-payload agricultural drone, originally developed by a senior in our department. The existing joint had been temporarily fixed with adhesive, posing a high risk of mechanical failure. As the drone pilot and lead design engineer, I initiated a complete redesign of the component to restore and enhance its structural integrity.\n\nKey Contributions:\n• Reverse-engineered the damaged T-joint using precision measurements with a vernier caliper\n• Designed the replacement part in SolidWorks and conducted structural analysis using ANSYS\n• Optimized the joint for load-bearing capacity, durability, and manufacturability\n• Rapidly prototyped the component using PLA material through 3D printing\n• Successfully integrated and tested the redesigned joint in live drone operation\n\nThe new T-joint performed successfully, enabling a stable and safe drone flight during our college's Sports Day demonstration.\n\nNote: Detailed CAD designs, ANSYS simulation results, and project documentation are available in the project gallery. For additional technical details and engineering analysis, please visit my LinkedIn profile.",
      technologies: [
        "SolidWorks CAD",
        "ANSYS Simulation",
        "3D Printing (PLA)",
        "Dimensional Analysis",
        "Reverse Engineering"
      ],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
      delay: 0.5,
      teamMembers: "Keerthi Kumar M (Lead Design Engineer & Drone Pilot)",
      completion: "February 2024",
      role: "Lead Design Engineer",
      projectImages: [],
      links: {
        design: "https://www.linkedin.com/in/keerthikumar-m/",
        simulation: "https://www.linkedin.com/in/keerthikumar-m/"
      }
    },
    {
      title: "Design and Development of a Custom Macro Keypad (MarcoPad)",
      description: "MarcoPad is a compact, programmable macro keypad built using Raspberry Pi Pico, aimed at improving productivity for developers, editors, and gamers. It features 12 3D-printed tactile buttons, a rotary encoder, and a mode switch for multi-profile support.",
      fullDescription: "MarcoPad is a compact, programmable macro keypad built using Raspberry Pi Pico, aimed at improving productivity for developers, editors, and gamers. It features 12 3D-printed tactile buttons, a rotary encoder, and a mode switch for multi-profile support. Housed in a SolidWorks-designed acrylic enclosure, the device uses MicroPython and USB HID to function as a customizable plug-and-play keyboard.\n\nKey Highlights:\n• Designed for professionals — ideal for coding, media editing, streaming, and multitasking\n• 12 fully programmable, 3D-printed tactile keys for custom shortcuts\n• Rotary encoder for precise scroll/volume control and multi-profile switching via mode button\n• Custom-designed PCB for optimized layout and compact integration\n• Firmware developed in MicroPython with real-time USB HID emulation\n• Enclosure modeled in SolidWorks and fabricated using laser-cut acrylic sheets",
      technologies: [
        "Raspberry Pi Pico",
        "MicroPython",
        "SolidWorks",
        "PCB Design",
        "3D Printing",
        "USB HID Protocol"
      ],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      delay: 0.6,
      teamMembers: "Keerthi Kumar M",
      completion: "February 2024",
      role: "Individual Project",
      mentor: "Ms. K.R. Indira, M.E.",
      projectImages: []
    }
  ];

  const personalProjects: PersonalProject[] = [
    {
      title: "Ferrari 812 Superfast – OEM Rim Design & Structural Evaluation",
      description: "A comprehensive design and engineering analysis project focused on the OEM rim of the Ferrari 812 Superfast, combining aesthetic design with mechanical performance evaluation.",
      fullDescription: "A comprehensive design and engineering analysis project focused on the OEM rim of the Ferrari 812 Superfast. The project combined aesthetic design with mechanical performance evaluation, using industry-standard tools to assess the rim's strength, safety, and real-world reliability under high-performance conditions.\n\nKey Highlights:\n• Designed an aerodynamic 20-inch rim preserving Ferrari's style using hand sketches.\n• Created an accurate 3D model in SolidWorks focusing on form and function.\n• Generated photorealistic renders with SolidWorks Visualize.\n• Performed structural analysis using ANSYS to ensure durability.\n• Results showed minimal deformation (0.178 mm) and low stress (35 MPa).\n• Optimized design for improved handling, cornering, and stability.\n\nCritical Findings from the Static Structural Analysis:\nThe Ferrari 812 Superfast rim exhibits outstanding structural integrity under realistic loads, with maximum deformation limited to 0.178 mm and peak Von Mises stress of 35 MPa—significantly below the alloy's yield strength(6061-T6 Aluminum Alloy). Stress concentrations at lug holes and spokes indicate optimized load distribution, while minimal elastic strain confirms material durability. This robust design ensures exceptional stiffness and strength, directly enhancing cornering precision, high-speed stability, and consistent tire contact for superior handling performance.",
      technologies: [
        "SolidWorks CAD",
        "SolidWorks Visualize",
        "ANSYS FEA",
        "6061-T6 Aluminum",
        "Structural Analysis"
      ],
      image: "/p1.png",
      delay: 0.2,
      projectImages: [
        {
          url: "/p1.png",
          caption: "Ferrari 812 Superfast Rim - Main Render"
        },
        {
          url: "/p2.png",
          caption: "Structural Analysis - Von Mises Stress Distribution"
        },
        {
          url: "/p3.png",
          caption: "Deformation Analysis Results"
        },
        {
          url: "/p4.png",
          caption: "Design Evolution and Optimization Process"
        }
      ]
    },
    {
      title: "Red 9-Inspired Conceptual CAD Model",
      description: "This project is a conceptual CAD model inspired by the iconic Red 9 Mauser C96 pistol from World War I, combining historical accuracy with modern design visualization.",
      fullDescription: "This project is a conceptual CAD model inspired by the iconic Red 9 Mauser C96 pistol from World War I. Starting with hand sketches based on the original Red 9 Mauser C96 pistol's dimensions, I developed a detailed 3D model in SolidWorks, focusing on the unique aesthetics and proportions of the Red 9. The final renders were created using SolidWorks Visualize, highlighting the design's form and surface details. This work helped me enhance my skills in concept design, 3D modeling, and visualization.\n\nKey Highlights:\n• Conceptual design inspired by a historically significant firearm\n• Hand-sketching combined with precise CAD modeling\n• Accurate dimension referencing from original Red 9 pistol\n• Detailed 3D modeling focusing on aesthetics and mechanical structure\n• High-quality rendering using SolidWorks Visualize\n• Enhanced skills in design translation and visualization",
      technologies: [
        "SolidWorks CAD",
        "SolidWorks Visualize",
        "Concept Development"
      ],
      image: "/g1.png",
      delay: 0.2,
      projectImages: [
        {
          url: "/g1.png",
          caption: "Red 9 Conceptual Model - Main View"
        },
        {
          url: "/g2.png",
          caption: "Red 9 Model - Side Profile"
        },
        {
          url: "/g3.png",
          caption: "Red 9 Model - Detail View"
        },
        {
          url: "/g4.png",
          caption: "Red 9 Model - Mechanism Detail"
        },
        {
          url: "/g5.png",
          caption: "Red 9 Model - Exploded View"
        },
        {
          url: "/g6.png",
          caption: "Red 9 Model - Assembly View"
        },
        {
          url: "/g7.png",
          caption: "Red 9 Model - Final Render"
        }
      ]
    },
    {
      title: "4-Speed Sequential Drift Gearbox",
      description: "High-performance transmission system designed for motorsport applications.",
      fullDescription: "Engineered a lightweight 4-speed sequential gearbox specifically designed for drift racing applications. The transmission features quick-shift capabilities, reinforced internals for high-torque applications, and optimized gear ratios for drift performance. Includes detailed stress analysis and weight optimization.",
      technologies: ["CATIA", "ANSYS", "Mechanical Design"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      delay: 0.3,
      projectImages: []
    },
    {
      title: "HDT Truck Chassis",
      description: "Heavy-duty truck chassis design optimized for load distribution and durability.",
      fullDescription: "Comprehensive design of a heavy-duty truck chassis capable of handling extreme loads while maintaining structural integrity. The design incorporates advanced materials, optimized cross-sections, and strategic reinforcement placement. Extensive FEA analysis ensures safety margins under all operating conditions.",
      technologies: ["SolidWorks", "FEA Analysis", "Material Science"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      delay: 0.4,
      projectImages: []
    },
    {
      title: "Lightweight Racing Drone",
      description: "Aerodynamic drone design focused on efficiency and extended flight time.",
      fullDescription: "Custom-designed racing drone frame optimized for minimal weight and maximum aerodynamic efficiency. The design features carbon fiber construction, optimized motor mounting, and integrated cooling channels. CFD analysis was used to minimize drag and improve stability at high speeds.",
      technologies: ["CATIA", "CFD Analysis", "Composite Materials"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      delay: 0.5
    },
    {
      title: "Modular Tool Storage System",
      description: "Customizable workshop organization system with modular components.",
      fullDescription: "Innovative modular tool storage system designed for workshop efficiency and organization. Features interchangeable components, scalable design, and optimized space utilization. The system can be configured for different workshop sizes and tool requirements, with easy reconfiguration capabilities.",
      technologies: ["Product Design", "Modular Systems", "Ergonomics"],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3",
      delay: 0.7
    }
  ];

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedProject(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    // Initialize intersection observer for image lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              setLoadedImages(prev => new Set(prev).add(img.dataset.src!));
              observerRef.current?.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Prevent background scrolling when modal is open
    if (expandedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedProject]);

  // Function to handle image loading
  const handleImageRef = (image: HTMLImageElement | null) => {
    if (image && observerRef.current && image.dataset.src) {
      observerRef.current.observe(image);
    }
  };

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  };

  const handleKnowMore = (index: number, section: 'college' | 'personal') => {
    const projectIndex = section === 'college' ? index : index + collegeProjects.length;
    setExpandedProject(projectIndex);
  };

  const handleCloseExpanded = () => {
    setExpandedProject(null);
    setCurrentImageIndex(0);
  };

  const getExpandedProject = () => {
    if (expandedProject === null) return null;
    if (expandedProject < collegeProjects.length) {
      return { ...collegeProjects[expandedProject], section: 'college' };
    } else {
      return { ...personalProjects[expandedProject - collegeProjects.length], section: 'personal' };
    }
  };

  const handleNextImage = () => {
    const project = getExpandedProject();
    if (project && project.projectImages) {
      setCurrentImageIndex((prev) => 
        prev === project.projectImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    const project = getExpandedProject();
    if (project && project.projectImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.projectImages!.length - 1 : prev - 1
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const renderProjectCard = (project: any, index: number, section: 'college' | 'personal') => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: project.delay * 0.5 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card rounded-xl overflow-hidden group hover:border-futuristic-cyan/40 transition-all duration-150"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-futuristic-navy/30 to-futuristic-navy/10">
        <div className="relative w-full aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
            onLoad={() => handleImageLoad(project.image)}
          />
        </div>
        {project.role && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-futuristic-cyan to-futuristic-magenta p-[1px] rounded-full animate-glow-soft">
            <div className="bg-futuristic-navy/90 px-3 py-1 rounded-full">
              <span className="text-xs md:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-futuristic-cyan to-futuristic-magenta">
                Team Lead
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-futuristic-cyan to-futuristic-magenta opacity-0 group-hover:opacity-20 transition-opacity duration-150"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex space-x-2">
            {project.links && (
              <>
                <a
                  href={project.links.design}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-futuristic-cyan rounded-full flex items-center justify-center text-futuristic-navy hover:bg-futuristic-cyan/80 transition-colors"
                >
                  <Eye size={14} className="md:w-4 md:h-4" />
                </a>
                <a
                  href={project.links.simulation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-futuristic-magenta rounded-full flex items-center justify-center text-futuristic-navy hover:bg-futuristic-magenta/80 transition-colors"
                >
                  <ExternalLink size={14} className="md:w-4 md:h-4" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-col">
          <h3 className="text-lg md:text-2xl font-bold text-futuristic-platinum mb-2 md:mb-3 group-hover:text-gradient-cyan transition-colors">
            {project.title}
          </h3>
          {project.completion && (
            <p className="text-futuristic-cyan text-sm md:text-base mb-2">
              Completion: {project.completion}
            </p>
          )}
        </div>
        <p className="text-futuristic-platinum/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base line-clamp-2">
          {project.description}
        </p>
        
        {project.technologies && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-2 md:px-3 py-1 bg-futuristic-cyan/20 text-futuristic-cyan rounded-full text-xs md:text-sm font-medium border border-futuristic-cyan/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <button
          onClick={() => handleKnowMore(index, section)}
          className="w-full bg-futuristic-cyan/20 text-futuristic-cyan px-4 py-2 rounded-lg font-medium hover:bg-futuristic-cyan hover:text-futuristic-navy transition-all duration-300 text-sm md:text-base"
        >
          Know More
        </button>
      </div>
    </motion.div>
  );

  const renderExpandedProject = (project: any) => (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gradient-cyan mb-2">{project.title}</h2>
          {project.role && (
            <div className="inline-block bg-gradient-to-r from-futuristic-cyan to-futuristic-magenta p-[1px] rounded-full animate-glow-soft">
              <div className="bg-futuristic-navy/90 px-4 py-1 rounded-full">
                <span className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-futuristic-cyan to-futuristic-magenta">
                  Team Lead
                </span>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleCloseExpanded}
          className="w-8 h-8 bg-futuristic-magenta rounded-full flex items-center justify-center text-futuristic-navy hover:bg-futuristic-magenta/80 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {project.projectImages && project.projectImages.length > 0 && (
        <div className="space-y-4">
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <img
                src={project.projectImages[currentImageIndex].url}
                alt={project.projectImages[currentImageIndex].caption}
                className="w-full h-full object-contain bg-gradient-to-br from-futuristic-navy/30 to-futuristic-navy/10"
              />
              
              {/* Navigation Arrows */}
              {project.projectImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Image Caption */}
            {project.projectImages[currentImageIndex].caption && (
              <p className="text-center text-futuristic-platinum/60 mt-2 text-sm">
                {project.projectImages[currentImageIndex].caption}
              </p>
            )}

            {/* Thumbnails */}
            {project.projectImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
                {project.projectImages.map((img: ProjectImage, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                      currentImageIndex === index 
                        ? 'ring-2 ring-futuristic-cyan scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <p className="text-futuristic-platinum/90 leading-relaxed my-6 text-sm md:text-base whitespace-pre-line">
        {project.fullDescription}
      </p>

      {project.technologies && (
        <div className="mb-6">
          <h3 className="text-futuristic-cyan text-lg font-semibold mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-futuristic-cyan/20 text-futuristic-cyan rounded-full text-sm font-medium border border-futuristic-cyan/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.teamMembers && (
        <div className="mb-6">
          <h3 className="text-futuristic-platinum text-lg font-semibold mb-3">Team Members</h3>
          <p className="text-futuristic-platinum/80">{project.teamMembers}</p>
        </div>
      )}
      
      {project.mentor && (
        <div className="mb-6">
          <h3 className="text-futuristic-platinum text-lg font-semibold mb-3">Mentor</h3>
          <p className="text-futuristic-platinum/80">{project.mentor}</p>
        </div>
      )}
      
      <div className="text-center">
        <p className="text-futuristic-platinum/60 text-sm">Press ESC to close</p>
      </div>
    </div>
  );

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
          My <span className="text-gradient-cyan">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-lg md:text-xl text-futuristic-platinum/80 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          Explore my engineering projects ranging from academic work to personal innovations in mechanical design and automation.
        </motion.p>

        {/* College Projects Section */}
        <section className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-center mb-8 md:mb-12"
          >
            College <span className="text-gradient-cyan">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collegeProjects.map((project, index) => renderProjectCard(project, index, 'college'))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-center mb-8 md:mb-12"
          >
            Personal <span className="text-gradient-cyan">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {personalProjects.map((project, index) => renderProjectCard(project, index, 'personal'))}
          </div>
        </section>
      </div>

      {/* Expanded Project Modal */}
      {expandedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={handleCloseExpanded}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = getExpandedProject();
              if (!project) return null;
              return renderExpandedProject(project);
            })()}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
