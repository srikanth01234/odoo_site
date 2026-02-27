'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  Users,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  Calendar,
  Layout,
  UserCheck,
  Zap,
  Smartphone,
  Globe,
  LayoutGrid,
  WifiOff,
  Trash2,
  CalendarCheck,
  QrCode,
  Percent,
  Tags
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const TableReservationPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* DESIGN FROM IMAGE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Table & Reservation</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Maximize your floor space and minimize wait times with an intelligent reservation system designed for high-paced dining environments.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Smart Booking</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Enable 24/7 online reservations. Automated table allocation ensures you never double-book and always maximize your seating capacity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Floor Map</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Visualize your floor plan in real-time. Drag-and-drop tables, track dining progress, and identify "ready-to-bus" tables instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Guest History</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Recognize VIPs and regulars the moment they book. View allergy notes, favorite tables, and past orders to provide elite service.
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
                  <Users className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7" />
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
                Guest Experience
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Master Your Restaurant's <br/> Seating in Seconds.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Take control of your dining room with a real-time table management dashboard. Visualize your floor plan, manage waitlists, and send automated SMS notifications to guests when their table is ready. Reduce no-shows with credit card deposits and re-confirmation alerts.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Digital Floor Plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Waitlist Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">SMS Notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Guest Database</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* STATS SECTION (Dark) */}
        <section className="bg-zinc-900 text-white py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                     <CalendarCheck className="text-amber-500 w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-sm text-zinc-400">Tonight's Forecast</div>
                     <div className="text-xl font-bold">Fully Booked</div>
                   </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <span className="text-zinc-400">7:00 PM - 8:00 PM</span>
                      <span className="text-white font-mono">100% Occ.</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <span className="text-zinc-400">Waiting List</span>
                      <span className="text-amber-500 font-mono">12 Parties</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-zinc-800 rounded-full px-4 py-2 mb-8 border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-sm font-medium text-zinc-300">Maximize Covers</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                No More Empty Seats, No More No-Shows
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Turn tables faster and reduce revenue loss. Our smart reminders drastically cut down no-shows, while automated waitlists keep your floor full.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-zinc-800 pt-10">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">+20%</div>
                  <div className="text-zinc-500 text-sm">Table Turnover</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">-80%</div>
                  <div className="text-zinc-500 text-sm">No-Shows</div>
                </div>
                 <div>
                  <div className="text-4xl font-bold text-white mb-2">+35%</div>
                  <div className="text-zinc-500 text-sm">Online Bookings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED FEATURE (Light) */}
        <section className="bg-zinc-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Smart Seating Logic</h2>
              <p className="text-xl text-zinc-500">
                Tetris for your dining room. Our algorithm suggests the optimal table for every party size and duration, maximizing your cover count per shift.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Layout className="w-6 h-6 text-white" />,
                  title: "Auto-Assignment",
                  desc: "Instantly assigns incoming reservations to the best available table to prevent gaps and optimize server sections."
                },
                {
                  icon: <UserCheck className="w-6 h-6 text-white" />,
                  title: "VIP Recognition",
                  desc: "Alerts the host when a high-spending regular walks in. See their favorite table and past order history instantly."
                },
                {
                  icon: <Calendar className="w-6 h-6 text-white" />,
                  title: "Event Management",
                  desc: "Easily block out sections for private parties or large groups without disrupting the rest of the flow."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Optimize Your Seating?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to manage their reservations with 
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

export default TableReservationPage;
