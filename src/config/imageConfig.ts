// Responsive image sizes for different contexts
export const IMAGE_SIZES = {
  // Logo sizes
  logo: {
    small: 48,   // 12 * 4 (tailwind h-12)
    medium: 64,  // 16 * 4
    large: 96,   // 24 * 4
  },
  
  // Hero background
  hero: {
    mobile: 800,
    tablet: 1200,
    desktop: 1920,
  },
  
  // Gallery images
  gallery: {
    small: 400,   // 2 columns on mobile
    medium: 600,  // 4 columns on desktop
    large: 800,   // Featured images (span 2)
  },
  
  // Menu items
  menu: {
    height: 300,  // Fixed height for menu items
    width: 400,
  },
  
  // Card images
  card: {
    height: 200,
    width: 300,
  },
};

// Responsive sizes attribute for different contexts
export const RESPONSIVE_SIZES = {
  logo: "(max-width: 640px) 48px, (max-width: 1024px) 64px, 96px",
  hero: "(max-width: 640px) 800px, (max-width: 1024px) 1200px, 1920px",
  gallery: "(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px",
  menu: "(max-width: 640px) 400px, 600px",
  card: "(max-width: 640px) 300px, 400px",
};

// Image quality settings
export const IMAGE_QUALITY = {
  webp: 80,
  avif: 75,
  fallback: 85,
};

// Priority images (above the fold)
export const PRIORITY_IMAGES = [
  'logo-paredes.png',
  'pollo-entero.png',
];
