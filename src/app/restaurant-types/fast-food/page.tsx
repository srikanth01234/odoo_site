'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, ArrowRight, Dot, Layout, BookOpen, QrCode, Building2, TrendingUp, Smartphone, Zap, RefreshCw, Clock, Target } from 'lucide-react'

// Placeholder images - using Unsplash for realistic restaurant visuals
const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600"
]

const UI_IMAGES = [
  "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000", // POS main
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000", // Order info
  "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1000"  // Payment
]

const FastFoodPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative">
                   <Image 
                    src={`https://randomuser.me/api/portraits/thumb/men/${20+i}.jpg`} 
                    alt="User" 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full">
                Join 2,460+ Restaurants
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Take control of your <br />
              <span className="italic font-serif font-light text-zinc-800">Fast Food Business</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Think sharper today. Prevent delays tomorrow. A low-cost, 
              cloud-backed system for better restaurant efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link 
                href="/contact" 
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95"
              >
                Start today
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-4">
              <p className="text-[12px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap gap-6 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {['UberEats', 'DoorDash', 'GrubHub'].map((partner) => (
                  <span key={partner} className="text-lg font-bold font-serif text-zinc-500">{partner}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50/50 to-orange-50/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
               {/* Card 1 - Left Tilted */}
               <motion.div 
                 className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right"
                 initial={{ opacity: 0, x: -50, rotate: -20 }}
                 animate={{ opacity: 1, x: 0, rotate: -12 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
               >
                 <Image src={CARD_IMAGES[0]} alt="Staff" fill className="object-cover" />
                 <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                    <div className="relative z-10">
                      <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Speed</p>
                      <p className="text-white font-bold text-2xl">0.18s</p>
                    </div>
                    {/* Abstract wave decoration */}
                    <div className="absolute bottom-0 left-0 w-full h-16 text-red-500/90">
                      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                        <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                      </svg>
                    </div>
                 </div>
               </motion.div>

               {/* Card 2 - Center Main */}
               <motion.div 
                 className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20"
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
               >
                 <Image src={CARD_IMAGES[1]} alt="Happy Customer" fill className="object-cover" />
                 <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                    <div className="relative z-10">
                      <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Satisfaction</p>
                      <p className="text-white font-bold text-2xl">Optimal</p>
                    </div>
                     {/* Abstract wave decoration */}
                     <div className="absolute bottom-0 left-0 w-full h-16 text-teal-500/90">
                      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                        <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                      </svg>
                    </div>
                 </div>
               </motion.div>

               {/* Card 3 - Right Tilted */}
               <motion.div 
                 className="absolute top-32 right-0 md:right-2 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-left"
                 initial={{ opacity: 0, x: 50, rotate: 20 }}
                 animate={{ opacity: 1, x: 0, rotate: 12 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
               >
                 <Image src={CARD_IMAGES[2]} alt="Order" fill className="object-cover" />
                 <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                    <div className="relative z-10">
                      <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Volume</p>
                      <p className="text-white font-bold text-2xl">High</p>
                    </div>
                     {/* Abstract wave decoration */}
                     <div className="absolute bottom-0 left-0 w-full h-16 text-orange-500/90">
                      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                        <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                      </svg>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Transform Section - Based on provided designs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-emerald-500" />
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Effortless Service, Bigger Results</span>
            <div className="h-[1px] w-8 bg-emerald-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            Transform Your Restaurant with <span className="text-red-600">Dine360</span> <br className="hidden md:block"/> Full-Service Restaurant Software Solution
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Find out how Dine360 supports restaurants in improving order accuracy, reducing wait times, and maximizing revenue potential.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Background Decorative Shapes from Image 1 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full -z-10">
            <motion.div 
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-red-100/50 rounded-[4rem] -rotate-12"
            />
            <motion.div 
              initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 5, scale: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-zinc-200/50 rounded-[4rem] rotate-12"
            />
          </div>

          <div className="relative z-10 w-full max-w-4xl flex justify-center">
            {/* Main Phone Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Phone Status Bar */}
              <div className="h-6 w-full flex justify-between px-6 pt-2">
                <div className="text-[10px] text-zinc-400">9:41</div>
                <div className="flex gap-1.5 h-2 items-center">
                  <div className="w-3 h-2 bg-zinc-600 rounded-full" />
                  <div className="w-4 h-2 bg-zinc-600 rounded-full" />
                </div>
              </div>

              {/* Phone App Content */}
              <div className="p-4 flex-1 flex flex-col pt-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500 mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl">M</div>
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-lg">Restaurant Hub</h3>
                  <p className="text-zinc-500 text-[10px]">Cloud Operations Active</p>
                </div>
                
                <div className="space-y-3">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="h-10 w-full bg-zinc-800/50 rounded-xl animate-pulse" />
                   ))}
                </div>
              </div>
            </motion.div>

            {/* Overlapping Metrics Cards - Based on Content from Image 2 */}
            
            {/* 90% Cost Reduction */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -left-12 top-20 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <TrendingUp className="w-5 h-5 rotate-180" />
                </div>
                <span className="text-2xl font-bold text-zinc-900">90%</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Cost Reduction</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Reducing operational costs in your restaurant efficiently.</p>
            </motion.div>

            {/* 100% Easy Payment System */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 w-full max-w-[280px] z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-zinc-900">100%</span>
                    <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">SECURED</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-800">Easy Payment System</p>
                  <p className="text-[11px] text-zinc-500 mt-1">A hassle-free and secure payment system.</p>
                </div>
              </div>
            </motion.div>

            {/* 30% Revenue Increase */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-12 top-48 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-50 rounded-lg text-red-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold text-zinc-900">30%</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Revenue Increase</p>
              <p className="text-[11px] text-zinc-500">Boosting sales and increasing overall profitability.</p>
            </motion.div>

            {/* Floating Circular Icons from Image 1 Design */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-24 top-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-zinc-100"
            >
               <Layout className="w-6 h-6 text-red-500" />
               <span className="text-[8px] font-bold text-zinc-400 mt-1">Dashboard</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              className="absolute -right-24 top-20 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-zinc-100"
            >
               <Smartphone className="w-6 h-6 text-zinc-800" />
               <span className="text-[8px] font-bold text-zinc-400 mt-1">App</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -right-10 -bottom-10 w-20 h-20 bg-zinc-900 rounded-full shadow-2xl flex flex-col items-center justify-center border border-zinc-800"
            >
               <Dot className="w-10 h-10 text-emerald-500 animate-pulse" />
               <span className="text-[8px] font-bold text-zinc-400 -mt-2">Live Cloud</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Performance Journey Section - Design from Image 1, Content from Image 2 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
          >
            Dine360 Challenging
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
          >
            The Performance Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-2xl mx-auto text-sm"
          >
            Transforming fast food operations with innovative speed. Explore our story of efficiency and accuracy, creating a system that inspires and enhances modern dining.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Step 1: Left Image */}
          <div className="flex flex-col md:flex-row items-center relative">
            {/* The Curve */}
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800" alt="Fast Processing" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">3X Faster Order Processing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Cut down serving time and maximize table turnover. Our cloud-integrated order management ensures your staff moves at the speed of light.
              </p>
            </div>
          </div>

          {/* Step 2: Right Image */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            {/* The Curve */}
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800" alt="Order Syncing" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Instant Order Syncing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Eliminate manual errors and communication gaps between the floor and the kitchen. Orders are updated in real-time across all devices.
              </p>
            </div>
          </div>

          {/* Step 3: Left Image */}
          <div className="flex flex-col md:flex-row items-center relative md:-mt-[10px]">
            {/* The Curve */}
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800" alt="Zero Delays" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Zero Order Delays</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Keep your service flowing like clockwork. Our intelligent queue management prevents bottlenecks even during your busiest rush.
              </p>
            </div>
          </div>

          {/* Step 4: Right Image */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            {/* The Curve */}
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800" alt="Order Accuracy" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">100% Order Accuracy</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Deliver precision with every plate. Our visual order confirmation and real-time validation eliminate mistakes before they happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - 3 Overlapping UI Images */}
          <div className="relative h-[420px] w-full">
            {/* Base Image - Create New Order */}
            <motion.div 
              className="absolute top-0 left-0 w-[80%] aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100 z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full w-full bg-zinc-50 flex flex-col p-5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-zinc-900 text-base">Create New Order</h3>
                    <p className="text-[10px] text-zinc-500">Manage sales orders from here</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-3 p-2.5 bg-white border border-zinc-100 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-zinc-200 rounded-lg overflow-hidden relative">
                         <Image src={i === 1 ? CARD_IMAGES[0] : CARD_IMAGES[2]} alt="Food" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[12px] text-zinc-800">{i === 1 ? 'Paratha' : 'Veg Curry'}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-zinc-900 font-bold text-xs">$150.45</span>
                          <span className="text-red-500 text-[9px] font-bold">-10%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Overlapping Image 2 - Order Information (Right/Top) */}
            <motion.div 
              className="absolute top-4 right-0 w-[45%] h-[65%] bg-white rounded-2xl shadow-xl overflow-hidden border border-zinc-100 z-30"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-center border-b border-zinc-100 pb-2 mb-3">
                  <span className="text-[10px] font-bold text-zinc-800">Order Info</span>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase">Type</p>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-[9px] text-zinc-800 font-medium">
                        <div className="w-2 h-2 rounded-full bg-red-500" /> Dine In
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 pt-1">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase">Customer</p>
                    <div className="w-full h-7 bg-zinc-50 border border-zinc-200 rounded px-2 text-[9px] flex items-center text-zinc-400">Search...</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Image 3 - Payment (Bottom Left) */}
            <motion.div 
              className="absolute bottom-4 left-0 w-[55%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-100 z-40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase mb-1.5">Payment</p>
                  <label className="flex items-center gap-2 text-[9px] text-zinc-800 font-bold">
                    <input type="radio" name="pay" defaultChecked className="accent-red-500" /> Pay First
                  </label>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 h-8 border border-zinc-100 rounded-lg text-[9px] font-bold">Clear</button>
                  <button className="flex-2 h-8 bg-emerald-600 rounded-lg text-[9px] text-white font-bold px-3">Place Order</button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">POS</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Fast, Reliable, and <br /> Built for the Rush
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Handle high-speed orders effortlessly with our fast food automated ordering 
              system built for speed.
            </p>

            <ul className="space-y-4">
              {[
                "Process orders in seconds to keep up.",
                "Track every order's journey in real time.",
                "Seamlessly integrate with multiple payments."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                   <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                     <Check className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">Order Management</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Manage Orders <br /> Like a Pro
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Ensure every order is tracked, updated, and handled swiftly. 
              No delays, just smooth operations.
            </p>

            <ul className="space-y-4">
              {[
                "Track order progress from prep to delivery.",
                "Make quick changes or duplicate orders.",
                "Monitor delivery progress in real-time."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                   <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                     <Check className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Side - UI Images */}
          <div className="relative h-[400px] w-full order-1 lg:order-2">
            <motion.div 
               className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-zinc-900 text-sm">Order Tracking</h3>
                  <div className="flex gap-1.5 text-[9px] font-bold">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">Pending</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Final</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  {[
                    { id: '#8374', item: 'Double Burger Deal', status: 'Pending' },
                    { id: '#8375', item: 'Spicy Wings', status: 'Preparation' }
                  ].map((order, i) => (
                    <div key={i} className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-zinc-400 text-[10px]">
                           {order.id}
                        </div>
                        <p className="font-bold text-zinc-800 text-xs">{order.item}</p>
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full ${order.status === 'Pending' ? 'bg-yellow-400' : 'bg-blue-400'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Table & Reservation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - UI Image */}
          <div className="relative h-[400px] w-full">
            <motion.div 
               className="absolute inset-x-0 top-0 h-[320px] bg-white rounded-3xl shadow-lg overflow-hidden border border-zinc-100 p-6"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="grid grid-cols-4 gap-3 h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`aspect-square rounded-xl flex flex-col items-center justify-center border transition-all ${i % 3 === 0 ? 'border-red-500 bg-red-50 text-red-600' : 'border-zinc-100 bg-zinc-50 text-zinc-300'}`}>
                    <span className="text-[10px] font-bold">T-{i+1}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="absolute bottom-4 right-4 w-56 p-5 bg-white rounded-2xl shadow-2xl border border-zinc-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-zinc-900 text-[12px] mb-3">Reservation</h4>
              <div className="space-y-2">
                <div className="h-7 bg-zinc-50 rounded px-2.5 text-[9px] flex items-center text-zinc-400">Date & Time</div>
                <button className="w-full h-7 bg-zinc-900 text-white rounded text-[9px] font-bold">Confirm</button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">Table & Reservation</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Optimize Your <br /> Seating
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Master your seating and reservations with a smart, easy-to-use system.
            </p>

            <ul className="space-y-4">
              {[
                "Graphical view of your floor layout.",
                "Check table availability at a glance.",
                "Streamline booking and walk-ins."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                   <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                     <Check className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* QR Code Menu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50 border-y border-zinc-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">QR Code Menu</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Instant Access, No <br /> Touch, Just Scan
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Faster and paper-free service with Menuium&apos;s digital menu.
            </p>

            <ul className="space-y-4">
              {[
                "Browse and choose directly from phones.",
                "Update your menu easily and instantly.",
                "Link directly to a website at any time."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                   <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                     <Check className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Side - UI Visualization */}
          <div className="relative h-[450px] w-full order-1 lg:order-2 flex items-center justify-center">
             <motion.div 
               className="w-[240px] h-[400px] bg-white rounded-[2.5rem] border-[6px] border-zinc-900 shadow-xl relative overflow-hidden"
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
                <div className="h-full w-full bg-white flex flex-col">
                  <div className="h-5 w-full flex justify-center items-end py-1">
                    <div className="w-12 h-3 bg-zinc-900 rounded-full" />
                  </div>
                  <div className="p-3 flex-1 overflow-hidden">
                    <div className="h-24 bg-zinc-100 rounded-xl mb-3 relative overflow-hidden">
                       <Image src={CARD_IMAGES[3]} alt="Feature" fill className="object-cover" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between items-center p-2 border border-zinc-50 rounded-lg">
                          <span className="text-[10px] font-bold text-zinc-800">Burger</span>
                          <span className="text-[10px] text-red-600 font-bold">$12.99</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border border-zinc-50 rounded-lg">
                          <span className="text-[10px] font-bold text-zinc-800">Pizza</span>
                          <span className="text-[10px] text-red-600 font-bold">$15.99</span>
                        </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-zinc-100">
                    <div className="w-full py-2 bg-red-600 text-white rounded-lg text-center text-[10px] font-bold">View Cart</div>
                  </div>
                </div>
             </motion.div>
          </div>

        </div>
      </section>

      {/* Multi Branch Restaurant Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Dashboard Visualization */}
          <div className="relative h-[420px] w-full flex items-center justify-center">
             {/* Main Dashboard Card */}
             <motion.div 
               className="absolute top-0 left-0 w-[85%] bg-white rounded-3xl shadow-lg border border-zinc-100 p-6 z-10"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="mb-4">
                  <h3 className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                    <Layout className="w-4 h-4 text-red-500" />
                    Branch Network
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 bg-zinc-50 rounded-2xl">
                    <p className="text-[9px] text-zinc-400 font-bold uppercase mb-0.5">Total</p>
                    <p className="text-xl font-bold text-zinc-900">$24k</p>
                  </div>
                  <div className="p-3.5 bg-red-50 rounded-2xl border border-red-100">
                    <p className="text-[9px] text-red-400 font-bold uppercase mb-0.5">Active</p>
                    <p className="text-xl font-bold text-red-600">86</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {['Manhattan Branch', 'Brooklyn Outlet'].map((branch, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 bg-zinc-50 rounded-xl border border-zinc-100">
                      <span className="text-[10px] font-bold text-zinc-700">{branch}</span>
                      <span className="text-[9px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-bold">Online</span>
                    </div>
                  ))}
                </div>
             </motion.div>

             {/* Smaller Floating Card */}
             <motion.div 
               className="absolute bottom-4 right-0 w-[55%] bg-zinc-900 rounded-2xl shadow-xl p-5 z-20"
               initial={{ opacity: 0, y: 50, x: 20 }}
               whileInView={{ opacity: 1, y: 0, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
             >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white text-[10px] font-bold">Analytics</p>
                  <Dot className="text-green-500 w-6 h-6 animate-pulse" />
                </div>
                <div className="h-16 w-full flex items-end justify-between gap-1">
                  {[40, 70, 45, 90, 65, 80].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-full bg-red-500 rounded-t-sm" />
                  ))}
                </div>
             </motion.div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">Multi Branch Restaurant</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Master Every Branch
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed">
              Streamline operations at all locations with ease and centralized control.
            </p>

            <ul className="space-y-4">
              {[
                "View real-time sales and reports for each branch.",
                "Update and customize your menu across locations.",
                "Control everything from a single dashboard."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                   <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                     <Check className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Testimonials />
      <FAQ />

      <Footer />
    </div>
  )
}

export default FastFoodPage
