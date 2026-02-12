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
  Rocket
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const POSManagementPage = () => {
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
        {/* HERO Section */}
        <section className="max-w-7xl mx-auto px-6 py-8 lg:py-12 grid lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
              Transform Your Counter <br /> into a{' '}
              <span className="text-red-600 border-b-8 border-red-600/10 inline-block leading-[0.9]">Powerhouse</span>.
            </h1>
            <p className="text-xl text-zinc-600 max-w-lg leading-relaxed">
              Running your restaurant is now easier with a multi-functional POS system. 
              It helps you manage every part of the counter experience — from the first hello to the last bite.
            </p>
            <button className="group bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/20 active:scale-95">
              Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-12 pt-2">
              <div>
                <div className="text-3xl font-extrabold text-red-800">500+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">restaurants</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-red-800">15k+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">orders/day</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-red-800">99.9%</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mt-1">uptime</div>
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
        <section className="bg-white py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm tracking-widest uppercase mb-4">
              <Monitor className="w-4 h-4" />
              ALL-IN-ONE COUNTER
            </div>
            <h2 className="text-4xl font-bold text-zinc-950 max-w-2xl mb-8">
              Everything you need to run the front of house
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <div key={f.title} className="p-10 rounded-[32px] border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:border-red-600/20 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <f.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-950">{f.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORDER MANAGEMENT section */}
        <section className="max-w-7xl mx-auto px-6 py-4 lg:py-6">
          <div className="bg-zinc-950 rounded-[48px] p-8 lg:p-16 grid lg:grid-cols-2 items-center gap-12 lg:gap-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-800/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-sm tracking-widest uppercase mb-6">
                <ClipboardList className="w-5 h-5" />
                ORDER MANAGEMENT
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Manage Orders <br /> Like a Pro
              </h2>
              <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-md">
                Ensure every order is tracked, updated, and handled swiftly. No delays. No mistakes. Just smooth operations.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  { text: "Access all the order details you need at your fingertips.", icon: Fingerprint },
                  { text: "Make quick changes or duplicate orders without missing a step.", icon: Copy },
                  { text: "Monitor your delivery man’s progress in real-time.", icon: MapPinned }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-zinc-300">
                    <div className="mt-1 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-3xl border border-zinc-100 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-zinc-100">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
                    <Bike className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Ongoing Delivery</div>
                    <div className="text-xl font-bold text-zinc-950">#421 · Alex Chen</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-red-100 flex items-center justify-center p-1">
                      <UserCircle className="w-full h-full text-zinc-200" />
                    </div>
                    <div>
                      <div className="font-extrabold text-zinc-950">ETA 8 min</div>
                      <div className="text-zinc-500 text-sm">2.3 km away</div>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-red-50 text-red-700 font-bold flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 8:42 PM
                  </div>
                </div>

                <div className="aspect-[16/6] bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center gap-2 text-zinc-400 hover:border-red-200 hover:text-red-400 transition-colors cursor-pointer group">
                  <Map className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-sm tracking-widest uppercase">Live tracking enabled</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium px-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  Last update: just now
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE DEMO section */}
        <section className="max-w-7xl mx-auto px-6 py-4 lg:py-6">
          <div className="bg-zinc-50 rounded-[48px] border border-zinc-100 p-8 lg:p-16 grid lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm tracking-widest uppercase mb-6">
                <RotateCcw className="w-5 h-5" />
                LIVE DEMO
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 leading-tight">
                From prep to 'ready' <br /> in one tap.
              </h2>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-md">
                Update statuses as orders move. See how the progress bar responds – just like our POS.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-3 rounded-full bg-red-50 text-red-700 text-sm font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4" /> realtime sync
                </span>
                <span className="px-5 py-3 rounded-full bg-red-50 text-red-700 text-sm font-bold flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" /> push updates
                </span>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-3xl border border-zinc-100 flex flex-col gap-8">
                <div className="flex justify-between items-center">
                  <div className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-900 font-bold text-sm flex items-center gap-2">
                    <Receipt className="w-4 h-4" /> ORDER #2483
                  </div>
                  <div className={`px-6 py-2 rounded-full text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-600/20 transition-all duration-300 ${currentStatus.bgColor}`}>
                    {currentStatus.name}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 relative">
                  <div className="absolute top-5 left-0 right-0 h-1 bg-zinc-100 -z-10 mx-6"></div>
                  {[
                    { label: "Prep", icon: ClipboardList },
                    { label: "Cooking", icon: Fire },
                    { label: "Ready", icon: CheckCircle },
                    { label: "Delivery", icon: Bike }
                  ].map((step, idx) => {
                    const isActive = idx <= currentStatusIndex
                    return (
                      <div key={idx} className="flex flex-col items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'bg-red-600 text-white scale-110 shadow-lg shadow-red-600/30' : 'bg-zinc-100 text-zinc-400'
                        }`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}>
                          {step.label}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-sm pt-4 border-t border-zinc-100">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="font-bold text-zinc-800">Table 7</span> · 2 items
                </div>

                <button 
                  onClick={cycleStatus}
                  className="w-full py-4 rounded-2xl border-2 border-red-600 text-red-600 font-bold flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all active:scale-[0.98]"
                >
                  <RotateCcw className="w-5 h-5" /> Update status
                </button>
                <p className="text-zinc-400 text-xs text-center font-medium">Click to simulate order progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-4 lg:py-8">
          <div className="bg-zinc-950 rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(183,28,28,0.1),transparent)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(183,28,28,0.15),transparent)] transition-all"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
                Turn your counter into a <br /> <span className="text-red-600 italic">command center</span>.
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Join 500+ restaurants that use CounterPower to streamline dine-in, delivery & takeaway.
              </p>
              <div className="flex flex-col items-center gap-8 pt-4">
                <button className="group bg-red-600 text-white px-12 py-5 rounded-full font-extrabold text-xl flex items-center gap-3 hover:bg-red-700 transition-all hover:scale-105 shadow-2xl shadow-red-600/40">
                  <Rocket className="w-6 h-6" /> Get Started Now
                </button>
                <div className="flex items-center gap-6 text-zinc-500 font-bold text-xs uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-2"><Tablet className="w-4 h-4" /> Works on any device</span>
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

export default POSManagementPage