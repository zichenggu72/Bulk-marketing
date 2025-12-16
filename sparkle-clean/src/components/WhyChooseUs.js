import React from 'react';

const WhyChooseUs = () => {
  return (
    <section>
      <h2 className="font-display text-text-light dark:text-text-dark px-4 pb-3 pt-5 text-2xl font-bold leading-tight tracking-tighter">Why Choose Us?</h2>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">villa</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Vacation Rental Specialists</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">We understand turnover timing.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Flexible Scheduling</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">Last-minute and back-to-back availability.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">search</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Detail-Oriented</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">We don't miss the little things that make a big difference.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Licensed and Insured</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">Fully covered for your peace of mind and protection.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Women-Owned Since 2020</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">Proudly serving our community with care and dedication.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
