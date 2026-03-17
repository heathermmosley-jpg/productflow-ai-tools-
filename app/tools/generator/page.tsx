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
    
    // This now simulates "reading" your input
    setTimeout(() => {
      setResult({
        title: `AI-Powered ${userInput} Solution`,
        niche: userInput,
        productType: "Digital System",
        monetization: "$29 - $99 per sale",
        steps: [
          `Identify the biggest pain point in the ${userInput} space.`,
          "Use AI to automate the most time-consuming task.",
          "Launch a landing page and offer a 7-day free trial."
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen bg-slate-50">
      {/* Back to Hub Button */}
      <Link href="/tools" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition-all">
        <Icons.ArrowLeft size={18} /> Back to Tools Hub
      </Link>

      {!result ? (
        <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm">
          <h1 className="text-3xl font-black mb-6">What are we building today?</h1>
          <input 
            type="text" 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="e.g. Fitness, Marketing, Pet Care..." 
            className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl mb-6 outline-none focus:ring-4 focus:ring-blue-100 transition-all"
          />
          <button 
            onClick={generateIdea}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-blue-100"
            disabled={loading}
          >
            {loading ? <Icons.Loader2 className="animate-spin" /> : <Icons.Zap />}
            {loading ? "Analyzing..." : "Generate My Blueprint"}
          </button>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
          <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-6 right-6 bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
               Best Match For You
             </div>
             <h2 className="text-4xl font-black mb-8">{result.title}</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 border-y border-white/10 py-8">
                <div>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Target</p>
                  <p className="text-xl font-bold">{result.niche}</p>
                </div>
                <div>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Type</p>
                  <p className="text-xl font-bold">{result.productType}</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Price</p>
                  <p className="text-xl font-bold">{result.monetization}</p>
                </div>
             </div>
             <button 
              onClick={() => setResult(null)} 
              className="mt-4 text-sm text-slate-400 hover:text-white font-bold underline"
             >
               Clear and Start New Search
             </button>
          </div>
          
          {/* Monetization Offer */}
          <div className="mt-10 bg-white border-4 border-blue-600 p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <h4 className="text-2xl font-black">Build This With Our Toolkit</h4>
              <p className="text-slate-500 font-medium">Get the full roadmap for ${result.niche} projects.</p>
            </div>
            <Link href="#" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black shadow-lg shadow-blue-200">
              Build This Product ($19)
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
