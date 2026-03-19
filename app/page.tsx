"use client";

import { useState } from "react";
import { Sparkles, Wrench, Lightbulb, Hammer, ShieldCheck, ArrowRight, Zap, HelpCircle, BookOpen, MessageSquare, ChevronRight, Home } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [selectedTool, setSelectedTool] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase overflow-x-hidden p-4">
      <div className="max-w-md mx-auto border-x-4 border-white min-h-[95vh] flex flex-col p-6 bg-zinc-950 rounded-[40px] shadow-2xl relative">
        
        {/* HEADER */}
        <div className="flex justify-between items-center py-4 border-b-4 border-white mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-6 h-6" />
            <h1 className="text-xl font-black italic tracking-tighter uppercase">THE PAD</h1>
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 opacity-40" />
            <div className="bg-white text-black font-black text-[8px] px-2 py-1 rounded-full uppercase">LIVE V3</div>
          </div>
        </div>

        <div className="flex-grow">
          {/* STEP 1: LANDING PAGE */}
          {step === 1 && (
            <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
              <h2 className="text-6xl font-black mb-10 italic text-yellow-400 leading-[0.8] tracking-tighter uppercase">THE<br/>STRATEGY<br/>LAB.</h2>
              <p className="text-[10px] mb-10 tracking-[0.2em] font-bold text-white/40">Professional Niche Dominance</p>
              <button 
                onClick={() => setStep(2)} 
                className="w-full bg-white text-black py-8 rounded-full font-black text-3xl border-4 border-black shadow-[0_10px_0_#facc15] active:translate-y-1 transition-all"
              >
                ENTER LAB
              </button>
            </div>
          )}

          {/* STEP 2: NICHE SEARCH */}
          {step === 2 && (
            <div className="py-8 space-y-8 text-center animate-in slide-in-from-right-5">
              <h2 className="text-3xl font-black italic text-white underline decoration-yellow-400 decoration-4 uppercase tracking-tighter">TARGET NICHE</h2>
              <input 
                type="text" 
                value={niche} 
                onChange={(e) => setNiche(e.target.value)} 
                placeholder="E.G. REAL ESTATE" 
                className="w-full p-8 rounded-3xl bg-black border-4 border-white text-2xl outline-none text-white text-center font-black uppercase placeholder:text-zinc-800" 
              />
              <button 
                onClick={() => setStep(3)} 
                className="w-full bg-yellow-400 text-black py-7 rounded-full font-black text-2xl border-4 border-white shadow-[0_6px_0_white] uppercase"
              >
                OPEN TOOL HUB
              </button>
            </div>
          )}

          {/* STEP 3: TOOL HUB (SELECTION) */}
          {step === 3 && (
            <div className="space-y-4 animate-in zoom-in duration-300">
              <div className="text-center mb-6">
                <span className="bg-white text-black px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest border-2 border-black">STEP 03: TOOL SELECTION</span>
              </div>
              <button 
                onClick={() => {setSelectedTool("GAP FINDER"); setStep(4)}} 
                className="w-full p-8 bg-zinc-900 border-4 border-white rounded-[35px] flex items-center justify-between active:bg-white active:text-black transition-all group"
              >
                <div className="flex items-center gap-4">
                  <Wrench className="w-10 h-10 text-yellow-400 group-active:text-black" />
                  <span className="font-black text-xl uppercase italic">GAP FINDER</span>
                </div>
                <ChevronRight className="w-6 h-6" />
              </button>
              <button 
                onClick={() => {setSelectedTool("PROFIT TOOL"); setStep(4)}} 
                className="w-full p-8 bg-zinc-900 border-4 border-white rounded-[35px] flex items-center justify-between active:bg-white active:text-black transition-all group"
              >
                <div className="flex items-center gap-4">
                  <Lightbulb className="w-10 h-10 text-yellow-400 group-active:text-black" />
                  <span className="font-black text-xl uppercase italic">PROFIT TOOL</span>
                </div>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* STEP 4: STRATEGY GENERATED */}
          {step === 4 && (
            <div className="py-6 text-center animate-in fade-in duration-300">
              <Hammer className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-black mb-4 uppercase italic">STRATEGY READY</h2>
              <div className="p-6 bg-white/5 border-2 border-dashed border-white/20 rounded-3xl mb-8">
                <p className="text-[10px] font-bold text-yellow-400 mb-2 uppercase tracking-widest">NICHE: {niche || 'NOT SET'}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">SYSTEM: {selectedTool} ACTIVE</p>
              </div>
              <button 
                onClick={() => setStep(5)} 
                className="w-full bg-white text-black py-8 rounded-full font-black text-2xl border-4 border-black shadow-[0_10px_0_#facc15] uppercase"
              >
                GET YOUR STRATEGY
              </button>
            </div>
          )}

          {/* STEP 5: PAY BUTTON (STRIPE) */}
          {step === 5 && (
            <div className="py-6 animate-in slide-in-from-bottom-10">
              <div className="bg-yellow-400 p-1 rounded-[50px] border-4 border-white shadow-2xl">
                <div className="bg-black rounded-[46px] p-8 text-center border-4 border-white">
                  <h3 className="text-4xl font-black mb-4 text-white italic tracking-tighter uppercase leading-none">FINAL<br/>STEP</h3>
                  <p className="text-white mb-8 font-black text-sm italic underline decoration-yellow-400 decoration-4 uppercase">UNLOCK FULL ACCESS</p>
                  <a 
                    href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" 
                    onClick={() => setTimeout(() => setStep(6), 2000)}
                    className="block w-full bg-white text-black py-8 rounded-full font-black text-4xl text-center no-underline border-8 border-black shadow-[0_10px_0_#333]"
                  >
                    PAY NOW
                  </a>
                  <div className="mt-8 flex items-center justify-center gap-2 text-white font-black text-[10px] opacity-50 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-yellow-400" /> SECURE STRIPE CHECKOUT
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6 & 7: RETURN TO HUB / RESOURCE CENTER */}
          {(step === 6 || step === 7) && (
            <div className="space-y-6 animate-in zoom-in duration-500 pb-10">
              <div className="bg-white text-black p-4 rounded-2xl text-center font-black text-sm uppercase italic tracking-tighter shadow-[4px_4px_0px_#facc15]">
                PAYMENT SUCCESS - HUB UNLOCKED
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setStep(3)} 
                  className="p-6 bg-zinc-900 border-2 border-white rounded-3xl flex flex-col items-center gap-3 active:bg-yellow-400 active:text-black transition-all group"
                >
                  <Wrench className="text-yellow-400 w-8 h-8 group-active:text-black" />
                  <span className="text-[10px] font-black tracking-widest uppercase">NEW TOOL</span>
                </button>
                <button 
                  onClick={() => setStep(7)} 
                  className="p-6 bg-zinc-900 border-2 border-white rounded-3xl flex flex-col items-center gap-3 active:bg-yellow-400 active:text-black transition-all group"
                >
                  <BookOpen className="text-yellow-400 w-8 h-8 group-active:text-black" />
                  <span className="text-[10px] font-black tracking-widest uppercase">FAQ / HELP</span>
                </button>
              </div>

              {step === 7 && (
                <div className="p-8 border-4 border-white rounded-[40px] bg-black space-y-6 animate-in slide-in-from-bottom-5">
                  <h4 className="font-black text-yellow-400 text-xl italic uppercase tracking-tighter border-b-2 border-white/10 pb-2">RESOURCES</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-3">
                      <MessageSquare className="w-5 h-5 text-white" /> 24/7 PRIORITY SUPPORT
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-3">
                      <Zap className="w-5 h-5 text-white" /> EMPIRE BLUEPRINT (PDF)
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-5 h-5 text-white" /> LIFETIME UPDATES
                    </div>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => setStep(1)} 
                className="w-full flex items-center justify-center gap-2 text-white text-[10px] font-black mt-4 opacity-30 uppercase italic hover:opacity-100"
              >
                <Home className="w-3 h-3" /> RETURN TO START
              </button>
            </div>
          )}
        </div>

        {/* FOOTER SYSTEM LABEL */}
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <p className="text-[8px] font-black text-white/20 tracking-[0.4em] uppercase italic">EMPIRE STRATEGY ENGINE BY THE PAD</p>
        </div>
      </div>
    </div>
  );
                }
                
