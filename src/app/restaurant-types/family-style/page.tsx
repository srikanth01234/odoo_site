'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Dot, Layout, TrendingUp, Smartphone, Zap, RefreshCw, Clock, Target } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1504939097-451b0c9e1f44?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600",
]

const FamilyStylePage = () => {
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
                    src={`https://randomuser.me/api/portraits/thumb/men/${20 + i}.jpg`}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full">
                Join 3,200+ Restaurants
              </span>
            </div>

            <div className="inline-flex items-center gap-2 text-teal-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-teal-500" />
              Bringing Families Together
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Family-Style Restaurant <br />
              <span className="italic font-serif font-light text-zinc-800">Built for Warm Dining</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Manage large groups, shared plates, and family deals with ease. Menumium is purpose-built for the warm, welcoming pace of family-style dining.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link
                href="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-teal-600/20 active:scale-95"
              >
                Start Free Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-zinc-200 hover:border-teal-500 text-zinc-700 hover:text-teal-600 px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
              >
                Book A Demo
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-xs font-semibold text-zinc-500">Group Booking & Shared Plate Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-300" />
                <span className="text-xs font-semibold text-zinc-500">Family Deals, Loyalty & Table Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-teal-50/50 to-emerald-50/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div
                className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right"
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src={CARD_IMAGES[0]} alt="Family Dining" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Groups</p>
                    <p className="text-white font-bold text-2xl">+60%</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-teal-500/90">
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                      <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image src={CARD_IMAGES[1]} alt="Shared Plates" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Satisfaction</p>
                    <p className="text-white font-bold text-2xl">98%</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-emerald-500/90">
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                      <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-32 right-0 md:right-2 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-left"
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image src={CARD_IMAGES[2]} alt="Restaurant Interior" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Revenue Up</p>
                    <p className="text-white font-bold text-2xl">+45%</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-teal-500/90">
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

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-teal-500" />
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs">Big Tables, Bigger Smiles</span>
            <div className="h-[1px] w-8 bg-teal-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            More Covers, Less Chaos — <br className="hidden md:block" />
            <span className="text-teal-600">Menumium Powers It All</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            From booking a table for 20 to serving shared platters, Menumium handles the unique demands of family-style dining with ease.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full -z-10">
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-teal-100/50 rounded-[4rem] -rotate-12"
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
                <div className="w-12 h-12 rounded-2xl bg-teal-500 mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl">M</div>
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-lg">Family Hub</h3>
                  <p className="text-zinc-500 text-[10px]">Group Dining Manager Active</p>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 w-full bg-zinc-800/50 rounded-xl animate-pulse" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -left-12 top-20 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><TrendingUp className="w-5 h-5" /></div>
                <span className="text-lg font-bold text-zinc-900">👨‍👩‍👧</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Group Bookings</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Handle parties of all sizes with zero headaches</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 w-full max-w-[280px] z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600"><Check className="w-6 h-6" /></div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-zinc-900">🍽️</span>
                    <span className="text-[10px] bg-teal-100 text-teal-600 px-2 py-0.5 rounded-full font-bold">LIVE</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-800">Shared Plates</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Track platter orders and refills in real-time</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="absolute -right-12 top-48 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><TrendingUp className="w-5 h-5" /></div>
                <span className="text-lg">🎉</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Family Deals</p>
              <p className="text-[11px] text-zinc-500">Promotions built for groups that drive repeat visits</p>
            </motion.div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -left-24 top-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-zinc-100">
              <Layout className="w-6 h-6 text-teal-500" />
              <span className="text-[8px] font-bold text-zinc-400 mt-1">Dashboard</span>
            </motion.div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }} className="absolute -right-24 top-20 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-zinc-100">
              <Smartphone className="w-6 h-6 text-zinc-800" />
              <span className="text-[8px] font-bold text-zinc-400 mt-1">App</span>
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1 }} className="absolute -right-10 -bottom-10 w-20 h-20 bg-zinc-900 rounded-full shadow-2xl flex flex-col items-center justify-center border border-zinc-800">
              <Dot className="w-10 h-10 text-teal-500 animate-pulse" />
              <span className="text-[8px] font-bold text-zinc-400 -mt-2">Live Cloud</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All-in-One Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-teal-500" />
            <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">All-in-One Family Dining Solution</span>
            <div className="h-[1px] w-8 bg-teal-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            More Tables, Happier Families — <br className="hidden md:block" />Everything Your Restaurant Needs
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Menumium provides a complete family-style restaurant solution — group reservations, shared plate tracking, family promotions, and loyal guest management all in one platform.
          </p>
        </motion.div>
      </section>

      {/* Performance Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
            Dine360 Challenging
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            The Performance Journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 max-w-2xl mx-auto text-sm">
            From the moment a family walks in to the moment they leave, Menumium ensures every step is seamless, warm, and efficient.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[0]} alt="Group Booking" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-4"><Zap className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Effortless Group Booking</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Accept reservations for large groups online or at the counter. Assign the right tables automatically and ensure everyone has a seat when they arrive.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[1]} alt="Shared Plates" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-4"><RefreshCw className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Shared Plate Management</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Track shared platters and refill orders in real-time. Ensure the kitchen and floor team are always in sync, no matter how big the table.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[3]} alt="Family Deals" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-4"><Clock className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Family Deal Promotions</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Create and manage family meal bundles, weekend specials, and group discounts. Attract more families and increase your average check value.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[4]} alt="Loyalty" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-4"><Target className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Build Loyal Family Guests</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Reward returning families with points, birthday perks, and exclusive member benefits. Turn every visit into a reason to come back again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Reservations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-teal-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-teal-500 rounded-full" />
              </div>
              <span className="text-teal-500 font-bold tracking-wider uppercase text-xs">Group Management</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Big Groups? <br /> No Problem at All
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Whether it&apos;s a birthday party of 15 or a festive family gathering of 40, Menumium&apos;s group management tools keep everything running smoothly.
            </p>
            <ul className="space-y-4">
              {[
                "Auto-assign tables and merge seating for large party bookings in seconds.",
                "Split bills any way your guests prefer — per person, per family, or by dish.",
                "Send group confirmation messages and updates directly to the organiser."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-teal-600/20 active:scale-95">
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
                  <h3 className="font-bold text-zinc-900 text-sm">Group Bookings Today</h3>
                  <span className="text-[9px] font-bold px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full">Live</span>
                </div>
                <div className="flex-1 space-y-3">
                  {[
                    { name: 'Tan Family (10)', time: '6:30 PM', tables: 'T-01, T-02' },
                    { name: 'Birthday Party (18)', time: '7:00 PM', tables: 'Hall A' },
                    { name: 'Wong Group (6)', time: '8:15 PM', tables: 'T-07' }
                  ].map((res, i) => (
                    <div key={i} className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-zinc-800 text-xs">{res.name}</p>
                        <p className="text-[10px] text-zinc-500">{res.time}</p>
                      </div>
                      <span className="text-[9px] font-bold px-2 py-0.5 bg-teal-50 text-teal-700 border border-teal-100 rounded-full">{res.tables}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] w-full">
            <motion.div
              className="absolute top-0 left-0 w-[80%] aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100 z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full w-full bg-zinc-50 flex flex-col p-5">
                <h3 className="font-bold text-zinc-900 text-base mb-1">Family Platter Order</h3>
                <p className="text-[10px] text-zinc-500 mb-4">Hall A — 18 Pax</p>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-3 p-2.5 bg-white border border-zinc-100 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-zinc-200 rounded-lg overflow-hidden relative">
                        <Image src={i === 1 ? CARD_IMAGES[0] : CARD_IMAGES[1]} alt="Dish" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[12px] text-zinc-800">{i === 1 ? 'Roast Chicken Platter' : 'Vegetarian Spread'}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-zinc-900 font-bold text-xs">${i === 1 ? '48' : '36'}.00</span>
                          <span className="text-teal-500 text-[9px] font-bold">×{i === 1 ? 3 : 2}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-0 w-[50%] bg-white rounded-2xl shadow-2xl border border-zinc-100 z-20 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[9px] font-bold text-zinc-500 uppercase mb-2">Bill Split (18 pax)</p>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="text-zinc-600">Food Total</span>
                  <span className="font-bold text-zinc-900">$240.00</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-zinc-600">Family Discount</span>
                  <span className="font-bold text-teal-600">-$24.00</span>
                </div>
                <div className="flex justify-between text-[10px] border-t border-zinc-100 pt-1.5">
                  <span className="font-bold text-zinc-900">Per Person</span>
                  <span className="font-bold text-zinc-900">$12.00</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-teal-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-teal-500 rounded-full" />
              </div>
              <span className="text-teal-500 font-bold tracking-wider uppercase text-xs">POS & Billing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Flexible Billing <br /> for Every Family
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Family dining means flexible bills. Split by head, by family unit, or by dish — Menumium makes it fast and frictionless at checkout.
            </p>
            <ul className="space-y-4">
              {[
                "Instant per-person split calculation — no manual headaches.",
                "Apply family bundle discounts and loyalty points automatically at checkout.",
                "All payment types accepted: cash, card, QR pay, and e-wallets."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-teal-600/20 active:scale-95">
                Get Started Now
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

export default FamilyStylePage
