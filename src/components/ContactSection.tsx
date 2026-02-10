"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:h-[800px] bg-black overflow-hidden">
      
      {/* 1. Background Image (Bartender) */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop" 
            alt="Bartender mixing drink"
            fill
            className="object-cover object-center opacity-90"
            priority
         />
      </div>

      {/* 2. Red Curved Background */}
      <div className="absolute top-0 left-0 h-full w-full lg:w-[65%] z-10 pointer-events-none">
         <div className="absolute inset-0 bg-[#E60023]" 
              style={{
                clipPath: "ellipse(70% 100% at 15% 50%)" 
              }}
         />
         <div className="absolute inset-0 bg-[#E60023] lg:hidden block" style={{ clipPath: "none" }}></div>
      </div>

      {/* 3. Floating Assets (Leaves/Tomatoes) */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 left-10 w-24 h-24"
          >
             <Image src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-fresh-organic-basil-leaf-isolated-on-transparent-background-png-image_6630043.png" width={80} height={80} alt="Leaf" className="opacity-80" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-40 left-10 w-20 h-20"
          >
             <Image src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-fresh-organic-basil-leaf-isolated-on-transparent-background-png-image_6630043.png" width={60} height={60} alt="Leaf" className="opacity-80 scale-x-[-1]" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-[40%] left-[5%] w-16 h-16"
          >
             <Image src="https://purepng.com/public/uploads/large/purepng.com-fresh-cherry-tomatovegetables-tomatofresh-red-cherry-tomato-941524712071z6n59.png" width={50} height={50} alt="Tomato" />
          </motion.div>
      </div>

      {/* 4. Content */}
      <div className="relative z-30 h-full w-full container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center">
         
         {/* Left: Form */}
         <div className="w-full lg:w-1/2 text-white">
            <div className="max-w-xl">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🍕</span>
                    <span className="font-bold tracking-[0.2em] uppercase text-sm">Contact Us</span>
                    <span className="text-2xl">🍕</span>
                </div>

                {/* Heading */}
                <h2 className="text-5xl lg:text-7xl font-bold mb-12 leading-tight">
                    Meet Our <br /> Expert Chefe
                </h2>

                {/* Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Select Date*</label>
                            <input type="date" className="w-full p-4 bg-white text-gray-400 rounded-md focus:outline-none" defaultValue="dd-mm-yyyy" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Select Time*</label>
                            <input type="time" className="w-full p-4 bg-white text-gray-400 rounded-md focus:outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Type Of Service*</label>
                        <input type="text" placeholder="Total Guests" className="w-full p-4 bg-white text-gray-800 rounded-md focus:outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Your Message</label>
                        <textarea placeholder="Write your message here..." className="w-full p-4 bg-white text-gray-800 rounded-md focus:outline-none min-h-[150px]" />
                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold flex items-center gap-2 transition-all uppercase tracking-wide">
                        Book A Table
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>
            </div>
         </div>

         {/* Right: Video Badge */}
         <div className="hidden lg:flex w-1/2 justify-center items-center">
            <div className="relative w-48 h-48 group cursor-pointer">
                {/* Rotating Text Border */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] fill-white font-bold uppercase tracking-[0.2em]">
                            <textPath href="#circlePath">
                                Play Video • Play Video • Play Video •
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-black" />
                    </div>
                </div>
            </div>
         </div>
      </div>

    </section>
  );
};

export default ContactSection;
