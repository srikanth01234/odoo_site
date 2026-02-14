import React from 'react';

const HighlightsSection = () => {
  const highlights = [
    {
      title: "Built with Insights from 50+ Restaurants",
      description: "Designed using real-world data and feedback to solve actual restaurant challenges effectively."
    },
    {
      title: "Live Expert Support, Available 24/7",
      description: "Never face an issue alone. Our dedicated team is always online to ensure your operations run smoothly."
    },
    {
      title: "Unlimited POS Orders with Auto Sync",
      description: "Process as many orders as you need without limits, automatically synced across all your devices."
    },
    {
      title: "Ready-made Website for Online Orders",
      description: "Launch your own branded ordering site instantly and keep 100% of your profits."
    }
  ];

  return (
    <section className="bg-black py-20 lg:py-32 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end lg:-translate-x-32 order-last lg:order-first transition-transform duration-500">
          {/* Main Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-black border-[14px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-gray-700/50">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gray-900">
               <img 
                 src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000" 
                 alt="App Interface" 
                 className="w-full h-full object-cover opacity-80"
               />
               
               {/* Overlay UI Mockup Elements to match "Access tasks" style if needed, or just a nice overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-4">
                    <div className="h-2 w-20 bg-red-600 rounded mb-2"></div>
                    <div className="h-2 w-32 bg-gray-400/50 rounded"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="h-2 w-16 bg-red-600 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-gray-400/50 rounded"></div>
                  </div>
               </div>
            </div>

            {/* Notch / Camera / Home Button Details */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
          </div>
          
          {/* Decorative Elements behind phone */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px]"></div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-red-600 font-bold tracking-wide uppercase text-sm md:text-base mb-4">
            Why Choose Us?
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Restaurant Management <br/> Simplified
          </h3>

          <div className="space-y-10 w-full">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 font-bold group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                    {index + 1}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HighlightsSection;
