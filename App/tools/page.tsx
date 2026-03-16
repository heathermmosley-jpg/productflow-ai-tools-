"use client";
import { useState } from 'react';
import { Zap, Target, DollarSign, Lightbulb, ArrowRight, Loader2, Sparkles } from 'lucide-react';

export default function SideHustleGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateIdea = () => {
    setLoading(true);
    // This simulates the AI "thinking"
    setTimeout(() => {
      setResult({
        title: "AI-Powered Real Estate Assistant",
        niche: "Independent Realtors",
        monetization: "$49/month Subscription",
        difficulty: "Medium",
        steps: [
          "Scrape local property listings for data gaps.",
          "Use AI to write personalized outreach emails for agents.",
          "Set up a simple landing page to collect leads."
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 min-height-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
          <Sparkles size={16} /> AI Side Hustle Lab
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">Side Hustle Generator</h1>
        <p className="text-slate-500 text-lg">Input your skills, and let our AI build your high-profit business blueprint.</p>
      </div>

      {/* Input Section */}
      <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-xl mb-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">What are your top 3 skills?</label>
            <input 
              type="text" 
              placeholder="e.g. Graphic Design, Sales, Writing" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition text-lg"
            />
          </div>
          <button 
            onClick={generateIdea}
            disabled={loading}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition flex items-center justify-center gap-3"
          >
            {loading ? <><Loader2 className="animate-spin" /> Analyzing Markets...</> : <><Zap size={24} /> Generate My Blueprint</>}
          </button>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-widest mb-6">
                <Lightbulb size={16} /> The Winning Concept
              </div>
              <h2 className="text-4xl font-bold mb-8">{result.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-8">
                <div className="flex gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl h-fit"><Target className="text-blue-400" /></div>
                  <div>
                    <p className="text-slate-400 text-sm">Ideal Customer</p>
                    <p className="text-xl font-bold">{result.niche}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl h-fit"><DollarSign className="text-emerald-400" /></div>
                  <div>
                    <p className="text-slate-400 text-sm">Revenue Goal</p>
                    <p className="text-xl font-bold">{result.monetization}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-blue-400 uppercase text-xs tracking-widest">Execution Steps:</p>
                {result.steps.map((step: string, i: number) => (
                  <div key={i} className="flex gap-3 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1">{i + 1}</div>
                    <p className="text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
