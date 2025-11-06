import React, { useState, useEffect } from 'react';

const InstantQuoteModal = ({ isOpen, onClose }) => {
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [price, setPrice] = useState(150);

  useEffect(() => {
    // Basic price calculation logic
    const basePrice = 50;
    const bedroomPrice = bedrooms * 25;
    const bathroomPrice = bathrooms * 25;
    setPrice(basePrice + bedroomPrice + bathroomPrice);
  }, [bedrooms, bathrooms]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-xl bg-background-light p-6 shadow-2xl dark:bg-background-dark dark:border dark:border-border-dark">
        <button className="absolute top-4 right-4 text-text-secondary-light dark:text-text-secondary-dark" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="font-display text-2xl font-bold leading-tight tracking-tighter text-text-light dark:text-text-dark">Get Your Instant Quote</h2>
        <p className="font-body mt-2 text-text-secondary-light dark:text-text-secondary-dark">Tell us a bit about your needs for a fast, accurate quote.</p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="font-body text-sm font-medium text-text-light dark:text-text-dark" htmlFor="bedrooms">Bedrooms</label>
            <select
              className="mt-1 block w-full rounded-md border-border-light bg-white py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary dark:bg-background-dark dark:border-border-dark dark:text-text-dark font-body"
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
            >
              <option value={1}>1 Bedroom</option>
              <option value={2}>2 Bedrooms</option>
              <option value={3}>3 Bedrooms</option>
              <option value={4}>4+ Bedrooms</option>
            </select>
          </div>
          <div>
            <label className="font-body text-sm font-medium text-text-light dark:text-text-dark" htmlFor="bathrooms">Bathrooms</label>
            <select
              className="mt-1 block w-full rounded-md border-border-light bg-white py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary dark:bg-background-dark dark:border-border-dark dark:text-text-dark font-body"
              id="bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(Number(e.target.value))}
            >
              <option value={1}>1 Bathroom</option>
              <option value={2}>2 Bathrooms</option>
              <option value={3}>3 Bathrooms</option>
              <option value={4}>4+ Bathrooms</option>
            </select>
          </div>
          <div className="pt-4">
            <div className="text-center">
              <p className="font-body text-text-secondary-light dark:text-text-secondary-dark">Your Estimated Price:</p>
              <p className="font-display text-4xl font-extrabold text-primary">${price}</p>
            </div>
          </div>
          <button className="flex w-full h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:text-background-dark" type="submit">
            <span className="truncate">Confirm Booking</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstantQuoteModal;
