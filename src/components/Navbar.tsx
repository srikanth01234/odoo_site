'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/img/dine360.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  BookOpen, 
  ClipboardList, 
  Globe, 
  Users, 
  QrCode, 
  Tag, 
  Layers,
  ChevronDown,
  ArrowRight,
  Utensils,
  Coffee,
  Truck,
  Smartphone,
  ChefHat,
  FileText,
  Info,
  HelpCircle,
  Phone,
  Menu,
  X,
  Plus,
  Minus
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const featureItems = [
    { name: 'POS Management', href: '/features/pos-management', icon: Monitor },
    { name: 'Multi Menu Management', href: '/features/multi-menu-management', icon: BookOpen },
    { name: 'Order Management', href: '/features/order-management', icon: ClipboardList },
    { name: 'Restaurant Website', href: '/features/restaurant-website', icon: Globe },
    { name: 'Table & Reservation', href: '/features/table-reservation', icon: Users },
    { name: 'QR Code Menu', href: '/features/qr-code-menu', icon: QrCode },
    { name: 'Promotion Management', href: '/features/promotion-management', icon: Tag },
    { name: 'Inventory Management', href: '/features/inventory-management', icon: Layers },
  ];

  const restaurantTypes = [
    { name: 'Fast Food', href: '/restaurant-types/fast-food', icon: Utensils },
    { name: 'Food Trucks', href: '/restaurant-types/food-truck', icon: Truck },
    { name: 'Cafe & Bistro', href: '/restaurant-types/cafe-bistro', icon: Coffee },
    { name: 'Ghost / Virtual Dine', href: '/restaurant-types/ghost-kitchen', icon: Smartphone },
    { name: 'Full Service', href: '/restaurant-types/full-service', icon: ChefHat },
  ];

  const resourceItems = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact Us', href: '/contact', icon: Phone },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <>
      <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-zinc-100 shadow-sm backdrop-blur-lg"
    >
      <div className="flex items-center gap-4">
        <Link href="/" className="pl-5 flex items-center gap-2">
          <Image 
            src={Logo} 
            alt="Dine360 Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto"
            priority
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-base font-medium text-zinc-700">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        
        <div className="relative group py-4">
          <Link href="/features" className="hover:text-red-500 transition-colors flex items-center gap-1">
            Features
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </Link>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block w-[600px]">
            <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden p-4 grid grid-cols-2 gap-2">
              {featureItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-zinc-50 transition-colors group/item border border-transparent hover:border-zinc-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-red-600 bg-red-50 w-10 h-10 flex items-center justify-center rounded-lg group-hover/item:bg-red-600 group-hover/item:text-white transition-all">
                      <item.icon className="w-5 h-5" />
                    </span>
                    <span className="font-semibold text-zinc-800 text-sm">{item.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                </Link>
              ))}
              <div className="col-span-2 mt-2 pt-2 border-t border-zinc-100 flex justify-center">
                <Link 
                  href="/features"
                  className="flex items-center gap-2 px-6 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 transition-colors group/view-all font-semibold text-sm"
                >
                  View All Features
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/view-all:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group py-4">
          <Link href="/restaurant-types" className="hover:text-red-500 transition-colors flex items-center gap-1">
            Restaurant Types
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </Link>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block w-[500px]">
            <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden p-3 grid grid-cols-2 gap-2">
              {restaurantTypes.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors group/item border border-transparent hover:border-zinc-100"
                >
                  <span className={`w-10 h-10 flex items-center justify-center rounded-lg bg-red-50 text-red-600 group-hover/item:bg-red-600 group-hover/item:text-white transition-all`}>
                    <item.icon className="w-5 h-5" />
                  </span>
                  <span className="font-medium text-zinc-600 group-hover/item:text-zinc-900 transition-colors text-sm">{item.name}</span>
                </Link>
              ))}
              <Link 
                href="/restaurant-types"
                className="flex items-center justify-between p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors group/view-all"
              >
                <span className="font-semibold text-red-700 text-sm">View All</span>
                <ArrowRight className="w-4 h-4 text-red-700 transition-transform group-hover/view-all:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        <Link href="/pricing" className="hover:text-red-500 transition-colors">Pricing</Link>
        <div className="relative group py-4">
          <button className="hover:text-red-500 transition-colors flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer font-medium text-base">
            Resources
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>
          
          <div className="absolute top-full right-0 pt-2 hidden group-hover:block w-[240px]">
            <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden p-2 flex flex-col gap-1">
              {resourceItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors group/item border border-transparent hover:border-zinc-100"
                >
                  <span className={`w-10 h-10 flex items-center justify-center rounded-lg bg-red-50 text-red-600 group-hover/item:bg-red-600 group-hover/item:text-white transition-all`}>
                    <item.icon className="w-5 h-5" />
                  </span>
                  <span className="font-medium text-zinc-600 group-hover/item:text-zinc-900 transition-colors text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 px-0 md:px-5">
        <Link href="/start" className="hidden sm:block bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-red-700 transition-colors font-bold shadow-lg shadow-red-600/20 text-xs md:text-sm">
          Start Now
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-red-600 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
    </motion.nav>
    
    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] md:hidden"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[80] md:hidden shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-zinc-100">
              <Image src={Logo} alt="Logo" width={100} height={30} className="h-8 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-500">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-lg font-bold text-zinc-800 border-b border-zinc-50">Home</Link>
              
              {/* Features Mobile Accordion */}
              <div className="py-3 border-b border-zinc-50">
                <button 
                  onClick={() => toggleAccordion('features')}
                  className="flex items-center justify-between w-full text-lg font-bold text-zinc-800"
                >
                  Features
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === 'features' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === 'features' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-2 pt-4">
                        {featureItems.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors"
                          >
                            <span className="text-red-600 bg-red-50 p-2 rounded-md">
                              <item.icon className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-semibold text-zinc-700">{item.name}</span>
                          </Link>
                        ))}
                        <Link 
                          href="/features"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-3 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-semibold text-sm mt-2"
                        >
                          View All Features
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Restaurant Types Mobile Accordion */}
              <div className="py-3 border-b border-zinc-50">
                <button 
                  onClick={() => toggleAccordion('types')}
                  className="flex items-center justify-between w-full text-lg font-bold text-zinc-800"
                >
                  Restaurant Types
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === 'types' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === 'types' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-2 pt-4">
                        {restaurantTypes.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors"
                          >
                            <span className="text-red-600 bg-red-50 p-2 rounded-md">
                              <item.icon className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-semibold text-zinc-700">{item.name}</span>
                          </Link>
                        ))}
                        <Link 
                          href="/restaurant-types"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-3 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-semibold text-sm mt-2"
                        >
                          View All Types
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-lg font-bold text-zinc-800 border-b border-zinc-50">Pricing</Link>

              {/* Resources Mobile Accordion */}
              <div className="py-3 border-b border-zinc-50">
                <button 
                  onClick={() => toggleAccordion('resources')}
                  className="flex items-center justify-between w-full text-lg font-bold text-zinc-800"
                >
                  Resources
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === 'resources' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-2 pt-4">
                        {resourceItems.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors"
                          >
                            <span className="text-red-600 bg-red-50 p-2 rounded-md">
                              <item.icon className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-semibold text-zinc-700">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-6">
              <Link 
                href="/start" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-red-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-red-600/30"
              >
                Start Now
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
