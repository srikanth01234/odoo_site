'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-24">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Header Section */}
        <div className="relative overflow-hidden bg-red-600 rounded-[32px] p-12 lg:p-20 text-center mb-16">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[20px] border-white/10 rounded-full opacity-20" />
          <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-48 h-48 border-[15px] border-white/10 rounded-full opacity-20" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 border-[20px] border-white/10 rounded-full opacity-20" />
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-48 h-48 border-[15px] border-white/10 rounded-full opacity-20" />

          <div className="relative z-10">
            <span className="inline-block bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-lg mb-6 shadow-sm">
              Write to us
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
              Get In Touch
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Form */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-zinc-900">Let's Talk!</h2>
              <p className="text-zinc-500 font-medium">
                Get in touch with us using the enquiry form or contact details below.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-black ml-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Shasanko"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-black ml-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Das"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-black ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="uiuxshasankodas@gmail.com"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-black ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Type something..."
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium resize-none"
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-red-600 focus:ring-red-600 cursor-pointer" />
                  <span className="text-xs text-zinc-500 font-semibold group-hover:text-zinc-700 transition-colors">
                    I agree to receive other communication messages.<span className="text-red-600 ml-0.5">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-red-600 focus:ring-red-600 cursor-pointer" />
                  <span className="text-xs text-zinc-500 font-semibold group-hover:text-zinc-700 transition-colors">
                    I give my consent to ODOO to store my data.<span className="text-red-600 ml-0.5">*</span>
                  </span>
                </label>
              </div>

              <p className="text-[10px] leading-relaxed text-zinc-400 font-medium">
                ODOO, a project of ODOO Solution Pvt Ltd, is committed to protecting and respecting your privacy according to our <a href="#" className="text-zinc-600 underline">Privacy Policy</a>. From time to time we would like to contact you about our products and services that may be of your interest.
              </p>

              <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all active:scale-[0.98] shadow-lg shadow-red-600/20">
                Start for Free
              </button>
            </form>
          </div>

          {/* Right Column: Info & Image */}
          <div className="space-y-12">
            <div className="relative rounded-[32px] overflow-hidden bg-zinc-100 aspect-[4/3] group">
              <Image 
                src="https://images.pexels.com/photos/7703651/pexels-photo-7703651.jpeg"
                alt="Contact Us"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Ripple pattern overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-[1px] border-white rounded-full" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-white border border-zinc-100 shadow-sm rounded-xl flex items-center justify-center text-red-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Quick Contact</h4>
                  <p className="text-zinc-500 font-medium text-sm">Email: info@odoomarketing.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-white border border-zinc-100 shadow-sm rounded-xl flex items-center justify-center text-red-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Phone Number</h4>
                  <p className="text-zinc-500 font-medium text-sm">India: +91 98765 43210</p>
                  <p className="text-zinc-500 font-medium text-sm">Support: +91 99887 76655</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-white border border-zinc-100 shadow-sm rounded-xl flex items-center justify-center text-red-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Headquarter</h4>
                  <p className="text-zinc-500 font-medium text-sm">123 Business Hub, Tech City, Bangalore, KA, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-zinc-900">Follow us</h3>
              <div className="flex items-center gap-4">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-all hover:-translate-y-1 shadow-md shadow-red-600/10">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
