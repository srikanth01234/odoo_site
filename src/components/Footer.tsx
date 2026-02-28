"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Youtube, 
  ChevronsRight, ArrowRight, ArrowUp 
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.5 }
    }
  };

  const links = [
    { name: "About Us", href: "/about" }, 
    { name: "Pricing", href: "/pricing" }, 
    { name: "Our Blogs", href: "/blog" }, 
    { name: "FAQ'S", href: "/faq" }, 
    { name: "Contact Us", href: "/contact" }
  ];

  const featureLinks = [
    { name: "POS Management", href: "/features/pos-management" },
    { name: "Inventory Management", href: "/features/inventory-management" },
    { name: "Order Management", href: "/features/order-management" },
    { name: "Table Reservation", href: "/features/table-reservation" },
    { name: "QR Code Menu", href: "/features/qr-code-menu" },
    { name: "Multi Menu", href: "/features/multi-menu-management" },
    { name: "Promotion", href: "/features/promotion-management" },
    { name: "Website Builder", href: "/features/restaurant-website" },
  ];

  const restaurantTypeLinks = [
    { name: "Bakery", href: "/restaurant-types/bakery" },
    { name: "Cafe & Bistro", href: "/restaurant-types/cafe-bistro" },
    { name: "Family Style", href: "/restaurant-types/family-style" },
    { name: "Fast Food", href: "/restaurant-types/fast-food" },
    { name: "Fine Dine", href: "/restaurant-types/fine-dine" },
    { name: "Food Truck", href: "/restaurant-types/food-truck" },
    { name: "Full Service", href: "/restaurant-types/full-service" },
    { name: "Ghost Kitchen", href: "/restaurant-types/ghost-kitchen" },
  ];

  return (
    <footer className="relative bg-black pt-24 pb-0 mt-0 text-white overflow-visible">
      
      {/* Floating Info Section (Brand Red Bar) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl z-40">
        <div className="bg-brand-red rounded-xl p-8 md:px-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            {/* Texture/Pattern Overlay */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shrink-0">
                    <MapPin size={24} />
                </div>
                <div>
                    <h5 className="font-bold uppercase text-sm mb-1 text-black/80">Address</h5>
                    <p className="font-semibold text-black">4648 Rocky Road Philadelphia</p>
                </div>
            </div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shrink-0">
                    <Mail size={24} />
                </div>
                <div>
                    <h5 className="font-bold uppercase text-sm mb-1 text-black/80">Send Email</h5>
                    <p className="font-semibold text-black">info@pizza-king.com</p>
                </div>
            </div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shrink-0">
                    <Phone size={24} />
                </div>
                <div>
                    <h5 className="font-bold uppercase text-sm mb-1 text-black/80">Call Emergency</h5>
                    <p className="font-semibold text-black">+88 0123 654 99</p>
                </div>
            </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-40 left-0 w-64 h-64 pointer-events-none opacity-40 mix-blend-overlay">
         <Image src="https://cdn-icons-png.flaticon.com/512/753/753839.png" width={300} height={300} alt="Lettuce" className="rotate-45" />
      </div>
       <div className="absolute top-20 right-0 w-48 h-48 pointer-events-none opacity-20">
         <Image src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1000&auto=format&fit=crop" width={200} height={200} alt="Ingredients" className="object-contain" />
      </div>

      <div className="container mx-auto px-6 pt-16 pb-24 relative z-10">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tighter uppercase relative inline-block">
                    Dine <span className="text-brand-red">360</span>
                    <div className="h-1 w-16 bg-brand-red mt-2"></div>
                </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-red transition-colors rounded flex items-center justify-center text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
             <h3 className="text-xl font-bold">Quick Links</h3>
             <div className="w-12 h-1 bg-brand-red -mt-4 mb-6"></div>
             <ul className="space-y-4">
               {links.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group">
                     <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Column 3: Features */}
          <motion.div variants={itemVariants} className="space-y-6">
             <h3 className="text-xl font-bold">Features</h3>
             <div className="w-12 h-1 bg-brand-red -mt-4 mb-6"></div>
             <ul className="space-y-4">
               {featureLinks.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group">
                     <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Column 4: Restaurant Types */}
          <motion.div variants={itemVariants} className="space-y-6">
             <h3 className="text-xl font-bold">Restaurant Types</h3>
             <div className="w-12 h-1 bg-brand-red -mt-4 mb-6"></div>
             <ul className="space-y-4">
               {restaurantTypeLinks.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group">
                     <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-red py-8 relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white font-medium">
             © All Copyright 2024 by Dine 360
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors text-sm px-4 py-2 border border-white/20 rounded hover:bg-white/10">Terms & Condition</Link>
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors text-sm px-4 py-2 border border-white/20 rounded hover:bg-white/10">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-brand-red p-3 rounded-full shadow-lg z-50 hover:bg-brand-red/90 transition-transform hover:-translate-y-1 animate-bounce"
        aria-label="Back to top"
      >
        <ArrowUp size={24} className="text-white" />
      </button>

    </footer>
  );
};

export default Footer;
