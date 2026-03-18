"use client";
import { useState } from 'react';
import * as Icons from 'lucide-react';
import Link from 'next/link';

  export default function SmartGenerator() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

    const runEngine = () => {
    if (!userInput) return alert("Enter your niche!");
    setLoading(true);
    setTimeout(() => {
      const base = userInput.split(' ').slice(0, 2).join(' ');
      setResult({
        niche: base,
        categories: [
          { style: "Modern", names: [`${base}ly`, `Nova ${base}`, `Apex ${base}`] },
          { style: "Punchy", names: [`${base}ix`, `Zent ${base}`, `${base}o`] },
          { style: "Elite", names: [`The ${base} Club`, `Elite ${base}`, `Vivid ${base}`] },
          { style: "Action", names: [`Go ${base}`, `${base} Flow`, `Swift ${base}`] }
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 min-h-screen bg-white">
      {!result ? (
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter italic">High-Traffic Engine.</h1>
          <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">Enter your industry. Our AI analyzes SEO data to find brand names that actually convert traffic into customers.</p>
          <div className="relative">
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="e.g. Sustainable Shoes" className="w-full p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] outline-none focus:border-blue-600 transition-all text-xl font-bold pr-40" />
             <button onClick={runEngine} className="absolute right-3 top-3 bottom-3 px-8 bg-blue-600 text-white rounded-[2rem] font-black hover:bg-blue-700 shadow-lg shadow-blue-200">{loading ? <Icons.Loader2 className="animate-spin" /> : "Analyze"}</button>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-blue-600 rounded-[3rem] p-10 mb-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-black italic">Save Your Progress</h3>
              <p className="text-blue-100 text-sm font-medium">Get these results + 5 Free Tools waiting at ProductFlowAI.com in your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
          //  <input type="email" placeholder="your@email.com" className="flex-1 p-4 rounded-xl text-slate-900 font-bold outline-none" />
              <button className="bg-slate-900 px-6 py-4 rounded-xl font-black hover:bg-slate-800 whitespace-nowrap">Get Results</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {result.categories.map((cat: any, i: number) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">{cat.style}</p>
                <ul className="space-y-4 font-black text-slate-800 text-xl tracking-tight">
                  {cat.names.map((name: string, j: number) => <li key={j}>{name}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white text-center shadow-3xl relative overflow-hidden">
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 border border-blue-600/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8"><Icons.Lock size={12} /> Premium Vault Detected</div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter">We found 42 "High-Intent" names for {result.niche}.</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="https://buy.stripe.com/4gMbJ2cq85pl9oKfKobwk02"className="bg-blue-600 px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-all">Unlock Secret Sauce ($19)</Link>
                  <Link href="https://productflowai.com" className="bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all">Go Elite ($79)</Link>
                </div>
                <button onClick={() => setResult(null)} className="mt-12 text-slate-500 font-bold uppercase text-xs tracking-widest">Start New Analysis</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}



