'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    tag: "Trusted by Growing Restaurants & Food Brands",
    title: "Run Your Entire\nRestaurant From\nOne Smart System",
    description: "POS, Orders, Reservations, QR Menu, Inventory & Multi-Branch Control — All in One Powerful Platform Built for Modern Restaurants.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
  },
  {
    tag: "Next-Gen Analytics",
    title: "Elevate Your\nDining Experience\nWith AI",
    description: "Harness the power of real-time data to optimize your menu, staff schedules, and customer loyalty programs like never before.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
  },
  {
    tag: "Seamless Integration",
    title: "Operations\nMastered In\nOne Dashboard",
    description: "Connect your kitchen, floor, and online presence. Real-time syncing ensures your business never misses a beat.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100vh] lg:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden bg-black text-white">
      {/* Background Images with Fade Transition (Crossfade) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slides[current].image}')` }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <div className="relative flex flex-col items-start px-4 h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <h2 className="text-red-500 font-bold tracking-wide uppercase text-sm md:text-base mb-4">
                {slides[current].tag}
              </h2>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 lg:leading-[1.1] uppercase whitespace-pre-line">
                {slides[current].title}
              </h1>
              
              <p className="max-w-xl text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
                {slides[current].description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 hover:scale-105 active:scale-95">
                  Start Free Trial
                </button>
                <a 
                  href="https://www.youtube.com/watch?v=hipB2vhwj_Y&list=RDda6iVRSxAdE&index=4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Watch Video
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video Section (Stays playing continuously) */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none scale-[1.35]"
            src="https://www.youtube.com/embed/hipB2vhwj_Y?autoplay=1&mute=1&loop=1&playlist=hipB2vhwj_Y&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"
            title="Restaurant Management Advertisement"
            allow="autoplay; encrypted-media"
            style={{ border: 0 }}
          ></iframe>
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-10 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-300 rounded-full ${current === index ? 'w-12 bg-red-600' : 'w-6 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
