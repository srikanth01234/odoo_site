'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, TrendingUp, Users, Trophy } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[5rem] xs:text-[6rem] sm:text-[8rem] lg:text-[7rem] xl:text-[9rem] font-black tracking-tighter leading-[0.85] text-zinc-900"
              >
                ABOUT <br /> US
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 max-w-sm"
            >
              <div>
                <h3 className="font-bold text-zinc-900 text-lg mb-2">Modern Restaurant Solutions</h3>
                <p className="text-zinc-500 text-base leading-relaxed">
                  Innovative POS systems and marketing tools designed to streamline operations and boost growth for restaurants of all sizes.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-zinc-900 text-lg mb-2">Seamless Integration</h3>
                <p className="text-zinc-500 text-base leading-relaxed">
                  Unified platforms featuring clean interfaces, powerful analytics, and customer-first experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Images & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-8 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Image 1 - Large Rounded */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-75 sm:h-100 w-full rounded-[2.5rem] overflow-hidden"
               >
                 <Image 
                   src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                   alt="Modern Office" 
                   fill 
                   className="object-cover"
                 />
               </motion.div>
               
               {/* Right side column for second image and philosophy */}
               <div className="flex flex-col gap-4">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-50 w-full rounded-[2.5rem] overflow-hidden"
                 >
                   <Image 
                     src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                     alt="Team Collaboration" 
                     fill 
                     className="object-cover"
                   />
                 </motion.div>
                 
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex-1 flex flex-col justify-center p-4"
                 >
                   <h3 className="text-3xl font-bold text-zinc-900 mb-3">Our Philosophy</h3>
                   <p className="text-zinc-600 text-base leading-relaxed">
                     At Dine360, we believe in empowering restaurateurs with technology that feels invisible yet powerful, enabling them to focus on what they do best—serving great food.
                   </p>
                 </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section (How It Started) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-rose-600 font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              How It Started
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-8 leading-[1.1]"
            >
              Our Dream is <br/>
              <span className="text-zinc-800">Global Restaurant Transformation</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-zinc-600 text-base leading-relaxed mb-12"
            >
              <p>
                Dine360 was founded by a team of hospitality veterans and tech innovators. Their shared dream was to create a digital ecosystem accessible to every restaurant owner. United by their belief in the transformational power of efficient management, they embarked on a journey to build 'Dine360'.
              </p>
              <p>
                With relentless dedication, they gathered a team of experts and launched this innovative platform, creating a global community of successful restaurateurs, all connected by the desire to grow and delight customers.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100"
              >
                <h4 className="text-3xl font-black text-zinc-900 mb-1">3.5</h4>
                <p className="text-zinc-500 text-sm font-medium">Years Experience</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100"
              >
                <h4 className="text-3xl font-black text-zinc-900 mb-1">200+</h4>
                <p className="text-zinc-500 text-sm font-medium">Project Challenges</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100"
              >
                <h4 className="text-3xl font-black text-zinc-900 mb-1">830+</h4>
                <p className="text-zinc-500 text-sm font-medium">Positive Reviews</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100"
              >
                <h4 className="text-3xl font-black text-zinc-900 mb-1">100K</h4>
                <p className="text-zinc-500 text-sm font-medium">Trusted Partners</p>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
             <div className="relative h-150 w-full bg-blue-100 rounded-[3rem] overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute inset-0 bg-linear-to-tr from-rose-50 to-blue-50 opacity-50"></div>
                <div className="absolute top-0 right-0 w-full h-full"> 
                   <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-10">
                      <path d="M0 0 L100 0 L100 100 Z" fill="#f43f5e" />
                   </svg>
                </div>

               <Image 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Founders working" 
                 fill 
                 className="object-cover relative z-10"
               />
             </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
