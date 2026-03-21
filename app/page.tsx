"use client";

import { useState } from "react";
import { Sparkles, Search, ShoppingBag, ArrowLeft, Zap, LayoutGrid, Wrench, BarChart3, Target, Smartphone, Globe, Code, Brain, Flame, HeartPulse, Rocket } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [selectedTool, setSelectedTool] = useState<{name: string, cat: string} | null>(null);

  const VAULT_URL = "https://legacyprovault.gumroad.com";
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
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl border-x-8 border-white min-h-[90vh] flex flex-col p-6 md:p-12 bg-zinc-950 shadow-2xl relative">
        
        {/* HEADER */}
        <div className="flex justify-between items-center py-6 border-b-4 border-white mb-8 sticky top-0 bg-zinc-950 z-50">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-8 h-8" />
            <h1 className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase leading-none">THE PAD</h1>
          </div>
          <button onClick={() => handlePurchase(VAULT_URL)} className="bg-white text-black px-6 py-2 rounded-full font-black text-xs md:text-sm flex items-center gap-2 hover:bg-yellow-400 transition-all border-2 border-black uppercase">
            <ShoppingBag className="w-4 h-4" /> BROWSE STORE
          </button>
        </div>

        <div className="flex-grow">
          {step === 1 && (
            <div className="py-24 text-center">
              <h2 className="text-7xl md:text-[10rem] font-black mb-12 italic text-yellow-400 leading-[0.8] tracking-tighter uppercase">ACCESS<br/>GRANTED.</h2>
              <button onClick={() => setStep(2)} className="bg-white text-black px-16 py-10 rounded-full font-black text-3xl border-4 border-black shadow-[0_12px_0_#facc15] active:translate-y-2 uppercase">IDENTIFY NICHE</button>
            </div>
          )}

          {step === 2 && (
            <div className="py-20 space-y-12 text-center">
              <div className="space-y-6 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none">TARGET<br/><span className="text-yellow-400">MARKET</span></h2>
                <div className="relative">
                  <input 
                    type="text" placeholder="E.G. REAL ESTATE..." 
                    className="w-full bg-zinc-900 border-4 border-white p-10 md:p-16 rounded-3xl text-3xl md:text-6xl font-black outline-none focus:border-yellow-400 text-center uppercase"
                    value={niche} onChange={(e) => setNiche(e.target.value)}
                  />
                  <button onClick={() => setStep(3)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 p-6 rounded-2xl text-black shadow-xl">
                    <Search className="w-10 h-10 md:w-14 md:h-14" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b-4 border-yellow-400 pb-4 uppercase font-black italic">
                <h2 className="text-3xl md:text-6xl tracking-tighter">TRANSFORMATION HUB</h2>
                <button onClick={() => setStep(2)} className="text-yellow-400 text-xs md:text-xl underline underline-offset-8">CHANGE NICHE</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-4">
                {allTools.map((tool, i) => (
                  <div key={i} onClick={() => { setSelectedTool(tool); setStep(4); }} className="p-8 bg-zinc-900 border-4 border-white/10 rounded-[35px] hover:border-white hover:bg-black cursor-pointer transition-all group">
                    <tool.icon className="w-10 h-10 text-yellow-400 mb-4 group-hover:rotate-12 transition-transform" />
                    <p className="font-black text-xl italic leading-none">{tool.name}</p>
                    <p className="text-[10px] font-bold opacity-30 mt-2 uppercase">READY FOR {niche || 'ACTION'}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && selectedTool && (
            <div className="py-10 space-y-8 max-w-5xl mx-auto">
              <div className="bg-zinc-900 border-4 border-white rounded-[50px] p-12 text-center space-y-8">
                <selectedTool.icon className="w-24 h-24 text-yellow-400 mx-auto" />
                <h3 className="text-6xl md:text-9xl font-black italic text-white leading-none tracking-tighter uppercase">{selectedTool.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <button onClick={() => handlePurchase(DIRECT_STRATEGY)} className="bg-yellow-400 text-black py-10 rounded-full font-black text-3xl border-4 border-white shadow-[0_10px_0_white] uppercase italic">BUY THIS TOOL</button>
                  <button onClick={() => handlePurchase(VAULT_URL)} className="bg-white text-black py-10 rounded-full font-black text-3xl border-4 border-black shadow-[0_10px_0_#333] uppercase italic">ENTER VAULT</button>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="py-20 text-center space-y-12">
              <div className="inline-block bg-yellow-400 text-black px-12 py-4 rounded-full font-black text-4xl italic uppercase">TUNNEL OPENED</div>
              <h2 className="text-5xl md:text-9xl font-black italic text-white leading-none uppercase tracking-tighter">EXPAND THE<br/>EMPIRE</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button onClick={() => setStep(3)} className="bg-white text-black px-12 py-8 rounded-full font-black text-3xl border-4 border-black shadow-[0_12px_0_#facc15] uppercase italic flex items-center justify-center gap-4">
                  <ArrowLeft className="w-8 h-8" /> KEEP SHOPPING
                </button>
                <button onClick={() => setStep(1)} className="bg-zinc-800 text-white px-12 py-8 rounded-full font-black text-2xl border-4 border-white/20 uppercase italic">NEW SCAN</button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t-4 border-white/5 flex justify-between items-center opacity-20 font-black italic text-sm md:text-xl uppercase tracking-widest">
          <span>SECURE LEGACY BRIDGE</span>
          <span>LEGACY PRO VAULT // 2026</span>
        </div>
      </div>
    </div>
  );
     }
