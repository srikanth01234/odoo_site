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
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=600",
]

const BakeryPage = () => {
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
                    src={`https://randomuser.me/api/portraits/thumb/women/${20 + i}.jpg`}
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

            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-500" />
              Fresh Bakes, Smart Sales
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Bakery POS System <br />
              <span className="italic font-serif font-light text-zinc-800">with Complete Management</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Run your bakery with total confidence — manage daily bakes, pre-orders, inventory, and customer loyalty all from one smart system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95"
              >
                Start Free Now
              </Link>
              <Link
                href="/contact"
                className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
              >
                Book A Demo
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-xs font-semibold text-zinc-500">Bakery POS System With Complete Daily Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <span className="text-xs font-semibold text-zinc-500">Pre-Order & Pickup Management Solution</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50/50 to-orange-50/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              {/* Card 1 - Left Tilted */}
              <motion.div
                className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right"
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src={CARD_IMAGES[0]} alt="Bakery" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Daily Sales</p>
                    <p className="text-white font-bold text-2xl">2X</p>
                  </div>
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
                <Image src={CARD_IMAGES[1]} alt="Pastry" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Pre-orders</p>
                    <p className="text-white font-bold text-2xl">+340%</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-orange-500/90">
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
                <Image src={CARD_IMAGES[2]} alt="Cakes" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Accuracy</p>
                    <p className="text-white font-bold text-2xl">100%</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 text-red-500/90">
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

      {/* Success Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Fresh Results, Real Growth</span>
            <div className="h-[1px] w-8 bg-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            Baked with Love, Managed with Precision <br className="hidden md:block" />
            <span className="text-red-600"> — Menumium Leads the Way</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Discover how Menumium helps bakeries manage daily stock, handle pre-orders, and build loyal customer bases with ease.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
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
              <div className="h-6 w-full flex justify-between px-6 pt-2">
                <div className="text-[10px] text-zinc-400">9:41</div>
                <div className="flex gap-1.5 h-2 items-center">
                  <div className="w-3 h-2 bg-zinc-600 rounded-full" />
                  <div className="w-4 h-2 bg-zinc-600 rounded-full" />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col pt-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500 mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl">M</div>
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-lg">Bakery Hub</h3>
                  <p className="text-zinc-500 text-[10px]">Daily Operations Active</p>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 w-full bg-zinc-800/50 rounded-xl animate-pulse" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Happy Customer card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -left-12 top-20 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-50 rounded-lg text-red-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-zinc-900">🍰</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Happy Customer</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Repeat visits with loyalty rewards & fresh daily picks</p>
            </motion.div>

            {/* Sales Track card */}
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
                    <span className="text-xl font-bold text-zinc-900">📊</span>
                    <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">LIVE</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-800">Pre-Order Track</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Monitor Pickups & Daily Bake Analytics</p>
                </div>
              </div>
            </motion.div>

            {/* Repeat Customer card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-12 top-48 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-lg">🔄</span>
              </div>
              <p className="text-sm font-bold text-zinc-800 mb-1">Repeat Customer</p>
              <p className="text-[11px] text-zinc-500">Loyal regulars from morning coffee to birthday cakes</p>
            </motion.div>

            {/* Floating Icons */}
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
              <Dot className="w-10 h-10 text-red-500 animate-pulse" />
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
            <div className="h-[1px] w-8 bg-red-500" />
            <span className="text-red-400 font-bold tracking-widest uppercase text-xs">All-in-One Bakery Solution</span>
            <div className="h-[1px] w-8 bg-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            From Pre-orders to Payments — <br className="hidden md:block" />Everything Your Bakery Needs
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Menumium provides a full solution to automate your bakery operations, ensuring fresh inventory, smooth pre-orders, and delighted customers every day.
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
            Transforming bakery operations from early morning prep to evening close, creating a system that keeps every bake on schedule and every customer happy.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" alt="Daily Bake" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Smarter Daily Bake Planning</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Know exactly what to bake each morning. Our system analyzes pre-orders and past sales to predict the right quantities — zero waste, zero shortfalls.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" alt="Pre-Orders" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Seamless Pre-Order Handling</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Accept custom cake or pastry pre-orders with ease. Track pickup schedules, customer notes, and payment status all in one place.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800" alt="Inventory" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Real-Time Ingredient Tracking</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Never run out of flour, butter, or eggs mid-bake. Our inventory system alerts you before stock runs low to keep operations flowing.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&q=80&w=800" alt="Customer Loyalty" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Build a Loyal Customer Base</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">
                Turn one-time buyers into regulars with loyalty programs, personalized promotions, and automated reorder reminders for their favourite items.
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
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <ShoppingCart className="w-3.5 h-3.5" /> Order Management
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Handle Walk-ins & <br /> Pre-orders With Ease
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Manage both counter sales and scheduled pre-orders from one unified dashboard — no more sticky notes or missed pickups.
            </p>
            <ul className="space-y-4">
              {[
                "Search and filter orders by date, item, or customer name.",
                "Easily update quantities or add special customizations per order.",
                "Track pickup status and send automated collection reminders."
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
              <Link href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95">
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
                    { id: '#2011', item: 'Custom Birthday Cake', status: 'Pending' },
                    { id: '#2012', item: 'Croissant x6', status: 'Ready' },
                    { id: '#2013', item: 'Sourdough Loaf', status: 'Pending' }
                  ].map((order, i) => (
                    <div key={i} className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-zinc-400 text-[9px]">
                          {order.id}
                        </div>
                        <p className="font-bold text-zinc-800 text-xs">{order.item}</p>
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full ${order.status === 'Pending' ? 'bg-yellow-400' : 'bg-green-400'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inventory Management Section */}
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
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-zinc-900 text-base">Ingredient Overview</h3>
                    <p className="text-[10px] text-zinc-500">Real-time stock levels</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: 'Flour', level: 75, color: 'bg-green-500' },
                    { name: 'Butter', level: 40, color: 'bg-yellow-500' },
                    { name: 'Sugar', level: 20, color: 'bg-red-500' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-zinc-700 w-24 flex-shrink-0">{item.name}</span>
                      <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.level}%` }} />
                      </div>
                      <span className="text-[9px] text-zinc-500 w-8 text-right">{item.level}%</span>
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
                <div className="flex justify-between items-center border-b border-zinc-100 pb-2 mb-3">
                  <span className="text-[10px] font-bold text-zinc-800">Low Stock Alerts</span>
                </div>
                <div className="space-y-2">
                  {['Sugar', 'Eggs'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-1.5 bg-red-50 border border-red-100 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-red-700">{item}</span>
                    </div>
                  ))}
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
                <p className="text-[9px] font-bold text-zinc-500 uppercase mb-1.5">Filter By Category</p>
                <div className="flex gap-1.5 flex-wrap">
                  {['Dry Goods', 'Dairy', 'Fillings'].map((cat) => (
                    <span key={cat} className="text-[8px] font-bold px-2 py-0.5 bg-red-50 text-red-600 border border-red-100 rounded-full">{cat}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <Package className="w-3.5 h-3.5" /> Inventory Management
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Never Run Short, <br /> Bake with Confidence
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Stay stocked on every ingredient with real-time tracking, low-stock alerts, and supplier order suggestions built right in.
            </p>
            <ul className="space-y-4">
              {[
                "Organize ingredients by category — dry goods, dairy, fillings, and more.",
                "Get instant alerts when critical ingredients hit reorder thresholds.",
                "View consumption trends and plan bulk purchases to reduce costs."
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
              <Link href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
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
                <h3 className="font-bold text-zinc-900 text-base mb-1">Create New Order</h3>
                <p className="text-[10px] text-zinc-500 mb-4">Walk-in & Pre-order</p>
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-3 p-2.5 bg-white border border-zinc-100 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-zinc-200 rounded-lg overflow-hidden relative">
                        <Image src={i === 1 ? CARD_IMAGES[0] : CARD_IMAGES[2]} alt="Baked Good" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[12px] text-zinc-800">{i === 1 ? 'Croissant' : 'Chocolate Cake'}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-zinc-900 font-bold text-xs">$8.50</span>
                          <span className="text-red-500 text-[9px] font-bold">-10%</span>
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
              <p className="text-[9px] font-bold text-zinc-500 uppercase mb-2">Payment Summary</p>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="text-zinc-600">Subtotal</span>
                  <span className="font-bold text-zinc-900">$42.00</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-zinc-600">Discount</span>
                  <span className="font-bold text-red-500">-$4.20</span>
                </div>
                <div className="flex justify-between text-[10px] border-t border-zinc-100 pt-1.5">
                  <span className="font-bold text-zinc-900">Total</span>
                  <span className="font-bold text-zinc-900">$37.80</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">POS Management</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Fast Checkout, <br /> Happy Customers
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Speed through morning rush with a POS built for bakery counter service — multiple payment options, split bills, and quick item search all in one tap.
            </p>
            <ul className="space-y-4">
              {[
                "One-tap checkout for walk-in and pre-order customers.",
                "Accept cash, card, and digital payments effortlessly.",
                "Apply daily specials or loyalty discounts automatically at checkout."
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
              <Link href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" /> Promotions & Loyalty
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Reward Your Regulars, <br /> Attract New Customers
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Run targeted promos on slow days, reward loyal customers, and push seasonal specials — all without leaving your POS dashboard.
            </p>
            <ul className="space-y-4">
              {[
                "Create time-limited offers for early morning or end-of-day clearance.",
                "Set up loyalty punch cards or digital rewards programs.",
                "Send automated promotions to customers who haven't visited recently."
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
              <Link href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95">
                Get Started Now
              </Link>
            </div>
          </div>

          <div className="relative h-[380px] w-full">
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-zinc-100 p-6 flex flex-col gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-zinc-900 text-sm">Active Promotions</h3>
              <div className="space-y-3">
                {[
                  { name: 'Morning Special — 20% off before 9AM', color: 'bg-red-100 text-red-700 border-red-200' },
                  { name: 'Buy 6 Get 1 Free — Croissants', color: 'bg-amber-100 text-amber-700 border-amber-200' },
                  { name: 'Weekend Cake Deal — 15% off', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                ].map((promo, i) => (
                  <div key={i} className={`px-4 py-3 rounded-xl border text-xs font-bold ${promo.color}`}>
                    {promo.name}
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-3 border-t border-zinc-100">
                <p className="text-[10px] text-zinc-500 font-medium">3 active promotions · Updated just now</p>
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

export default BakeryPage
