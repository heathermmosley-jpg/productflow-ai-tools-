import * as Icons from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const tiers = [
    { name: "Starter", price: "$0", desc: "Test the engine.", features: ["12 Basic Name Ideas", "3-Step Initial Roadmap", "Limited Access"], link: "/tools/generator", style: "bg-white text-slate-900" },
    { name: "Growth", price: "$29", desc: "Build the brand.", features: ["50+ Premium Name List", "Gumroad Roadmap Access", "Full Roadmap"], link: "/tools/generator", style: "bg-blue-600 text-white scale-105 z-10" },
    { name: "Elite", price: "$79", desc: "Scale the legacy.", features: ["ProductFlowAI.com Tools", "Clarity Financial Dashboard", "Elite AI Coach Access"], link: "https://productflowai.com", style: "bg-slate-900 text-white border-2 border-blue-600" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">Choose Your <br/><span className="text-blue-600 italic underline">Transformation.</span></h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div key={i} className={`p-10 rounded-[3.5rem] flex flex-col justify-between shadow-xl ${tier.style}`}>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">{tier.price}</span>
                <span className="opacity-50 font-bold">/mo</span>
              </div>
              <ul className="space-y-5 mb-12">
                {tier.features.map((f, j) => <li key={j} className="flex items-center gap-3 text-sm font-bold"><Icons.CheckCircle size={18} /> {f}</li>)}
              </ul>
            </div>
            <Link href={tier.link} className={`w-full py-5 rounded-2xl font-black text-center ${tier.name === "Growth" ? "bg-white text-blue-600" : "bg-blue-600 text-white"}`}>Unlock {tier.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
