'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HighlightsSection = () => {
  const highlights = [
    {
      title: "24/7 Dedicated Support",
      description: "Our team is always available to help you resolve any issues instantly, day or night."
    },
    {
      title: "Easy Setup & Training",
      description: "Get up and running in hours, not weeks. We provide hands-on training for your entire staff."
    },
    {
      title: "Secure Cloud Storage",
      description: "Your data is protected with bank-level encryption and automatically backed up in real-time."
    },
    {
      title: "Regular Feature Updates",
      description: "Stay ahead of the competition with constant improvements and new features added monthly."
    },
    {
      title: "Transparent Pricing",
      description: "No complex tiers. One simple price for all the features you need to grow your business."
    },
    {
      title: "No Hidden Fees",
      description: "Experience total peace of mind with zero setup costs, zero maintenance fees, and no surprises."
    }
  ];

  return (
    <section className="bg-black py-10 lg:py-16 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end lg:-translate-x-32 order-last lg:order-first transition-transform duration-500"
        >
          {/* Main Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-black border-[14px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-gray-700/50">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gray-900">
               <img 
                 src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000" 
                 alt="App Interface" 
                 className="w-full h-full object-cover opacity-80"
               />
               
               {/* Overlay UI Mockup Elements */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-4"
                  >
                    <div className="h-2 w-20 bg-red-600 rounded mb-2"></div>
                    <div className="h-2 w-32 bg-gray-400/50 rounded"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10"
                  >
                    <div className="h-2 w-16 bg-red-600 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-gray-400/50 rounded"></div>
                  </motion.div>
               </div>
            </div>

            {/* Notch / Camera / Home Button Details */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
          </div>
          
          {/* Decorative Elements behind phone */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px]"></div>
        </motion.div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-start text-left">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold tracking-wide uppercase text-sm md:text-base mb-4"
          >
            Why Choose Dine360?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-1.5xl md:text-5xl font-bold text-white mb-12"
          >
            We don’t just give software. <br/> We give operational control.
          </motion.h3>

          <div className="space-y-8 w-full">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 font-bold group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                    {index + 1}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HighlightsSection;
