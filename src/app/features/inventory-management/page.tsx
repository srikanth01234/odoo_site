'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  Layers,
  CheckCircle,
  Menu,
  Clock,
  Search,
  Zap,
  TrendingUp,
  Trash2,
  Repeat,
  PackageCheck,
  ClipboardList
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const InventoryManagementPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* DESIGN FROM IMAGE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Inventory Management</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Maintain perfect stock levels and minimize waste with our automated inventory tracking system designed specifically for high-volume restaurants.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Stock Intelligence</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Automated stock counting and low-inventory alerts ensure you never run out of critical ingredients during a rush.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Trash2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Waste Reduction</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Track expiration dates and portion control to significantly reduce food waste and improve your bottom line.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Repeat className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Vendor Sync</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Connect directly with your suppliers. Generate purchase orders automatically based on real-time usage and historical data.
              </p>
            </div>
          </div>

          {/* Lower Split Section matching the image */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <Layers className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Menu className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="absolute top-1/4 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <CheckCircle className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block px-5 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
                Stock Control
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Effortless Inventory <br/> Control & Sync.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Take the guesswork out of ordering. Our intelligent inventory system tracks every gram and milliliter in real-time, syncing across all your branches and sales channels instantly.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Real-time alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Waste reduction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Supplier mgmt</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Low stock warns</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* NEW SECTION 1: PROVEN RESULTS (Dark) */}
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#ff0000_1px,transparent_1px),linear-gradient(-45deg,#ff0000_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-red-500 font-bold uppercase tracking-widest text-sm"
              >
                Proven Impact
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mt-3 mb-6"
              >
                Numbers Don&apos;t Lie
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 max-w-2xl mx-auto text-lg"
              >
                See how automated inventory management transforms efficiency and profitability for restaurants worldwide.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "30%", label: "Reduction in Food Waste", icon: Trash2 },
                { value: "15hrs", label: "Saved Weekly on Counts", icon: Clock },
                { value: "12%", label: "Increase in Profit Margins", icon: TrendingUp }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-2xl text-center group hover:border-red-600/50 hover:bg-zinc-800 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-700 group-hover:border-red-500/30">
                    <stat.icon className="w-7 h-7 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">{stat.value}</h3>
                  <p className="text-zinc-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW SECTION 2: SMART FORECASTING (Light) */}
        <section className="py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">
                    Future Ready
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 leading-tight">
                    Predict Demand. <br/> Prevent Outages.
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    Our AI-driven forecasting analyzes historical sales data, seasonal trends, and local events to recommend exactly what to order and when. Never tell a customer "we're out" again.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Automated Purchase Orders based on par levels",
                    "Supplier price tracking and history",
                    "Multi-location transfer management",
                    "Recipe costing and menu engineering"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-zinc-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 blur-2xl" />
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 border border-zinc-100 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-50 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  {/* Abstract UI Representation */}
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                      <div>
                        <div className="h-2 w-24 bg-zinc-200 rounded mb-2" />
                        <div className="h-4 w-32 bg-zinc-900 rounded" />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <PackageCheck className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[1, 2, 3].map((k) => (
                        <div key={k} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300">
                            <Layers className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between mb-2">
                              <div className="h-3 w-20 bg-zinc-800 rounded" />
                              <div className="h-3 w-12 bg-red-100 text-red-600 text-[10px] flex items-center justify-center font-bold rounded">Low Stock</div>
                            </div>
                            <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 w-[20%]" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-between items-center">
                      <div className="h-3 w-24 bg-zinc-200 rounded" />
                      <div className="h-8 w-28 bg-zinc-900 rounded-lg shadow-lg shadow-zinc-900/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* QUICK NAV */}
        <FeatureQuickNav />

        {/* CTA SECTION */}
        <section className="bg-zinc-950 py-24 px-6 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 blur-[150px] rounded-full"></div>
           </div>
           
           <div className="max-w-7xl mx-auto text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Restaurant?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to manage their inventory with 
               precision and style.
             </p>
             <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95">
               Start Free Trial
             </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InventoryManagementPage;
