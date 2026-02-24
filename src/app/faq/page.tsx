'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plus, Minus, Search, ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Data Structure
const faqCategories = [
  { id: 'general', label: 'General' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'technical', label: 'Technical' },
  { id: 'support', label: 'Support' },
];

const faqData = {
  general: [
    {
      question: "What is Dine360?",
      answer: "Dine360 is a comprehensive restaurant management system that helps you manage orders, inventory, menus, reservations, and more from a single platform."
    },
    {
      question: "What types of restaurants can use Dine360?",
      answer: "Dine360 works for all restaurant types including fine dining, fast food, cafes, food trucks, ghost kitchens, bakeries, and full-service restaurants."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start."
    },
    {
      question: "How long does setup take?",
      answer: "Most restaurants are up and running within 24-48 hours. Our onboarding team helps you with the entire setup process."
    },
    {
      question: "Is training included?",
      answer: "Yes. Our dedicated onboarding team provides comprehensive training for you and your staff, including video tutorials and live support sessions."
    }
  ],
  features: [
    {
      question: "Does Dine360 support QR code menus?",
      answer: "Yes! Customers can scan QR codes to view your digital menu, place orders, and pay directly from their phones without downloading any app."
    },
    {
      question: "Can I manage multiple locations?",
      answer: "Absolutely. Dine360 supports multi-location management with centralized reporting and location-specific menu customization."
    },
    {
      question: "Does it integrate with delivery platforms?",
      answer: "Yes, we integrate with major delivery platforms like UberEats, DoorDash, and GrubHub to consolidate all orders in one system."
    },
    {
      question: "Can customers make table reservations online?",
      answer: "Yes, our table reservation system allows customers to book tables online, and you can manage all reservations from your dashboard."
    },
    {
      question: "Does it work on tablets and desktops?",
      answer: "Yes, Dine360 is fully responsive and works seamlessly on tablets, desktops, and mobile devices."
    },
    {
      question: "Can I customize my restaurant's website?",
      answer: "Yes, you can fully customize your restaurant website with your branding, colors, images, and menu without any coding required."
    }
  ],
  pricing: [
    {
      question: "How much does Dine360 cost?",
      answer: "We offer three plans: Starter at $49/month, Professional at $99/month, and Enterprise with custom pricing. All plans include core features with varying limits."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees. Our pricing is transparent and includes all features listed in your plan. Payment processing fees apply separately."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer 20% discount when you pay annually instead of monthly."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees. We also provide free onboarding and training with all plans."
    }
  ],
  technical: [
    {
      question: "Do I need special hardware?",
      answer: "No special hardware required. Dine360 works on any tablet, computer, or smartphone with internet access. We also support standard POS printers and card readers."
    },
    {
      question: "Is data secure?",
      answer: "Yes, all data is encrypted end-to-end with bank-level security (SSL/TLS). We're PCI DSS compliant and perform regular security audits."
    },
    {
      question: "What happens if internet goes down?",
      answer: "Dine360 has offline mode that allows you to continue taking orders. Data syncs automatically when connection is restored."
    },
    {
      question: "How is data backed up?",
      answer: "Your data is automatically backed up daily to secure cloud servers with redundancy. You can also export your data anytime."
    },
    {
      question: "Can I integrate with my existing accounting software?",
      answer: "Yes, we integrate with popular accounting software like QuickBooks, Xero, and other systems via API."
    }
  ],
  support: [
    {
      question: "What support channels are available?",
      answer: "We offer 24/7 support via live chat, email, and phone. Premium plans include priority support and dedicated account manager."
    },
    {
      question: "How quickly do you respond to issues?",
      answer: "We aim to respond within 1 hour during business hours and 4 hours for after-hours issues. Critical issues are handled immediately."
    },
    {
      question: "Do you provide on-site support?",
      answer: "On-site support is available for Enterprise customers. Other plans can request on-site visits for an additional fee."
    },
    {
      question: "Is there a knowledge base?",
      answer: "Yes, we have comprehensive documentation, video tutorials, and a searchable knowledge base available 24/7."
    },
    {
      question: "Can I request custom features?",
      answer: "Yes! Enterprise customers can request custom features. We also consider feature requests from all users for future updates."
    }
  ]
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-rose-100 selection:text-rose-900 pb-20">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-[40vh] min-h-75 flex items-center justify-center overflow-hidden bg-zinc-900 pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
            alt="FAQ Background"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Find answers to common questions about Dine360's setup, training, and security.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-10 relative z-20 pb-24">
        
        {/* Category Tabs - Hidden if only one category */}
        {faqCategories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestionIndex(null); 
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 ring-2 ring-rose-600 ring-offset-2 ring-offset-zinc-900'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* Accordion Questions */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {(faqData[activeCategory as keyof typeof faqData] || []).map((item, index) => (
                <div 
                  key={index} 
                  className="mb-4 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:border-zinc-700"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span 
                      className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                        openQuestionIndex === index ? 'text-rose-500' : 'text-zinc-200 group-hover:text-white'
                      }`}
                    >
                      {item.question}
                    </span>
                    <div 
                      className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openQuestionIndex === index ? 'bg-rose-600 text-white rotate-180' : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-white'
                      }`}
                    >
                       <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openQuestionIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-zinc-400 text-sm md:text-base leading-relaxed border-t border-zinc-800/50 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
            <p className="text-zinc-400 mb-4">Can't find what you're looking for?</p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20">
                Contact Support
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
