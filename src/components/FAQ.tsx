"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Send } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we offer free home delivery for orders above $30 within a 5-mile radius. For other locations, a small delivery fee applies. You can track your order in real-time through our app."
  },
  {
    question: "How do I book a table reservation?",
    answer: "You can book a table directly through our website by clicking the 'Reservation' button or by calling our hotline. We recommend booking at least 24 hours in advance for weekends."
  },
  {
    question: "Do you have vegetarian and gluten-free options?",
    answer: "Absolutely! We have a dedicated section in our menu for vegetarian, vegan, and gluten-free dishes. Our chefs take special care to prevent cross-contamination."
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, your security is our priority. We use industry-standard encryption for all online payments and do not store your credit card details on our servers."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div 
      initial={false}
      className={`rounded-2xl overflow-hidden mb-4 border ${isOpen ? 'border-brand-red bg-white' : 'border-transparent bg-brand-cream/50'}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className={`font-serif font-bold text-lg ${isOpen ? 'text-brand-red' : 'text-black'}`}>
          {question}
        </span>
        <div className={`p-1 rounded-full ${isOpen ? 'bg-brand-red text-white' : 'bg-transparent text-gray-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-20 px-4 md:px-8">
      {/* Main Card Container */}
      <div className="max-w-7xl mx-auto bg-brand-cream rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: FAQ Content */}
          <div className="space-y-8">
            <div>
               <h4 className="text-brand-red font-bold text-sm tracking-widest uppercase mb-2">
                 We've Got Answers
               </h4>
               <h2 className="text-4xl md:text-5xl font-serif font-black text-black mb-6">
                 Frequently Asked <br /> Questions.
               </h2>
               <p className="text-gray-600 mb-8 max-w-lg">
                 Save time and find instant solutions without the hassle. From detailed guidance to quick tips, everything you need is just a click away.
               </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:pl-10">
            <div className="bg-white rounded-3xl p-2 shadow-xl border border-gray-100">
               {/* Form Header */}
               <div className="bg-black rounded-2xl p-6 text-center mb-8">
                  <h3 className="text-white font-bold text-xl">Any Question For Us?</h3>
               </div>

               {/* Form Fields */}
               <form className="px-6 pb-8 space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name...." 
                      className="w-full bg-[#F5F2EA] rounded-xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E60023]/20 transition-all border border-transparent focus:border-[#E60023]"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email...." 
                      className="w-full bg-[#F5F2EA] rounded-xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E60023]/20 transition-all border border-transparent focus:border-[#E60023]"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={5}
                      placeholder="Enter your message...." 
                      className="w-full bg-[#F5F2EA] rounded-xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E60023]/20 transition-all resize-none border border-transparent focus:border-[#E60023]"
                    />
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#E60023] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#c2001e] transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Question
                    <Send className="w-4 h-4" />
                  </motion.button>
               </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
