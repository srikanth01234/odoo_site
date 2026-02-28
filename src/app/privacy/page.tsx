'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: '1. Information Collection' },
    { id: 2, title: '2. How We Use Data' },
    { id: 3, title: '3. Data Protection' },
    { id: 4, title: '4. Cookies Policy' },
    { id: 5, title: '5. Your Rights' },
  ];

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          
          {/* Sidebar Navigation */}
          <motion.aside 
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
            className="lg:w-1/4"
          >
            <div className="sticky top-32 bg-black p-8 rounded-2xl shadow-xl border border-zinc-800 space-y-4">
              <h2 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-6 italic">Navigation</h2>
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`text-left w-full flex items-center gap-3 transition-colors duration-300 relative ${
                        activeSection === section.id 
                          ? 'text-white font-extrabold' 
                          : 'text-zinc-400 hover:text-white font-medium'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 flex-shrink-0">
                        {activeSection === section.id && (
                          <motion.div 
                            layoutId="activeIndicator"
                            className="w-1.5 h-1.5 rounded-full bg-brand-red"
                          />
                        )}
                      </div>
                      <span className="truncate">
                        {section.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          {/* Content Area */}
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="lg:w-3/4 space-y-12"
          >
            <header className="space-y-4">
              <h2 className="text-zinc-500 text-xl font-medium tracking-tight">Dine 360</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
                Privacy <span className="text-brand-red">Policy</span>
              </h1>
            </header>

            <div className="space-y-12 max-w-3xl">
              <div id="collection" className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  1. Information Collection
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-zinc-900">Personal Data</h3>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.
                  </p>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-zinc-900">Automatically Collected Information</h3>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, and language preferences.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
