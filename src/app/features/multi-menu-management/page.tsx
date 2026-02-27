'use client';



import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  BookOpen,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  LayoutGrid,
  RefreshCw,
  Zap,
  Smartphone,
  Globe,
  WifiOff,
  Trash2,
  Users,
  CalendarCheck,
  QrCode,
  Percent,
  Tags
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const MultiMenuManagementPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* DESIGN FROM IMAGE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Multi Menu Management</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Sync your culinary offerings across all channels. Manage dine-in, delivery, and seasonal menus from a single, intuitive interface.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Global Sync</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Update once, reflect everywhere. Modify prices or item availability and see changes instantly on your website, POS, and third-party apps.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <LayoutGrid className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Seasonal Hero</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Schedule seasonal menus in advance. Auto-publish holiday specials or weekend brunch menus without lifting a finger on the launch day.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <RefreshCw className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Availability Toggle</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Mark items as "Sold Out" instantly to prevent customer disappointment. Control in-stock status across all digital touchpoints in real-time.
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
                  <BookOpen className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <LayoutGrid className="w-7 h-7" />
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
                Menu Intelligence
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                One Dashboard, <br/> Infinite Menu Control.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Whether you run a single bistro or a nationwide franchise, our multi-menu builder gives you absolute control. Manage different pricing for delivery apps, create unique happy hour menus, and update 1,000 locations simultaneously with an enterprise-grade sync engine.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Dynamic Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Multi-channel Sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Seasonal Scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Visual Menu Builder</span>
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
            <div>
              <div className="inline-flex items-center space-x-2 bg-zinc-800 rounded-full px-4 py-2 mb-8 border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-sm font-medium text-zinc-300">Unified Control</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Real-time Sync Across All Channels
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Eliminate menu discrepancies forever. When you update a dish, price, or modifier in the central dashboard, it instantly reflects across your POS, website, delivery apps, and digital kiosks.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-zinc-800 pt-10">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-zinc-500 text-sm">Consistency Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">&lt; 1s</div>
                  <div className="text-zinc-500 text-sm">Update Speed</div>
                </div>
                 <div>
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-zinc-500 text-sm">Channels Sync</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-6">
                  <h3 className="text-lg font-bold">Menu Sync Status</h3>
                  <div className="flex items-center space-x-2 text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-bold">
                    <CheckCircle className="w-3 h-3" />
                    <span>ALL SYSTEMS OPERATIONAL</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'POS Terminals (Main Floor)', status: 'Synced', time: 'Just now' },
                    { name: 'Website Menu', status: 'Synced', time: 'Just now' },
                    { name: 'UberEats Integration', status: 'Synced', time: '2s ago' },
                    { name: 'Kitchen Display System', status: 'Synced', time: 'Just now' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="font-medium text-zinc-300">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-zinc-500">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED FEATURE (Light) */}
        <section className="bg-zinc-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Seasonal Agility</h2>
              <p className="text-xl text-zinc-500">
                Adapt to trends and seasons instantly. Pre-schedule menus for holidays, happy hours, or special events without the last-minute rustic rush.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <CalendarCheck className="w-6 h-6 text-white" />,
                  title: "Scheduled Publishing",
                  desc: "Set your summer menu to go live automatically on June 1st at 10 AM. No manual intervention required."
                },
                {
                  icon: <Layers className="w-6 h-6 text-white" />,
                  title: "Contextual Menus",
                  desc: "Automatically switch between Lunch, Dinner, and Happy Hour menus based on the time of day."
                },
                {
                  icon: <RefreshCw className="w-6 h-6 text-white" />,
                  title: "Instant 86ing",
                  desc: "Ran out of avocado? One click removes it from all digital menus instantly, preventing awkward cancellations."
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Centralize Your Menus?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to manage their multi-location menus with 
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

export default MultiMenuManagementPage;
