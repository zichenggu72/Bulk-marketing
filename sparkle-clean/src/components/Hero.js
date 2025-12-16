import React from 'react';

const Hero = ({ onQuoteClick }) => {
  const heroStyle = {
    '--hero-bg-image': 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop")',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.7) 100%), var(--hero-bg-image)',
  };

  return (
    <section className="relative">
      <div className="p-4">
        <div
          className="flex min-h-[360px] flex-col items-start justify-end gap-4 rounded-lg bg-cover bg-center bg-no-repeat p-6 sm:gap-6 sm:rounded-xl sm:p-8"
          style={heroStyle}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="font-display text-4xl font-medium leading-tight tracking-normal text-white sm:text-5xl">Elite Vacation Rental & Residential Cleaning</h1>
            <h2 className="font-body text-base font-medium leading-normal text-white/90 sm:text-lg">Your trustworthy women-owned cleaning team since 2020</h2>
          </div>
          <a
            href="sms:+15178259664"
            className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:text-background-dark"
          >
            <span className="truncate">Text Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
