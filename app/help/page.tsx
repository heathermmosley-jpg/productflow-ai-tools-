import * as Icons from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  const steps = [
    { title: "1. The Spark", icon: <Icons.Lightbulb className="text-amber-500" />, desc: "Use the Engine to find 12 free 'Hook' names for your niche." },
    { title: "2. The Blueprint", icon: <Icons.Map className="text-blue-500" />, desc: "Upgrade to the Growth Tier ($29) for the 50+ Master List and Launch Plan." },
    { title: "3. The Transformation", icon: <Icons.Repeat className="text-rose-500" />, desc: "Land on ProductFlowAI.com ($79) to use the Master Suite and Clarity Financial Dashboard." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 pt-32 pb-24 px-6 text-center text-white">
        <h1 className="text-5xl font-black mb-6 tracking-tight italic">Welcome to the Lab.</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">You aren't just here to build a tool. You're here to build a brand.</p>
      </div>
      <div className="max-w-4xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-slate-100">
          <h2 className="text-sm font-black mb-12 text-center text-blue-600 uppercase tracking-[0.3em]">The Infinity Loop Path</h2>
          <div className="space-y-12">
            {steps.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 italic">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-12 border-t border-slate-100 text-center">
             <Link href="/tools/generator" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-blue-700 transition-all inline-flex items-center gap-3">Enter the Engine <Icons.ArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

