import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { RESPONSIVE_SIZES, IMAGE_QUALITY, PRIORITY_IMAGES } from "@/config/imageConfig";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // For above-the-fold images
  sizes?: string;
  placeholder?: "blur" | "skeleton" | "none";
  blurDataURL?: string;
  context?: "logo" | "hero" | "gallery" | "menu" | "card";
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "100vw",
  placeholder = "skeleton",
  blurDataURL,
  context,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Auto-detect priority based on image name
  const isPriority = priority || PRIORITY_IMAGES.some(img => src.includes(img));
  
  // Use responsive sizes if context is provided
  const responsiveSizes = context ? RESPONSIVE_SIZES[context] : sizes;

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Generate a simple blur placeholder
  const generateBlurPlaceholder = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";
    
    canvas.width = 40;
    canvas.height = 30;
    
    // Create a gradient placeholder
    const gradient = ctx.createLinearGradient(0, 0, 40, 30);
    gradient.addColorStop(0, "#e5e7eb");
    gradient.addColorStop(1, "#f3f4f6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 40, 30);
    
    return canvas.toDataURL();
  };

  const placeholderSrc = blurDataURL || generateBlurPlaceholder();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder */}
      {placeholder !== "none" && !isLoaded && (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            placeholder === "blur" ? "opacity-50" : "animate-pulse bg-gray-200"
          )}
          style={{
            backgroundImage: placeholder === "blur" ? `url(${placeholderSrc})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: placeholder === "blur" ? "blur(20px)" : undefined,
          }}
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={isPriority ? "eager" : "lazy"}
        sizes={responsiveSizes}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
