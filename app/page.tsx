"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Wrench, Lightbulb, Hammer, ShieldCheck } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans uppercase">
      <div className="max-w-md mx-auto border-4 border-white min-h-[80vh] p-6 bg-zinc-950 rounded-[40px]">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8 border-b-4 border-white pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-6 h-6" />
            <span className="text-xl font-black italic text-white">THE PAD</span>
          </div>
        </div>

        {/* STEP 1: START */}
        {step === 1 && (
          <div className="py-10 text-center">
            <h2 className="text-5xl font-black mb-10 italic text-yellow-400 leading-none">BUILD YOUR<br/>EMPIRE.</h2>
            <button onClick={() => setStep(2)} className="w-full bg-white text-black py-8 rounded-full font-black text-2xl border-4 border-black">START HERE</button>
          </div>
        )}

        {/* STEP 2: NICHE */}
        {step === 2 && (
          <div className="py-10 text-center">
            <h2 className="text-3xl font-black mb-8 italic text-white">CHOOSE NICHE</h2>
            <input type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="E.G. DOGS" 
              className="w-full p-6 rounded-3xl bg-black border-4 border-white text-2xl mb-8 outline-none text-white text-center font-black" />
            <button onClick={() => setStep(3)} className="w-full bg-yellow-400 text-black py-6 rounded-full font-black text-xl border-4 border-white">REVEAL TOOLS</button>
          </div>
        )}

        {/* STEP 3: TOOL HUB (STAY HERE) */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-black text-[10px] mb-4">
                <Hammer className="w-4 h-4" /> TOOL HUB ACTIVE
              </div>
              <h2 className="text-xl font-black text-yellow-400">ANALYSIS: {niche || 'DOGS'}</h2>
            </div>

            <div className="p-6 bg-black rounded-[30px] border-4 border-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Wrench className="text-yellow-400 w-8 h-8" />
                <span className="font-black text-sm text-white">GAP FINDER</span>
              </div>
              <span className="bg-white text-black px-3 py-1 rounded font-black text-[8px]">LOCKED</span>
            </div>
            
            <div className="p-6 bg-black rounded-[30px] border-4 border-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Lightbulb className="text-yellow-400 w-8 h-8" />
                <span className="font-black text-sm text-white">PROFIT TOOL</span>
              </div>
              <span className="bg-white text-black px-3 py-1 rounded font-black text-[8px]">LOCKED</span>
            </div>

            <div className="bg-yellow-400 p-6 rounded-[40px] border-4 border-white text-center mt-8">
              <h3 className="text-2xl font-black mb-1 text-black">UNLOCK NOW</h3>
              <p className="text-black font-black text-[10px] mb-6 underline">GET THE $10K/MO BLUEPRINT</p>
              <a href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" className="block w-full bg-black text-white py-6 rounded-full font-black text-xl border-4 border-white text-center no-underline">PAY NOW</a>
              <div className="mt-4 flex items-center justify-center gap-2 text-black font-black text-[8px]">
                <ShieldCheck className="w-4 h-4" /> SECURE STRIPE
              </div>
            </div>

            <button onClick={() => setStep(1)} className="w-full text-center text-white text-[10px] font-black mt-8 opacity-40 italic">← START OVER</button>
          </div>
        )}
      </div>
    </div>
  );
}
