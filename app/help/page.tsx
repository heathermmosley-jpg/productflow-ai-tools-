import * as Icons from 'lucide-react';
import Link from 'next/link';

export default function HelpCenter() {
  const steps = [
    { title: "1. Pick a Tool", desc: "Go to the Tools Hub and decide if you need a Business Name or a full Strategy Blueprint." },
    { title: "2. Input Your Niche", desc: "Type in a skill or interest. The more specific, the better the 'Secret Sauce' results." },
    { title: "3. Analyze the Hook", desc: "Review your 10 free ideas. These are your 'Starters' to see if the niche has legs." },
    { title: "4. Unlock the Sauce", desc: "Once you find a winner, grab the $19 Toolkit to get the automated launch roadmap." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 pt-32 pb-20 px-6 text-center text-white">
        <h1 className="text-5xl font-black mb-4">Master the Platform</h1>
        <p className="text-slate-400 max-w-xl mx-auto font-medium">Everything you need to go from zero to your first digital sale.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-10">
        {/* ACTUAL INSTRUCTIONS */}
        <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 mb-12">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-2 text-slate-900">
            <Icons.BookOpen className="text-blue-600" /> Where to Start?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-10 border-t border-slate-50 text-center">
            <Link href="/tools/generator" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-blue-200 hover:scale-105 transition-all inline-block">
              Got it, Take Me to the Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

