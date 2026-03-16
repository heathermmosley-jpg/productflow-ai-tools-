"use client";
import { useState } from 'react';
import { Zap, Target, DollarSign, Lightbulb, Loader2, Sparkles, ArrowRight } from 'lucide-react';

export default function SideHustleGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateIdea = () => {
    setLoading(true);
    // Simulating AI market analysis delay
    setTimeout(() => {
      setResult({
        title: "AI-Powered Real Estate Lead Gen",
        niche: "Independent Realtors",
        monetization: "$99/month Subscription",
        steps: [
          "Connect to local Zillow/MLS data via API.",
          "Use AI to draft personalized seller outreach scripts.",
          "Set up an automated dashboard for agents to track leads."
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-screen">
      {/* Header Area */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
          <Sparkles size={16} /> Beta Access: GPT-4o Powered
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">AI Side Hustle Lab</h1>
        <p className="text-slate-500 text-lg">Describe your skills, and we'll build your business blueprint.</p>
      </div>

      {/* Input Form */}
      <div className="bg-white border-2 border-slate-100 p-8 rounded-[2.5rem] shadow-xl mb-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">What are you good at?</label>
            <input 
              type="text" 
              placeholder="e.g. Sales, Coding, Social Media..." 
              className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
            />
          </div>
          <button 
            onClick={generateIdea}
            disabled={loading}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            {loading ? (
              <><Loader2 className="animate-spin" /> Analyzing Markets...</>
            ) : (
              <><Zap size={24} /> Generate My Blueprint</>
            )}
          </button>
        </div>
      </div>

      {/* Results Display */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
              <Zap size={200} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-[0.2em] mb-6">
                <Lightbulb size={18} /> The Opportunity
              </div>
              <h2 className="text-4xl font-bold mb-10">{result.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-y border-white/10 py-10">
                <div className="flex gap-5">
                  <div className="p-4 bg-white/10 rounded-2xl h-fit shadow-inner"><Target className="text-blue-400" /></div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Target Audience</p>
                    <p className="text-xl font-bold">{result.niche}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="p-4 bg-white/10 rounded-2xl h-fit shadow-inner"><DollarSign className="text-emerald-400" /></div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Pricing Strategy</p>
                    <p className="text-xl font-bold">{result.monetization}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <p className="font-bold text-blue-400 uppercase text-xs tracking-widest flex items-center gap-2">
                  Launch Roadmap <ArrowRight size={14} />
                </p>
                {result.steps.map((step: string, i: number) => (
                  <div key={i} className="flex gap-4 items-center bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-200 text-lg">{step}</p>
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
