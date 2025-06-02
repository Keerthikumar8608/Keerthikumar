// Function to add a watermark overlay to protect images
export const getProtectedImageUrl = (originalUrl: string) => {
  // Add a timestamp to prevent caching
  const timestamp = new Date().getTime();
  return `${originalUrl}?protected=true&t=${timestamp}`;
};

// CSS styles for image protection
export const protectedImageStyles = {
  // Prevent dragging
  userDrag: 'none',
  // Prevent selection
  userSelect: 'none',
  // Prevent context menu
  WebkitUserDrag: 'none',
  // Prevent touch callout on mobile
  WebkitTouchCallout: 'none',
} as const;

// Generate a dynamic watermark with user info
export const generateWatermark = () => {
  const timestamp = new Date().toISOString();
  return `Protected - ${timestamp}`;
}; 