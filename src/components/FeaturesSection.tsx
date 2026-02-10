import Image from 'next/image';

const features = [
  {
    category: "POS",
    title: "Transform Your Counter into a Powerhouse",
    description: "Running your restaurant is now easier with a multi-functional POS system. It helps you manage every part of the counter experience.",
    points: [
      "Get branch-specific POS system to handle dine-in, home delivery, takeaway, and reservations",
      "Track the progress of each order in real time, from prep to delivery, and update statuses accordingly.",
      "Accessible on any device, whether it’s a laptop, desktop, or tablet, for ultimate convenience."
    ],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070"
  },
  {
    category: "Order Management",
    title: "Manage Orders Like a Pro",
    description: "Ensure every order is tracked, updated, and handled swiftly. No delays. No mistakes. Just smooth operations.",
    points: [
      "Access all the order details you need at your fingertips.",
      "Make quick changes or duplicate orders without missing a step.",
      "Monitor your delivery man’s progress in real-time."
    ],
    image: "https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=2070"
  },
  {
    category: "Table & Reservation",
    title: "Master Your Restaurant's Seating in Seconds",
    description: "Take charge of your floor’s seating and reservations with a smart, easy-to-use system that saves time and increases efficiency.",
    points: [
      "Get a graphical view of your entire restaurant layout, from any angle.",
      "Check table availability in real-time—whether occupied or reserved.",
      "Handle & manage reservations even without food orders."
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
  },
  {
    category: "Promotions",
    title: "Drive Sales with Impactful Promotions",
    description: "Simplify your marketing efforts and watch your sales grow with our easy-to-use effective promotional features.",
    points: [
      "Increase order volumes with compelling Buy One Get One deals.",
      "Schedule time-based discounts to drive sales during slow hours.",
      "Create exclusive coupon codes for targeted promotions."
    ],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2144"
  },
  {
    category: "Multi Branch System",
    title: "Effortlessly Manage Across Multiple Locations",
    description: "Maximize efficiency across multiple branches with a system that simplifies the complexities of multi-location management.",
    points: [
      "Define delivery areas, menu prices, and operating hours for each branch.",
      "Customize menus, recipes, and promotional campaigns for each location.",
      "Create tailored menus for each branch to reflect unique customer preferences."
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074"
  },
  {
    category: "Multi Menu + Seasonal Menu",
    title: "Personalize Your Menus Like Before",
    description: "Simplify menu management with tools that let you create and update seasonal, event-based, or regular menus with ease.",
    points: [
      "Categorize food items with detailed labels, subcategories, and cuisines.",
      "Link recipes to food items and activate add-ons for upselling opportunities.",
      "Adjust food availability with status controls to reflect inventory."
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
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-red-500 font-script text-3xl md:text-4xl mb-4 block italic">The Complete Restaurant Toolkit</span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            Reimagine Restaurant Management <br/> with <span className="text-red-600">Powerful Features</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our restaurant management platform offers powerful tools to automate operations, improve workflows, and ensure a better dining experience for your customers.
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-red-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-200">
                   {/* Placeholder image overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${feature.image})` }}></div>
                   
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
                    {feature.title.split(' ').map((word, i) => 
                      <span key={i} className="text-zinc-900">{word} </span>
                    )}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-red-600 group-hover/item:scale-150 transition-transform"></span>
                        <span className="text-gray-700 text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 transform hover:-translate-y-1">
                    Get Started Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
