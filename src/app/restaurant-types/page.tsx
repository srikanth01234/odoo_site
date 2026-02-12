'use client'

import React from 'react'
import { 
  UtensilsCrossed, 
  Zap, 
  Cloud, 
  Coffee, 
  Truck, 
  Beer, 
  Cake, 
  Building2, 
  CheckCircle2,
  ChefHat,
  Layout,
  Timer,
  Smartphone,
  Globe,
  ArrowRight,
  ShieldCheck,
  Rocket
} from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const restaurantTypes = [
  {
    title: "Fine Dining",
    subtitle: "Precision & Elegance",
    description: "Designed for premium dining where service quality and timing matter most.",
    bestFor: "Luxury restaurants, chef-driven concepts",
    icon: ChefHat,
    features: [
      "Advanced table & reservation management",
      "Course-based order tracking",
      "Detailed item descriptions"
    ],
    color: "from-amber-500/10 to-transparent"
  },
  {
    title: "QSR & Fast Food",
    subtitle: "Speed That Moves Lines",
    description: "Built for high-volume, fast-paced environments where every second counts.",
    bestFor: "Fast food outlets, franchises",
    icon: Zap,
    features: [
      "Lightning-fast POS for walk-ins",
      "Simple menu layouts for selection",
      "Auto order syncing across devices"
    ],
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "Cloud Kitchens",
    subtitle: "Delivery-First. Profit-Focused.",
    description: "Everything you need to run a kitchen without a dining space.",
    bestFor: "Online-only brands",
    icon: Cloud,
    features: [
      "Centralized order management",
      "Delivery partner tracking",
      "Kitchen display system (KDS)"
    ],
    color: "from-purple-500/10 to-transparent"
  },
  {
    title: "Cafés & Coffee Shops",
    subtitle: "Simple, Smooth & Stylish",
    description: "Perfect for cafés where repeat customers and quick orders matter.",
    bestFor: "Coffee shops, dessert cafés",
    icon: Coffee,
    features: [
      "Easy POS for beverages & snacks",
      "Add-on management (shots, sizes)",
      "Loyalty offers & promotions"
    ],
    color: "from-emerald-500/10 to-transparent"
  },
  {
    title: "Food Trucks & Pop-ups",
    subtitle: "Big Power for Small Spaces",
    description: "Run your entire business from a single device—anywhere.",
    bestFor: "Food trucks, mobile vendors",
    icon: Truck,
    features: [
      "Mobile-friendly POS systems",
      "Offline order handling support",
      "Fast billing & order updates"
    ],
    color: "from-orange-500/10 to-transparent"
  },
  {
    title: "Bars & Lounges",
    subtitle: "Smart Control for Busy Nights",
    description: "Manage drinks, tables, and high-traffic hours without chaos.",
    bestFor: "Bars, pubs, lounges",
    icon: Beer,
    features: [
      "Table-based billing & split payments",
      "Drink-focused menu setup",
      "Real-time order updates"
    ],
    color: "from-red-500/10 to-transparent"
  },
  {
    title: "Bakeries & Desserts",
    subtitle: "Fresh Orders. Fresh Profits.",
    description: "Ideal for businesses with daily-changing items and pre-orders.",
    bestFor: "Bakeries, cake shops",
    icon: Cake,
    features: [
      "Daily item availability control",
      "Pre-order & pickup management",
      "Inventory-friendly updates"
    ],
    color: "from-pink-500/10 to-transparent"
  },
  {
    title: "Franchise & Multi-Branch",
    subtitle: "One Brand. Total Control.",
    description: "Manage all locations from a single dashboard—effortlessly.",
    bestFor: "Franchises, restaurant chains",
    icon: Building2,
    features: [
      "Branch-specific pricing & menus",
      "Centralized reporting & tracking",
      "Unified POS with auto sync"
    ],
    color: "from-indigo-500/10 to-transparent"
  }
]

const RestaurantTypesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-600/30 selection:text-red-500">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="px-6 mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-red-600/5 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Restaurant Types
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-zinc-900 leading-tight tracking-tight">
              One Platform. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-400">Every Business Model.</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you run a fine dining establishment or a quick-service counter, our system scales with your specific needs.
            </p>
          </div>
        </section>

        {/* TYPES GRID */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {restaurantTypes.map((type, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-black border border-white/5 rounded-[40px] p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-red-600/20 hover:shadow-2xl hover:shadow-red-900/20"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${type.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-lg">
                      <type.icon className="w-8 h-8" />
                    </div>
                    <div className="text-xs font-black uppercase tracking-widest text-zinc-600 group-hover:text-red-500/50 transition-colors">
                      Model 0{idx + 1}
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mb-8">
                    <h2 className="text-2xl lg:text-3xl font-black text-white mb-2 group-hover:translate-x-1 transition-transform">
                      {type.title}
                    </h2>
                    <p className="text-red-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">
                      {type.subtitle}
                    </p>
                    <p className="text-zinc-400 font-medium leading-relaxed mb-6 line-clamp-2">
                      {type.description}
                    </p>
                    
                    {/* Best For Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 text-[11px] font-bold">
                      <span className="text-red-500">Best for:</span>
                      {type.bestFor}
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <div className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-zinc-800"></span>
                      How we help
                    </div>
                    <ul className="grid grid-cols-1 gap-3">
                      {type.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 group/item">
                          <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-sm text-zinc-400 group-hover/item:text-zinc-200 transition-colors font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link (hidden default, show on hover or subtle) */}
                  <button className="mt-10 flex items-center gap-2 text-zinc-500 group-hover:text-white font-bold text-sm transition-all group-hover:gap-3 cursor-pointer">
                    Explore Solution <ArrowRight className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-6 mt-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-red-600 rounded-[48px] p-10 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="text-center lg:text-left space-y-4">
                  <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                    Ready to scale <br /> your restaurant?
                  </h2>
                  <p className="text-red-100/80 text-lg font-medium max-w-md">
                    No matter your model, our system grows with you. Get started in minutes.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-full font-black text-base hover:scale-105 transition-all shadow-2xl flex items-center gap-3 cursor-pointer">
                    <Rocket className="w-5 h-5" /> Get Started Now
                  </button>
                  <button className="bg-black/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-black text-base hover:bg-black/30 transition-all cursor-pointer">
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default RestaurantTypesPage
