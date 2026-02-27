'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  Monitor,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  Zap,
  LineChart,
  Smartphone,
  WifiOff,
  CreditCard,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const POSManagementPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* DESIGN FROM IMAGE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">POS Management</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience the fastest, most reliable point-of-sale system that keeps your restaurant moving even at peak hours.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Speed Operations</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Slash wait times with a lightning-fast interface designed for high-volume transactions and seamless kitchen communication.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Revenue Tracking</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Monitor your sales flow in real-time. Detailed financial reporting helps you understand your most profitable shifts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Hardware Agnostic</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Run your POS on any device. From dedicated terminals to tablets and smartphones, your counter goes where you do.
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
                  <Monitor className="w-20 h-20" />
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
                Point of Sale
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Transform Your Counter <br/> Into a Powerhouse.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Empower your staff with an intuitive interface that reduces training time and eliminates errors. Our cloud-based POS works on any device, giving you total control over your restaurant operations from anywhere.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Multi-device sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Offline mode</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Split payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Inventory link</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
        {/* NEW SECTION 1: RELIABILITY (Dark) */}
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-red-500 font-bold uppercase tracking-widest text-sm"
              >
                Zero Downtime
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mt-3 mb-6"
              >
                Built for the Rush
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 max-w-2xl mx-auto text-lg"
              >
                Never lose a sale. Our hybrid cloud architecture ensures your POS keeps running smoothly even if the internet goes down.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "99.99%", label: "Uptime Guarantee", icon: Zap },
                { value: "<1.2s", label: "Transaction Speed", icon: Clock },
                { value: "Offline", label: "Full Mode Support", icon: WifiOff }
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

        {/* NEW SECTION 2: PAYMENT FLEXIBILITY (Light) */}
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
                    Seamless Payments
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 leading-tight">
                    Pay at Table, Counter, <br/> or Anywhere.
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    Give your guests the flexibility they expect. Split bills by item or seat, accept digital wallets, and close checks directly at the table for faster turn times.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Integrated EMV/NFC card readers",
                    "Split bills by seat, item, or custom amount",
                    "Digital receipts via email or SMS",
                    "Automatic tip prompting and calculation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-white font-medium">{item}</span>
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
                <div className="absolute inset-0 bg-gradient-to-bl from-red-600/20 to-transparent rounded-[3rem] transform -rotate-2 scale-105 blur-2xl" />
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 border border-zinc-100 overflow-hidden h-full flex flex-col justify-center min-h-[400px]">
                  
                  {/* Abstract Payment UI */}
                  <div className="relative z-10 w-full max-w-sm mx-auto bg-zinc-50 rounded-2xl border border-zinc-200 p-6 shadow-inner">
                    <div className="flex justify-between items-center mb-8">
                       <div className="h-4 w-1/3 bg-zinc-300 rounded" />
                       <div className="h-8 w-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                         <CreditCard className="w-4 h-4" />
                       </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Due</span>
                        <span>$84.50</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-white border border-zinc-200 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-red-500 hover:text-red-600 transition-colors">
                            <span className="text-xs font-bold">15%</span>
                            <span className="text-[10px] text-zinc-400">$12.68</span>
                        </div>
                        <div className="h-16 rounded-xl bg-red-600 text-white border border-red-600 flex flex-col items-center justify-center gap-1 cursor-pointer shadow-lg shadow-red-600/20">
                            <span className="text-xs font-bold">20%</span>
                            <span className="text-[10px] text-white/80">$16.90</span>
                        </div>
                        <div className="h-16 rounded-xl bg-white border border-zinc-200 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-red-500 hover:text-red-600 transition-colors">
                            <span className="text-xs font-bold">25%</span>
                            <span className="text-[10px] text-zinc-400">$21.12</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-12 w-full bg-zinc-900 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                      Confirm Payment
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-lg border border-zinc-100 flex items-center gap-2 animate-bounce duraiton-[3000ms]">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-zinc-600">Payment Approved</span>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* NEW SECTIONS ADDED */}
        {/* KEY CAPABILITIES SECTION */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-zinc-950 mb-4">Everything You Need to Run Your Floor</h2>
              <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Our POS isn&apos;t just a cash register; it&apos;s the command center for your entire restaurant operation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Table Management</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Visual floor plans let you manage tables, track status, and assign servers instantly.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Menu className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Menu Customization</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Update items, prices, and modifiers in real-time across all devices with a few clicks.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Staff Performance</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Track sales by server to reward top performers and identify training needs quickly.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Customer Profiles</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Build a database of loyal guests with order history and detailed preferences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATION SECTION */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-950">
                Plays Nice With <br/> <span className="text-red-600">Your Favorite Tools</span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Connect your POS with accounting software, delivery platforms, and loyalty programs to eliminate double-entry and keep your data synchronized automatically.
              </p>
              
              <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Accounting Integration (Quickbooks, Xero)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Delivery Sync (UberEats, DoorDash)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Loyalty & Marketing Tools</span>
                  </div>
              </div>
            </div>

            {/* Abstract Graphic for Integrations */}
            <div className="relative h-[400px] bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden flex items-center justify-center order-1 lg:order-2">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                {/* Central Hub */}
                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-red-50">
                   <div className="text-2xl font-black text-red-600">POS</div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute w-[80%] h-[1px] bg-zinc-300"></div>
                <div className="absolute w-[1px] h-[80%] bg-zinc-300"></div>

                {/* Satellite Nodes */}
                 <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-xl shadow-lg border border-zinc-200 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                 </div>
                 <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-xl shadow-lg border border-zinc-200 flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                 </div>
                 <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-xl shadow-lg border border-zinc-200 flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
                 </div>
                 <div className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-xl shadow-lg border border-zinc-200 flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
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
               Join hundreds of restaurants that use Dine360 to manage their POS with 
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

export default POSManagementPage;
