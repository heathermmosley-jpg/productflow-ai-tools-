"use client";

import { useState } from "react";
import { Sparkles, Wrench, BarChart3, Target, Search, Smartphone, Globe, Code, ChevronRight, PencilLine, ShoppingCart, Zap, ArrowRight, LayoutGrid, ShieldAlert } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<{name: string, url: string} | null>(null);

  // MIGRATED TOOLS FROM PRODUCT FLOW AI
  // Just keep adding to this list as you find them on the old site
  const allTools = [
    { name: "GAP FINDER", cat: "MARKET", icon: Wrench },
    { name: "PROFIT MATH", cat: "FINANCE", icon: BarChart3 },
    { name: "SEO SCANNER", cat: "TRAFFIC", icon: Search },
    { name: "NICHE HUNTER", cat: "STRATEGY", icon: Target },
    { name: "APP ARCHITECT", cat: "TECH", icon: Smartphone },
    { name: "GLOBAL AUDIT", cat: "MARKET", icon: Globe },
    { name: "LOGIC BUILDER", cat: "TECH", icon: Code },
    // ... Add the other 33 tools here
  ];

  const filteredTools = allTools.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePayment = () => { if (selectedProduct) window.location.href = selectedProduct.url; };

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase flex items-center justify-center p-4">
      <div className="w-full max-w-6xl border-x-8 border-white min-h-[90vh] flex flex-col p-6 md:p-12 bg-zinc-950 shadow-2xl relative">
        
        {/* EMERGENCY STATUS HEADER */}
        <div className="flex justify-between items-center py-4 border-b-4 border-red-600 mb-6 bg-red-600/10 px-4">
          <div className="flex items-center gap-2 text-red-500 animate-pulse">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-black text-xs tracking-tighter">EXTERNAL STRIPE BYPASS ACTIVE // SECURE GUMROAD TUNNEL</span>
          </div>
        </div>

        {/* MAIN TERMINAL */}
        <div className="flex-grow">
          {step === 1 && (
            <div className="py-24 text-center animate-in zoom-in">
              <h2 className="text-7xl md:text-[13rem] font-black mb-12 italic text-yellow-400 leading-[0.8] tracking-tighter uppercase">THE<br/>VAULT.</h2>
              <button onClick={() => setStep(2)} className="bg-white text-black px-24 py-12 rounded-full font-black text-4xl border-4 border-black shadow-[0_12px_0_#facc15] active:translate-y-2">OPEN ARSENAL</button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-5">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b-4 border-white pb-8">
                <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-yellow-400 uppercase leading-none">SELECT TOOL</h2>
                <div className="relative w-full md:w-1/2">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 w-8 h-8" />
                  <input 
                    type="text" 
                    placeholder="SEARCH 40+ TOOLS..." 
                    className="w-full bg-zinc-900 border-4 border-white/20 p-8 pl-20 rounded-2xl text-2xl font-black outline-none focus:border-yellow-400 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* DYNAMIC SCROLLING TOOL GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[55vh] overflow-y-auto pr-4 custom-scrollbar py-4">
                {filteredTools.map((tool, i) => (
                  <div key={i} onClick={() => setStep(3)} className="p-8 bg-zinc-900 border-4 border-white/10 rounded-[35px] flex flex-col gap-4 hover:border-yellow-400 hover:scale-[1.02] cursor-pointer transition-all group">
                    <tool.icon className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-black text-2xl italic leading-none">{tool.name}</p>
                      <p className="text-[10px] font-bold opacity-30 mt-1">CAT: {tool.cat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-10 space-y-12 animate-in zoom-in">
              <div className="text-center space-y-4">
                <h2 className="text-5xl md:text-9xl font-black italic text-white leading-none uppercase tracking-tighter">CHOOSE PATH</h2>
                <p className="text-yellow-400 font-black text-xl italic tracking-widest uppercase">BYPASSING BROKEN GATEWAY...</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <button 
                  onClick={() => setSelectedProduct({name: "IRRESISTIBLE STRATEGY", url: "https://legacyprovault.gumroad.com/l/Irresist"})}
                  className={`p-12 border-4 rounded-[50px] text-left transition-all ${selectedProduct?.name === "IRRESISTIBLE STRATEGY" ? 'bg-yellow-400 text-black border-white' : 'bg-zinc-900 border-white/20'}`}
                >
                  <ShoppingCart className="mb-4 w-10 h-10" />
                  <p className="text-3xl font-black italic uppercase leading-none">SINGLE<br/>STRATEGY</p>
                </button>

                <button 
                  onClick={() => setSelectedProduct({name: "THE FULL VAULT", url: "https://legacyprovault.gumroad.com"})}
                  className={`p-12 border-4 rounded-[50px] text-left transition-all ${selectedProduct?.name === "THE FULL VAULT" ? 'bg-yellow-400 text-black border-white' : 'bg-zinc-900 border-white/20'}`}
                >
                  <LayoutGrid className="mb-4 w-10 h-10" />
                  <p className="text-3xl font-black italic uppercase leading-none">FULL VAULT<br/>ACCESS</p>
                </button>
              </div>

              {selectedProduct && (
                <div className="flex justify-center pt-8">
                  <button onClick={handlePayment} className="w-full md:w-2/3 bg-white text-black py-12 rounded-full font-black text-5xl border-8 border-black shadow-[0_15px_0_#facc15] animate-bounce uppercase italic">
                    PAY VIA GUMROAD <ArrowRight className="inline ml-2 w-16 h-16" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t-4 border-white/5 flex justify-between items-center opacity-20 font-black italic text-xs md:text-xl uppercase">
          <button onClick={() => setStep(1)} className="hover:text-white underline">SYSTEM REBOOT</button>
          <span>LEGACY PRO VAULT // BYPASS V1.2</span>
        </div>
      </div>
    </div>
  );
}
