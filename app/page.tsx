"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Lock, Loader2, Wrench, Search, Lightbulb } from "lucide-react";

export default function MultiStepBusinessAI() {
  // STEPS: 'home' -> 'search' -> 'tools' -> 'results'
  const [step, setStep] = useState('home'); 
  const [email, setEmail] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  // This handles the transition from searching to seeing the tools
  const handleStartSearch = () => {
    setStep('tools');
  };

  const handleSaveEmail = async () => {
    setIsSaving(true);
    setHasSaved(true);
    setIsSaving(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="text-yellow-400 w-6 h-6" />
          <h1 className="text-xl font-black tracking-tighter uppercase">AI Business Strategist</h1>
        </div>

        {/* STEP 1: HOME PAGE */}
        {step === 'home' && (
          <div className="text-center py-20">
            <h2 className="text-6xl font-black mb-6 italic text-yellow-400">WELCOME TO THE PAD.</h2>
            <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">Turn your creative hobby into a high-profit business engine.</p>
            <button 
              onClick={() => setStep('search')}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-2xl hover:bg-yellow-400 transition-all flex items-center gap-3 mx-auto"
            >
              Start Here <ArrowRight />
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH ENGINE */}
        {step === 'search' && (
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center">
            <Search className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-6">What is your business niche?</h2>
            <input 
              type="text" placeholder="e.g. Modern Punch Needle" 
              className="w-full p-6 rounded-2xl bg-slate-900 border-2 border-white/20 text-xl font-bold mb-6 outline-none focus:border-yellow-400"
            />
            <button 
              onClick={handleStartSearch}
              className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform"
            >
              Analyze My Niche
            </button>
          </div>
        )}

        {/* STEP 3: THE TOOLS (The missing middle step) */}
        {step === 'tools' && (
          <div className="space-y-6 text-center">
            <div className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full font-black text-sm mb-4">
              AI TOOLS ACTIVE
            </div>
            <h2 className="text-4xl font-black mb-10">AI is building your strategy...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                <Wrench className="text-yellow-400" /> <span>Market Gap Finder</span>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                <Lightbulb className="text-yellow-400" /> <span>Profit Estimator</span>
              </div>
            </div>
            <button 
              onClick={() => setStep('results')}
              className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-black hover:bg-yellow-400 transition-colors"
            >
              Finish Analysis
            </button>
          </div>
        )}

        {/* STEP 4: RESULTS & STRIPE */}
        {step === 'results' && (
          <div className="space-y-8">
            {!hasSaved ? (
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4 italic">WE GOT YOUR CUSTOM STRATEGY READY!</h3>
                <p className="text-slate-400 mb-6 font-bold uppercase tracking-widest text-sm">Step 1: Unlock your dashboard</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" className="flex-1 p-4 rounded-xl text-slate-900 font-bold outline-none" 
                  />
                  <button onClick={handleSaveEmail} className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-black">
                    {isSaving ? "Unlocking..." : "Get Results"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-yellow-400 p-10 rounded-3xl text-black text-center shadow-[0_0_50px_rgba(250,204,21,0.3)]">
                <h2 className="text-5xl font-black mb-4 italic uppercase">Secret Sauce Strategy</h2>
                <p className="font-bold text-xl mb-8">Ready to scale to $10k/month? Grab the full roadmap.</p>
                <a 
                  href="https://buy.stripe.com/6oEbLg8oU8AebpS7ss" 
                  className="bg-black text-white px-12 py-6 rounded-2xl font-black text-2xl hover:scale-110 transition-transform flex items-center gap-3 justify-center"
                >
                  Get Access Now <CheckCircle2 />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
            }

