import React from 'react';

const WhyChooseUs = () => {
  return (
    <section>
      <h2 className="font-display text-text-light dark:text-text-dark px-4 pb-3 pt-5 text-2xl font-bold leading-tight tracking-tighter">Why Choose Us?</h2>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Certified &amp; Secure</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">Reliability you can trust, every time.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">recycling</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Eco-Conscious</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">Sustainable practices for a healthier space.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <span className="material-symbols-outlined">sentiment_very_satisfied</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-text-light dark:text-text-dark">Satisfaction Assured</h3>
            <p className="font-body text-sm text-text-secondary-light dark:text-text-secondary-dark">Our commitment to your complete delight.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
