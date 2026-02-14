'use client';

import Link from 'next/link';
import { 
  Monitor, 
  BookOpen, 
  ClipboardList, 
  Globe, 
  Users, 
  QrCode, 
  Tag, 
  Layers 
} from 'lucide-react';

const navItems = [
  { name: 'POS', href: '/features/pos-management', icon: Monitor, color: 'bg-emerald-400' },
  { name: 'MENU', href: '/features/multi-menu-management', icon: BookOpen, color: 'bg-sky-400' },
  { name: 'ORDERS', href: '/features/order-management', icon: ClipboardList, color: 'bg-orange-400' },
  { name: 'TABLES', href: '/features/table-reservation', icon: Users, color: 'bg-purple-400' },
  { name: 'WEBSITE', href: '/features/restaurant-website', icon: Globe, color: 'bg-emerald-500' },
  { name: 'QR CODE', href: '/features/qr-code-menu', icon: QrCode, color: 'bg-sky-500' },
  { name: 'PROMO', href: '/features/promotion-management', icon: Tag, color: 'bg-orange-500' },
  { name: 'STOCK', href: '/features/inventory-management', icon: Layers, color: 'bg-purple-500' },
];

const FeatureQuickNav = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400">Explore More Features</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="relative bg-zinc-200/50 hover:bg-white p-6 rounded-lg transition-all duration-300 group shadow-sm hover:shadow-xl border border-transparent hover:border-zinc-200 flex flex-col items-center gap-4 text-center overflow-hidden"
            >
              {/* Colorful Top Border like the image */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.color}`}></div>
              
              <div className="text-zinc-500 group-hover:text-red-500 transition-colors">
                <item.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400 group-hover:text-zinc-900 transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureQuickNav;
