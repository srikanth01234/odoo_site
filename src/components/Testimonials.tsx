"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sandra Bullock",
    role: "Manager",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna interdum. Viverra quam a arcu duis Quis lectus donec nulladui sit in viverra tempus risus.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Robert Fox",
    role: "Food Critic",
    quote: "The flavors are absolutely incredible. Every dish tells a story of tradition mixed with modern culinary excellence. I've never tasted a better pizza in Chicago. Truly a masterpiece.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Regular Customer",
    quote: "Fast service, amazing atmosphere, and the most delicious grilled chicken I've ever had. This place has become our weekly family tradition. Highly recommended!",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full bg-brand-cream py-20 lg:py-32 overflow-hidden flex items-center justify-center text-black">
       
       {/* Background Paper Texture Overlay (Optional) */}
       <div className="absolute inset-0 opacity-40 mix-blend-multiply z-0 pointer-events-none" />

       <div className="container mx-auto px-6 max-w-7xl relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Chef Image */}
            <div className="relative flex justify-center lg:justify-start">
               {/* Pattern */}
               <div className="absolute top-20 right-10 grid grid-cols-5 gap-2 opacity-30 text-black">
                  {[...Array(20)].map((_, i) => <span key={i} className="text-xs">+</span>)}
               </div>

               {/* Main Image */}
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative w-[300px] md:w-[450px] h-[400px] md:h-[600px] z-10"
               >
                 <Image
                   src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop"
                   alt="Happy Chef"
                   fill
                   className="object-cover rounded-2xl shadow-2xl"
                 />
               </motion.div>

               {/* Floating Tomatoes Bottom Left */}
               {/* <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 z-20"
               >
                  <img
                     src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop"
                     alt="Tomatoes"
                     className="object-contain w-full h-full rounded-full border-4 border-white shadow-lg"
                  />
               </motion.div> */}
            </div>


            {/* Right Column: Content */}
            <div className="relative space-y-8">
               
               {/* Header */}
               <div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-red text-4xl font-serif italic" 
                  >
                    Testimonials
                  </motion.h3>
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-serif font-black text-black mt-2"
                  >
                    What Clients Say <br />
                    About <span className="text-brand-red">Brand Name</span>
                  </motion.h2>
               </div>

               {/* Quote Icon */}
               <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white text-3xl font-serif mt-6 shadow-lg shadow-brand-red/30">
                 <Quote className="w-8 h-8 fill-current" />
               </div>

               {/* Animated Testimonial Content */}
               <div className="h-[250px] md:h-[200px] relative">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentIndex}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4 }}
                     className="absolute inset-0"
                   >
                     <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
                       "{testimonials[currentIndex].quote}"
                     </p>

                     <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-red">
                           <Image 
                              src={testimonials[currentIndex].avatar} 
                              alt={testimonials[currentIndex].name}
                              fill
                              className="object-cover"
                           />
                        </div>
                        <div>
                           <div className="flex gap-1 text-brand-red mb-1">
                              {[...Array(5)].map((_, i) => (
                                 <Star 
                                   key={i} 
                                   className={`w-4 h-4 ${i < testimonials[currentIndex].rating ? 'fill-current' : 'text-gray-300'}`} 
                                 />
                              ))}
                           </div>
                           <h4 className="font-bold text-black text-lg">{testimonials[currentIndex].name}</h4>
                           <span className="text-sm text-gray-500">{testimonials[currentIndex].role}</span>
                        </div>
                     </div>
                   </motion.div>
                 </AnimatePresence>
               </div>

               {/* Navigation Buttons */}
               <div className="flex gap-4 mt-8">
                  <button 
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                     <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                     <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default Testimonials;
