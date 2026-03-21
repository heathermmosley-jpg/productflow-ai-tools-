"use client";

import { useState } from "react";
import { Sparkles, Wrench, Lightbulb, Hammer, ShieldCheck, ArrowRight, Zap, HelpCircle, BookOpen, ChevronRight, Home, PencilLine, ArrowLeft } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [selectedTool, setSelectedTool] = useState("");
  const [showPay, setShowPay] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase overflow-x-hidden flex items-center justify-center p-4">
      {/* THE ORIGINAL SKELETON: Restoring the look from your screenshot */}
      <div className="w-full max-w-md border-x-4 border-white min-h-[95vh] flex flex-col p-6 bg-zinc-950 shadow-2xl relative">
        
        {/* HEADER - RESTORED ORIGINAL STYLE */}
        <div className="flex justify-between items-center py-6 border-b-4 border-white mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-8 h-8" />
            <h1 className="text-2xl font-black italic tracking-tighter uppercase">THE PAD</h1>
          </div>
          <HelpCircle className="w-6 h-6 opacity-30" />
        </div>

        <div className="flex-grow">
          {/* STEP 1: LANDING */}
          {step === 1 && (
            <div className="py-12 text-center animate-in fade-in">
              <h2 className="text-6xl font-black mb-12 italic text-yellow-400 leading-none tracking-tighter">BUILD YOUR<br/>EMPIRE.</h2>
              <button onClick={() => setStep(2)} className="w-full bg-white text-black py-8 rounded-full font-black text-3xl border-4 border-black shadow-[0_10px_0_#facc15] active:translate-y-1 transition-all">START HERE</button>
            </div>
          )}

          {/* STEP 2: NICHE INPUT */}
          {step === 2 && (
            <div className="py-8 space-y-10 text-center animate-in slide-in-from-right-5">
              <div className="space-y-4">
                <label className="text-yellow-400 font-black text-xs tracking-[0.3em] block italic uppercase">NICHE EXAMPLE: REAL ESTATE</label>
                <input 
                  type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="ENTER NICHE..." 
                  className="w-full p-8 rounded-3xl bg-black border-4 border-white text-2xl outline-none text-white text-center font-black uppercase placeholder:opacity-10" 
                />
              </div>
              <button onClick={() => setStep(3)} className="w-full bg-yellow-400 text-black py-8 rounded-full font-black text-2xl border-4 border-white">REVEAL TOOLS</button>
              <button onClick={() => setStep(1)} className="text-white/30 text-[10px] font-black underline">← BACK</button>
            </div>
          )}

          {/* STEP 3 & 4: THE TOOL HUB (RESTORED LIST STYLE FROM SCREENSHOT) */}
          {(step === 3 || step === 4) && !showPay && (
            <div className="space-y-6 animate-in zoom-in">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black italic uppercase tracking-tighter border-b-2 border-yellow-400">ANALYSIS: {niche || 'REQUIRED'}</h2>
                <button onClick={() => setStep(2)} className="text-yellow-400 hover:scale-110 transition-transform">
                  <PencilLine className="w-6 h-6" />
                </button>
              </div>

              {/* LIST STYLE TOOLS */}
              <div 
                onClick={() => { setSelectedTool("GAP FINDER"); setStep(4); }}
                className={`p-8 rounded-[40px] border-4 flex justify-between items-center transition-all ${selectedTool === "GAP FINDER" ? 'bg-white text-black border-yellow-400' : 'bg-black border-white hover:border-yellow-400'}`}
              >
                <div className="flex flex-col">
                  <Wrench className={`${selectedTool === "GAP FINDER" ? 'text-black' : 'text-yellow-400'} w-12 h-12 mb-2`} />
                  <p className="font-black text-2xl uppercase italic leading-none">GAP FINDER</p>
                </div>
                {selectedTool === "GAP FINDER" ? <Zap className="text-black" /> : <ChevronRight className="opacity-20" />}
              </div>

              <div className="p-8 bg-black rounded-[40px] border-4 border-white/20 flex justify-between items-center opacity-30 grayscale cursor-not-allowed">
                <div className="flex flex-col">
                  <Lightbulb className="text-yellow-400 w-12 h-12 mb-2" />
                  <p className="font-black text-2xl uppercase italic text-white/50 leading-none">PROFIT TOOL</p>
                </div>
                <span className="text-[10px] font-black border border-white/20 px-3 py-1 rounded-full uppercase">LOCKED</span>
              </div>

              {/* GENERATE BUTTON - POPS OUT AFTER SELECTION */}
              {step === 4 && (
                <button 
                  onClick={() => setShowPay(true)} 
                  className="w-full mt-6 bg-yellow-400 text-black py-8 rounded-[40px] font-black text-3xl border-4 border-white shadow-[0_10px_0_white] animate-in slide-in-from-bottom-5 uppercase italic active:translate-y-2 active:shadow-none transition-all"
                >
                  GET STRATEGY <ArrowRight className="inline ml-2 w-8 h-8" />
                </button>
              )}
            </div>
          )}

          {/* STEP 5: PAYWALL (SAFE EXIT INCLUDED) */}
          {showPay && (
            <div className="py-6 flex flex-col items-center animate-in slide-in-from-bottom-10">
              <div className="bg-yellow-400 p-1 rounded-[50px] border-4 border-white shadow-2xl">
                <div className="bg-black rounded-[46px] p-10 text-center border-4 border-white">
                  <h3 className="text-5xl font-black mb-6 text-white italic leading-none uppercase tracking-tighter underline decoration-yellow-400">UNLOCK<br/>RESULTS</h3>
                  <a href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" onClick={() => setTimeout(() => setStep(6), 2000)} className="block w-full bg-white text-black py-10 rounded-full font-black text-4xl text-center no-underline border-8 border-black shadow-[0_10px_0_#333] uppercase active:translate-y-1">PAY NOW</a>
                  <div className="mt-8 flex items-center justify-center gap-2 text-white/30 font-black text-[10px] uppercase tracking-widest"><ShieldCheck className="w-4 h-4 text-yellow-400" /> SECURE STRIPE</div>
                </div>
              </div>
              <button onClick={() => setShowPay(false)} className="mt-8 text-white/40 font-black text-xs italic underline uppercase hover:text-white transition-colors">← CHANGE NICHE / TOOLS</button>
            </div>
          )}

          {/* STEP 6 & 7: SUCCESS HUB & RESOURCES */}
          {step >= 6 && (
            <div className="space-y-6 animate-in zoom-in">
              <div className="bg-white text-black p-4 rounded-2xl text-center font-black text-sm uppercase italic tracking-tighter shadow-[5px_5px_0px_#facc15]">PURCHASE CONFIRMED - WELCOME</div>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => {setStep(3); setShowPay(false); setSelectedTool("");}} className="p-8 bg-black border-4 border-white rounded-[40px] flex flex-col items-center gap-4 hover:bg-yellow-400 hover:text-black transition-colors group">
                  <Wrench className="text-yellow-400 w-8 h-8 group-hover:text-black" /><span className="text-[10px] font-black uppercase">NEW TOOL</span>
                </button>
                <button onClick={() => setStep(7)} className="p-8 bg-black border-4 border-white rounded-[40px] flex flex-col items-center gap-4 hover:bg-yellow-400 hover:text-black transition-colors group">
                  <BookOpen className="text-yellow-400 w-8 h-8 group-hover:text-black" /><span className="text-[10px] font-black uppercase">RESOURCES</span>
                </button>
              </div>

              {step === 7 && (
                <div className="p-8 border-4 border-white rounded-[40px] bg-black space-y-4 animate-in slide-in-from-bottom-5">
                   <h4 className="font-black text-yellow-400 italic uppercase border-b-2 border-white/10 pb-2">THE EMPIRE ASSETS</h4>
                   <p className="text-[10px] font-black flex items-center gap-2"><Zap className="w-4 h-4" /> 10K/MO BLUEPRINT DOWNLOAD</p>
                   <p className="text-[10px] font-black flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 24/7 PRIORITY SUPPORT</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-6 border-t-2 border-white/10 pt-6 text-center">
          <button onClick={() => {setStep(1); setNiche(""); setSelectedTool(""); setShowPay(false);}} className="text-[10px] font-black text-white/20 italic tracking-widest uppercase underline hover:text-white transition-colors">RESET TERMINAL</button>
        </div>
      </div>
    </div>
  );
}


