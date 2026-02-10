import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')] bg-cover bg-center" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <div className="flex flex-col items-start px-4">
          <h2 className="text-red-600 font-bold tracking-wide uppercase text-sm md:text-base mb-4">
            Built for Growth
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 lg:leading-[1.1] uppercase">
            The Complete<br />
            Restaurant <br/> Management System
          </h1>
          
          <p className="max-w-xl text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
            Streamline your operations, manage orders, and delight your guests with the all-in-one platform designed for modern restaurants.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
              Start Free Now
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Watch Video
            </button>
          </div>
        </div>

        {/* Thumbnail Section */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
          <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070" 
            alt="The Complete Restaurant Management System Thumbnail"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
