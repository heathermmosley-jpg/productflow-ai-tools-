"use client";

import { useState } from "react";
import { Sparkles, Wrench, Lightbulb, Hammer } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans uppercase">
      <div className="max-w-md mx-auto border-4 border-white min-h-[85vh] p-6 bg-zinc-950 rounded-[40px] shadow-2xl">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10 border-b-2 border-white/20 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-6 h-6" />
            <h1 className="text-xl font-black italic">THE PAD</h1>
          </div>
        </div>

        {/* STEP 1: START */}
        {step === 1 && (
          <div className="py-10 text-center">
            <h2 className="text-5xl font-black mb-12 italic text-yellow-400 leading-none">BUILD YOUR<br/>EMPIRE.</h2>
            <button onClick={() => setStep(2)} className="w-full bg-white text-black py-8 rounded-full font-black text-3xl border-4 border-black shadow-[0_10px_0_#facc15]">START HERE</button>
          </div>
        )}

        {/* STEP 2: SEARCH */}
        {step === 2 && (
          <div className="py-10 text-center">
            <h2 className="text-3xl font-black mb-8 italic text-white underline decoration-yellow-400">YOUR NICHE</h2>
            <input type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="E.G. DOGS" className="w-full p-6 rounded-2xl bg-black border-4 border-white text-xl mb-8 outline-none text-white text-center font-black" />
            <button onClick={() => setStep(3)} className="w-full bg-yellow-400 text-black py-6 rounded-full font-black text-xl border-4 border-white">REVEAL TOOLS</button>
          </div>
        )}

        {/* STEP 3: TOOL HUB */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full font-black text-[10px] mb-4">
                <Hammer className="w-4 h-4 animate-bounce" /> TOOL HUB LIVE
              </div>
              <h2 className="text-2xl font-black italic text-white uppercase">ANALYSIS: {niche || 'DOGS'}</h2>
            </div>

            <div className="p-6 bg-black rounded-[30px] border-4 border-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-4">
                <Wrench className="text-yellow-400 w-10 h-10" />
                <span className="font-black text-lg text-white uppercase">GAP FINDER</span>
              </div>
              <span className="bg-white text-black px-3 py-1 rounded font-black text-[8px]">LOCKED</span>
            </div>
            
            <div className="p-6 bg-black rounded-[30px] border-4 border-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-4">
                <Lightbulb className="text-yellow-400 w-10 h-10" />
                <span className="font-black text-lg text-white uppercase">PROFIT TOOL</span>
              </div>
              <span className="bg-white text-black px-3 py-1 rounded font-black text-[8px]">LOCKED</span>
            </div>

            <div className="bg-yellow-400 p-1 rounded-[40px] mt-8 border-2 border-white">
              <div className="bg-black rounded-[36px] p-8 text-center">
                <h3 className="text-3xl font-black mb-2 text-white italic uppercase">UNLOCK</h3>
                <p className="text-white mb-8 font-black text-sm underline decoration-yellow-400 uppercase">GET THE $10K/MO BLUEPRINT</p>
                <a href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" className="block w-full bg-white text-black py-6 rounded-full font-black text-2xl text-center no-underline border-4 border-black uppercase shadow-[0_10px_0_#facc15]">PAY NOW</a>
              </div>
            </div>

            <button onClick={() => setStep(1)} className="w-full text-center text-white text-[10px] font-black mt-10 opacity-40 uppercase">← RESET SYSTEM</button>
          </div>
        )}
      </div>
    </div>
  );
}
