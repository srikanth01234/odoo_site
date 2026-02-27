'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  Globe,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  Laptop,
  Smartphone,
  MousePointerClick,
  Zap,
  LayoutGrid,
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

const RestaurantWebsitePage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* DESIGN FROM IMAGE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Restaurant Website</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Elevate your digital presence with a stunning, high-converting website designed specifically for the modern dining experience.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Mobile First</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                80% of diners browse on their phones. Our websites are lightning-fast and fully responsive, ensuring a perfect experience on every device.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Direct Bookings</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Stop paying third-party commissions. Capture table reservations and online orders directly through your own branded website.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">SEO Optimized</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Dominate local search results with built-in schema markup and metadata that helps Google understand your menu and location.
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
                  <Globe className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Laptop className="w-7 h-7" />
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
                Web Presence
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Your Restaurant, <br/> Your Brand, Online.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Stop relying on third-party aggregators. Own your brand and your data with a high-performance website that looks amazing on any device. From mobile-first menu displays to integrated online ordering, we build the digital home your restaurant deserves.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Mobile Responsive</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Online Ordering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Analytics Dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Custom Domain</span>
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
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-sm font-medium text-zinc-300">Direct Sales</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Own Your Customers, Keep Your Margin
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Stop paying 30% commissions to third-party apps. Drive traffic to your own white-labeled website where you control the brand, the data, and the profit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-zinc-800 pt-10">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-zinc-500 text-sm">Commission Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">+15%</div>
                  <div className="text-zinc-500 text-sm">Conversion Rate</div>
                </div>
                 <div>
                  <div className="text-4xl font-bold text-white mb-2">+40%</div>
                  <div className="text-zinc-500 text-sm">Brand Loyalty</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                 <div className="border border-zinc-800 rounded-xl overflow-hidden mb-4">
                   <div className="bg-zinc-900 p-2 border-b border-zinc-800 flex items-center space-x-2">
                     <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500"></div>
                     <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500"></div>
                     <div className="ml-4 bg-zinc-800 rounded-md px-2 py-0.5 text-[10px] text-zinc-500 flex-1">your-restaurant.com</div>
                   </div>
                   <div className="bg-zinc-950 p-4 min-h-[200px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4 animate-pulse"></div>
                        <div className="h-4 w-32 bg-zinc-800 rounded mx-auto mb-2"></div>
                        <div className="h-2 w-24 bg-zinc-800 rounded mx-auto"></div>
                      </div>
                   </div>
                 </div>
                 <p className="text-center text-zinc-500 text-sm italic">
                   "Our direct ordering website now processes more orders than all delivery apps combined."
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED FEATURE (Light) */}
        <section className="bg-zinc-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Mobile First Experience</h2>
              <p className="text-xl text-zinc-500">
                It's not just a responsive site; it's a web app. Designed for thumbs, optimized for speed, and built to convert hungry visitors into paying customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Smartphone className="w-6 h-6 text-white" />,
                  title: "App-like Interface",
                  desc: "Smooth transitions, bottom-sheet menus, and sticky 'Add to Cart' buttons provide a native app feel without the download."
                },
                {
                  icon: <Search className="w-6 h-6 text-white" />,
                  title: "SEO Optimized",
                  desc: "Built with modern tech that Google loves. Ranking higher for 'best [cuisine] near me' happens automatically."
                },
                {
                  icon: <MousePointerClick className="w-6 h-6 text-white" />,
                  title: "One-Click Reorder",
                  desc: "Saved payments and favorite orders make it effortless for regulars to order 'the usual' again."
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Own Your Online Presence?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to build their web presence with 
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

export default RestaurantWebsitePage;
