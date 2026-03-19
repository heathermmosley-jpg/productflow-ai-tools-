"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Wrench, Lightbulb, Hammer, HelpCircle, ShieldCheck, Gauge } from "lucide-react";

export default function App() {
  // Hardwired Steps: 1 (Home), 2 (Search), 3 (Tool Hub)
  const [step, setStep] = useState(1); 
  const [niche, setNiche] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans selection:bg-yellow-400 selection:text-black">
      <div className="max-w-xl mx-auto border-x-4 border-white/20 min-h-screen px-6 bg-zinc-950">
        
        {/* TOP NAVIGATION - MAX WHITE */}
        <div className="flex justify-between items-center py-10 mb-12 border-b-4 border-white">
          <div className="flex items-center gap-3">
            <Sparkles className="text-yellow-400 w-8 h-8 animate-pulse" />
            <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">THE PAD</h1>
          </div>
          <button className="bg-white text-black font-black text-sm uppercase px-6 py-2 rounded-full border-4 border-black hover:bg-yellow-400 transition-all shadow-[4px_4px_0px_white]">
            <HelpCircle className="w-5 h-5 inline mr-1" /> HELP
          </button>
        </div>

        {/* STEP 1: HOME SCREEN */}
        {step === 1 && (
          <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
            <h2 className="text-8xl font-black mb-12 italic text-yellow-400 leading-[0.85] uppercase tracking-tighter">
              BUILD<br/>YOUR<br/>EMPIRE.
            </h2>
            <button 
              onClick={() => setStep(2)}
              className="group w-full bg-white text-black py-10 rounded-full font-black text-4xl flex items-center justify-center gap-4 hover:bg-yellow-400 border-8 border-black transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
            >
              START HERE <ArrowRight strokeWidth={5} className="group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        )}

        {/* STEP 2: SEARCH SCREEN */}
        {step === 2 && (
          <div className="py-10 text-center animate-in slide-in-from-right-10">
            <h2 className="text-5xl font-black mb-10 uppercase italic text-white tracking-tighter underline decoration-yellow-400 decoration-8">CHOOSE NICHE</h2>
            <input 
              type="text" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="ENTER NICHE (E.G. DOGS)" 
              className="w-full p-10 rounded-[40px] bg-black border-4 border-white text-3xl mb-12 outline-none text-white text-center font-black placeholder:text-zinc-800 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 uppercase"
            />
            <button 
              onClick={() => setStep(3)}
              className="w-full bg-yellow-400 text-black py-8 rounded-full font-black text-3xl uppercase border-4 border-white hover:bg-white transition-all shadow-[0_10px_30px_rgba(250,204,21,0.3)]"
            >
              REVEAL TOOL HUB
            </button>
          </div>
        )}

        {/* STEP 3: THE TOOL HUB (NO ESCAPE UNTIL PAY) */}
        {step === 3 && (
          <div className="space-y-10 animate-in zoom-in-95 duration-500">
            <div className="text-center">
               <div className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-black text-lg uppercase mb-8 border-4 border-yellow-400 shadow-[6px_6px_0px_#facc15]">
                <Hammer className="w-6 h-6 animate-bounce" /> TOOL HUB LIVE
              </div>
              <h2 className="text-4xl font-black uppercase italic text-white leading-none">
                AI ANALYSIS FOR:<br/>
                <span className="text-yellow-400 text-5xl underline decoration-white decoration-4">{niche || 'DOGS'}</span>
              </h2>
            </div>

            {/* HIGH-CONTRAST TOOL CARDS */}
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-black rounded-[50px] border-4 border-white flex flex-col gap-6 relative group hover:border-yellow-400 transition-all">
                <div className="flex justify-between items-center">
                  <Wrench className="text-yellow-400 w-16 h-16" />
                  <span className="bg-white text-black px-6 py-2 rounded-full font-black text-sm uppercase border-2 border-black">LOCKED</span>
                </div>
                <div>
                  <p className="font-black uppercase text-3xl text-white">Market Gap Finder</p>
                  <p className="text-white font-bold text-base uppercase opacity-70 italic mt-2">Scanning "{niche || 'niche'}" Profit Margins...</p>
                </div>
              </div>
              
              <div className="p-8 bg-black rounded-[50px] border-4 border-white flex flex-col gap-6 relative group hover:border-yellow-400 transition-all">
                <div className="flex justify-between items-center">
                  <Lightbulb className="text-yellow-400 w-16 h-16" />
                  <span className="bg-white text-black px-6 py-2 rounded-full font-black text-sm uppercase border-2 border-black">LOCKED</span>
                </div>
                <div>
                  <p className="font-black uppercase text-3xl text-white">Profit Estimator</p>
                  <p className="text-white font-bold text-base uppercase opacity-70 italic mt-2">Forecasting 12-Month Revenue...</p>
                </div>
              </div>
            </div>

            {/* THE PAYWALL - THE ONLY WAY OUT */}
            <div className="bg-yellow-400 p-2 rounded-[60px] mt-16 shadow-[0_0_80px_rgba(250,204,21,0.4)]">
              <div className="bg-black rounded-[54px] p-12 text-center border-4 border-white">
                <h3 className="text-5xl font-black mb-6 text-white italic uppercase tracking-tighter">UNLOCK THE<br/>BLUEPRINT</h3>
                <p className="text-white mb-12 font-black text-2xl italic underline decoration-yellow-400 decoration-4">Get the full $10k/mo strategy.</p>
                
                {/* DIRECT STRIPE LINK */}
                <a 
                  href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02"
                  className="block w-full bg-white text-black py-10 rounded-full font-black text-4xl uppercase hover:bg-yellow-400 transition-all text-center no-underline border-8 border-black shadow-[0_15px_40px_rgba(255,255,255,0.2)]"
                >
                  PAY NOW
                </a>
                
                <div className="mt-10 flex items-center justify-center gap-4 text-white font-black text-lg uppercase tracking-widest">
                  <ShieldCheck className="w-8 h-8 text-yellow-400" /> SECURE STRIPE
                </div>
              </div>
            </div>

            {/* BRIGHTEST START OVER BUTTON */}
            <button 
              onClick={() => setStep(1)} 
              className="w-full text-center text-white text-lg font-black uppercase mt-20 py-8 border-8 border-white rounded-full bg-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_white]"
            >
              ← RESET SYSTEM
            </button>
          </div>
        )}
      </div>
    </div>
  );
      }
           
