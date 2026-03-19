"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Wrench, Lightbulb, Hammer, ShieldCheck, HelpCircle } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans uppercase">
      {/* THE BOX: max-w-2xl makes it much wider on your screen */}
      <div className="max-w-2xl mx-auto border-x-8 border-white/20 min-h-screen px-4 md:px-10 bg-zinc-950 shadow-[0_0_100px_rgba(255,255,255,0.1)]">
        
        {/* HEADER: BIGGER & THICKER */}
        <div className="flex justify-between items-center py-12 mb-10 border-b-8 border-white">
          <div className="flex items-center gap-4">
            <Sparkles className="text-yellow-400 w-12 h-12" />
            <h1 className="text-5xl font-black italic tracking-tighter text-white">THE PAD</h1>
          </div>
          <button className="bg-white text-black font-black text-lg px-8 py-3 rounded-full border-4 border-black shadow-[6px_6px_0px_#facc15]">
            HELP
          </button>
        </div>

        {/* STEP 1: HOME */}
        {step === 1 && (
          <div className="py-20 text-center animate-in fade-in zoom-in">
            <h2 className="text-[120px] font-black mb-16 italic text-yellow-400 leading-[0.75] tracking-tighter">
              BUILD<br/>YOUR<br/>EMPIRE.
            </h2>
            <button 
              onClick={() => setStep(2)} 
              className="w-full bg-white text-black py-12 rounded-full font-black text-5xl border-[10px] border-black shadow-[0_30px_60px_rgba(255,255,255,0.2)] active:scale-95 transition-all"
            >
              START HERE
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH */}
        {step === 2 && (
          <div className="py-12 text-center animate-in slide-in-from-bottom-10">
            <h2 className="text-6xl font-black mb-12 italic text-white underline decoration-yellow-400 decoration-[12px]">YOUR NICHE</h2>
            <input 
              type="text" 
              value={niche} 
              onChange={(e) => setNiche(e.target.value)} 
              placeholder="E.G. DOGS" 
              className="w-full p-12 rounded-[50px] bg-black border-8 border-white text-5xl mb-12 outline-none text-white text-center font-black placeholder:text-zinc-800 uppercase" 
            />
            <button 
              onClick={() => setStep(3)} 
              className="w-full bg-yellow-400 text-black py-12 rounded-full font-black text-4xl border-8 border-black shadow-[0_15px_40px_rgba(250,204,21,0.4)]"
            >
              REVEAL TOOLS
            </button>
          </div>
        )}

        {/* STEP 3: TOOL HUB (BIG CARDS) */}
        {step === 3 && (
          <div className="space-y-12 animate-in fade-in duration-500 pb-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full font-black text-2xl border-4 border-yellow-400 mb-12 shadow-[8px_8px_0px_#facc15]">
                <Hammer className="w-8 h-8 animate-bounce" /> TOOL HUB LIVE
              </div>
              <h2 className="text-5xl font-black italic text-white leading-none">
                ANALYSIS: <span className="text-yellow-400">{niche || 'DOGS'}</span>
              </h2>
            </div>

            {/* THE TOOLS: FULL WIDTH */}
            <div className="grid grid-cols-1 gap-10">
              <div className="p-12 bg-black rounded-[60px] border-8 border-white flex flex-col gap-8 shadow-xl">
                <div className="flex justify-between items-center">
                  <Wrench className="text-yellow-400 w-24 h-24" />
                  <span className="bg-white text-black px-8 py-3 rounded-full font-black text-xl border-4 border-black">LOCKED</span>
                </div>
                <p className="font-black text-5xl text-white">GAP FINDER</p>
                <p className="text-white font-bold text-2xl opacity-60 italic">Scanning Markets...</p>
              </div>
              
              <div className="p-12 bg-black rounded-[60px] border-8 border-white flex flex-col gap-8 shadow-xl">
                <div className="flex justify-between items-center">
                  <Lightbulb className="text-yellow-400 w-24 h-24" />
                  <span className="bg-white text-black px-8 py-3 rounded-full font-black text-xl border-4 border-black">LOCKED</span>
                </div>
                <p className="font-black text-5xl text-white">PROFIT TOOL</p>
                <p className="text-white font-bold text-2xl opacity-60 italic">Forecasting ROI...</p>
              </div>
            </div>

            {/* THE PAYWALL: MASSIVE */}
            <div className="bg-yellow-400 p-3 rounded-[70px] mt-20 shadow-[0_0_100px_rgba(250,204,21,0.5)]">
              <div className="bg-black rounded-[64px] p-16 text-center border-8 border-white">
                <h3 className="text-7xl font-black mb-8 text-white italic uppercase tracking-tighter">UNLOCK</h3>
                <p className="text-white mb-16 font-black text-3xl italic underline decoration-yellow-400 decoration-8">GET THE $10K/MO BLUEPRINT</p>
                
                <a href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" 
                   className="block w-full bg-white text-black py-12 rounded-full font-black text-5xl text-center no-underline border-[12px] border-black shadow-[0_20px_50px_rgba(255,255,255,0.3)]">
                  PAY NOW
                </a>
                
                <div className="mt-12 flex items-center justify-center gap-6 text-white font-black text-2xl">
                  <ShieldCheck className="w-12 h-12 text-yellow-400" /> SECURE
                </div>
              </div>
            </div>

            <button onClick={() => setStep(1)} className="w-full text-center text-white text-2xl font-black mt-24 mb-24 opacity-50 underline">
              ← RESET SYSTEM
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
