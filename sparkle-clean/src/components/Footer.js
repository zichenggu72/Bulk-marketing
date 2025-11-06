import React from 'react';

const Footer = ({ onQuoteClick }) => {
  return (
    <footer className="bg-primary/10 py-8 dark:bg-primary/20">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0L12 2.69zM13 13h4l-5 8v-6H8l5-8v6z"></path>
          </svg>
          <h2 className="font-display text-xl font-extrabold leading-tight tracking-tighter text-text-light dark:text-text-dark">SparkleClean</h2>
        </div>
        <p className="font-body max-w-md text-base text-text-secondary-light dark:text-text-secondary-dark">Ready for a sparkling clean home with unmatched efficiency? Get your quote today!</p>
        <button
          className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:text-background-dark"
          onClick={onQuoteClick}
        >
          <span className="truncate">Get Your Instant Quote</span>
        </button>
        <div className="flex gap-4 pt-4">
          <a className="font-body text-text-secondary-light dark:text-text-secondary-dark" href="#">Facebook</a>
          <a className="font-body text-text-secondary-light dark:text-text-secondary-dark" href="#">Instagram</a>
          <a className="font-body text-text-secondary-light dark:text-text-secondary-dark" href="#">Twitter</a>
        </div>
        <div className="font-body pt-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
          <p>© 2024 SparkleClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
