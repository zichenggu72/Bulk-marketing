import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import InstantQuoteModal from './components/InstantQuoteModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark">
      <Header />
      <main className="flex-grow">
        <Hero onQuoteClick={handleOpenModal} />
        <Services />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer onQuoteClick={handleOpenModal} />
      <InstantQuoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
