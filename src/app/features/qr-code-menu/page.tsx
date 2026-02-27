'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  QrCode,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  Smartphone,
  Camera,
  Zap,
  Sparkles,
  Globe,
  LayoutGrid,
  WifiOff,
  Trash2,
  Users,
  CalendarCheck,
  Percent,
  Tags
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const QRCodeMenuPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* DESIGN FROM IMAGE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">QR Code Menu</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Transform your dining experience with contactless, dynamic QR code menus that are easy to update and a delight for guests to use.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Visual Feast</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Showcase high-resolution dish photography. Increase average order value by 20% with enticing visuals that paper menus can't provide.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Instant Updates</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Change prices or out-of-stock items in seconds. Your digital menu is always accurate, eliminating guest frustration and staff confusion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Upsell AI</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Smart recommendations suggest pairings like "Add Extra Bacon" or "Pairs well with Malbec," driving higher ticket sizes automatically.
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
                  <QrCode className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7" />
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
                Contactless Dining
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Enhance Dining with <br/> Smart QR Menus.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Give your customers a safe and modern way to browse your offerings. Our QR menus are fully responsive, support multiple languages, and can be updated in real-time from your Dine360 dashboard. Integrated ordering allows guests to pay right from their table, reducing staff workload.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Real-time Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Table Ordering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Multi-language</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">High-res Images</span>
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
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                <span className="text-sm font-medium text-zinc-300">Contactless & Safe</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Menus That Sell Themselves
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Reduce staff workload and increase check sizes. Guests order faster and spend more when they can browse vivid photos and intuitive modifiers on their own phones.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-zinc-800 pt-10">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">+20%</div>
                  <div className="text-zinc-500 text-sm">Avg Order Value</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-zinc-500 text-sm">Contactless</div>
                </div>
                 <div>
                  <div className="text-4xl font-bold text-white mb-2">0s</div>
                  <div className="text-zinc-500 text-sm">Update Delay</div>
                </div>
              </div>
            </div>
            
             <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center">
                 <QrCode className="w-32 h-32 text-white mb-6" />
                 <p className="text-zinc-400 mb-6 font-mono text-sm">SCAN TO VIEW MENU</p>
                 <div className="w-full bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                    <div className="flex items-center space-x-3 mb-2">
                       <div className="w-10 h-10 bg-zinc-800 rounded-md"></div>
                       <div className="flex-1 h-2 bg-zinc-800 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 bg-zinc-800 rounded-md"></div>
                       <div className="flex-1 h-2 bg-zinc-800 rounded"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED FEATURE (Light) */}
        <section className="bg-zinc-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Visual Menu Engineering</h2>
              <p className="text-xl text-zinc-500">
                Forget PDF uploads. Build a digital storefront that guides guests to your highest margin items with smart recommendations and mouth-watering imagery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Sparkles className="w-6 h-6 text-white" />,
                  title: "Smart Upselling",
                  desc: "Algorithmically suggest pairings (wine with steak, sides with burgers) at the exact moment a guest is most likely to say yes."
                },
                {
                  icon: <Camera className="w-6 h-6 text-white" />,
                  title: "High-Res Imagery",
                  desc: "A picture is worth a thousand calories. Professional food photography integration increases conversion rates on appetizers and desserts."
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-white" />,
                  title: "Dynamic Pricing",
                  desc: "Subtly adjust prices for Happy Hour or special events instantly without needing to reprint a single sheet of paper."
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Update Your Menu?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to manage their QR menus with 
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

export default QRCodeMenuPage;
