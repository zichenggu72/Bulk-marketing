const PaymentOptions = () => {
  return (
    <section>
      <h2 className="font-display text-text-light dark:text-text-dark px-4 pb-3 pt-5 text-2xl font-bold leading-tight tracking-tighter">
        Flexible Payment Options
      </h2>
      <div className="grid grid-cols-3 gap-3 p-4">
        {/* Credit Card */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
          <span className="font-body text-xs font-semibold text-text-light dark:text-text-dark text-center">Credit Card</span>
        </div>

        {/* Cash */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          </div>
          <span className="font-body text-xs font-semibold text-text-light dark:text-text-dark text-center">Cash</span>
        </div>

        {/* Venmo */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.75 2.5c.44 1.05.65 2.1.65 3.45 0 4.35-3.7 10-6.7 14.05H2.5L.5 3.5h5.9l.75 8.45C8.55 9.5 10.5 6 10.5 3.5c0-.9-.15-1.65-.35-2.25L14.75 2.5z"/>
            </svg>
          </div>
          <span className="font-body text-xs font-semibold text-text-light dark:text-text-dark text-center">Venmo</span>
        </div>

        {/* Zelle */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.84 0-2.27-1.66-2.52-3.65-3.35z"/>
            </svg>
          </div>
          <span className="font-body text-xs font-semibold text-text-light dark:text-text-dark text-center">Zelle</span>
        </div>

        {/* Check */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/>
            </svg>
          </div>
          <span className="font-body text-xs font-semibold text-text-light dark:text-text-dark text-center">Check</span>
        </div>

        {/* Apple Pay */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-primary/10 p-4 dark:bg-primary/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:text-background-dark">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
          </div>
          <span className="font-body text-xs font-semibold text-text-light dark:text-text-dark text-center">Apple Pay</span>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
