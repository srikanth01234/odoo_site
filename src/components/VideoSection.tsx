'use client';

import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase"
          >
            See It In Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Discover how Odoo Restaurant management system can transform your business operations and elevate customer experience.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 aspect-video"
        >
          {/* Continuous Loop Side (Muted) */}
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/hipB2vhwj_Y?autoplay=1&mute=1&loop=1&playlist=hipB2vhwj_Y&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"
            title="Restaurant Management Advertisement"
            allow="autoplay; encrypted-media"
            style={{ border: 0 }}
          ></iframe>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />

          {/* Centered Watch Button on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 scale-90 group-hover:scale-100">
            <a 
              href="https://www.youtube.com/watch?v=hipB2vhwj_Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/btn flex items-center flex-col gap-4"
            >
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-600/40 group-hover/btn:bg-red-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <span className="text-white font-bold tracking-widest text-lg uppercase">Watch Full Movie</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
