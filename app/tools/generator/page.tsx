"use client";
import { useState } from 'react';
import { Zap, Target, DollarSign, Lightbulb, Loader2, Sparkles, ArrowRight, Shield, Gift, Info } from 'lucide-react';
import Link from 'next/link';

export default function SideHustleGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateIdea = () => {
    setLoading(true);
    setResult(null);
    // Simulating AI market analysis
    setTimeout(() => {
      setResult({
        title: "AI-Powered Real Estate Lead Gen",
        niche: "Independent Realtors",
        productType: "SaaS / Digital Service",
        monetization: "$49/month Subscription",
        steps: [
          "Connect to local Zillow/MLS data via API.",
          "Use AI to draft personalized seller outreach scripts.",
          "Set up an automated dashboard for agents to track leads."
        ]
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">AI Side Hustle Generator</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Describe your interests or skills, and our AI will build a high-margin business blueprint for you.</p>
      </div>

      {/* Input Section */}
      <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm mb-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest mb-3">Enter your skills or niche</label>
            <input 
              type="text" 
              placeholder="e.g. Graphic Design, Real Estate, Fitness coaching..." 
              className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
            />
          </div>
          <button 
            onClick={generateIdea}
            disabled={loading}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <><Loader2 className="animate-spin" /> Analyzing Markets...</>
            ) : (
              <><Zap size={24} /> Generate My Blueprint</>
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
          
          {/* Main Result Card */}
          <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-6 right-6 bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] flex items-center gap-2">
              <Sparkles size={12} /> Best Match For You
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-10 text-white">{result.title}</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 border-y border-white/10 py-10">
                <div className="flex flex-col gap-1">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Target size={14}/> Target Market</span>
                  <span className="text-xl font-bold">{result.niche}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Shield size={14}/> Product Type</span>
                  <span className="text-xl font-bold">{result.productType}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><DollarSign size={14}/> Suggested Price</span>
                  <span className="text-xl font-bold">{result.monetization}</span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="font-black text-blue-400 text-xs uppercase tracking-[0.3em]">Execution Roadmap</p>
                {result.steps.map((step: string, i: number) => (
                  <div key={i} className="flex gap-5 items-center bg-white/5 p-6 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 shadow-lg">
                      {i + 1}
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* AI Disclaimer */}
              <div className="mt-12 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <Info size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-400 italic leading-relaxed">
                  AI-generated suggestions are for informational purposes only and should not be considered professional medical, legal, or financial advice.
                </p>
              </div>
            </div>
          </div>

          {/* MONETIZATION: Creator Starter Toolkit */}
          <div className="bg-white border-4 border-blue-600 p-10 rounded-[3.5rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 opacity-5 rotate-12">
               <Gift size={200} />
            </div>
            <div className="flex-1 text-center lg:text-left relative z-10">
              <h4 className="text-3xl font-black text-slate-900 mb-3">Build This Product With ProductFlowAI</h4>
              <p className="text-blue-600 font-black text-xl mb-4">Creator Starter Toolkit — $19</p>
              <p className="text-slate-500 text-lg max-w-md">Everything you need (templates, tech stacks, and launch guides) to turn this specific idea into a real digital business today.</p>
            </div>
            <Link 
              href="YOUR_STRIPE_TOOLKIT_LINK" 
              className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 relative z-10 whitespace-nowrap"
            >
              Build This Product
            </Link>
          </div>

        </div>
      )}
    </div>
  );
                }
          
