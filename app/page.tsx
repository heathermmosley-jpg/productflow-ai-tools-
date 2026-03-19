"use client";

import { useState } from "react";
import { Sparkles, Wrench, Lightbulb, Hammer, ShieldCheck, ArrowRight, Lock } from "lucide-react";

export default function App() {
  // STEPS: 1=Home, 2=Search, 3=Tool Hub, 4=Stripe Paywall
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase overflow-x-hidden p-4">
      <div className="max-w-md mx-auto border-x-4 border-white min-h-[90vh] flex flex-col p-6 bg-zinc-950 rounded-[40px] shadow-2xl">
        
        {/* HEADER */}
        <div className="flex justify-between items-center py-6 border-b-4 border-white mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-8 h-8" />
            <h1 className="text-2xl font-black italic tracking-tighter uppercase">THE PAD</h1>
          </div>
        </div>

        <div className="flex-grow">
          {/* STEP 1: HOME */}
          {step === 1 && (
            <div className="py-12 text-center animate-in fade-in">
              <h2 className="text-6xl font-black mb-12 italic text-yellow-400 leading-none">BUILD YOUR<br/>EMPIRE.</h2>
              <button onClick={() => setStep(2)} className="w-full bg-white text-black py-8 rounded-full font-black text-3xl border-4 border-black shadow-[0_10px_0_#facc15]">START HERE</button>
            </div>
          )}

          {/* STEP 2: SEARCH */}
          {step === 2 && (
            <div className="py-8 space-y-10 text-center animate-in slide-in-from-right-5">
              <h2 className="text-4xl font-black italic text-white underline decoration-yellow-400 decoration-4">YOUR NICHE</h2>
              <input 
                type="text" 
                value={niche} 
                onChange={(e) => setNiche(e.target.value)} 
                placeholder="E.G. DOGS" 
                className="w-full p-8 rounded-3xl bg-black border-4 border-white text-2xl outline-none text-white text-center font-black" 
              />
              <button 
                onClick={() => setStep(3)} 
                className="w-full bg-yellow-400 text-black py-8 rounded-full font-black text-2xl border-4 border-white"
              >
                REVEAL TOOLS
              </button>
            </div>
          )}

          {/* STEP 3: THE TOOL HUB (NO STRIPE LINK HERE) */}
          {step === 3 && (
            <div className="space-y-6 animate-in zoom-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-black text-xs border-2 border-yellow-400 mb-6">
                  <Hammer className="w-5 h-5 animate-bounce" /> TOOL HUB LIVE
                </div>
                <h2 className="text-3xl font-black italic text-white">ANALYSIS: {niche || 'DOGS'}</h2>
              </div>

              {/* TOOL CARDS */}
              <div className="p-8 bg-black rounded-[40px] border-4 border-white flex justify-between items-center shadow-xl">
                <div className="flex flex-col">
                  <Wrench className="text-yellow-400 w-12 h-12 mb-2" />
                  <p className="font-black text-2xl uppercase text-white">GAP FINDER</p>
                </div>
                <Lock className="text-white w-6 h-6 opacity-40" />
              </div>
              
              <div className="p-8 bg-black rounded-[40px] border-4 border-white flex justify-between items-center shadow-xl">
                <div className="flex flex-col">
                  <Lightbulb className="text-yellow-400 w-12 h-12 mb-2" />
                  <p className="font-black text-2xl uppercase text-white">PROFIT TOOL</p>
                </div>
                <Lock className="text-white w-6 h-6 opacity-40" />
              </div>

              {/* NEXT STEP BUTTON */}
              <button 
                onClick={() => setStep(4)} 
                className="w-full mt-8 bg-white text-black py-8 rounded-[40px] font-black text-3xl border-8 border-black shadow-[0_15px_40px_rgba(255,255,255,0.2)]"
              >
                GET STRATEGY <ArrowRight className="inline ml-2 w-8 h-8" strokeWidth={4} />
              </button>
            </div>
          )}

          {/* STEP 4: FINAL PAYWALL (ONLY STRIPE HERE) */}
          {step === 4 && (
            <div className="py-6 animate-in slide-in-from-bottom-10">
              <div className="bg-yellow-400 p-1 rounded-[50px] border-4 border-white shadow-2xl">
                <div className="bg-black rounded-[46px] p-10 text-center border-4 border-white">
                  <h3 className="text-5xl font-black mb-6 text-white italic uppercase tracking-tighter leading-none">UNLOCK<br/>STRATEGY</h3>
                  <p className="text-white mb-10 font-black text-xl italic underline decoration-yellow-400 decoration-4">GET THE $10K/MO BLUEPRINT</p>
                  
                  <a href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" 
                     className="block w-full bg-white text-black py-10 rounded-full font-black text-4xl text-center no-underline border-8 border-black">
                    PAY NOW
                  </a>
                  
                  <div className="mt-8 flex items-center justify-center gap-3 text-white font-black text-[10px]">
                    <ShieldCheck className="w-6 h-6 text-yellow-400" /> SECURE STRIPE CHECKOUT
                  </div>
                </div>
              </div>
              <button onClick={() => setStep(3)} className="w-full text-center text-white text-sm font-black mt-8 uppercase italic opacity-40">← BACK TO TOOLS</button>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <button onClick={() => setStep(1)} className="w-full text-center text-white text-[10px] font-black py-6 opacity-20 italic">← RESET SYSTEM</button>
      </div>
    </div>
  );
}


