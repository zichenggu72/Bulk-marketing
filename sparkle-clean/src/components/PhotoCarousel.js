import { useState } from 'react';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Before and after cleaning photos
  const photos = [
    {
      before: '/before1.jpeg',
      after: '/after1.jpeg',
      alt: 'Kitchen transformation',
      caption: 'Kitchen Before & After'
    },
    {
      before: '/before2.jpeg',
      after: '/after2.jpeg',
      alt: 'Bathroom cleaning',
      caption: 'Bathroom Before & After'
    },
    {
      before: '/before3.jpeg',
      after: '/after3.jpeg',
      alt: 'Living room refresh',
      caption: 'Living Room Before & After'
    },
    {
      before: '/before4.jpeg',
      after: '/after4.jpeg',
      alt: 'Bedroom cleaning',
      caption: 'Bedroom Before & After'
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

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-4">
      <h2 className="font-display text-text-light dark:text-text-dark px-4 pb-3 pt-5 text-2xl font-bold leading-tight tracking-tighter">Real Results</h2>
      <div className="relative px-4">
        {/* Main Image */}
        <div
          className="relative overflow-hidden rounded-xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <div key={index} className="min-w-full">
                <div className="grid grid-cols-2 gap-2">
                  {/* Before Image */}
                  <div className="relative">
                    <img
                      src={photo.before}
                      alt={`${photo.alt} - Before`}
                      className="h-[280px] w-full object-cover sm:h-[360px]"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Before
                    </div>
                  </div>
                  {/* After Image */}
                  <div className="relative">
                    <img
                      src={photo.after}
                      alt={`${photo.alt} - After`}
                      className="h-[280px] w-full object-cover sm:h-[360px]"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      After
                    </div>
                  </div>
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
