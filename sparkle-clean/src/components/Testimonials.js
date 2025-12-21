import React from 'react';

const Testimonials = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-3 rounded-lg border border-border-light bg-background-light p-4 dark:border-border-dark dark:bg-background-dark">
          <div className="flex text-primary">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
          <blockquote className="font-body text-base text-text-light dark:text-text-dark">"Sirens Cleaning Crew delivered an incredibly fast and efficient service. My home looks immaculate, and their team was a pleasure to work with. Highly recommend for a quick and perfect clean!"</blockquote>
          <p className="font-body text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark">- Alex M.</p>
        </div>
        <div className="flex flex-col gap-3 rounded-lg border border-border-light bg-background-light p-4 dark:border-border-dark dark:bg-background-dark">
          <div className="flex text-primary">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
          <blockquote className="font-body text-base text-text-light dark:text-text-dark">"I was amazed by the professionalism and speed of Sirens Cleaning Crew. They transformed my office in record time. Truly a service that values efficiency and quality."</blockquote>
          <p className="font-body text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark">- Jamie L.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
