'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Dot, Layout, TrendingUp, Smartphone, Zap, RefreshCw, Clock, Target, ShoppingCart, Package, QrCode, BookOpen, Tag } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?auto=format&fit=crop&q=80&w=600"
]

const GhostKitchenPage = () => {
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
                Join 2,460+ Restaurants
              </span>
            </div>

            <div className="inline-flex items-center gap-2 text-indigo-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-indigo-500" />
              Built for the Future of Food Delivery
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Ghost Kitchen POS & <br />
              <span className="italic font-serif font-light text-zinc-800">Delivery Management Software</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Run lean, deliver fast, and scale your ghost or virtual kitchen with smart operations management built for the modern food delivery world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                Start Free Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-zinc-200 hover:border-indigo-500 text-zinc-700 hover:text-indigo-600 px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
              >
                Book A Demo
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-semibold text-zinc-500">Ghost Kitchen Management With Complete Delivery Control</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-300" />
                <span className="text-xs font-semibold text-zinc-500">Multi-Brand Virtual Kitchen Solution</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-indigo-50/50 to-blue-50/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              {/* Card 1 - Left Tilted */}
              <motion.div
                className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right"
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src={CARD_IMAGES[0]} alt="Ghost Kitchen" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Orders</p>
                    <p className="text-white font-bold text-2xl">5X</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-indigo-500/90">
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
                <Image src={CARD_IMAGES[1]} alt="Delivery" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Efficiency</p>
                    <p className="text-white font-bold text-2xl">Peak</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-blue-500/90">
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
                <Image src={CARD_IMAGES[2]} alt="Virtual Kitchen" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Delivery</p>
                    <p className="text-white font-bold text-2xl">Fast</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-indigo-500/90">
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
            <div className="h-[1px] w-8 bg-indigo-500" />
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Deliver Smarter, Scale Faster</span>
            <div className="h-[1px] w-8 bg-indigo-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            From One Brand to Many — <br className="hidden md:block" />
            <span className="text-indigo-600">Menumium Powers Your Virtual Kitchen</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Discover how Menumium helps ghost and virtual kitchens optimize delivery orders, manage multiple brands, and maximize output from a single kitchen space.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full -z-10">
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-[4rem] -rotate-12"
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
                <div className="w-12 h-12 rounded-2xl bg-indigo-500 mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl">M</div>
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-lg">Virtual Kitchen Hub</h3>
                  <p className="text-zinc-500 text-[10px]">Multi-Brand Operations Active</p>
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
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-zinc-900">🛵</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Delivery Optimized</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Faster Dispatch, Happier Customers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 w-full max-w-[280px] z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-zinc-900">📊</span>
                    <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-bold">LIVE</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-800">Brand Track</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Monitor Every Brand with Live Analytics</p>
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
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-lg">🔄</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Repeat Orders</p>
              <p className="text-[11px] text-zinc-500">Turn First-Time Buyers into Loyal Fans</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-24 top-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-zinc-100"
            >
              <Layout className="w-6 h-6 text-indigo-500" />
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
              <Dot className="w-10 h-10 text-indigo-500 animate-pulse" />
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
            <div className="h-[1px] w-8 bg-indigo-500" />
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs">All-in-One Ghost Kitchen Solution</span>
            <div className="h-[1px] w-8 bg-indigo-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            One Kitchen. Multiple Brands. <br className="hidden md:block" />Unlimited Growth.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Menumium empowers ghost and virtual kitchen operators to run multiple food brands from a single location — efficiently, profitably, and with complete control.
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
            Optimize Every Order, Every Brand, Every Time
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
          >
            The Blueprint for a <br /> High-Performing Ghost Kitchen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-2xl mx-auto text-sm"
          >
            Streamline your virtual kitchen operations with tools built for high-volume delivery, multi-brand management, and precision kitchen workflows.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800" alt="Delivery Orders" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">5X Faster Delivery Processing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Accept and process delivery orders at lightning speed. Smart routing keeps your kitchen team focused and every order moving efficiently to dispatch.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" alt="Multi-Brand Sync" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Multi-Brand Order Syncing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Seamlessly manage orders across all your virtual brands from a single dashboard without any confusion or overlap.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800" alt="Zero Delays" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Zero-Delay Kitchen Dispatch</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Eliminate preparation bottlenecks with smart kitchen display systems that prioritize and sequence orders by estimated delivery time.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800" alt="Accuracy" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">100% Order Accuracy</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Deliver exactly what was ordered, every time. Automated order confirmation and kitchen-to-dispatch tracking eliminates costly mistakes.
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
              <div className="h-[2px] w-10 bg-indigo-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-indigo-500 rounded-full" />
              </div>
              <span className="text-indigo-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <ShoppingCart className="w-3.5 h-3.5" /> Order Management
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Run Every Delivery <br /> Like Clockwork
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Centralize all incoming delivery orders — whether from platforms or direct — into a single, smart dashboard. Never miss a beat across any of your virtual brands.
            </p>
            <ul className="space-y-4">
              {[
                "Aggregate all delivery orders into one view for faster processing.",
                "Track live order status from preparation to dispatch in real-time.",
                "Handle bulk order volumes efficiently during peak delivery periods."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
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
                  <h3 className="font-bold text-zinc-900 text-sm">Delivery Orders</h3>
                  <div className="flex gap-1.5 text-[9px] font-bold">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">Pending</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Dispatched</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  {[
                    { id: '#301', item: 'Burger Combo x3 — BurgerBrand', status: 'Pending' },
                    { id: '#302', item: 'Pizza Margherita — PizzaBrand', status: 'Preparation' },
                    { id: '#303', item: 'Noodles Bowl x2 — NoodleBrand', status: 'Pending' }
                  ].map((order, i) => (
                    <div key={i} className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-zinc-400 text-[9px]">{order.id}</div>
                        <p className="font-bold text-zinc-800 text-xs">{order.item}</p>
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full ${order.status === 'Pending' ? 'bg-yellow-400' : 'bg-indigo-400'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full">
            <motion.div
              className="absolute top-0 left-0 w-[90%] bg-white rounded-3xl shadow-lg border border-zinc-100 p-6 z-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-900 text-sm flex items-center gap-2">
                    <Package className="w-4 h-4 text-indigo-500" /> Stock Overview
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">3 Brands</span>
                </div>
                <div className="space-y-3">
                  {[
                    { ingredient: 'Chicken Breasts', level: 80, brand: 'BurgerBrand' },
                    { ingredient: 'Pizza Dough', level: 35, brand: 'PizzaBrand' },
                    { ingredient: 'Noodles', level: 60, brand: 'NoodleBrand' }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="flex justify-between text-[10px] font-bold text-zinc-700 mb-1.5">
                        <span>{item.ingredient}</span>
                        <span className="text-zinc-400">{item.brand}</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${item.level < 40 ? 'bg-red-400' : 'bg-indigo-500'}`} style={{ width: `${item.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-56 bg-zinc-900 rounded-2xl p-4 shadow-2xl z-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-white text-[10px] font-bold">Low Stock Alert</p>
                <Dot className="text-red-500 w-5 h-5 animate-pulse" />
              </div>
              <p className="text-red-400 text-[9px] font-bold">Pizza Dough — 35%</p>
              <p className="text-zinc-500 text-[9px] mt-1">Reorder triggered automatically</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-indigo-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-indigo-500 rounded-full" />
              </div>
              <span className="text-indigo-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <Package className="w-3.5 h-3.5" /> Inventory Management
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Unified Inventory <br /> Across All Your Brands
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Track ingredients and supplies across all your virtual brands from a single system. Know what you need before you run out and reduce waste significantly.
            </p>
            <ul className="space-y-4">
              {[
                "Track ingredient levels across all virtual brands in real-time.",
                "Receive automatic low-stock alerts before shortages affect operations.",
                "Analyze consumption patterns to optimize purchasing and reduce waste."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
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
                <h3 className="font-bold text-zinc-900 text-base mb-1">Virtual Kitchen POS</h3>
                <p className="text-[10px] text-zinc-500 mb-4">Multi-Brand Order Center</p>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-3 p-2.5 bg-white border border-zinc-100 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-zinc-200 rounded-lg overflow-hidden relative">
                        <Image src={CARD_IMAGES[i - 1]} alt="Food" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[12px] text-zinc-800">{i === 1 ? 'Smash Burger Deluxe' : 'Pepperoni Pizza'}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-zinc-900 font-bold text-xs">$14.00</span>
                          <span className="text-indigo-500 text-[9px] font-bold">-15%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-0 w-[55%] bg-white rounded-2xl shadow-xl overflow-hidden border border-zinc-100 z-40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-4">
                <p className="text-[9px] font-bold text-zinc-500 uppercase mb-2">Payment</p>
                <label className="flex items-center gap-2 text-[9px] text-zinc-800 font-bold mb-3">
                  <input type="radio" name="pay" defaultChecked className="accent-indigo-500" /> Online / COD
                </label>
                <div className="flex gap-2">
                  <button className="flex-1 h-8 border border-zinc-100 rounded-lg text-[9px] font-bold">Clear</button>
                  <button className="flex-2 h-8 bg-indigo-600 rounded-lg text-[9px] text-white font-bold px-3">Confirm Order</button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-indigo-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-indigo-500 rounded-full" />
              </div>
              <span className="text-indigo-500 font-bold tracking-wider uppercase text-xs">POS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              A Ghost Kitchen POS <br /> Built for Speed & Scale
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Menumium&apos;s virtual kitchen POS handles the speed and volume of ghost kitchen operations — keeping your teams efficient and your customers satisfied.
            </p>
            <ul className="space-y-4">
              {[
                "Process delivery orders from multiple platforms in a single view.",
                "Assign and track kitchen timers per order for precise preparation.",
                "Automate receipts and invoicing for seamless digital checkout."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Brand Menu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-indigo-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-indigo-500 rounded-full" />
              </div>
              <span className="text-indigo-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> Multi-Brand Menu
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Manage All Brand Menus <br /> Effortlessly
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Build and maintain separate menus for each of your virtual brands from one central platform. Update prices, items, and availability instantly across all brands.
            </p>
            <ul className="space-y-4">
              {[
                "Create unique menus per brand with categories, modifiers, and pricing.",
                "Toggle item availability per brand without affecting others.",
                "Sync menu changes across all delivery platforms in seconds."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] w-full order-1 lg:order-2">
            <motion.div
              className="absolute top-0 left-0 w-[85%] bg-white rounded-3xl shadow-lg border border-zinc-100 p-6 z-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-zinc-900 text-sm flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-indigo-500" /> Brand Menus
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3.5 bg-zinc-50 rounded-2xl">
                  <p className="text-[9px] text-zinc-400 font-bold uppercase mb-0.5">Brands</p>
                  <p className="text-xl font-bold text-zinc-900">4</p>
                </div>
                <div className="p-3.5 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <p className="text-[9px] text-indigo-400 font-bold uppercase mb-0.5">Menus</p>
                  <p className="text-xl font-bold text-indigo-600">12</p>
                </div>
              </div>
              <div className="space-y-2">
                {['BurgerBrand — 8 Items', 'PizzaBrand — 14 Items', 'NoodleBrand — 10 Items'].map((menu, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="text-[10px] font-bold text-zinc-700">{menu}</span>
                    <span className="text-[9px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-bold">Live</span>
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
                <p className="text-white text-[10px] font-bold">Brand Performance</p>
                <Dot className="text-indigo-400 w-6 h-6 animate-pulse" />
              </div>
              <div className="h-16 w-full flex items-end justify-between gap-1">
                {[55, 80, 45, 90, 65, 75].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-full bg-indigo-500 rounded-t-sm" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] w-full">
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-900 text-sm">Active Promotions</h3>
                  <span className="text-[9px] px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded-full font-bold">3 Active</span>
                </div>
                {[
                  { title: 'Free Delivery on Orders $30+', desc: 'All Brands — Weekend Special', badge: 'FREE', color: 'bg-indigo-50 border-indigo-100' },
                  { title: 'Combo Deal 25% Off', desc: 'BurgerBrand — Weekday Lunch', badge: 'COMBO', color: 'bg-yellow-50 border-yellow-100' },
                  { title: 'Loyalty Points x2', desc: 'After 3 Orders — All Brands', badge: 'LOYALTY', color: 'bg-blue-50 border-blue-100' }
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

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-indigo-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-indigo-500 rounded-full" />
              </div>
              <span className="text-indigo-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" /> Promotions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Drive More Delivery Orders <br /> with Smart Promotions
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Attract new customers and maximize repeat orders with powerful promotion tools. Run targeted deals across all your virtual brands from one dashboard.
            </p>
            <ul className="space-y-4">
              {[
                "Create brand-specific or cross-brand discount promotions easily.",
                "Set free delivery thresholds to encourage larger order values.",
                "Reward high-frequency customers with loyalty perks across all brands."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
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

export default GhostKitchenPage
