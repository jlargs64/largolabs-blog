'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ExhibitGalleryProps {
  images: string[];
  title: string;
  featured_image?: string;
}

export function ExhibitGallery({ images, title, featured_image }: ExhibitGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine featured image with other images, ensuring featured is first
  const allImages = featured_image 
    ? [featured_image, ...images.filter(img => img !== featured_image)]
    : images;

  if (allImages.length === 0) {
    return null;
  }

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
    setSelectedImage(allImages[(currentIndex + 1) % allImages.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setSelectedImage(allImages[(currentIndex - 1 + allImages.length) % allImages.length]);
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <ZoomIn className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Visual Documentation</h3>
        </div>
        
        {/* Featured Image */}
        {allImages.length > 0 && (
          <div className="mb-4">
            <div 
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(allImages[0], 0)}
            >
              <Image
                src={allImages[0]}
                alt={`${title} - Main view`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Grid */}
        {allImages.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {allImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-md overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(image, index + 1)}
              >
                <Image
                  src={image}
                  alt={`${title} - View ${index + 2}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lab Status */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-500">
            VISUAL_ASSETS: {allImages.length} IMAGE{allImages.length !== 1 ? 'S' : ''}_DOCUMENTED
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={`${title} - Full view`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-mono">
              {currentIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}