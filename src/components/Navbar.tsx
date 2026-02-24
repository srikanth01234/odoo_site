'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/img/dine360.jpeg';
import { motion } from 'framer-motion';
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
  Phone
} from 'lucide-react';

const Navbar = () => {
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

  return (
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

      <div className="flex items-center gap-6 text-base font-medium px-5">
        <Link href="/start" className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-bold shadow-lg shadow-red-600/20 text-sm">
          Start Now
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
