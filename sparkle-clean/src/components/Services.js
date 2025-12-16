import React from 'react';

const Services = () => {
  return (
    <section>
      <h2 className="font-display text-text-light dark:text-text-dark px-4 pb-3 pt-5 text-2xl font-bold leading-tight tracking-tighter">Our Swift Services</h2>
      <div className="no-scrollbar flex gap-4 overflow-x-auto p-4">
        <div className="flex min-w-[280px] flex-1 flex-col gap-3 rounded-xl border border-border-light bg-background-light p-6 shadow-sm dark:border-border-dark dark:bg-background-dark">
          <span className="material-symbols-outlined text-4xl text-primary">villa</span>
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-lg font-bold leading-tight text-text-light dark:text-text-dark">Vacation Rental</h3>
            <p className="font-body text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">Custom flat-rate pricing based on property size</p>
          </div>
        </div>
        <div className="flex min-w-[280px] flex-1 flex-col gap-3 rounded-xl border border-border-light bg-background-light p-6 shadow-sm dark:border-border-dark dark:bg-background-dark">
          <span className="material-symbols-outlined text-4xl text-primary">home</span>
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-lg font-bold leading-tight text-text-light dark:text-text-dark">Residential</h3>
            <p className="font-body text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">Starting at $45/hr (2-hour minimum)</p>
          </div>
        </div>
        <div className="flex min-w-[280px] flex-1 flex-col gap-3 rounded-xl border border-border-light bg-background-light p-6 shadow-sm dark:border-border-dark dark:bg-background-dark">
          <span className="material-symbols-outlined text-4xl text-primary">business</span>
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-lg font-bold leading-tight text-text-light dark:text-text-dark">Commercial</h3>
            <p className="font-body text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">Call for a quote</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
