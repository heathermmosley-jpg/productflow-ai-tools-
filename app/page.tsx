"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Lock, Loader2 } from "lucide-react";

export default function MultiStepBusinessAI() {
  // STEPS: 'home' -> 'analyze' -> 'results'
  const [step, setStep] = useState('home'); 
  const [email, setEmail] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  // This handles the fake "Analyzing" timer
  useEffect(() => {
    if (step === 'analyze') {
      const timer = setTimeout(() => setStep('results'), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleSaveEmail = async () => {
    setIsSaving(true);
    // Skipping database save to avoid errors
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
            <h2 className="text-6xl font-black mb-6">Turn your hobby into a <span className="text-yellow-400">Empire.</span></h2>
            <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">Our AI analyzes market gaps in your niche to build you a $10k/month roadmap.</p>
            <button 
              onClick={() => setStep('analyze')}
              className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-all"
            >
              Start Here
            </button>
          </div>
        )}

        {/* STEP 2: ANALYZING PAGE */}
        {step === 'analyze' && (
          <div className="text-center py-20">
            <Loader2 className="w-16 h-16 text-yellow-400 animate-spin mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-2">Analyzing Niche Data...</h2>
            <p className="text-slate-500 italic">Finding high-profit punch needle opportunities...</p>
          </div>
        )}

        {/* STEP 3: RESULTS & STRIPE */}
        {step === 'results' && (
          <div className="space-y-8">
            {!hasSaved ? (
              /* THE EMAIL GATE */
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Results Ready! Enter email to unlock:</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com" className="flex-1 p-4 rounded-xl text-slate-900 font-bold outline-none" 
                  />
                  <button onClick={handleSaveEmail} className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-black uppercase">
                    {isSaving ? "Unlocking..." : "Get My Results"}
                  </button>
                </div>
              </div>
            ) : (
              /* THE STRIPE PAYMENT SECTION */
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-10 rounded-3xl text-black animate-in fade-in zoom-in duration-500">
                <h2 className="text-4xl font-black mb-4 italic text-center">THE SECRET SAUCE STRATEGY</h2>
                <p className="text-center font-bold text-xl mb-8">Your 3 Business Ideas are generated. Ready to see the Step-by-Step Roadmap?</p>
                <div className="flex justify-center">
                  <a 
                    href="https://buy.stripe.com/6oEbLg8oU8AebpS7ss" 
                    className="bg-black text-white px-12 py-6 rounded-2xl font-black text-2xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3"
                  >
                    Pay Now & Get Access <CheckCircle2 className="w-8 h-8 text-yellow-400" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
        }
                    
