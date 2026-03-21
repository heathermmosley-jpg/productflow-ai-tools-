"use client";

import { useState } from "react";
import { Sparkles, Wrench, BarChart3, Target, Search, Smartphone, Globe, Code, ChevronRight, PencilLine, ShoppingCart, Zap, ArrowRight, LayoutGrid, Bot, CheckCircle2, ShoppingBag, ArrowLeft, Brain, Flame, HeartPulse, Rocket, ShieldCheck, Lock } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [selectedTool, setSelectedTool] = useState<{name: string, cat: string} | null>(null);

  const VAULT_URL = "https://legacyprovault.gumroad.com";
  const STRIPE_URL = "https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02";
  const DIRECT_STRATEGY = "https://legacyprovault.gumroad.com/l/Irresist";

  const allTools = [
    { name: "GAP FINDER", cat: "MARKET", icon: Wrench },
    { name: "PROFIT MATH", cat: "FINANCE", icon: BarChart3 },
    { name: "SEO SCANNER", cat: "TRAFFIC", icon: Search },
    { name: "NICHE HUNTER", cat: "STRATEGY", icon: Target },
    { name: "FOCUS ENGINE", cat: "MINDSET", icon: Brain },
    { name: "ADRENALINE X", cat: "ENERGY", icon: Flame },
    { name: "VITALITY SCAN", cat: "HEALTH", icon: HeartPulse },
    { name: "SCALE BOT", cat: "AUTOMATION", icon: Rocket },
  ];

  const handlePurchase = (url: string) => {
    window.open(url, "_blank");
    setStep(5); 
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase flex items-center justify-center p-4">
      <div className="w-full max-w-6xl border-x-8 border-white min-h-[90vh] flex flex-col p-6 md:p-12 bg-zinc-950 shadow-2xl relative">
        
        {/* CLEAN HEADER - RED BAR REMOVED */}
        <div className="flex justify-between items-center py-4 border-b-4 border-white mb-6 sticky top-0 bg-zinc-950 z-50">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-6 h-6" />
            <h1 className="text-xl md:text-3xl font-black italic tracking-tighter uppercase">PRODUCT FLOW AI</h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 text-yellow-400/50 font-black text-[10px] tracking-widest">
               <ShieldCheck className="w-4 h-4" /> SECURE GATEWAY ACTIVE
             </div>
             <button onClick={() => handlePurchase(VAULT_URL)} className="bg-white text-black px-4 py-1 rounded-full font-black text-[10px] md:text-xs flex items-center gap-2 hover:bg-yellow-400 transition-colors">
               <ShoppingBag className="w-4 h-4" /> MAIN VAULT
             </button>
          </div>
        </div>

        <div className="flex-grow">
          {step === 1 && (
            <div className="py-24 text-center animate-in zoom-in">
              <h2 className="text-7xl md:text-[12rem] font-black mb-12 italic text-yellow-400 leading-[0.8] tracking-tighter uppercase text-glow">THE<br/>VAULT.</h2>
              <button onClick={() => setStep(2)} className="bg-white text-black px-24 py-12 rounded-full font-black text-4xl border-4 border-black shadow-[0_12px_0_#facc15] active:translate-y-2 uppercase">START SCAN</button>
            </div>
          )}

          {step === 2 && (
            <div className="py-20 space-y-12 animate-in slide-in-from-right-5 text-center">
              <div className="space-y-6 max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none">SEARCH YOUR<br/><span className="text-yellow-400">NICHE</span></h2>
                <div className="relative group">
                  <input 
                    type="text" placeholder="E.G. REAL ESTATE / FITNESS..." 
                    className="w-full bg-zinc-900 border-4 border-white p-10 md:p-16 rounded-3xl text-3xl md:text-6xl font-black outline-none focus:border-yellow-400 text-center uppercase transition-all"
                    value={niche} onChange={(e) => setNiche(e.target.value)}
                  />
                  <button onClick={() => setStep(3)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 p-6 rounded-2xl text-black shadow-xl hover:scale-110 active:scale-95 transition-all">
                    <Search className="w-10 h-10" />
                  </button>
                </div>
                <p className="text-white/20 font-black italic text-sm md:text-xl tracking-widest uppercase">SCANNING 42 TRANSFORMATIONS FOR "{niche || 'EMPIRE'}"</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in zoom-in">
              <div className="flex justify-between items-end border-b-4 border-yellow-400 pb-4">
                <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">THE ARSENAL</h2>
                <button onClick={() => setStep(2)} className="text-yellow-400 font-black text-xs md:text-xl underline underline-offset-8">CHANGE NICHE</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar py-2">
                {allTools.map((tool, i) => (
                  <div key={i} onClick={() => { setSelectedTool(tool); setStep(4); }} className="p-8 bg-zinc-900 border-4 border-white/10 rounded-[35px] hover:border-white hover:bg-black cursor-pointer transition-all group shadow-xl">
                    <tool.icon className="w-10 h-10 text-yellow-400 mb-4 group-hover:rotate-12 transition-transform" />
                    <p className="font-black text-xl italic leading-none">{tool.name}</p>
                    <p className="text-[10px] font-bold opacity-30 mt-2">SECURE ACCESS</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && selectedTool && (
            <div className="py-10 space-y-8 animate-in slide-in-from-bottom-10 max-w-5xl mx-auto">
              <div className="bg-zinc-900 border-4 border-white rounded-[50px] p-12 text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-10 py-2 font-black italic text-xl -rotate-2 transform translate-x-4">SELECTED</div>
                <selectedTool.icon className="w-24 h-24 text-yellow-400 mx-auto" />
                <h3 className="text-6xl md:text-9xl font-black italic text-white leading-none tracking-tighter uppercase">{selectedTool.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <button onClick={() => handlePurchase(DIRECT_STRATEGY)} className="bg-yellow-400 text-black py-10 rounded-full font-black text-3xl border-4 border-white shadow-[0_10px_0_white] uppercase italic">
                    GET THIS TOOL
                  </button>
                  <button onClick={() => handlePurchase(VAULT_URL)} className="bg-white text-black py-10 rounded-full font-black text-3xl border-4 border-black shadow-[0_10px_0_#333] uppercase italic">
                    BROWSE VAULT
                  </button>
                </div>
                <button onClick={() => setStep(3)} className="block mx-auto text-white/30 text-sm font-black underline uppercase hover:text-white">← BACK TO ALL TOOLS</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="py-20 text-center animate-in zoom-in space-y-12">
              <div className="inline-block bg-yellow-400 text-black px-12 py-4 rounded-full font-black text-4xl italic uppercase">CHECKOUT LAUNCHED</div>
              <h2 className="text-5xl md:text-9xl font-black italic text-white leading-none uppercase tracking-tighter">BUILD YOUR<br/>EMPIRE</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button onClick={() => setStep(3)} className="bg-yellow-400 text-black px-16 py-10 rounded-full font-black text-3xl md:text-5xl border-4 border-white shadow-[0_12px_0_white] hover:scale-105 active:translate-y-2 uppercase italic flex items-center justify-center gap-4">
                  <ArrowLeft className="w-10 h-10" /> KEEP SHOPPING
                </button>
                <button onClick={() => setStep(1)} className="bg-zinc-800 text-white px-12 py-10 rounded-full font-black text-2xl border-4 border-white/20 uppercase italic">NEW SEARCH</button>
              </div>
            </div>
          )}
        </div>

        {/* CLEAN FOOTER - RED LINE REMOVED */}
        <div className="mt-8 pt-8 border-t-4 border-white/10 flex justify-between items-center opacity-30 font-black italic text-sm md:text-xl uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5" /> 256-BIT ENCRYPTION ACTIVE
          </div>
          <span>LEGACY PRO VAULT // 2026</span>
        </div>
      </div>
    </div>
  );
    }
                
