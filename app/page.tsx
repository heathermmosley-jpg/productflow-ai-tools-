"use client";

import { useState } from "react";
import { Sparkles, Wrench, Lightbulb, ShieldCheck, ArrowRight, Zap, HelpCircle, BookOpen, ChevronRight, PencilLine, Target, BarChart3, ShoppingCart, LayoutGrid } from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [selectedTool, setSelectedTool] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<{name: string, url: string, desc: string} | null>(null);

  const tools = [
    { id: "GAP", name: "GAP FINDER", icon: Wrench, desc: "IDENTIFY MARKET HOLES" },
    { id: "PROFIT", name: "PROFIT TOOL", icon: BarChart3, desc: "CALCULATE REVENUE" },
    { id: "HUNTER", name: "NICHE HUNTER", icon: Target, desc: "TARGET AUDIENCES" }
  ];

  const products = [
    { 
      name: "IRRESISTIBLE STRATEGY", 
      url: "https://legacyprovault.gumroad.com/l/Irresist", 
      desc: "DIRECT NICHE TRANSFORMATION" 
    },
    { 
      name: "LEGACY PRO VAULT", 
      url: "https://legacyprovault.gumroad.com", 
      desc: "BROWSE ALL EMPIRE TOOLS" 
    },
    { 
      name: "PAINTERS CALCULATOR", 
      url: "https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02", 
      desc: "SPECIFIC INDUSTRY MATH" 
    }
  ];

  // FORCE REDIRECT FUNCTION
  const handlePayment = () => {
    if (selectedProduct) {
      window.location.href = selectedProduct.url;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase overflow-x-hidden flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-md md:max-w-5xl border-x-4 md:border-x-8 border-white min-h-[90vh] flex flex-col p-6 md:p-16 bg-zinc-950 shadow-2xl relative transition-all">
        
        {/* HEADER */}
        <div className="flex justify-between items-center py-6 border-b-4 border-white mb-10">
          <div className="flex items-center gap-2 text-yellow-400">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
            <h1 className="text-2xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-white">THE PAD</h1>
          </div>
          <HelpCircle className="w-6 h-6 md:w-10 md:h-10 opacity-30" />
        </div>

        <div className="flex-grow">
          {/* STEP 1: LANDING */}
          {step === 1 && (
            <div className="py-12 md:py-24 text-center animate-in fade-in zoom-in">
              <h2 className="text-6xl md:text-[10rem] font-black mb-12 italic text-yellow-400 leading-[0.8] tracking-tighter uppercase">BUILD YOUR<br/>EMPIRE.</h2>
              <button onClick={() => setStep(2)} className="w-full md:w-1/2 mx-auto bg-white text-black py-8 md:py-12 rounded-full font-black text-3xl md:text-5xl border-4 border-black shadow-[0_10px_0_#facc15] active:translate-y-2">ENTER LAB</button>
            </div>
          )}

          {/* STEP 2: NICHE INPUT */}
          {step === 2 && (
            <div className="py-8 space-y-12 text-center animate-in slide-in-from-right-5">
              <div className="max-w-3xl mx-auto space-y-6 text-left">
                <label className="text-yellow-400 font-black text-xs md:text-xl tracking-[0.3em] block italic uppercase ml-4">DEFINE YOUR TARGET NICHE</label>
                <input 
                  type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="E.G. DOGS / REAL ESTATE..." 
                  className="w-full p-8 md:p-16 rounded-3xl bg-black border-4 border-white text-2xl md:text-6xl outline-none text-white text-center font-black uppercase placeholder:opacity-10 focus:border-yellow-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                />
              </div>
              <button onClick={() => setStep(3)} className="w-full md:w-1/2 bg-yellow-400 text-black py-8 md:py-12 rounded-full font-black text-2xl md:text-4xl border-4 border-white shadow-[0_8px_0_white] hover:bg-white transition-all">REVEAL TOOL HUB</button>
            </div>
          )}

          {/* STEP 3: TOOL HUB */}
          {step === 3 && (
            <div className="space-y-8 animate-in zoom-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                 <h2 className="text-xl md:text-5xl font-black italic uppercase tracking-tighter border-b-4 border-yellow-400">ANALYSIS: {niche || 'REQUIRED'}</h2>
                 <button onClick={() => setStep(2)} className="text-yellow-400 flex items-center gap-2 font-black md:text-xl hover:scale-105">
                   <PencilLine className="w-6 h-6 md:w-8 md:h-8" /> EDIT NICHE
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {tools.map((tool) => (
                  <div 
                    key={tool.id}
                    onClick={() => { setSelectedTool(tool.id); setStep(4); }}
                    className={`p-8 md:p-12 rounded-[40px] border-4 flex justify-between items-center transition-all cursor-pointer ${selectedTool === tool.id ? 'bg-white text-black border-yellow-400 scale-[1.03] shadow-2xl' : 'bg-black border-white/20 hover:border-white'}`}
                  >
                    <div className="flex items-center gap-6">
                      <tool.icon className={`${selectedTool === tool.id ? 'text-black' : 'text-yellow-400'} w-10 h-10 md:w-16 md:h-16`} />
                      <p className="font-black text-xl md:text-3xl uppercase italic leading-none">{tool.name}</p>
                    </div>
                    <ChevronRight className="opacity-20" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: GUMROAD MARKETPLACE */}
          {step === 4 && (
            <div className="space-y-8 animate-in slide-in-from-bottom-5">
              <div className="text-center md:text-left mb-6">
                 <h2 className="text-2xl md:text-5xl font-black italic text-yellow-400 uppercase leading-none">STRATEGY DETECTED</h2>
                 <p className="text-xs md:text-xl text-white/50 font-black italic mt-2 uppercase">CHOOSE YOUR PATH TO DOMINATE {niche}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {products.map((prod) => (
                  <div 
                    key={prod.name}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-8 md:p-12 rounded-[40px] border-4 flex justify-between items-center cursor-pointer transition-all ${selectedProduct?.name === prod.name ? 'bg-yellow-400 text-black border-white scale-[1.02] shadow-[0_0_30px_rgba(250,204,21,0.3)]' : 'bg-zinc-900 border-white/10 hover:border-white'}`}
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <ShoppingCart className="w-8 h-8 md:w-14 md:h-14" />
                      <div className="text-left">
                        <p className="font-black text-xl md:text-4xl italic leading-none">{prod.name}</p>
                        <p className="text-[10px] md:text-lg font-bold opacity-60 uppercase">{prod.desc}</p>
                      </div>
                    </div>
                    {selectedProduct?.name === prod.name && <Zap className="text-black fill-black md:w-10 md:h-10 animate-pulse" />}
                  </div>
                ))}
              </div>

              {selectedProduct && (
                <div className="pt-8 flex justify-center">
                  <button onClick={() => setStep(5)} className="w-full md:w-2/3 bg-white text-black py-8 md:py-16 rounded-full font-black text-3xl md:text-7xl border-4 border-black shadow-[0_15px_0_#facc15] animate-bounce uppercase italic">
                    CONFIRM ORDER <ArrowRight className="inline ml-2 w-10 h-10 md:w-20 md:h-20" />
                  </button>
                </div>
              )}
              <button onClick={() => setStep(3)} className="block w-full text-center text-white/30 text-xs md:text-xl font-black underline uppercase">← BACK TO TOOLS</button>
            </div>
          )}

          {/* STEP 5: THE FINAL PAYWALL (ACTION-BASED) */}
          {step === 5 && selectedProduct && (
            <div className="py-6 flex flex-col items-center animate-in zoom-in">
              <div className="w-full md:max-w-4xl bg-yellow-400 p-1 md:p-3 rounded-[50px] md:rounded-[80px] border-4 border-white shadow-2xl">
                <div className="bg-black rounded-[46px] md:rounded-[70px] p-10 md:p-24 text-center border-4 border-white">
                  <h3 className="text-5xl md:text-9xl font-black mb-6 text-white italic leading-[0.8] uppercase tracking-tighter">ORDER<br/>SUMMARY</h3>
                  <div className="border-2 border-yellow-400 inline-block px-8 py-3 rounded-full mb-10">
                    <p className="text-yellow-400 font-black text-xl md:text-4xl italic uppercase">{selectedProduct.name}</p>
                  </div>
                  
                  {/* DIRECT ACTION BUTTON */}
                  <button 
                    onClick={handlePayment}
                    className="block w-full bg-white text-black py-10 md:py-20 rounded-full font-black text-4xl md:text-8xl text-center border-8 border-black shadow-[0_20px_0_#333] uppercase hover:bg-yellow-400 transition-all active:translate-y-4"
                  >
                    PAY NOW
                  </button>
                  
                  <div className="mt-12 flex items-center justify-center gap-4 text-white/30 font-black text-xs md:text-2xl uppercase tracking-widest leading-none">
                     <LayoutGrid className="text-yellow-400 md:w-10 md:h-10" /> SECURE GUMROAD CHECKOUT
                  </div>
                </div>
              </div>
              <button onClick={() => setStep(4)} className="mt-12 text-white/40 font-black text-sm md:text-2xl italic underline uppercase">← CHANGE SELECTION</button>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-10 border-t-4 border-white/10 pt-10 text-center flex justify-between items-center px-4 opacity-30 text-[10px] md:text-xl font-black tracking-widest italic uppercase">
          <button onClick={() => {setStep(1); setNiche(""); setSelectedProduct(null);}} className="hover:text-white underline">RESET TERMINAL</button>
          <span>LEGACY PRO VAULT // 2026</span>
        </div>
      </div>
    </div>
  );
                }
