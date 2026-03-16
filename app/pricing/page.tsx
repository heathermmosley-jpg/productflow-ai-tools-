import { Check, Zap, Star, Rocket, Gift } from 'lucide-react';

export default function PricingPage() {
  const mainTiers = [
    {
      name: "FREE TIER",
      price: "$0",
      features: ["Basic tools", "Idea generator", "Limited AI usage"],
      buttonText: "Start Free",
      link: "/tools", // Takes them straight to the generator
      featured: false,
      icon: <Zap className="text-slate-400" />
    },
    {
      name: "CREATOR TIER",
      price: "$29",
      features: ["Advanced tools", "Product builders", "Templates"],
      buttonText: "Upgrade to Creator",
      link: "YOUR_STRIPE_LINK_CREATOR", // Replace later
      featured: true,
      icon: <Star className="text-blue-600" />
    },
    {
      name: "PRO TIER",
      price: "$79",
      features: ["Full transformation tools", "Advanced AI coaching", "Premium resources"],
      buttonText: "Unlock Pro Tools",
      link: "YOUR_STRIPE_LINK_PRO", // Replace later
      featured: false,
      icon: <Rocket className="text-purple-600" />
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4">Choose Your Level</h1>
          <p className="text-xl text-slate-600">From curious creator to professional empire builder.</p>
        </div>

        {/* Main 3 Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainTiers.map((tier) => (
            <div key={tier.name} className={`bg-white p-10 rounded-[3rem] border-2 flex flex-col transition-all ${tier.featured ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-100 hover:shadow-xl'}`}>
              <div className="mb-6 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                {tier.icon}
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight">{tier.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-black text-slate-900">{tier.price}</span>
                {tier.price !== "$0" && <span className="text-slate-400">/mo</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <Check className="text-blue-600" size={16} strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
              <a href={tier.link} className={`block w-full py-5 rounded-2xl font-black text-center text-lg transition-all ${tier.featured ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* First Sale Offer Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-1 md:p-2 shadow-2xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-[2.6rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
                <Gift size={14} /> Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-2">Creator Starter Toolkit</h2>
              <p className="text-blue-100 text-lg opacity-90">Everything you need to make your first sale, instantly.</p>
            </div>
            <div className="bg-white text-slate-900 p-8 rounded-[2rem] text-center min-w-[240px] shadow-xl">
              <div className="text-4xl font-black mb-4">$19</div>
              <a href="YOUR_STRIPE_LINK_TOOLKIT" className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95">
                Build This Product
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
        }

