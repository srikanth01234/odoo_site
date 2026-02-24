'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    category: "POS",
    title: "1️⃣ Smart POS System",
    description: "Running your restaurant is now easier with a multi-functional POS system. It helps you manage every part of the counter experience.",
    points: [
      "Lightning-fast billing",
      "Dine-in, takeaway & delivery support",
      "Split bills & multiple payment methods",
      "Real-time sales reports"
    ],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070"
  },
  {
    category: "Order Management",
    title: "2️⃣ Order Management",
    description: "Ensure every order is tracked, updated, and handled swiftly. No delays. No mistakes. Just smooth operations.",
    points: [
      "Track all orders in one dashboard",
      "Kitchen display integration",
      "Reduce human errors",
      "Improve preparation time"
    ],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070"
  },
  {
    category: "Table & Reservation",
    title: "3️⃣ Table & Reservation Management",
    description: "Take charge of your floor’s seating and reservations with a smart, easy-to-use system that saves time and increases efficiency.",
    points: [
      "Digital table layout",
      "Pre-booking system",
      "Walk-in management",
      "Reduce waiting chaos"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
  },
  {
    category: "QR Code Menu",
    title: "4️⃣ QR Code Menu",
    description: "Simplify your ordering process and watch your sales grow with our effective QR code menu features.",
    points: [
      "Contactless digital menu",
      "Easy updates",
      "No reprinting costs",
      "Faster ordering experience"
    ],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2144"
  },
  {
    category: "Inventory Management",
    title: "5️⃣ Inventory Management",
    description: "Maximize efficiency with a system that simplifies the complexities of inventory management.",
    points: [
      "Real-time stock tracking",
      "Low-stock alerts",
      "Ingredient-level tracking",
      "Reduce wastage & theft"
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074"
  },
  {
    category: "Multi-Branch Control",
    title: "6️⃣ Multi-Branch Control",
    description: "Manage your restaurant empire from a single location with centralized branch management tools.",
    points: [
      "Manage multiple outlets from one dashboard",
      "Centralized reporting",
      "Branch performance comparison"
    ],
    image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
         <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"></div>
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-5xl mx-auto"
        >
          <span className="text-red-500 font-script text-3xl md:text-4xl mb-4 block italic">The Complete Restaurant Toolkit</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight uppercase">
            Reimagine Restaurant Management
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold text-red-600 mb-8 leading-tight uppercase">
            with Powerful Features
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Our restaurant management platform offers powerful tools to automate operations, improve workflows, and ensure a better dining experience for your customers.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-red-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
                   {/* Placeholder image overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                   <Image 
                     src={feature.image} 
                     alt={feature.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   
                   {/* Corner Decorations */}
                   <div className="absolute top-4 left-4 z-20">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                           <div key={i} className="w-1 h-1 bg-white/50 rounded-full"></div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-3xl hover:border-red-600/30 transition-colors duration-300">
                  <span className="text-red-600 font-bold tracking-wider text-sm uppercase mb-3 block">{feature.category}</span>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {feature.points.map((point, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        key={i} 
                        className="flex items-start gap-3 group/item"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-red-600 group-hover/item:scale-150 transition-transform"></span>
                        <span className="text-gray-700 text-sm md:text-base">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 transform hover:-translate-y-1">
                    Get Started Now
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
