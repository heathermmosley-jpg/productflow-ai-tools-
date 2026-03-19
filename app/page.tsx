"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Wrench, Lightbulb, Hammer } from "lucide-react";

export default function App() {
  const [view, setView] = useState('home'); 

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="text-yellow-400 w-5 h-5" />
          <h1 className="text-lg font-black uppercase italic">AI Strategist</h1>
        </div>

        {/* STEP 1: HOME */}
        {view === 'home' && (
          <div className="py-10">
            <h2 className="text-5xl font-black mb-8 italic text-yellow-400 leading-tight">WELCOME TO THE PAD.</h2>
            <button 
              onClick={() => setView('search')}
              className="w-full bg-white text-black py-6 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-colors"
            >
              Start Here <ArrowRight />
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH */}
        {view === 'search' && (
          <div className="py-10">
            <h2 className="text-3xl font-black mb-6 uppercase italic">Your Niche?</h2>
            <input 
              type="text" placeholder="e.g. Dogs" 
              className="w-full p-6 rounded-2xl bg-slate-900 border-2 border-white/20 text-xl mb-6 outline-none"
            />
            <button 
              onClick={() => setView('toolhub')}
              className="w-full bg-yellow-400 text-black py-6 rounded-2xl font-black text-xl uppercase"
            >
              Enter The Tool Hub
            </button>
          </div>
        )}

        {/* STEP 3: THE TOOL HUB & STRIPE */}
        {view === 'toolhub' && (
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
              <Hammer className="text-yellow-400" />
              <p className="font-black uppercase">Tool Hub Active</p>
            </div>

            <div className="bg-white text-black p-10 rounded-3xl">
              <h3 className="text-3xl font-black mb-2 uppercase">Ready!</h3>
              <p className="font-bold text-slate-500 mb-8 italic text-lg">Your custom Dogs roadmap is locked.</p>
              
              {/* THE REPAIRED STRIPE LINK - RAW FORMAT */}
              <a 
                href="https://buy.stripe.com/6oEbLg8oU8AebpS7ss"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', backgroundColor: 'black', color: 'white', padding: '24px', borderRadius: '16px', fontWeight: '900', fontSize: '24px', textDecoration: 'none' }}
              >
                PAY NOW <CheckCircle2 style={{ color: '#facc15' }} />
              </a>
              
              <p className="mt-6 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                Safe & Secure via Stripe
              </p>
            </div>
            
            <button 
              onClick={() => setView('home')} 
              className="text-slate-500 text-sm font-bold uppercase w-full text-center"
            >
              ← Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
                          }
