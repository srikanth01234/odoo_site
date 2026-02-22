'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Zap, RefreshCw, Clock, Target, Truck, Coffee, Cloud, UtensilsCrossed, ChefHat, Gem, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'

const RESTAURANT_TYPES = [
  {
    label: "Fast Food",
    icon: Zap,
    description: "Serve your fast food restaurant guests with smooth and fast service.",
    angle: 0,
    href: "/restaurant-types/fast-food",
  },
  {
    label: "Food Truck",
    icon: Truck,
    description: "Manage your food truck from anywhere with a mobile POS system.",
    angle: 45,
    href: "/restaurant-types/food-truck",
  },
  {
    label: "Cafe & Bistro",
    icon: Coffee,
    description: "Create a cozy café atmosphere backed by seamless order and table management.",
    angle: 90,
    href: "/restaurant-types/cafe-bistro",
  },
  {
    label: "Ghost Kitchen",
    icon: Cloud,
    description: "Run delivery-only operations with centralized order and kitchen management.",
    angle: 135,
    href: "/restaurant-types/ghost-kitchen",
  },
  {
    label: "Full Service",
    icon: UtensilsCrossed,
    description: "Deliver impeccable dining experiences with full table and course management.",
    angle: 180,
    href: "/restaurant-types/full-service",
  },
  {
    label: "Bakery",
    icon: ChefHat,
    description: "Track daily inventory and pre-orders with ease for your bakery business.",
    angle: 225,
    href: "/restaurant-types/bakery",
  },
  {
    label: "Fine Dine",
    icon: Gem,
    description: "Manage your fine dining operations efficiently across multiple branches.",
    angle: 270,
    href: "/restaurant-types/fine-dine",
  },
  {
    label: "Family Style",
    icon: Users,
    description: "Handle large group dining and shared plates with flexible table and order controls.",
    angle: 315,
    href: "/restaurant-types/family-style",
  },
]

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    alt: "Fine Dining",
    label: "Full Service"
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    alt: "Fast Food",
    label: "Fast Food"
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    alt: "Cafe Bistro",
    label: "Cafe & Bistro"
  },
  {
    src: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=800",
    alt: "Ghost Kitchen",
    label: "Ghost Kitchen"
  }
]

const SEO_TAGS = [
  "Menumium Restaurant Software for Every Type of Restaurant",
  "Smart Operations With Menumium Restaurant Software Features",
  "Manage Orders to Operations with Menumium"
]

const RestaurantTypesPage = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="pb-20">

        {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">

          {/* Background noise/grid */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[64px_64px]" />
            <div className="absolute top-0 left-0 w-150 h-150 bg-red-600/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-red-900/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* LEFT — Typography */}
            <div className="flex flex-col gap-7">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-500 font-bold tracking-[0.22em] uppercase text-xs">
                  Your Restaurant&apos;s Best Partner
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2.6rem,6vw,5.5rem)] font-black text-white leading-[1.02] tracking-tight"
              >
                All&#8209;In&#8209;One
                <br />
                Solution For
                <br />
                <span className="text-red-600 italic font-serif font-light">Every Type</span>
                <br />
                of Restaurant
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg font-medium"
              >
                One platform for every type of restaurant. Manage everything from orders to operations smoothly with the Menumium restaurant management system.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-red-600/25 active:scale-95"
                >
                  Start Free Now <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-white/5 active:scale-95"
                >
                  Book A Demo
                </Link>
              </motion.div>

              {/* SEO Tag Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap gap-2 pt-2"
              >
                {SEO_TAGS.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold text-gray-500 border border-white/8 px-3 py-1.5 rounded-full bg-white/3 leading-tight"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Image Grid */}
            <div className="relative grid grid-cols-2 gap-3 h-130 lg:h-140">
              {/* Col 1 — tall + short */}
              <div className="flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative flex-2 rounded-2xl overflow-hidden border border-white/8 group"
                >
                  <Image
                    src={HERO_IMAGES[0].src}
                    alt={HERO_IMAGES[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-white text-[11px] font-bold tracking-wide">{HERO_IMAGES[0].label}</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="relative flex-1 rounded-2xl overflow-hidden border border-white/8 group"
                >
                  <Image
                    src={HERO_IMAGES[1].src}
                    alt={HERO_IMAGES[1].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-white text-[11px] font-bold tracking-wide">{HERO_IMAGES[1].label}</span>
                  </div>
                </motion.div>
              </div>

              {/* Col 2 — short + tall (offset) */}
              <div className="flex flex-col gap-3 pt-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="relative flex-1 rounded-2xl overflow-hidden border border-white/8 group"
                >
                  <Image
                    src={HERO_IMAGES[2].src}
                    alt={HERO_IMAGES[2].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-white text-[11px] font-bold tracking-wide">{HERO_IMAGES[2].label}</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="relative flex-2 rounded-2xl overflow-hidden border border-white/8 group"
                >
                  <Image
                    src={HERO_IMAGES[3].src}
                    alt={HERO_IMAGES[3].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-white text-[11px] font-bold tracking-wide">{HERO_IMAGES[3].label}</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 bottom-16 bg-red-600 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-red-600/40 z-10"
              >
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-wide">Restaurants Served</p>
                <p className="text-2xl font-black leading-tight">2,460+</p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ─── PERFORMANCE JOURNEY ───────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
            >
              Dine360 Challenging
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-4"
            >
              The Performance Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed"
            >
              Transforming restaurant operations with innovative intelligence. Explore our story of efficiency and accuracy, creating a system that inspires and enhances modern dining.
            </motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto">

            {/* Step 1: Left */}
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-10 border-l-10 border-b-10 border-white/10 rounded-l-[100px] z-0" />
              <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
                <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800" alt="Fast Processing" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
                <div className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3X Faster Order Processing</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  Cut down serving time and maximize table turnover. Our cloud-integrated order management ensures your staff moves at the speed of light.
                </p>
              </div>
            </div>

            {/* Step 2: Right */}
            <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-2.5">
              <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-10 border-b-10 border-white/10 rounded-r-[100px] z-0" />
              <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
                <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800" alt="Order Syncing" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
                <div className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Order Syncing</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  Eliminate manual errors and communication gaps between the floor and the kitchen. Orders are updated in real-time across all devices.
                </p>
              </div>
            </div>

            {/* Step 3: Left */}
            <div className="flex flex-col md:flex-row items-center relative md:-mt-2.5">
              <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-10 border-b-10 border-white/10 rounded-l-[100px] z-0" />
              <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
                <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800" alt="Zero Delays" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
                <div className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Zero Order Delays</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  Keep your service flowing like clockwork. Our intelligent queue management prevents bottlenecks even during your busiest rush hours.
                </p>
              </div>
            </div>

            {/* Step 4: Right */}
            <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-2.5">
              <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-10 border-b-10 border-white/10 rounded-r-[100px] z-0" />
              <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
                <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800" alt="Order Accuracy" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
                <div className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">100% Order Accuracy</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  Deliver precision with every plate. Our visual order confirmation and real-time validation eliminate mistakes before they happen.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ─── RESTAURANT TYPES RADIAL ──────────────────────────────────── */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
              >
                Menumium For Everyone
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-white mb-4"
              >
                Built for All Restaurant Types
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed"
              >
                Hover any restaurant type to see how Menumium powers your specific operations.
              </motion.p>
            </div>

            {/* Radial Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-210 h-210 max-w-[min(840px,92vw)] max-h-[min(840px,92vw)]">

                {/* SVG dashed lines — start from inner circle edge so nothing drawn inside */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 580 580"
                >
                  {RESTAURANT_TYPES.map((type, idx) => {
                    const rad = (type.angle * Math.PI) / 180
                    const r = 210
                    const rInner = 90
                    const x1 = 290 + rInner * Math.sin(rad)
                    const y1 = 290 - rInner * Math.cos(rad)
                    const x2 = 290 + r * Math.sin(rad)
                    const y2 = 290 - r * Math.cos(rad)
                    const isHovered = hoveredIdx === idx
                    const anyHovered = hoveredIdx !== null
                    return (
                      <line
                        key={idx}
                        x1={x1} y1={y1}
                        x2={x2} y2={y2}
                        stroke="#dc2626"
                        strokeWidth={1.2}
                        strokeDasharray="5 5"
                        opacity={anyHovered ? (isHovered ? 0.7 : 0.1) : 0.7}
                        style={{ transition: 'opacity 0.4s' }}
                      />
                    )
                  })}
                </svg>

                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-64 h-64 rounded-full border-2 border-red-600 flex flex-col items-center justify-center text-center px-7 overflow-hidden"
                    style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)' }}
                  >
                    <AnimatePresence mode="wait">
                      {hoveredIdx === null ? (
                        <motion.div
                          key="default"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.22 }}
                          className="flex flex-col items-center gap-2"
                        >
                          <span className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px]">Menumium</span>
                          <span className="text-white font-black text-base leading-snug">Built for All Restaurant Types</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`hovered-${hoveredIdx}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.22 }}
                          className="flex flex-col items-center gap-2"
                        >
                          <span className="text-red-500 font-black uppercase tracking-[0.18em] text-[10px]">
                            {RESTAURANT_TYPES[hoveredIdx].label}
                          </span>
                          <span className="text-white text-sm leading-snug font-semibold">
                            {RESTAURANT_TYPES[hoveredIdx].description}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Nodes */}
                {RESTAURANT_TYPES.map((type, idx) => {
                  const rad = (type.angle * Math.PI) / 180
                  const r = 210
                  const cx = 290 + r * Math.sin(rad)
                  const cy = 290 - r * Math.cos(rad)
                  const isHovered = hoveredIdx === idx
                  const anyHovered = hoveredIdx !== null
                  return (
                    <Link
                      key={idx}
                      href={type.href}
                      className="absolute flex flex-col items-center gap-2 cursor-pointer"
                      style={{
                        left: `${(cx / 580) * 100}%`,
                        top: `${(cy / 580) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <div
                        className="w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isHovered ? '#dc2626' : '#18181b',
                          borderColor: isHovered ? '#dc2626' : anyHovered ? '#3f3f46' : '#3f3f46',
                          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                          opacity: anyHovered && !isHovered ? 0.4 : 1,
                          boxShadow: isHovered ? '0 0 24px rgba(220,38,38,0.5)' : 'none',
                        }}
                      >
                        <type.icon
                          className="w-7 h-7 transition-colors duration-300"
                          style={{ color: isHovered ? '#fff' : '#a1a1aa' }}
                        />
                      </div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300"
                        style={{
                          color: isHovered ? '#ffffff' : anyHovered ? '#52525b' : '#e4e4e7',
                        }}
                      >
                        {type.label}
                      </span>
                    </Link>
                  )
                })}

              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── TESTIMONIALS ─────────────────────────────────────────────── */}
        <Testimonials />

      </main>

      <Footer />
    </div>
  )
}

export default RestaurantTypesPage
