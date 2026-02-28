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
      className={`rounded-2xl overflow-hidden mb-4 transition-all duration-300 ${
        isOpen ? 'bg-black shadow-xl' : 'bg-black/90 hover:bg-black'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span
          className={`font-bold text-base md:text-lg transition-colors duration-200 ${
            isOpen ? 'text-red-500' : 'text-white'
          }`}
        >
          {question}
        </span>
        <div
          className={`p-1.5 rounded-full flex-shrink-0 ml-4 transition-all duration-300 ${
            isOpen ? 'bg-red-600 text-white' : 'bg-white/10 text-gray-400'
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
            <div className="px-5 pb-6 text-gray-300 text-sm md:text-base leading-relaxed">
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
    <section className="relative w-full bg-brand-cream flex flex-col items-center pb-20 lg:pb-32 pt-10">
      
      {/* Top Header Section */}
      <div className="relative w-full flex flex-col items-center px-4 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 text-4xl font-serif italic mb-4 block"
          >
            AnswersToCommonQuestions
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black text-black mt-2 mb-6"
          >
            Frequently <br/> Asked <span className="text-red-600">Questions</span>
          </motion.h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to know about Odoo restaurant management system to get started. 
          </p>
        </motion.div>
      </div>

      {/* Tabs - Hidden for single category */}
      {faqCategories.length > 1 && (
        <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-4 px-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* FAQ List */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        <motion.div 
          layout
          className="space-y-4"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    </section>
  );
};

export default FAQ;
