"use client";

import { useState } from "react";
import { Sparkles, Wrench, Lightbulb, Hammer, ShieldCheck, ArrowRight, Zap, HelpCircle, BookOpen, ChevronRight, Home, PencilLine, Target, BarChart3, Search } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [selectedTool, setSelectedTool] = useState("");
  const [showPay, setShowPay] = useState(false);

  const tools = [
    { id: "GAP", name: "GAP FINDER", icon: Wrench, desc: "IDENTIFY MARKET HOLES" },
    { id: "PROFIT", name: "PROFIT TOOL", icon: BarChart3, desc: "CALCULATE REVENUE" },
    { id: "HUNTER", name: "NICHE HUNTER", icon: Target, desc: "TARGET SPECIFIC AUDIENCES" },
    { id: "SEARCH", name: "SEO SCANNER", icon: Search, desc: "KEYWORD DOMINANCE" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase overflow-x-hidden flex items-center justify-center p-4 md:p-10">
      {/* RESPONSIVE SKELETON: Grows from 'max-w-md' on phone to 'max-w-5xl' on desktop */}
      <div className="w-full max-w-md md:max-w-5xl border-x-4 md:border-x-8 border-white min-h-[90vh] flex flex-col p-6 md:p-16 bg-zinc-950 shadow-2xl relative transition-all duration-500">
        
        {/* HEADER */}
        <div className="flex justify-between items-center py-6 border-b-4 border-white mb-10">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-8 h-8 md:w-12 md:h-12" />
            <h1 className="text-2xl md:text-5xl font-black italic tracking-tighter uppercase">THE PAD</h1>
          </div>
          <HelpCircle className="w-6 h-6 md:w-10 md:h-10 opacity-30" />
        </div>

        <div className="flex-grow">
          {/* STEP 1: LANDING */}
          {step === 1 && (
            <div className="py-12 md:py-24 text-center animate-in fade-in zoom-in">
              <h2 className="text-6xl md:text-[11rem] font-black mb-12 italic text-yellow-400 leading-[0.8] tracking-tighter uppercase">BUILD YOUR<br/>EMPIRE.</h2>
              <button onClick={() => setStep(2)} className="w-full md:w-1/2 mx-auto bg-white text-black py-8 md:py-12 rounded-full font-black text-3xl md:text-5xl border-4 border-black shadow-[0_10px_0_#facc15] active:translate-y-2 transition-all">START HERE</button>
            </div>
          )}

          {/* STEP 2: NICHE INPUT */}
          {step === 2 && (
            <div className="py-8 space-y-12 text-center animate-in slide-in-from-right-5">
              <div className="max-w-3xl mx-auto space-y-6 text-left">
                <label className="text-yellow-400 font-black text-xs md:text-xl tracking-[0.3em] block italic uppercase ml-4">NICHE EXAMPLE: REAL ESTATE / SAAS</label>
                <input 
                  type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="ENTER NICHE..." 
                  className="w-full p-8 md:p-16 rounded-3xl bg-black border-4 border-white text-2xl md:text-6xl outline-none text-white text-center font-black uppercase placeholder:opacity-10 focus:border-yellow-400 transition-colors" 
                />
              </div>
              <button onClick={() => setStep(3)} className="w-full md:w-1/2 bg-yellow-400 text-black py-8 md:py-12 rounded-full font-black text-2xl md:text-4xl border-4 border-white shadow-[0_8px_0_white]">REVEAL TOOL HUB</button>
              <button onClick={() => setStep(1)} className="block w-full text-white/30 text-xs font-black underline uppercase">← BACK TO START</button>
            </div>
          )}

          {/* STEP 3 & 4: THE FULL ARSENAL (RESPONSIVE GRID ON DESKTOP) */}
          {(step === 3 || step === 4) && !showPay && (
            <div className="space-y-8 animate-in zoom-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <h2 className="text-xl md:text-5xl font-black italic uppercase tracking-tighter border-b-4 border-yellow-400">SELECT TOOL: {niche || 'REQUIRED'}</h2>
                <button onClick={() => setStep(2)} className="text-yellow-400 flex items-center gap-2 font-black md:text-2xl hover:scale-105 transition-transform">
                  <PencilLine className="w-6 h-6 md:w-10 md:h-10" /> <span className="hidden md:inline">EDIT NICHE</span>
                </button>
              </div>

              {/* TOOL LIST: 1 col on mobile, 2 cols on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {tools.map((tool) => (
                  <div 
                    key={tool.id}
                    onClick={() => { setSelectedTool(tool.id); setStep(4); }}
                    className={`p-6 md:p-12 rounded-[30px] md:rounded-[50px] border-4 flex justify-between items-center transition-all cursor-pointer ${selectedTool === tool.id ? 'bg-white text-black border-yellow-400 scale-[1.03] shadow-2xl' : 'bg-black border-white/40 hover:border-white'}`}
                  >
                    <div className="flex items-center gap-4 md:gap-8">
                      <tool.icon className={`${selectedTool === tool.id ? 'text-black' : 'text-yellow-400'} w-10 h-10 md:w-16 md:h-16`} />
                      <div className="flex flex-col">
                        <p className="font-black text-lg md:text-3xl uppercase italic leading-none">{tool.name}</p>
                        <p className={`text-[8px] md:text-xs font-bold mt-1 ${selectedTool === tool.id ? 'text-black/60' : 'text-white/40'}`}>{tool.desc}</p>
                      </div>
                    </div>
                    {selectedTool === tool.id ? <Zap className="text-black animate-pulse md:w-10 md:h-10" /> : <ChevronRight className="opacity-20 md:w-10 md:h-10" />}
                  </div>
                ))}
              </div>

              {step === 4 && (
                <div className="flex justify-center pt-8">
                  <button 
                    onClick={() => setShowPay(true)} 
                    className="w-full md:w-2/3 bg-yellow-400 text-black py-8 md:py-14 rounded-[40px] md:rounded-[60px] font-black text-3xl md:text-6xl border-4 border-white shadow-[0_15px_0_white] animate-in slide-in-from-bottom-5 uppercase italic active:translate-y-2"
                  >
                    GET STRATEGY <ArrowRight className="inline ml-2 w-10 h-10 md:w-20 md:h-20" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 5: PAYWALL */}
          {showPay && (
            <div className="py-6 flex flex-col items-center animate-in slide-in-from-bottom-10">
              <div className="w-full md:max-w-4xl bg-yellow-400 p-1 md:p-3 rounded-[50px] md:rounded-[80px] border-4 border-white shadow-2xl">
                <div className="bg-black rounded-[46px] md:rounded-[70px] p-10 md:p-24 text-center border-4 border-white">
                  <h3 className="text-5xl md:text-9xl font-black mb-6 text-white italic leading-[0.8] uppercase tracking-tighter">UNLOCK<br/>RESULTS</h3>
                  <p className="text-white/60 mb-10 font-black text-xs md:text-2xl italic uppercase tracking-widest">FOR NICHE: {niche}</p>
                  <a href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02" onClick={() => setTimeout(() => setStep(6), 2000)} className="block w-full bg-white text-black py-10 md:py-16 rounded-full font-black text-4xl md:text-7xl text-center no-underline border-8 border-black shadow-[0_15px_0_#333] uppercase">PAY NOW</a>
                  <div className="mt-12 flex items-center justify-center gap-3 text-white/30 font-black text-xs md:text-lg uppercase tracking-widest"><ShieldCheck className="w-6 h-6 md:w-10 md:h-10 text-yellow-400" /> SECURE STRIPE</div>
                </div>
              </div>
              <button onClick={() => setShowPay(false)} className="mt-12 text-white/40 font-black text-sm md:text-2xl italic underline uppercase hover:text-yellow-400 transition-colors">← BACK TO TOOL HUB</button>
            </div>
          )}

          {/* STEP 6 & 7: SUCCESS */}
          {step >= 6 && (
            <div className="space-y-10 animate-in zoom-in py-10">
              <div className="bg-white text-black p-6 md:p-12 rounded-3xl text-center font-black text-2xl md:text-6xl italic shadow-[10px_10px_0px_#facc15] uppercase tracking-tighter">ACCESS GRANTED</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button onClick={() => {setStep(3); setShowPay(false); setSelectedTool("");}} className="p-12 bg-zinc-900 border-4 border-white rounded-[40px] flex flex-col items-center gap-6 hover:bg-yellow-400 hover:text-black group">
                  <RefreshCcw className="text-yellow-400 w-16 h-16 group-hover:text-black" /><span className="text-xl font-black uppercase">NEW ANALYSIS</span>
                </button>
                <button onClick={() => setStep(7)} className="p-12 bg-zinc-900 border-4 border-white rounded-[40px] flex flex-col items-center gap-6 hover:bg-yellow-400 hover:text-black group">
                  <BookOpen className="text-yellow-400 w-16 h-16 group-hover:text-black" /><span className="text-xl font-black uppercase">RESOURCES</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-10 border-t-4 border-white/10 pt-10 text-center">
          <button onClick={() => {setStep(1); setNiche(""); setSelectedTool(""); setShowPay(false);}} className="text-xs md:text-xl font-black text-white/20 italic tracking-widest uppercase underline hover:text-white transition-colors">RESET TERMINAL SYSTEM</button>
        </div>
      </div>
    </div>
  );
}

function RefreshCcw(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> </svg>
  )
    }
            
