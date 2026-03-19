"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Wrench, Lightbulb, Hammer } from "lucide-react";

export default function App() {
  // Logic: 'home' -> 'search' -> 'toolhub'
  const [view, setView] = useState('home'); 
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="text-yellow-400 w-5 h-5" />
          <h1 className="text-lg font-black uppercase italic tracking-tighter">AI Strategist</h1>
        </div>

        {/* STEP 1: HOME SCREEN */}
        {view === 'home' && (
          <div className="py-10 text-center animate-in fade-in">
            <h2 className="text-5xl font-black mb-8 italic text-yellow-400 leading-tight uppercase">Welcome To The Pad.</h2>
            <button 
              onClick={() => setView('search')}
              className="w-full bg-white text-black py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 shadow-xl"
            >
              Start Here <ArrowRight />
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH ENGINE */}
        {view === 'search' && (
          <div className="py-10 text-center animate-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-black mb-6 uppercase italic">What is the niche?</h2>
            <input 
              type="text" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. Dogs" 
              className="w-full p-6 rounded-2xl bg-slate-900 border-2 border-white/20 text-xl mb-6 outline-none text-white text-center"
            />
            {/* THIS BUTTON NOW ONLY GOES TO THE TOOL HUB */}
            <button 
              onClick={() => setView('toolhub')}
              className="w-full bg-yellow-400 text-black py-6 rounded-3xl font-black text-xl uppercase shadow-lg"
            >
              Enter The Tool Hub
            </button>
          </div>
        )}

        {/* STEP 3: THE TOOL HUB (Trust & Paywall) */}
        {view === 'toolhub' && (
          <div className="space-y-6 animate-in fade-in duration-700">
            <div className="text-center">
               <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full font-black text-xs uppercase mb-4">
                <Hammer className="w-3 h-3" /> Tool Hub Active
              </div>
              <h2 className="text-3xl font-black uppercase italic mb-8">Results for "{niche || 'Your Niche'}"</h2>
            </div>

            {/* THE "TOOL" VISUALS (Market Gap & Profit Estimator) */}
            <div className="space-y-3">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3 text-yellow-400">
                  <Wrench className="w-5 h-5" />
                  <span className="font-black uppercase text-xs text-white">Market Gap Finder</span>
                </div>
                <span className="text-yellow-400 font-black text-[10px] tracking-widest">SUCCESS</span>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3 text-yellow-400">
                  <Lightbulb className="w-5 h-5" />
                  <span className="font-black uppercase text-xs text-white">Profit Estimator</span>
                </div>
                <span className="text-yellow-400 font-black text-[10px] tracking-widest">SUCCESS</span>
              </div>
            </div>

            {/* THE STRIPE BOX - AT THE BOTTOM OF THE HUB */}
            <div className="bg-white p-1 rounded-3xl mt-10 shadow-2xl">
              <div className="bg-slate-900 rounded-[22px] p-8 text-center border-4 border-yellow-400">
                <h3 className="text-3xl font-black mb-2 text-white italic uppercase">Strategy Ready!</h3>
                <p className="text-slate-400 mb-8 font-bold text-sm italic tracking-tight">Unlock your custom roadmap.</p>
                
                <a 
                  href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02"
                  className="block w-full bg-yellow-400 text-black py-6 rounded-2xl font-black text-2xl uppercase hover:scale-105 transition-transform text-center no-underline"
                >
                  Pay Now
                </a>
                
                <div className="mt-6 flex items-center justify-center gap-2 opacity-30 text-white">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Verified Stripe Checkout</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setView('home')} 
              className="w-full text-center text-slate-600 text-[10px] font-black uppercase mt-4"
            >
              ← Back to Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
                    }
