import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectImageGalleryProps {
  images: ProjectImage[];
  onImagesChange?: (images: ProjectImage[]) => void;
  isEditing?: boolean;
}

const ProjectImageGallery = ({ images, onImagesChange, isEditing = false }: ProjectImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    // In a real application, you would upload these files to your server/storage
    // For now, we'll create object URLs as a placeholder
    const newImages = await Promise.all(
      Array.from(files).map(async (file) => ({
        url: URL.createObjectURL(file),
        caption: file.name,
      }))
    );

    onImagesChange([...images, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const newImages = [...images];
    const [movedImage] = newImages.splice(sourceIndex, 1);
    newImages.splice(targetIndex, 0, movedImage);
    onImagesChange(newImages);
    setIsDragging(false);
  };

  return (
    <div className="w-full space-y-4">
      {/* Main Image Display */}
      <div className="relative w-full h-64 md:h-96 bg-futuristic-navy/30 rounded-lg overflow-hidden">
        {images.length > 0 ? (
          <>
            <OptimizedImage
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].caption}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-futuristic-navy/80 rounded-full flex items-center justify-center text-futuristic-cyan hover:bg-futuristic-navy transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-futuristic-navy/80 rounded-full flex items-center justify-center text-futuristic-cyan hover:bg-futuristic-navy transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-futuristic-platinum/60">
            No images available
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            draggable={isEditing}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ${
              currentImageIndex === index ? 'ring-2 ring-futuristic-cyan' : ''
            } ${isDragging ? 'opacity-50' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <OptimizedImage
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            {isEditing && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage(index);
                }}
                className="absolute top-1 right-1 w-5 h-5 bg-futuristic-magenta rounded-full flex items-center justify-center text-futuristic-navy hover:bg-futuristic-magenta/80 transition-colors"
              >
                <X size={12} />
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Upload Button */}
      {isEditing && (
        <div className="flex justify-center">
          <label className="cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="flex items-center gap-2 px-4 py-2 bg-futuristic-cyan/20 text-futuristic-cyan rounded-lg hover:bg-futuristic-cyan hover:text-futuristic-navy transition-colors">
              <Upload size={16} />
              <span>Upload Images</span>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default ProjectImageGallery; 