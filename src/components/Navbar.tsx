import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/60 border-b border-white/10 backdrop-blur-lg">
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold pl-5 tracking-tight text-white flex items-center">
          ODOO
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-base font-medium text-white/90">
        <Link href="/" className="hover:text-red-500 transition-colors underline-offset-4">Home</Link>
        <Link href="/features" className="hover:text-red-500 transition-colors">Features</Link>
        <Link href="/restaurant-types" className="hover:text-red-500 transition-colors">Restaurant Types</Link>
        <Link href="/pricing" className="hover:text-red-500 transition-colors">Pricing</Link>
        <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-6 text-base font-medium px-5">
        {/* <Link href="/login" className="text-white hover:text-red-500 transition-colors">Login</Link> */}
        <Link href="/start" className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-bold shadow-xl shadow-red-600/25">
          Start Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
