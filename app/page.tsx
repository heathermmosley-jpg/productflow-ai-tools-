"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Wrench, Lightbulb, Hammer, HelpCircle } from "lucide-react";

export default function App() {
  // views: 'home' | 'search' | 'toolhub'
  const [view, setView] = useState('home'); 
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-xl mx-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-5 h-5" />
            <h1 className="text-lg font-black uppercase italic tracking-tighter text-white">AI Strategist</h1>
          </div>
          <button className="flex items-center gap-1 text-white font-bold text-xs uppercase border border-white/40 px-3 py-1 rounded-full">
            <HelpCircle className="w-3 h-3" /> Help
          </button>
        </div>

        {/* STEP 1: HOME SCREEN */}
        {view === 'home' && (
          <div className="py-10 text-center animate-in fade-in">
            <h2 className="text-5xl font-black mb-8 italic text-yellow-400 leading-tight uppercase">Welcome To The Pad.</h2>
            <button 
              onClick={() => setView('search')}
              className="w-full bg-white text-black py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 shadow-2xl transition-all"
            >
              Start Here <ArrowRight />
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH ENGINE */}
        {view === 'search' && (
          <div className="py-10 text-center animate-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-black mb-6 uppercase italic text-white">What is the niche?</h2>
            <input 
              type="text" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. Dogs" 
              className="w-full p-6 rounded-2xl bg-slate-900 border-2 border-white/60 text-xl mb-6 outline-none text-white text-center placeholder:text-white/30"
            />
            <button 
              onClick={() => setView('toolhub')}
              className="w-full bg-yellow-400 text-black py-6 rounded-3xl font-black text-xl uppercase shadow-lg border-2 border-white"
            >
              Enter The Tool Hub
            </button>
          </div>
        )}

        {/* STEP 3: THE TOOL HUB (The "Engine Room") */}
        {view === 'toolhub' && (
          <div className="space-y-6 animate-in zoom-in duration-500">
            <div className="text-center">
               <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-400 border border-yellow-400 px-4 py-2 rounded-full font-black text-xs uppercase mb-4">
                <Hammer className="w-3 h-3" /> Tool Hub Active
              </div>
              <h2 className="text-3xl font-black uppercase italic mb-8 text-white">Analysis for "{niche || 'Your Niche'}"</h2>
            </div>

            {/* HIGH-CONTRAST CARDS */}
            <div className="space-y-4">
              <div className="p-6 bg-white/10 rounded-2xl border-2 border-white/30 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Wrench className="text-yellow-400 w-6 h-6" />
                  <span className="font-black uppercase text-sm text-white">Market Gap Finder</span>
                </div>
                <span className="bg-white text-black px-3 py-1 rounded-md font-black text-[10px] tracking-widest">SUCCESS</span>
              </div>
              
              <div className="p-6 bg-white/10 rounded-2xl border-2 border-white/30 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Lightbulb className="text-yellow-400 w-6 h-6" />
                  <span className="font-black uppercase text-sm text-white">Profit Estimator</span>
                </div>
                <span className="bg-white text-black px-3 py-1 rounded-md font-black text-[10px] tracking-widest">SUCCESS</span>
              </div>
            </div>

            {/* THE PAYWALL */}
            <div className="bg-white p-1 rounded-3xl mt-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <div className="bg-slate-900 rounded-[22px] p-8 text-center border-4 border-yellow-400">
                <h3 className="text-3xl font-black mb-2 text-white italic uppercase">Strategy Ready!</h3>
                <p className="text-white mb-8 font-black text-sm italic tracking-tight underline decoration-yellow-400">Unlock your custom roadmap.</p>
                
                <a 
                  href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02"
                  className="block w-full bg-yellow-400 text-black py-6 rounded-2xl font-black text-2xl uppercase hover:bg-white transition-colors text-center no-underline border-2 border-white"
                >
                  Pay Now
                </a>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Secure Stripe Checkout</span>
                </div>
              </div>
            </div>

            {/* BRIGHT START OVER BUTTON */}
            <button 
              onClick={() => setView('home')} 
              className="w-full text-center text-white text-xs font-black uppercase mt-8 py-4 border-t border-white/20 hover:text-yellow-400"
            >
              ← Start Over (Clear Everything)
            </button>
          </div>
        )}
      </div>
    </div>
  );
        }
