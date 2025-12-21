import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-light bg-background-light/80 p-4 pb-3 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
      <a className="flex items-center gap-2" href="#">
        <img src="/sirens logo.jpeg" alt="Sirens Cleaning Crew" className="h-10 w-10 rounded-full object-cover" />
        <span className="text-xl font-bold leading-tight tracking-tighter text-text-light dark:text-text-dark font-display">Sirens Cleaning Crew</span>
      </a>
      <div className="flex items-center justify-end">
        <a className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary" href="tel:+15178259664">
          <span className="material-symbols-outlined">
            phone
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
