"use client";
import { useState } from 'react';
import * as Icons from 'lucide-react';
import Link from 'next/link';

export default function SideHustleGenerator() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateIdea = () => {
    if (!userInput) return alert("Please enter a niche or skill first!");
    setLoading(true);
    
    setTimeout(() => {
      setResult({
        title: `AI ${userInput} Strategy`,
        niche: userInput,
        productType: "Digital Blueprint",
        monetization: "$19 - $49 per unit",
        steps: [
          `Analyze the top 3 competitors in the ${userInput} space.`,
          `Create a "Starter Kit" specifically for ${userInput} beginners.`,
          "Set up an automated sales funnel using ProductFlowAI templates."
        ]
      });
      setUserInput(""); // Clears the box for next time
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen bg-slate-50">
      {/* THE BACK BUTTON */}
      <Link href="/tools" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition-all group">
        <Icons.ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Tools Hub
      </Link>

      {!result ? (
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[3rem] shadow-sm">
          <h1 className="text-4xl font-black mb-4 tracking-tight">Generator</h1>
          <p className="text-slate-500 mb-8 font-medium">What niche or industry are we analyzing today?</p>
          <input 
            type="text" 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="e.g. Fitness, Pet Care, Real Estate..." 
            className="w-full p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-6 outline-none focus:ring-4 focus:ring-blue-100 transition-all text-lg font-bold"
          />
          <button 
            onClick={generateIdea}
            className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-blue-100 active:scale-[0.98] transition-all"
            disabled={loading}
          >
            {loading ? <Icons.Loader2 className="animate-spin" /> : <Icons.Zap />}
            {loading ? "Building Your Blueprint..." : "Generate My Blueprint"}
          </button>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-8 right-8 bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
               Best Match
             </div>
             <h2 className="text-4xl font-black mb-10">{result.title}</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-y border-white/10 py-10">
                <div>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Target Market</p>
                  <p className="text-2xl font-bold">{result.niche}</p>
                </div>
                <div>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Product Type</p>
                  <p className="text-2xl font-bold">{result.productType}</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Potential</p>
                  <p className="text-2xl font-bold">{result.monetization}</p>
                </div>
             </div>
             {/* START OVER BUTTON */}
             <button 
              onClick={() => setResult(null)} 
              className="flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-colors"
             >
               <Icons.RefreshCcw size={16} /> Try a different niche
             </button>
          </div>
          
          <div className="bg-white border-4 border-blue-600 p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-black text-slate-900">Get the {result.niche} Toolkit</h4>
              <p className="text-slate-500 font-bold">Ready to launch this specific idea?</p>
            </div>
            <Link href="#" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
              Build This Product ($19)
            </Link>
          </div>
        </div>
      )}
    </div>
  );
          }
