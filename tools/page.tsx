"use client";
import { useState } from 'react';
import { Zap, Target, DollarSign, Lightbulb, Loader2, Sparkles } from 'lucide-react';

export default function SideHustleGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateIdea = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        title: "AI-Powered Real Estate Assistant",
        niche: "Independent Realtors",
        monetization: "$49/month Subscription",
        steps: ["Build a lead-gen scraper", "Integrate GPT-4 for automated follow-ups", "Launch on Product Hunt"]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-4">Side Hustle Generator</h1>
        <button 
          onClick={generateIdea}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Zap size={20} />} Generate My Blueprint
        </button>
      </div>
      {result && (
        <div className="bg-slate-900 text-white p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">{result.title}</h2>
          <p className="text-blue-400 font-bold">{result.monetization}</p>
        </div>
      )}
    </div>
  );
}
