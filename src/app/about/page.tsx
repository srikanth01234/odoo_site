'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, TrendingUp, Users, Trophy, ArrowRight } from 'lucide-react';

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

      {/* MARKET VALUE GROWTH SECTION */}
      <section className="py-32 bg-zinc-50 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-red-600 font-bold tracking-widest uppercase text-xs mb-3 block"
            >
              Data Driven Insights
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-zinc-900 mb-6"
            >
              Market Valuation Growth
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] shadow-2xl border border-zinc-200 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Top Gloss Effect */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-500 via-rose-500 to-orange-500"></div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-zinc-100 pb-8">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  Estimate Market Value
                </h3>
                <p className="text-zinc-500 text-sm font-medium ml-13">
                  Calculated by <span className="text-zinc-900 font-bold">Dine360 Analytics</span>
                </p>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.5, type: "spring" }}
                   className="bg-zinc-900 text-white px-6 py-3 rounded-xl font-mono text-xl font-bold border border-zinc-700 shadow-xl flex items-center gap-3"
                 >
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   $1,450.888
                 </motion.div>
                 <span className="text-xs font-bold text-zinc-400 cursor-pointer hover:text-red-600 transition-colors flex items-center gap-1 group">
                   View full report 
                   <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                 </span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative h-[350px] w-full">
               {/* Grid Pattern Background in Chart */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>

               {/* Y-Axis Labels (Absolute) */}
               <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] font-mono text-zinc-400 py-2">
                 <span>$1.5M</span>
                 <span>$1.0M</span>
                 <span>$0.5M</span>
                 <span>$0</span>
               </div>

               {/* SVG Chart */}
               <svg className="w-full h-full overflow-visible pl-10" viewBox="0 0 760 350" preserveAspectRatio="none">
                 
                  <defs>
                   <linearGradient id="gradientRed" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#dc2626" stopOpacity={0.15}/>
                     <stop offset="100%" stopColor="#dc2626" stopOpacity={0}/>
                   </linearGradient>
                   <filter id="shadowRed">
                      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#dc2626" floodOpacity="0.3" />
                   </filter>
                 </defs>

                 {/* Secondary Line (Tax/Cost) - Dashed Pink */}
                 <motion.path
                   d="M0,320 C100,320 150,310 200,310 C250,310 280,300 350,290 C420,280 480,285 550,280 C620,275 700,280 800,270"
                   fill="none"
                   stroke="#fda4af" 
                   strokeWidth="3"
                   strokeDasharray="8 4"
                   initial={{ pathLength: 0, opacity: 0 }}
                   whileInView={{ pathLength: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                 />

                 {/* Area under the curve */}
                 <motion.path
                   d="M0,280 C100,270 180,270 220,210 C260,150 320,180 380,130 C440,80 500,100 600,70 C680,45 750,60 800,50 L800,350 L0,350 Z"
                   fill="url(#gradientRed)"
                   stroke="none"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.8 }}
                 />

                 {/* The Line Itself with Drop Shadow Filter */}
                 <motion.path
                   d="M0,280 C100,270 180,270 220,210 C260,150 320,180 380,130 C440,80 500,100 600,70 C680,45 750,60 800,50"
                   fill="none"
                   stroke="#dc2626"
                   strokeWidth="4"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   filter="url(#shadowRed)"
                   initial={{ pathLength: 0 }}
                   whileInView={{ pathLength: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "easeInOut" }}
                 />

                 {/* Animated Points on Key Events */}
                 {[
                   { cx: 220, cy: 210, delay: 1.6 },
                   { cx: 380, cy: 130, delay: 1.8 },
                   { cx: 600, cy: 70, delay: 2.0 }
                 ].map((point, i) => (
                    <motion.circle 
                      key={i}
                      cx={point.cx} 
                      cy={point.cy} 
                      r="6" 
                      fill="white" 
                      stroke="#dc2626" 
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: point.delay, type: 'spring' }}
                    />
                 ))}

               </svg>
            </div>

             {/* X-Axis Labels */}
            <div className="flex justify-between w-full mt-2 pl-10 text-xs font-bold text-zinc-400 uppercase tracking-widest border-t border-zinc-100 pt-4">
               <span>2021</span>
               <span>2022</span>
               <span>2023</span>
               <span className="text-zinc-900">2024</span>
            </div>

            {/* Legend & Disclaimer */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-dashed border-zinc-200 gap-6">
                <div className="flex justify-center gap-8">
                  <div className="flex items-center gap-3 bg-zinc-50 px-4 py-2 rounded-lg border border-zinc-100">
                      <div className="w-3 h-3 bg-red-600 rounded-full shadow-sm shadow-red-600/50"></div>
                      <span className="text-sm font-bold text-zinc-700">Market Value</span>
                  </div>
                  <div className="flex items-center gap-3 bg-zinc-50 px-4 py-2 rounded-lg border border-zinc-100">
                      <div className="w-8 border-t-2 border-dashed border-pink-400"></div>
                      <span className="text-sm font-bold text-zinc-500">Operating Costs</span>
                  </div>
                </div>
                <div className="text-[10px] text-zinc-400 max-w-xs text-right hidden md:block">
                  * Projections based on compound annual growth rate (CAGR) of 15.4% in the hospitality tech sector.
                </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
