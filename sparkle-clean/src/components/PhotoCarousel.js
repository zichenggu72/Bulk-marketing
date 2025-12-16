import { useState } from 'react';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - replace with actual before/after cleaning photos
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      alt: 'Sparkling clean kitchen',
      caption: 'Kitchen deep clean'
    },
    {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      alt: 'Clean bathroom',
      caption: 'Bathroom transformation'
    },
    {
      src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      alt: 'Clean living room',
      caption: 'Living room refresh'
    },
    {
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      alt: 'Clean bedroom',
      caption: 'Vacation rental turnover'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-4">
      <h2 className="font-display text-text-light dark:text-text-dark px-4 pb-3 pt-5 text-2xl font-bold leading-tight tracking-tighter">Real Results</h2>
      <div className="relative px-4">
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-[280px] w-full object-cover sm:h-[360px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="font-body text-sm font-medium text-white">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-text-light shadow-lg transition-all hover:bg-white"
            aria-label="Previous photo"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-text-light shadow-lg transition-all hover:bg-white"
            aria-label="Next photo"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
