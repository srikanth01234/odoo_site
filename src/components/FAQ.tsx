"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const faqCategories = ["General"];

const faqs = [
  {
    category: "General",
    question: "Is there a free trial?",
    answer: "Yes, you can try Dine360 before committing."
  },
  {
    category: "General",
    question: "Is training included?",
    answer: "Yes. Our onboarding team guides you step by step."
  },
  {
    category: "General",
    question: "Does it work on tablets and desktops?",
    answer: "Yes, Dine360 works across devices."
  },
  {
    category: "General",
    question: "Is data secure?",
    answer: "Yes, all data is encrypted and cloud-backed."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div 
      initial={false}
      className="rounded-2xl overflow-hidden mb-4 bg-[#111111] border border-transparent"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span
          className={`font-medium text-sm md:text-base transition-colors duration-200 ${
            isOpen ? 'text-[#ff0033]' : 'text-white'
          }`}
        >
          {question}
        </span>
        <div
          className={`p-1.5 rounded-full flex-shrink-0 ml-4 transition-colors duration-200 ${
            isOpen ? 'bg-[#ff0033] text-white' : 'bg-[#222222] text-white'
          }`}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  // Default to the first available category so content actually renders
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const filteredFaqs = activeCategory
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs;

  return (
    <section className="relative w-full bg-[#0a0a0a] flex flex-col items-center pt-0">
      {/* Smooth starting transition from white */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-cream to-transparent z-10 pointer-events-none" />

      {/* Top Background Image Section */}
      <div className="relative w-full flex flex-col items-center px-4 pt-32 pb-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1506521781263-d8422e82fd6d?q=80&w=2000&auto=format&fit=crop" 
            alt="Cityscape" 
            fill 
            className="object-cover opacity-60"
          />
          {/* Gradient overlay to fade into black at the bottom and top */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0a0a0a]/80 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#0a0a0a]/50" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#ff0033] text-sm md:text-base max-w-2xl mx-auto">
            We're here to help with any questions you have about plans, pricing, and supported features.
          </p>
        </motion.div>
      </div>

      {/* Tabs - Hidden for single category */}
      {faqCategories.length > 1 && (
        <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-4 px-4 -mt-10 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-[#ff0033] text-white shadow-[0_0_20px_rgba(255,0,51,0.5)] border border-[#ff0033]' 
                  : 'bg-[#222222] text-gray-300 hover:bg-[#333333] border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* FAQ List */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pb-10">
        <motion.div 
          layout
          className="space-y-3"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={`${activeCategory}-${index}`}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Smooth ending to connect the white color */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-white" /> */}
    </section>
  );
};

export default FAQ;
