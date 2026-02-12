'use client'

import { useState } from 'react'
import { 
  ArrowRight, 
  Store, 
  Bike, 
  Laptop, 
  FireExtinguisher as Fire, 
  CheckCircle, 
  Wifi, 
  Tablet, 
  Smartphone, 
  Monitor,
  Code2 as CodeBranch,
  LineChart,
  Cloud,
  ClipboardList,
  Fingerprint,
  Copy,
  MapPinned,
  UserCircle,
  Clock,
  Map,
  MapPin,
  Receipt,
  RotateCcw,
  Rocket,
  Layout,
  TicketPercent,
  Globe,
  UtensilsCrossed,
  Calendar,
  Grid3X3,
  Percent,
  Layers,
  ShieldCheck
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const FeaturesPage = () => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0)

  const statusFlow = [
    { name: 'preparing', step: 0, bgColor: 'bg-red-700' },
    { name: 'cooking', step: 1, bgColor: 'bg-red-900' },
    { name: 'ready', step: 2, bgColor: 'bg-red-700' },
    { name: 'out for delivery', step: 3, bgColor: 'bg-zinc-950' }
  ]

  const cycleStatus = () => {
    setCurrentStatusIndex((prev) => (prev + 1) % statusFlow.length)
  }

  const currentStatus = statusFlow[currentStatusIndex]

  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* HERO SECTION TOPIC */}
        <section className="px-6 pt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Features
          </div>
        </section>

        {/* HERO Section */}
        <section className="max-w-7xl mx-auto px-6 py-6 lg:py-10 grid lg:grid-cols-2 items-center gap-12">
          <div className="space-y-5">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
              Transform Your Counter <br /> into a{' '}
              <span className="text-red-600 border-b-6 border-red-600/10 inline-block leading-[0.9]">Powerhouse</span>.
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Running your restaurant is now easier with a multi-functional POS system. 
              It helps you manage every part of the counter experience — from the first hello to the last bite.
            </p>
            <button className="group bg-red-600 text-white px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/20 active:scale-95">
              Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-10 pt-1">
              <div>
                <div className="text-2xl font-extrabold text-red-800">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">restaurants</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-red-800">15k+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">orders/day</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-red-800">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">uptime</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-[40px] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-red-600/10 transition-colors"></div>
            <div className="relative space-y-6">
              <div className="flex justify-between items-center pb-6 border-b-2 border-zinc-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <Wifi className="w-5 h-5 text-zinc-400" />
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <Store className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-zinc-800">Branch #12</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Fire className="w-3 h-3" /> prep
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <Bike className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-zinc-800">Delivery #421</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3" /> ready
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-zinc-400" />
                    <span className="font-bold text-zinc-800">takeaway #88</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider">
                    new
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4 text-zinc-400 pt-4 items-center">
                <Tablet className="w-4 h-4" />
                <Laptop className="w-4 h-4" />
                <Smartphone className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-widest ml-1">any device</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES Section */}
        <section className="bg-white py-6 lg:py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] tracking-widest uppercase mb-3">
              <Monitor className="w-4 h-4" />
              ALL-IN-ONE COUNTER
            </div>
            <h2 className="text-3xl font-bold text-zinc-950 max-w-xl mb-6">
              Everything you need to run the front of house
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Branch-wise",
                  desc: "Get branch-specific POS to handle dine-in, home delivery, takeaway, and reservations – tailored per location.",
                  icon: CodeBranch
                },
                {
                  title: "Live order flow",
                  desc: "Track the progress of each order in real time, from prep to delivery. Update statuses instantly; your team stays in sync.",
                  icon: LineChart
                },
                {
                  title: "Any device",
                  desc: "Accessible on laptop, desktop, or tablet. Ultimate convenience for managers, runners, and hosts – the counter travels with you.",
                  icon: Cloud
                }
              ].map((f) => (
                <div key={f.title} className="p-8 rounded-[28px] border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:border-red-600/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <f.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-950">{f.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORDER MANAGEMENT section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-800/10 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <ClipboardList className="w-4 h-4" />
                ORDER MANAGEMENT
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Manage Orders <br /> Like a Pro
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Ensure every order is tracked, updated, and handled swiftly. No delays. No mistakes. Just smooth operations.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Access all the order details you need at your fingertips.", icon: Fingerprint },
                  { text: "Make quick changes or duplicate orders without missing a step.", icon: Copy },
                  { text: "Monitor your delivery man’s progress in real-time.", icon: MapPinned }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="flex items-center gap-4 pb-5 border-b border-zinc-100">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Bike className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Ongoing Delivery</div>
                    <div className="text-lg font-bold text-zinc-950">#421 · Alex Chen</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-red-100 flex items-center justify-center p-1">
                      <UserCircle className="w-full h-full text-zinc-200" />
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-zinc-950">ETA 8 min</div>
                      <div className="text-zinc-500 text-[11px]">2.3 km away</div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 8:42 PM
                  </div>
                </div>

                <div className="aspect-[16/5] bg-zinc-50 rounded-2xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center gap-1 text-zinc-400 hover:border-red-200 hover:text-red-400 transition-colors cursor-pointer group">
                  <Map className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[10px] tracking-widest uppercase">Live tracking enabled</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-medium px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  Last update: just now
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE & RESERVATIONS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            {/* Visual Box - Left */}
            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-[40px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'T1', status: 'Occupied', color: 'bg-red-500' },
                    { id: 'T2', status: 'Available', color: 'bg-emerald-500' },
                    { id: 'T3', status: 'Reserved', color: 'bg-amber-500' },
                    { id: 'T4', status: 'Available', color: 'bg-emerald-500' },
                    { id: 'T5', status: 'Occupied', color: 'bg-red-500' },
                    { id: 'T6', status: 'Available', color: 'bg-emerald-500' }
                  ].map((table) => (
                    <div key={table.id} className="aspect-square bg-zinc-50 border border-zinc-100 rounded-2xl flex flex-col items-center justify-center gap-1 group cursor-pointer hover:border-red-200 transition-all">
                      <span className="text-[10px] font-black text-zinc-400">{table.id}</span>
                      <div className={`w-2 h-2 rounded-full ${table.color} shadow-sm group-hover:scale-125 transition-transform`}></div>
                      <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-tighter">{table.status}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[9px] font-black text-zinc-400 uppercase">Available: 3</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <span className="text-[9px] font-black text-zinc-400 uppercase">Busy: 2</span>
                    </div>
                  </div>
                  <Layout className="w-4 h-4 text-zinc-300" />
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Calendar className="w-4 h-4" />
                Table & Reservation
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Master Your Restaurant's <br /> Seating in Seconds
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Take charge of your floor’s seating and reservations with a smart, easy-to-use system that saves time and increases efficiency.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Get a graphical view of your entire restaurant layout, from any angle.", icon: Layout },
                  { text: "Check table availability in real-time—whether occupied or reserved.", icon: Grid3X3 },
                  { text: "Handle & manage reservations even without food orders.", icon: Clock }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* PROMOTIONS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full"></div>

            {/* Content - Left */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Percent className="w-4 h-4" />
                Promotions
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Drive Sales with <br /> Impactful Promotions
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Simplify your marketing efforts and watch your sales grow with our easy-to-use effective promotional features.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Increase order volumes with compelling Buy One Get One deals.", icon: TicketPercent },
                  { text: "Schedule time-based discounts to drive sales during slow hours.", icon: Clock },
                  { text: "Create exclusive coupon codes for targeted promotions.", icon: Fingerprint }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual Box - Right */}
            <div className="relative z-10">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="bg-red-600 rounded-2xl p-5 text-white relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Flash Deal</div>
                    <div className="text-2xl font-black mb-1">BOGO OFFER</div>
                    <div className="text-xs font-medium opacity-90">Buy 1 Get 1 on All Pizzas</div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-red-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase">
                    Active
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-dashed border-zinc-200 bg-zinc-50">
                    <div className="flex items-center gap-3">
                      <TicketPercent className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-bold text-zinc-800">COUPON: PIZZA25</span>
                    </div>
                    <span className="text-emerald-600 text-[10px] font-black">25% OFF</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl border border-zinc-100">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-bold">Happy Hour</span>
                    </div>
                    <span className="text-zinc-300 text-[10px] font-black">4PM - 7PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            {/* Background elements moved to align with visual box side */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-800/10 blur-[80px] rounded-full"></div>
            
            {/* Visual Box - Left on desktop, bottom on mobile */}
            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="flex items-center gap-4 pb-5 border-b border-zinc-100">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Store className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Active Branch</div>
                    <div className="text-lg font-bold text-zinc-950">Downtown · South Hub</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { type: 'Dine-In', count: 12, color: 'text-amber-600', bg: 'bg-amber-50' },
                    { type: 'Delivery', count: 8, color: 'text-red-600', bg: 'bg-red-50' },
                    { type: 'Takeaway', count: 5, color: 'text-blue-600', bg: 'bg-blue-50' }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 border border-zinc-100 italic transition-all hover:translate-x-1">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${stat.color === 'text-red-600' ? 'bg-red-600' : stat.color === 'text-amber-600' ? 'bg-amber-600' : 'bg-blue-600'}`}></div>
                        <span className="text-sm font-bold text-zinc-800">{stat.type}</span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-lg ${stat.bg} ${stat.color} text-[10px] font-black`}>
                        {stat.count} Orders
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  <span>System: Online</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Right on desktop, top on mobile */}
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Monitor className="w-4 h-4" />
                POS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Transform Your Counter <br /> into a Powerhouse
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Running your restaurant is now easier with a multi-functional POS system. It helps you manage every part of the counter experience.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Get branch-specific POS system to handle dine-in, home delivery, takeaway, and reservations", icon: MapPinned },
                  { text: "Track the progress of each order in real time, from prep to delivery, and update statuses accordingly.", icon: LineChart },
                  { text: "Accessible on any device, whether it’s a laptop, desktop, or tablet, for ultimate convenience.", icon: Cloud }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* MULTI BRANCH section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Globe className="w-4 h-4" />
                Multi Branch System
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Effortlessly Manage Across <br /> Multiple Locations
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Maximize efficiency across multiple branches with a system that simplifies the complexities of multi-location management.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Define delivery areas, menu prices, and operating hours for each branch.", icon: MapPin },
                  { text: "Customize menus, recipes, and promotional campaigns for each location.", icon: UtensilsCrossed },
                  { text: "Create tailored menus for each branch to reflect unique customer preferences.", icon: Layout }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-zinc-400">Branch Selector</span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] font-black">{i}</div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { loc: 'MUMBAI CENTRAL', status: 'Online', color: 'bg-emerald-500' },
                    { loc: 'DELHI HUB', status: 'Paused', color: 'bg-amber-500' },
                    { loc: 'BANGALORE ST.', status: 'Online', color: 'bg-emerald-500' }
                  ].map((branch, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transition-all hover:border-red-500/20 group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-red-600 transition-colors" />
                        <span className="text-sm font-bold text-zinc-900">{branch.loc}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase">{branch.status}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${branch.color}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MULTI MENU section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5">
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full"></div>

            {/* Visual Box - Left */}
            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-zinc-400">Current View</div>
                    <div className="text-sm font-black text-zinc-950 tracking-tight">Summer Menu 🔥</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl border-2 border-red-600 bg-red-50 relative">
                    <div className="w-full aspect-[4/3] bg-zinc-200 rounded-lg mb-2 overflow-hidden relative">
                      <div className="absolute inset-0 bg-red-600 opacity-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-red-600/20">
                        <UtensilsCrossed className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-[10px] font-black text-zinc-900">Italian Pasta</div>
                    <div className="text-[8px] font-bold text-red-600">ACTIVE</div>
                    <div className="absolute top-2 right-2 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                       <CheckCircle className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl border border-zinc-100 bg-zinc-50 opacity-60">
                    <div className="w-full aspect-[4/3] bg-zinc-200 rounded-lg mb-2"></div>
                    <div className="text-[10px] font-black text-zinc-950">Winter Stew</div>
                    <div className="text-[8px] font-bold text-zinc-400">DRAFT</div>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950 rounded-xl flex items-center justify-between text-white">
                   <span className="text-[10px] font-black uppercase tracking-widest pl-2">Create New Menu</span>
                   <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center">
                      <span className="font-bold">+</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <UtensilsCrossed className="w-4 h-4" />
                Multi Menu + Seasonal Menu
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Personalize Your Menus <br /> Like Before
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Simplify menu management with tools that let you create and update seasonal, event-based, or regular menus with ease.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Categorize food items with detailed labels, subcategories, and cuisines.", icon: Grid3X3 },
                  { text: "Link recipes to food items and activate add-ons for upselling opportunities.", icon: Fingerprint },
                  { text: "Adjust food availability with status controls to reflect inventory.", icon: RotateCcw }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-50 rounded-[40px] border border-zinc-100 p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] tracking-widest uppercase mb-5">
                <RotateCcw className="w-4 h-4" />
                LIVE DEMO
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-950 mb-5 leading-tight">
                From prep to 'ready' <br /> in one tap.
              </h2>
              <p className="text-base text-zinc-600 mb-8 leading-relaxed max-w-sm">
                Update statuses as orders move. See how the progress bar responds – just like our POS.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-red-50 text-red-700 text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> realtime sync
                </span>
                <span className="px-4 py-2 rounded-full bg-red-50 text-red-700 text-xs font-bold flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" /> push updates
                </span>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div className="px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-900 font-bold text-xs flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5" /> ORDER #2483
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-600/20 transition-all duration-300 ${currentStatus.bgColor}`}>
                    {currentStatus.name}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 relative">
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-100 -z-10 mx-6"></div>
                  {[
                    { label: "Prep", icon: ClipboardList },
                    { label: "Cooking", icon: Fire },
                    { label: "Ready", icon: CheckCircle },
                    { label: "Delivery", icon: Bike }
                  ].map((step, idx) => {
                    const isActive = idx <= currentStatusIndex
                    return (
                      <div key={idx} className="flex flex-col items-center gap-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'bg-red-600 text-white scale-105 shadow-md shadow-red-600/30' : 'bg-zinc-100 text-zinc-400'
                        }`}>
                          <step.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}>
                          {step.label}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-xs pt-4 border-t border-zinc-100">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span className="font-bold text-zinc-800">Table 7</span> · 2 items
                </div>

                <button 
                  onClick={cycleStatus}
                  className="w-full py-3 rounded-xl border-2 border-red-600 text-red-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all active:scale-[0.98]"
                >
                  <RotateCcw className="w-5 h-5" /> Update status
                </button>
                <p className="text-zinc-400 text-[10px] text-center font-medium">Click to simulate order progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-4 lg:py-6">
          <div className="bg-zinc-950 rounded-[40px] p-10 lg:p-14 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(183,28,28,0.1),transparent)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(183,28,28,0.15),transparent)] transition-all"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
                Turn your counter into a <br /> <span className="text-red-600 italic">command center</span>.
              </h2>
              <p className="text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Join 500+ restaurants that use CounterPower to streamline dine-in, delivery & takeaway.
              </p>
              <div className="flex flex-col items-center gap-6 pt-2">
                <button className="group bg-red-600 text-white px-10 py-4 rounded-full font-extrabold text-lg flex items-center gap-3 hover:bg-red-700 transition-all hover:scale-105 shadow-2xl shadow-red-600/40">
                  <Rocket className="w-5 h-5" /> Get Started Now
                </button>
                <div className="flex items-center gap-4 text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1.5"><Tablet className="w-3.5 h-3.5" /> Works on any device</span>
                  <span className="h-1 w-1 bg-zinc-700 rounded-full"></span>
                  <span className="text-red-500/80">Free 14-day trial</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FeaturesPage