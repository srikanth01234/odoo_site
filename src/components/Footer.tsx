"use client";
import React from 'react';
import { motion } from 'framer-motion';
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
    "About Us", "Our Gallery", "Our Blogs", "FAQ'S", "Contact Us"
  ];

  const menuLinks = [
    "Burger King", "Pizza King", "Fresh Food", "Vegetable", "Desserts"
  ];

  return (
    <footer className="relative bg-black pt-24 pb-0 mt-32 text-white overflow-visible">
      
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
         <Image src="https://images.unsplash.com/photo-1518779578993-ec3579fee397?q=80&w=1000&auto=format&fit=crop" width={200} height={200} alt="Ingredients" className="object-contain" />
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
                    Pizza <span className="text-brand-red">King</span>
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
                   <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group">
                     <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Column 3: Our Menu */}
          <motion.div variants={itemVariants} className="space-y-6">
             <h3 className="text-xl font-bold">Our Menu</h3>
             <div className="w-12 h-1 bg-brand-red -mt-4 mb-6"></div>
             <ul className="space-y-4">
               {menuLinks.map((link, i) => (
                 <li key={i}>
                   <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group">
                     <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div variants={itemVariants} className="space-y-6">
             <h3 className="text-xl font-bold">Contact Us</h3>
             <div className="w-12 h-1 bg-brand-red -mt-4 mb-6"></div>
             
             <div className="space-y-1 text-sm text-gray-400">
               <p>Monday - Friday: <span className="text-brand-red">8am - 4pm</span></p>
               <p>Saturday: <span className="text-brand-red">8am - 12am</span></p>
             </div>

             <div className="relative mt-6">
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none pr-14 border border-transparent focus:border-brand-red transition-colors"
               />
               <button className="absolute right-1 top-1 bottom-1 w-10 bg-brand-red hover:bg-brand-red/90 rounded-md flex items-center justify-center text-white transition-colors">
                 <ArrowRight size={18} />
               </button>
             </div>

             <label className="flex items-center gap-3 cursor-pointer group">
               <div className="relative">
                 <input type="checkbox" className="peer sr-only" />
                 <div className="w-5 h-5 border-2 border-gray-500 rounded peer-checked:bg-brand-red peer-checked:border-brand-red transition-colors"></div>
               </div>
               <span className="text-sm text-gray-400 group-hover:text-white transition-colors">I agree to the <span className="underline decoration-1 underline-offset-4">Privacy Policy.</span></span>
             </label>

          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-red py-8 relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white font-medium">
             © All Copyright 2024 by Pizza King
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm px-4 py-2 border border-white/20 rounded hover:bg-white/10">Terms & Condition</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm px-4 py-2 border border-white/20 rounded hover:bg-white/10">Privacy Policy</a>
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
