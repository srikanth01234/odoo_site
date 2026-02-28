'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: '1. Agreements' },
    { id: 2, title: '2. Services & Paid Subscription' },
    { id: 3, title: '3. Rights and laws' },
    { id: 4, title: '4. 3rd Part Applications' },
    { id: 5, title: '5. Rights you grant us' },
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
                Terms & <span className="text-brand-red">Conditions</span>
              </h1>
            </header>

            <div className="space-y-12 max-w-3xl">
              <div id="agreements" className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  1. Agreements
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-zinc-900">Introduction</h3>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Dine 360 accessible at dine360.com.
                  </p>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                  </p>
                  <p className="text-zinc-600 leading-relaxed text-lg italic">
                    Minors or people below 18 years old are not allowed to use this Website.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-zinc-900">Intellectual Property Rights</h3>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    Other than the content you own, under these Terms, Dine 360 and/or its licensors own all the intellectual property rights and materials contained in this Website.
                  </p>
                  <p className="text-zinc-500 text-base">
                    You are granted limited license only for purposes of viewing the material contained on this Website.
                  </p>
                </div>
              </div>

              {/* Action Buttons Removed */}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
