import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectGalleryBlockProps {
  title: string;
  coverImage: string;
  images: ProjectImage[];
  category: 'college' | 'personal';
}

const ProjectGalleryBlock = ({ title, coverImage, images, category }: ProjectGalleryBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-full mb-6">
      <motion.div
        onClick={toggleExpand}
        className="glass-card overflow-hidden rounded-xl cursor-pointer hover:border-futuristic-cyan/40 transition-all duration-300"
        whileHover={{ scale: 1.01 }}
      >
        <div className="relative h-48 md:h-64">
          {!imageError ? (
            <img
              src={coverImage}
              alt={title}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <span className="text-futuristic-platinum/60">Image not available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold text-futuristic-platinum group-hover:text-gradient-cyan">
                  {title}
                </h3>
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 text-futuristic-cyan" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-futuristic-cyan" />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="glass-card mt-4 p-6 rounded-xl">
              {images && images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        onError={handleImageError}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-futuristic-platinum/60 py-8">
                  No additional images available for this project
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGalleryBlock; 