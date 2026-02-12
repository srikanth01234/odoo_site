'use client'

import { useState } from 'react'
import { Check, Info, HelpCircle, Rocket, ShieldCheck, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1) // Default to Business Plan

  const plans = [
    {
      id: 0,
      name: "Starter Plan",
      desc: "Perfect for small local cafes and food stalls.",
      monthlyPrice: 1999,
      features: [
        { label: "3 User Quota", icon: Check },
        { label: "1 Branch Access", icon: Check },
        { label: "Basic Reporting", icon: Check },
      ],
      cta: "Start 7-Day Free Trial",
      highlight: false
    },
    {
      id: 1,
      name: "Business Plan",
      desc: "Ideal for growing restaurants and multiple outlets.",
      monthlyPrice: 4999,
      features: [
        { label: "10 User Quota", icon: Check },
        { label: "5 Branch Access", icon: Check },
        { label: "Advanced Analytics", icon: Check },
      ],
      cta: "Choose This Plan",
      highlight: true
    },
    {
      id: 2,
      name: "Enterprise Plan",
      desc: "Comprehensive solution for large chains.",
      monthlyPrice: 9999,
      features: [
        { label: "Unlimited Users", icon: Check },
        { label: "Unlimited Branches", icon: Check },
        { label: "Priority 24/7 Support", icon: Check },
      ],
      cta: "Choose This Plan",
      highlight: false
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-28">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-5 py-2 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-red-200">
            Transparent Pricing
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-tight">
            Simple Plans for Every <span className="text-red-600">Restaurant</span>
          </h1>
          <p className="text-zinc-600 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
            Affordable management tools designed to scale your business in the Indian market.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <span className={`text-sm font-bold uppercase tracking-widest ${!isYearly ? 'text-zinc-950' : 'text-zinc-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-white rounded-full p-1.5 transition-all duration-300 focus:outline-none border-2 border-zinc-200 shadow-sm"
            >
              <div className={`w-4 h-4 bg-red-600 rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold uppercase tracking-widest ${isYearly ? 'text-zinc-950' : 'text-zinc-400'}`}>
              Yearly <span className="text-red-700 text-xs ml-2 bg-red-100 px-3 py-1 rounded-full border border-red-200 font-black">Save 25%</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              isYearly={isYearly} 
              isSelected={selectedPlan === plan.id}
              onClick={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>

        {/* FAQ Preview or Trust Section */}
        <section className="mt-20 pt-12 border-t border-zinc-200 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-red-600 border border-zinc-100">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">Secure Transactions</h3>
            <p className="text-sm text-zinc-500 font-medium">Compliant with Indian payment standards.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-red-600 border border-zinc-100">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">Local Setup</h3>
            <p className="text-sm text-zinc-500 font-medium">Quick implementation by our local experts.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-red-600 border border-zinc-100">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">Support in Hindi/English</h3>
            <p className="text-sm text-zinc-500 font-medium">Available during your peak business hours.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const PricingCard = ({ plan, isYearly, isSelected, onClick }: { plan: any, isYearly: boolean, isSelected: boolean, onClick: () => void }) => {
  const [extraUsers, setExtraUsers] = useState(5)
  const [isCrmEnabled, setIsCrmEnabled] = useState(true)

  const price = isYearly ? Math.floor(plan.monthlyPrice * 0.75) : plan.monthlyPrice

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-[40px] p-8 border-2 transition-all duration-500 relative flex flex-col cursor-pointer ${
        isSelected 
          ? 'border-red-600 -translate-y-2' 
          : 'border-transparent shadow-[0_12px_40px_-12px_rgba(0,0,0,0.05)] hover:border-zinc-100'
      }`}
    >
      {plan.highlight && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[9px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl transition-all duration-500 ${isSelected ? 'bg-red-600' : 'bg-zinc-800'}`}>
          Recommended
        </div>
      )}
      
      <div className="mb-6 text-center">
        <h3 className="text-xl font-black text-zinc-900 mb-2">{plan.name}</h3>
        <p className="text-xs text-zinc-500 leading-relaxed font-semibold px-2">{plan.desc}</p>
      </div>

      <div className="mb-8 flex flex-col items-center gap-1">
        <div className="flex items-baseline text-red-600">
          <span className="text-4xl font-black">₹{price.toLocaleString('en-IN')}</span>
          <span className="text-zinc-400 text-xs font-bold ml-1.5 uppercase tracking-widest">/mo</span>
        </div>
        {isYearly && <span className="text-[10px] text-zinc-300 font-bold italic line-through">₹{plan.monthlyPrice.toLocaleString('en-IN')}</span>}
      </div>

      <ul className="space-y-4 mb-8 flex-grow px-1">
        {plan.features.map((feature: any, fIdx: number) => (
          <li key={fIdx} className="flex items-center gap-4 text-zinc-700 group">
            <div className={`p-1 rounded-lg transition-colors ${isSelected ? 'bg-red-50 text-red-600' : 'bg-zinc-100 text-zinc-500 group-hover:bg-red-50 group-hover:text-red-600'}`}>
              <feature.icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold">{feature.label}</span>
          </li>
        ))}
      </ul>

      <div className="pt-8 border-t border-zinc-100 mb-8 space-y-8">
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Add-On: Users</span>
            <span className="bg-red-50 px-3 py-1 rounded-lg border border-red-100 text-red-600 text-xs font-black">+{extraUsers}</span>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="50" 
            value={extraUsers}
            onChange={(e) => {
              e.stopPropagation();
              setExtraUsers(parseInt(e.target.value))
            }}
            className="w-full h-1 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <div className="flex justify-between text-[9px] font-black text-zinc-400 mt-2 px-1 uppercase italic">
            <span className="underline decoration-red-600/30">₹499/user</span>
            <span className="text-zinc-900">Total: ₹{(extraUsers * 499).toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="flex justify-between items-center group cursor-pointer" onClick={(e) => {
          e.stopPropagation();
          setIsCrmEnabled(!isCrmEnabled)
        }}>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-600 transition-colors">
            WhatsApp Integration <span className="text-red-500/60 ml-1">· ₹999</span>
          </span>
          <button 
            className={`relative w-9 h-5 rounded-full transition-all duration-500 ${isCrmEnabled ? 'bg-red-600' : 'bg-zinc-200'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-500 ${isCrmEnabled ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>
      </div>

      <button className={`w-full py-4 rounded-[22px] font-black text-xs tracking-[0.2em] uppercase transition-all duration-500 active:scale-[0.98] ${
        isSelected 
          ? 'bg-red-600 text-white hover:bg-red-700' 
          : 'bg-zinc-900 text-white hover:bg-black'
      }`}>
        {plan.cta}
      </button>
    </div>
  )
}

export default PricingPage