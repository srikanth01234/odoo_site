import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 border-b border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold pl-5 tracking-tight text-white flex items-center">
          ODOO
        </span>
        {/* <span className="hidden lg:block text-[10px] uppercase tracking-widest text-red-500 font-bold border-l border-white/20 pl-4 py-1">
          Built for Growth
        </span> */}
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
        <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
        <Link href="#features" className="hover:text-red-500 transition-colors">Features</Link>
        <Link href="#restaurant-types" className="hover:text-red-500 transition-colors">Restaurant Types</Link>
        <Link href="#pricing" className="hover:text-red-500 transition-colors">Pricing</Link>
        <Link href="#resources" className="hover:text-red-500 transition-colors">Resources</Link>
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        <Link href="/login" className="text-white hover:text-red-500 transition-colors">Login</Link>
        <Link href="/start" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-bold shadow-lg shadow-red-600/20">
          Start Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
