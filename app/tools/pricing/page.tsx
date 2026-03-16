import { Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for testing your first few ideas.",
      features: ["3 AI Blueprints per month", "Basic Market Trends", "Community Access", "Standard Support"],
      cta: "Get Started",
      featured: false
    },
    {
      name: "Pro",
      price: "$29",
      description: "For serious builders ready to launch.",
      features: ["Unlimited AI Blueprints", "Deep Market Data Analysis", "Step-by-Step Tech Stack Guides", "Priority Email Support", "Future Beta Tools Access"],
      cta: "Go Pro",
      featured: true
    }
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Simple, transparent pricing</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your ambition. No hidden fees, just pure growth.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative p-10 rounded-[3rem] border-2 transition-all duration-300 ${
                tier.featured 
                ? 'border-blue-600 shadow-2xl shadow-blue-100 scale-105 z-10' 
                : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black flex items-center gap-2">
                  <Star size={16} fill="currentColor" /> MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-slate-900">{tier.name}</h3>
              <p className="text-slate-500 mb-8 text-sm">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-6xl font-black text-slate-900">{tier.price}</span>
                {tier.price !== "Free" && <span className="text-slate-400 text-xl font-medium">/mo</span>}
              </div>
              
              <ul className="text-left space-y-5 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600 font-medium">
                    <div className="mt-1 bg-blue-50 p-1 rounded-full">
                      <Check className="text-blue-600" size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/tools" 
                className={`block w-full py-5 rounded-2xl font-black text-xl transition-all ${
                  tier.featured 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee Note */}
        <p className="mt-16 text-slate-400 text-sm italic">
          30-day money-back guarantee. Cancel anytime with one click.
        </p>
      </div>
    </div>
  );
}
