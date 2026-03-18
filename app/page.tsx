"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Lock, Wrench, Search, Lightbulb } from "lucide-react";

export default function App() {
  // 1. home, 2. search, 3. tools, 4. email, 5. stripe
  const [view, setView] = useState('home'); 
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER - Always visible */}
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="text-yellow-400 w-6 h-6" />
          <h1 className="text-xl font-black uppercase">AI Business Strategist</h1>
        </div>

        {/* STEP 1: HOME */}
        {view === 'home' && (
          <div className="text-center py-20">
            <h2 className="text-6xl font-black mb-6 italic text-yellow-400 text-center">WELCOME TO THE PAD.</h2>
            <button 
              onClick={() => setView('search')}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-2xl flex items-center gap-3 mx-auto hover:bg-yellow-400"
            >
              Start Here <ArrowRight />
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH ENGINE */}
        {view === 'search' && (
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center">
            <h2 className="text-3xl font-black mb-6 uppercase">What is your niche?</h2>
            <input 
              type="text" placeholder="e.g. Punch Needle" 
              className="w-full p-6 rounded-2xl bg-slate-900 border-2 border-white/20 text-xl mb-6 outline-none"
            />
            <button 
              onClick={() => setView('tools')}
              className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-black text-xl uppercase"
            >
              Analyze My Niche
            </button>
          </div>
        )}

        {/* STEP 3: THE TOOLS */}
        {view === 'tools' && (
          <div className="text-center">
            <h2 className="text-4xl font-black mb-10 uppercase">AI Tools are Active</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 text-left">
                <Wrench className="text-yellow-400" /> <span>Market Gap Finder</span>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 text-left">
                <Lightbulb className="text-yellow-400" /> <span>Profit Estimator</span>
              </div>
            </div>
            <button 
              onClick={() => setView('email')}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl uppercase"
            >
              Generate Strategy
            </button>
          </div>
        )}

        {/* STEP 4: EMAIL GATE */}
        {view === 'email' && (
          <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 italic uppercase text-center">Strategy Ready!</h3>
            <div className="flex flex-col gap-4">
              <input 
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email" className="p-4 rounded-xl text-slate-900 font-bold outline-none" 
              />
              <button 
                onClick={() => setView('stripe')} 
                className="bg-yellow-400 text-black py-4 rounded-xl font-black uppercase"
              >
                Unlock My Strategy
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: THE STRIPE PAYOUT */}
        {view === 'stripe' && (
          <div className="bg-yellow-400 p-10 rounded-3xl text-black text-center shadow-2xl animate-bounce-in">
            <h2 className="text-5xl font-black mb-4 italic uppercase leading-none">Secret Sauce Strategy</h2>
            <p className="font-bold text-xl mb-8">Ready to scale to $10k/month?</p>
            <a 
              href="https://buy.stripe.com/6oEbLg8oU8AebpS7ss" 
              className="bg-black text-white px-12 py-6 rounded-2xl font-black text-2xl inline-flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
            >
              PAY NOW & GET ACCESS <CheckCircle2 className="w-8 h-8 text-yellow-400" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
        }
          

