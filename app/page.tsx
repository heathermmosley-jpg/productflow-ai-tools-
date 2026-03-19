"use client";

import { useState } from "react";
import { Sparkles, Wrench, Lightbulb, Hammer, ShieldCheck } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase overflow-x-hidden">
      {/* SKELETON: w-full and px-4 pushes content to the outside edges */}
      <div className="max-w-2xl mx-auto border-x-2 border-white/10 min-h-screen flex flex-col justify-between p-6 bg-zinc-950">
        
        {/* TOP SECTION */}
        <div className="w-full">
          <div className="flex justify-between items-center py-6 border-b-4 border-white mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-400 w-8 h-8" />
              <h1 className="text-2xl font-black italic tracking-tighter">THE PAD</h1>
            </div>
            <div className="bg-white text-black font-black text-[10px] px-4 py-2 rounded-full">LIVE</div>
          </div>

          {/* STEP 1: HOME */}
          {step === 1 && (
            <div className="py-20 text-center animate-in fade-in">
              <h2 className="text-6xl font-black mb-12 italic text-yellow-400 leading-none">BUILD YOUR<br/>EMPIRE.</h2>
              <button onClick={() => setStep(2)} className="w-full bg-white text-black py-8 rounded-full font-black text-3xl border-4 border-black shadow-[0_10px_0_#facc15]">START HERE</button>
            </div>
          )}

          {/* STEP 2: SEARCH */}
          {step === 2 && (
            <div className="py-10 text-center animate-in slide-in-from-right-5">
              <h2 className="text-4xl font-black mb-10 italic text-white underline decoration-yellow-400 decoration-4">YOUR NICHE</h2>
              <input 
                type="text" 
                value={niche} 
                onChange={(e) => setNiche(e.target.value)} 
                placeholder="E.G. DOGS" 
                className="w-full p-8 rounded-3xl bg-black border-4 border-white text-2xl mb-10 outline-none text-white text-center font-black" 
              />
              <button 
                onClick={() => setStep(3)} 
                className="w-full bg-yellow-400 text-black py-8 rounded-full font-black text-2xl border-4 border-white"
              >
                REVEAL TOOLS
              </button>
            </div>
          )}

          {/* STEP 3: TOOL HUB (CENTERED SKELETON) */}
          {step === 3 && (
            <div className="space-y-6 animate-in zoom-in">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-black text-xs border-2 border-yellow-400 mb-6">
                  <Hammer className="w-5 h-5 animate-bounce" /> TOOL HUB ACTIVE
                </div>
                <h2 className="text-3xl font-black italic text-white">ANALYSIS: {niche || 'DOGS'}</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-8 bg-black rounded-[40px] border-4 border-white flex justify-between items-center shadow-xl">
                  <div className="flex flex-col">
                    <Wrench className="text-yellow-400 w-12 h-12 mb-2" />
                    <p className="font-black text-2xl text-white">GAP FINDER</p>
                  </div>
                  <span className="bg-white text-black px-4 py-1 rounded-full font-black text-[10px] border-2 border-black h-fit">LOCKED</span>
                </div>
                
                <div className="p-8 bg-black rounded-[40px] border-4 border-white flex justify-between items-center shadow-xl">
                  <div className="flex flex-col">
                    <Lightbulb className="text-yellow-400 w-12 h-12 mb-2" />
                    <p className="font-black text-2xl text-white">PROFIT TOOL</p>
                  </div>
                  <span className="bg-white text-black px-4 py-1 rounded-full font-black text-[10px] border-2 border-black h-fit">LOCKED</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM SECTION: PAYWALL (ONLY VISIBLE AT STEP 3) */}
        {step === 3 && (
          <div className="w-full mt-12 pb-10 animate-in slide-in-from-bottom-5">
            <div className="bg-yellow-400 p-1 rounded-[50px] border-4 border-white shadow-2xl">
              <div className="bg-black rounded-[44px] p-8 text-center">
                <h3 className="text-4xl font-black mb-4 text-white italic tracking-tighter uppercase leading-none text-center">UNLOCK FULL<br/>STRATEGY</h3>
                <p className="text-white mb-8 font-black text-lg italic underline decoration-yellow-400">GET THE $10K/MO BLUEPRINT</p>
                
                <a href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" 
                   className="block w-full bg-white text-black py-7 rounded-full font-black text-3xl text-center no-underline border-4 border-black">
                  PAY NOW
                </a>
                
                <div className="mt-6 flex items-center justify-center gap-3 text-white font-black text-[10px]">
                  <ShieldCheck className="w-6 h-6 text-yellow-400" /> SECURE STRIPE
                </div>
              </div>
            </div>
            <button onClick={() => setStep(1)} className="w-full text-center text-white text-[10px] font-black mt-8 opacity-30 italic">← RESET</button>
          </div>
        )}

      </div>
    </div>
  );
              }


