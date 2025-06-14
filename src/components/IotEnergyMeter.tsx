import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";

const images = [
  { src: "/i1.png", alt: "IoT Energy Meter - Setup" },
  { src: "/i2.png", alt: "IoT Energy Meter - Circuit" },
  { src: "/i3.png", alt: "IoT Energy Meter - Components" },
  { src: "/i4.png", alt: "IoT Energy Meter - Display" },
  { src: "/i5.png", alt: "IoT Energy Meter - Interface" },
  { src: "/i6.png", alt: "IoT Energy Meter - Data Visualization" },
  { src: "/i7.png", alt: "IoT Energy Meter - Mobile App" },
  { src: "/i8.png", alt: "IoT Energy Meter - Dashboard" },
  { src: "/i9.JPG", alt: "IoT Energy Meter - Hardware" },
  { src: "/i10.png", alt: "IoT Energy Meter - Cloud Integration" },
  { src: "/i11.jpg", alt: "IoT Energy Meter - Testing" },
  { src: "/i12.png", alt: "IoT Energy Meter - Final Setup" }
];

const IotEnergyMeter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-futuristic-cyan">IoT-Based Energy Meter Project</h2>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          An innovative IoT-based energy meter system that enables real-time monitoring, data visualization,
          and smart energy management through cloud integration and mobile connectivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-futuristic-navy/30 rounded-lg overflow-hidden shadow-lg hover:shadow-futuristic-cyan/20 transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-futuristic-platinum/80">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-2xl font-semibold text-futuristic-cyan">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-futuristic-platinum/90">
          <li>Real-time energy consumption monitoring</li>
          <li>Cloud-based data storage and analytics</li>
          <li>Mobile app integration for remote monitoring</li>
          <li>Interactive dashboard with usage insights</li>
          <li>Automated billing and payment system</li>
          <li>Smart alerts and notifications</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default IotEnergyMeter; 