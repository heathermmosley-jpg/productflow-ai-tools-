"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Wrench, Search, Lightbulb, Hammer } from "lucide-react";

export default function App() {
  // STEPS: 'home' -> 'search' -> 'toolhub' -> 'email' -> 'stripe'
  const [view, setView] = useState('home'); 
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* 1. SINGLE HEADER - Only one version allowed */}
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="text-yellow-400 w-6 h-6" />
          <h1 className="text-xl font-black uppercase tracking-tighter italic">AI Business Strategist</h1>
        </div>

        {/* 2. THE FLOW LOGIC */}
        
        {/* STEP 1: HOME */}
        {view === 'home' && (
          <div className="text-center py-20 animate-in fade-in">
            <h2 className="text-6xl font-black mb-6 italic text-yellow-400">WELCOME TO THE PAD.</h2>
            <p className="text-slate-400 text-xl mb-10">Your journey to a $10k/month business starts here.</p>
            <button 
              onClick={() => setView('search')}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-2xl flex items-center gap-3 mx-auto hover:bg-yellow-400 transition-all shadow-xl"
            >
              Start Here <ArrowRight />
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH */}
        {view === 'search' && (
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center animate-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-black mb-6 uppercase italic">What is your niche?</h2>
            <input 
              type="text" placeholder="e.g. Modern Punch Needle" 
              className="w-full p-6 rounded-2xl bg-slate-900 border-2 border-white/20 text-xl mb-6 outline-none focus:border-yellow-400"
            />
            <button 
              onClick={() => setView('toolhub')}
              className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-black text-xl uppercase"
            >
              Enter The Tool Hub
            </button>
          </div>
        )}

        {/* STEP 3: THE TOOL HUB (The "Engine Room") */}
        {view === 'toolhub' && (
          <div className="text-center animate-in fade-in">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full font-black text-sm mb-6">
              <Hammer className="w-4 h-4" /> TOOL HUB ACTIVE
            </div>
            <h2 className="text-4xl font-black mb-10 uppercase italic">Analyzing Your Custom Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 text-left">
                <Wrench className="text-yellow-400 w-8 h-8" /> 
                <p className="font-black text-lg uppercase">Market Gap Finder</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 text-left">
                <Lightbulb className="text-yellow-400 w-8 h-8" /> 
                <p className="font-black text-lg uppercase">Profit Estimator</p>
              </div>
            </div>
            <button 
              onClick={() => setView('email')}
              className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl uppercase hover:bg-yellow-400"
            >
              Get Final Results
            </button>
          </div>
        )}

        {/* STEP 4: EMAIL GATE */}
        {view === 'email' && (
          <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
            <h3 className="text-3xl font-black mb-4 italic text-yellow-400 text-center uppercase">Ready!</h3>
            <p className="text-center text-slate-400 mb-8 font-bold">Unlock your dashboard to see your custom business paths.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" className="p-5 rounded-xl text-slate-900 font-bold outline-none" 
              />
              <button 
                onClick={() => setView('stripe')} 
                className="bg-yellow-400 text-black py-5 rounded-xl font-black uppercase text-xl shadow-lg"
              >
                Go To Payment
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: STRIPE PAYOUT */}
        {view === 'stripe' && (
          <div className="bg-yellow-400 p-12 rounded-3xl text-black text-center shadow-2xl animate-in zoom-in">
            <h2 className="text-6xl font-black mb-4 italic uppercase">Secret Sauce</h2>
            <p className="font-black text-2xl mb-10 uppercase">Click below to pay and unlock access.</p>
            <a 
              href="https://buy.stripe.com/6oEbLg8oU8AebpS7ss" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-14 py-7 rounded-2xl font-black text-3xl inline-flex items-center gap-4 hover:scale-105 transition-transform"
            >
              PAY NOW <CheckCircle2 className="w-10 h-10 text-yellow-400" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
        }

