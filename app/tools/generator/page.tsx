"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Lock } from "lucide-react";

export default function ResultsPage() {
  const [email, setEmail] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  // This handles the "Get Results" button click
  const handleSaveEmail = async () => {
    setIsSaving(true);
    // We are skipping the broken database save for now so you can take payments!
    // await saveEmail(email); 
    setHasSaved(true);
    setIsSaving(false);
  };

  const businessIdeas = [
    { title: "Modern Punch Needle Kits", desc: "Curated beginner sets with high-end yarn and trending patterns." },
    { title: "Custom Tufted Rugs", desc: "Bespoke floor art for interior designers and hypebeast home decor." },
    { title: "DIY Punch Needle Workshops", desc: "Digital courses teaching advanced textures and 3D techniques." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="text-yellow-400 w-6 h-6" />
          <h1 className="text-xl font-black tracking-tighter uppercase">AI Business Strategist</h1>
        </div>

        {!hasSaved ? (
          /* SECTION 1: THE EMAIL LOCK */
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
            <div className="mb-8">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">Analysis Complete</span>
              <h2 className="text-4xl font-black mb-4">Your Custom Strategy is Ready.</h2>
              <p className="text-slate-400 text-lg">We analyzed your niche and found 3 high-profit opportunities. Enter your email to unlock the full breakdown.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="flex-1 p-4 rounded-xl text-slate-900 font-bold outline-none focus:ring-4 ring-yellow-400/50 transition-all"
              />
              <button 
                onClick={handleSaveEmail}
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-black hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 group"
              >
                {isSaving ? "Unlocking..." : "Get My Results"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Secure & Private access only.
            </p>
          </div>
        ) : (
          /* SECTION 2: THE RESULTS & STRIPE BUTTON */
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessIdeas.map((idea, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-yellow-400/50 transition-colors">
                  <div className="bg-yellow-400 w-8 h-8 rounded-lg flex items-center justify-center text-black font-black mb-4">{i + 1}</div>
                  <h3 className="font-black text-xl mb-2">{idea.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{idea.desc}</p>
                </div>
              ))}
            </div>

            {/* THE MONEY MAKER: THE STRIPE BUTTON */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-black relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-2 italic">THE SECRET SAUCE STRATEGY</h2>
                <p className="font-bold mb-6 opacity-90">Ready to go from hobbyist to $10k/month? Get the exact step-by-step roadmap for these 3 ideas.</p>
                
                <a 
                  href="https://buy.stripe.com/6oEbLg8oU8AebpS7ss" 
                  className="bg-black text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-xl"
                >
                  Get The Strategy Now
                  <CheckCircle2 className="w-6 h-6 text-yellow-400" />
                </a>
              </div>
              <Sparkles className="absolute -right-10 -bottom-10 w-64 h-64 text-black/10 rotate-12" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
                  }



