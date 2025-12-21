import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceAreaMap from './components/ServiceAreaMap';
import WhyChooseUs from './components/WhyChooseUs';
import PhotoCarousel from './components/PhotoCarousel';
import Testimonials from './components/Testimonials';
import PaymentOptions from './components/PaymentOptions';
import Footer from './components/Footer';
import InstantQuoteModal from './components/InstantQuoteModal';
import ChatWidget from './components/ChatWidget';

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
        <ServiceAreaMap />
        <WhyChooseUs />
        <PhotoCarousel />
        <Testimonials />
        <PaymentOptions />
      </main>
      <Footer />
      <InstantQuoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <ChatWidget />
    </div>
  );
}

export default App;
