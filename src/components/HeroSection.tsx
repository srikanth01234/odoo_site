'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    tag: "Trusted by Growing Restaurants & Food Brands",
    title: "Run Your Entire Restaurant\nFrom One Smart System",
    description: "POS, Orders, Reservations, QR Menu, Inventory & Multi-Branch Control — All in One Powerful Platform Built for Modern Restaurants.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
  },
  {
    tag: "Next-Gen Analytics",
    title: "Elevate Your Dining Experience\nWith AI",
    description: "Harness the power of real-time data to optimize your menu, staff schedules, and customer loyalty programs like never before.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
  },
  {
    tag: "Seamless Integration",
    title: "Operations Mastered\nIn One Dashboard",
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
    <section className="relative min-h-[100vh] lg:min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-black text-white">
      {/* Background Images with Fade Transition (Crossfade) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${current}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/65 z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slides[current].image}')` }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,0.6fr] gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start"
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-red-600/10 border border-red-600/30 text-red-500 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm"
                >
                  {slides[current].tag}
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.05] uppercase whitespace-pre-line">
                  {slides[current].title}
                </h1>
                
                <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-medium">
                  {slides[current].description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-start gap-6 w-full">
                  <button className="w-full sm:w-auto bg-red-600 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95">
                    START FREE TRIAL
                  </button>
                  <a 
                    href="https://www.youtube.com/watch?v=hipB2vhwj_Y" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white/20 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-black transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    WATCH VIDEO
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right side empty as requested */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Slide Indicators (Aligned to the left of the max-w-7xl content) */}
      <div className="absolute bottom-12 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-10 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${current === index ? 'w-16 bg-red-600' : 'w-8 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
