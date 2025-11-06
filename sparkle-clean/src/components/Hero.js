import React from 'react';

const Hero = ({ onQuoteClick }) => {
  const heroStyle = {
    '--hero-bg-image': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfvcLPBMs3OiJkI9KDIpk1qqk2-HeTRt-h0o5oKEpboVXqR0jxo8jyiI0G8mE2BOPghaVnAF9XpcDW50DQHvxGoA38ncT8iX-7i75jSHe_oQbiIUWyNwT_r_GqfmwQsJpv6s3fiseO5dmcd3hv6AIDUztcg24V9e8bDzvQIBvl45ZcnmNz2C_Bxh1AveOiCDvFjpCnSN3xQ_qpjAaEckOW5qT_nIbYJzpULIrhWEaDMUA1X1zBiucG07RsIZXPeaE7Mi55GUHyAISi")',
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
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tighter text-white sm:text-5xl">Efficiency in Every Clean.</h1>
            <h2 className="font-body text-base font-medium leading-normal text-white/90 sm:text-lg">Experience unparalleled professionalism and speed with our tailored cleaning solutions.</h2>
          </div>
          <button
            className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:text-background-dark"
            onClick={onQuoteClick}
          >
            <span className="truncate">Get an Instant Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
