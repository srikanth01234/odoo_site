'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Dot, Layout, TrendingUp, Smartphone, Zap, RefreshCw, Clock, Target, ShoppingCart, Package, QrCode, BookOpen, Tag, Users } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600"
]

const CafeBistroPage = () => {
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
                    src={`https://randomuser.me/api/portraits/thumb/women/${10 + i}.jpg`}
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

            <div className="inline-flex items-center gap-2 text-violet-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-violet-500" />
              Crafted for the Coffee & Dining Experience
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Cafe & Bistro POS System <br />
              <span className="italic font-serif font-light text-zinc-800">with Complete Management</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Elevate your cafe or bistro with a smart, all-in-one management system. Serve coffee, food, and experiences — all managed effortlessly in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link
                href="/contact"
                className="bg-violet-600 hover:bg-violet-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-violet-600/20 active:scale-95"
              >
                Start Free Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-zinc-200 hover:border-violet-500 text-zinc-700 hover:text-violet-600 px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
              >
                Book A Demo
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-xs font-semibold text-zinc-500">Cafe & Bistro POS System With Complete Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-300" />
                <span className="text-xs font-semibold text-zinc-500">Complete Cafe & Bistro Management Solution</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-violet-50/50 to-purple-50/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              {/* Card 1 - Left Tilted */}
              <motion.div
                className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right"
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src={CARD_IMAGES[0]} alt="Cafe" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Orders</p>
                    <p className="text-white font-bold text-2xl">3X</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-violet-500/90">
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
                <Image src={CARD_IMAGES[1]} alt="Coffee" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Satisfaction</p>
                    <p className="text-white font-bold text-2xl">Optimal</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-purple-500/90">
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
                <Image src={CARD_IMAGES[2]} alt="Bistro" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Accuracy</p>
                    <p className="text-white font-bold text-2xl">100%</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-violet-500/90">
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

      {/* Growth Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-violet-500" />
            <span className="text-violet-600 font-bold tracking-widest uppercase text-xs">Brew Better, Earn More</span>
            <div className="h-[1px] w-8 bg-violet-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            From Your First Latte to a Full House — <br className="hidden md:block" />
            <span className="text-violet-600">Menumium Powers It All</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Discover how Menumium transforms cafe and bistro operations with faster service, loyal customers, and real-time business insights.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full -z-10">
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-violet-100/50 rounded-[4rem] -rotate-12"
            />
            <motion.div
              initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 5, scale: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-zinc-200/50 rounded-[4rem] rotate-12"
            />
          </div>

          <div className="relative z-10 w-full max-w-4xl flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="h-6 w-full flex justify-between px-6 pt-2">
                <div className="text-[10px] text-zinc-400">9:41</div>
                <div className="flex gap-1.5 h-2 items-center">
                  <div className="w-3 h-2 bg-zinc-600 rounded-full" />
                  <div className="w-4 h-2 bg-zinc-600 rounded-full" />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col pt-8">
                <div className="w-12 h-12 rounded-2xl bg-violet-500 mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl">M</div>
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-lg">Cafe & Bistro Hub</h3>
                  <p className="text-zinc-500 text-[10px]">Cloud Operations Active</p>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 w-full bg-zinc-800/50 rounded-xl animate-pulse" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -left-12 top-20 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-zinc-900">☕</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Happy Customer</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Boosting Satisfaction with Faster Service</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 w-full max-w-[280px] z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-zinc-900">📊</span>
                    <span className="text-[10px] bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full font-bold">LIVE</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-800">Sales Track</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Monitor End-to-End with Our Data Analytics</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-12 top-48 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-lg">🔄</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Repeat Customer</p>
              <p className="text-[11px] text-zinc-500">Turned One-Time Visitors into Regulars</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-24 top-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-zinc-100"
            >
              <Layout className="w-6 h-6 text-violet-500" />
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
              <Dot className="w-10 h-10 text-violet-500 animate-pulse" />
              <span className="text-[8px] font-bold text-zinc-400 -mt-2">Live Cloud</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All-in-One Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-14 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-violet-500" />
            <span className="text-violet-400 font-bold tracking-widest uppercase text-xs">All-in-One Cafe & Bistro Solution</span>
            <div className="h-[1px] w-8 bg-violet-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            From Morning Brews to Evening Dining — <br className="hidden md:block" />Everything Your Cafe Needs
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Menumium delivers a complete cafe and bistro management solution, enabling you to serve with speed, accuracy, and a personal touch every single time.
          </p>
        </motion.div>
      </section>

      {/* Performance Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
          >
            Scale Fast, Serve Smarter With Menumium
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
          >
            The Ingredients of a <br /> Thriving Cafe Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-2xl mx-auto text-sm"
          >
            Transform your cafe or bistro operations with smart tools built for speed, consistency, and a memorable guest experience.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" alt="Fast Orders" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">3X Faster Order Processing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Speed up your morning rush and lunch crowd with a system built to process orders in seconds and keep your baristas focused on the craft.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" alt="Instant Syncing" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Instant Order Syncing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Bridge the gap between your front counter and kitchen instantly. Every order, every modification — synced live across all your devices.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" alt="Zero Delays" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Zero Order Delays</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Keep every table happy and every counter moving. Intelligent queue management eliminates delays even during your busiest peak hours.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800" alt="Accuracy" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">100% Order Accuracy</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Serve every order exactly as requested. Real-time confirmation and validation catch mistakes before they reach your guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-violet-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full" />
              </div>
              <span className="text-violet-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <ShoppingCart className="w-3.5 h-3.5" /> Order Management
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Manage Every Order <br /> Smoothly & Accurately
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Handle dine-in, takeaway, and delivery orders from a single screen. Menumium keeps your cafe running without a hitch, no matter how busy it gets.
            </p>
            <ul className="space-y-4">
              {[
                "Track all live orders at a glance with smart search and filter tools.",
                "Quickly update orders — change sizes, add syrups, or modify extras instantly.",
                "Offer smooth cancellations and fast refunds to keep customers happy."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-violet-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>

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
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Ready</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  {[
                    { id: '#501', item: 'Flat White + Croissant', status: 'Pending' },
                    { id: '#502', item: 'Avocado Toast x2', status: 'Preparation' },
                    { id: '#503', item: 'Matcha Latte', status: 'Pending' }
                  ].map((order, i) => (
                    <div key={i} className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-zinc-400 text-[9px]">{order.id}</div>
                        <p className="font-bold text-zinc-800 text-xs">{order.item}</p>
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full ${order.status === 'Pending' ? 'bg-yellow-400' : 'bg-violet-400'}`} />
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
          <div className="relative h-[400px] w-full">
            <motion.div
              className="absolute inset-x-0 top-0 h-[320px] bg-white rounded-3xl shadow-lg overflow-hidden border border-zinc-100 p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-4 gap-3 h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`aspect-square rounded-xl flex flex-col items-center justify-center border transition-all ${i % 3 === 0 ? 'border-violet-500 bg-violet-50 text-violet-600' : 'border-zinc-100 bg-zinc-50 text-zinc-300'}`}>
                    <span className="text-[10px] font-bold">T-{i + 1}</span>
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
              <h4 className="font-bold text-zinc-900 text-[12px] mb-3">Table Reservation</h4>
              <div className="space-y-2">
                <div className="h-7 bg-zinc-50 rounded px-2.5 text-[9px] flex items-center text-zinc-400">Date & Time</div>
                <button className="w-full h-7 bg-zinc-900 text-white rounded text-[9px] font-bold">Confirm</button>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-violet-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full" />
              </div>
              <span className="text-violet-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <Users className="w-3.5 h-3.5" /> Table & Reservation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Keep Your Tables <br /> Always Organized
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Manage seating, reservations, and walk-ins effortlessly. Give every guest the right table at the right time and create a seamless bistro atmosphere.
            </p>
            <ul className="space-y-4">
              {[
                "Graphical floor view to visualize and manage your seating layout.",
                "Check real-time table availability and reserve for upcoming guests.",
                "Streamline both walk-ins and pre-bookings from a single interface."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-violet-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] w-full">
            <motion.div
              className="absolute top-0 left-0 w-[80%] aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100 z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full w-full bg-zinc-50 flex flex-col p-5">
                <h3 className="font-bold text-zinc-900 text-base mb-1">Create New Order</h3>
                <p className="text-[10px] text-zinc-500 mb-4">Dine-in &amp; Takeaway</p>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-3 p-2.5 bg-white border border-zinc-100 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-zinc-200 rounded-lg overflow-hidden relative">
                        <Image src={i === 1 ? CARD_IMAGES[0] : CARD_IMAGES[1]} alt="Food" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[12px] text-zinc-800">{i === 1 ? 'Eggs Benedict' : 'Cappuccino'}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-zinc-900 font-bold text-xs">$12.50</span>
                          <span className="text-violet-500 text-[9px] font-bold">-10%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-4 right-0 w-[45%] h-[65%] bg-white rounded-2xl shadow-xl overflow-hidden border border-zinc-100 z-30"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-4 h-full flex flex-col">
                <span className="text-[10px] font-bold text-zinc-800 border-b border-zinc-100 pb-2 mb-3 block">Order Info</span>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase">Type</p>
                    <div className="flex items-center gap-1 text-[9px] text-zinc-800 font-medium">
                      <div className="w-2 h-2 rounded-full bg-violet-500" /> Dine-in
                    </div>
                  </div>
                  <div className="space-y-1 pt-1">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase">Invoice</p>
                    <div className="w-full h-7 bg-zinc-50 border border-zinc-200 rounded px-2 text-[9px] flex items-center text-zinc-400">Full / Customer</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-0 w-[55%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-100 z-40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-4">
                <p className="text-[9px] font-bold text-zinc-500 uppercase mb-2">Payment</p>
                <label className="flex items-center gap-2 text-[9px] text-zinc-800 font-bold mb-3">
                  <input type="radio" name="pay" defaultChecked className="accent-violet-500" /> Pay First
                </label>
                <div className="flex gap-2">
                  <button className="flex-1 h-8 border border-zinc-100 rounded-lg text-[9px] font-bold">Clear</button>
                  <button className="flex-2 h-8 bg-violet-600 rounded-lg text-[9px] text-white font-bold px-3">Place Order</button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-violet-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full" />
              </div>
              <span className="text-violet-500 font-bold tracking-wider uppercase text-xs">POS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              A POS as Refined <br /> as Your Cafe
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Menumium&apos;s cafe POS keeps service smooth and stress-free, from the morning rush to the last table of the evening.
            </p>
            <ul className="space-y-4">
              {[
                "Handle dine-in and takeaway orders quickly without delays.",
                "Print or send digital receipts — full, customer, or kitchen format.",
                "Accept all payment methods for a frictionless checkout experience."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-violet-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Menu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50 border-y border-zinc-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-violet-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full" />
              </div>
              <span className="text-violet-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <QrCode className="w-3.5 h-3.5" /> QR Code Menu
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Your Menu, <br /> Just a Scan Away
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Let guests browse your full cafe menu from their phones. Create beautiful, branded QR menus that update instantly for seasonal specials and daily offers.
            </p>
            <ul className="space-y-4">
              {[
                "Design QR codes that match your cafe's brand and aesthetic.",
                "Let customers browse your full menu from their own device.",
                "Update prices and items in real-time — no reprinting needed."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>

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
                    <Image src={CARD_IMAGES[3]} alt="Cafe Menu" fill className="object-cover" />
                  </div>
                  <div className="space-y-2">
                    {['Flat White — $4.50', 'Eggs Benedict — $14.00', 'Banana Bread — $6.00'].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-2 border border-zinc-50 rounded-lg">
                        <span className="text-[10px] font-bold text-zinc-800">{item.split('—')[0]}</span>
                        <span className="text-[10px] text-violet-600 font-bold">{item.split('—')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 border-t border-zinc-100">
                  <div className="w-full py-2 bg-violet-600 text-white rounded-lg text-center text-[10px] font-bold">View Cart</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi Menu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] w-full flex items-center justify-center">
            <motion.div
              className="absolute top-0 left-0 w-[85%] bg-white rounded-3xl shadow-lg border border-zinc-100 p-6 z-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-zinc-900 text-sm flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-violet-500" /> Menu Management
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 bg-zinc-50 rounded-2xl">
                  <p className="text-[9px] text-zinc-400 font-bold uppercase mb-0.5">Menus</p>
                  <p className="text-xl font-bold text-zinc-900">8</p>
                </div>
                <div className="p-3.5 bg-violet-50 rounded-2xl border border-violet-100">
                  <p className="text-[9px] text-violet-400 font-bold uppercase mb-0.5">Seasonal</p>
                  <p className="text-xl font-bold text-violet-600">3</p>
                </div>
              </div>
              <div className="space-y-2">
                {['All-Day Breakfast Menu', 'Seasonal Brunch Specials', 'Afternoon Tea Menu'].map((menu, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="text-[10px] font-bold text-zinc-700">{menu}</span>
                    <span className="text-[9px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-bold">Active</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-0 w-[55%] bg-zinc-900 rounded-2xl shadow-xl p-5 z-20"
              initial={{ opacity: 0, y: 50, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-white text-[10px] font-bold">Menu Performance</p>
                <Dot className="text-violet-500 w-6 h-6 animate-pulse" />
              </div>
              <div className="h-16 w-full flex items-end justify-between gap-1">
                {[50, 75, 40, 85, 60, 90].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-full bg-violet-500 rounded-t-sm" />
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-violet-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full" />
              </div>
              <span className="text-violet-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> Multi Menu + Seasonal Menu
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Create, Update & Organize <br /> Menus — All in One Place
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              From daily specials to seasonal offerings — Menumium lets you build and manage multiple menus that keep your cafe fresh and your customers excited.
            </p>
            <ul className="space-y-4">
              {[
                "Organize items into categories and subcategories for easy navigation.",
                "Add seasonal specials and event-based menus to boost daily sales.",
                "Toggle item availability on or off based on stock or time of day."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-violet-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-violet-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full" />
              </div>
              <span className="text-violet-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" /> Promotions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Simplify Promotions, <br /> Amplify Success
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Turn your cafe into a customer magnet. Menumium&apos;s promotions engine helps you run irresistible deals that drive footfall and increase order value.
            </p>
            <ul className="space-y-4">
              {[
                'Run "Buy One, Get One" coffee deals to attract more customers.',
                "Launch happy hour discounts during slow periods to drive traffic.",
                "Reward loyal guests with personalized coupons and exclusive perks."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-violet-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] w-full order-1 lg:order-2">
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-900 text-sm">Active Promotions</h3>
                  <span className="text-[9px] px-2 py-0.5 bg-violet-100 text-violet-600 rounded-full font-bold">3 Active</span>
                </div>
                {[
                  { title: 'Buy 1 Coffee, Get 1 Free', desc: 'All Espresso Drinks — Morning', badge: 'BOGO', color: 'bg-violet-50 border-violet-100' },
                  { title: 'Happy Hour 20% Off', desc: '2PM–4PM Daily', badge: 'TIME', color: 'bg-yellow-50 border-yellow-100' },
                  { title: 'Loyalty Reward Coupon', desc: 'After 5 visits — Free Pastry', badge: 'LOYALTY', color: 'bg-purple-50 border-purple-100' }
                ].map((promo, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${promo.color} flex items-center justify-between`}>
                    <div>
                      <p className="font-bold text-zinc-800 text-xs mb-0.5">{promo.title}</p>
                      <p className="text-[10px] text-zinc-500">{promo.desc}</p>
                    </div>
                    <span className="text-[8px] font-black px-2 py-1 bg-white rounded-lg shadow-sm text-zinc-600">{promo.badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default CafeBistroPage
