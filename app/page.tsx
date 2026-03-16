import Link from 'next/link';
import { Zap, ArrowRight, Sparkles, TrendingUp, Target, Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-blue-600 text-xs font-black uppercase tracking-widest mb-8 animate-fade-in">
              <Sparkles size={14} /> New: AI Market Analysis 2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              Turn your skills into a <span className="text-blue-600">profitable</span> AI product.
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Stop dreaming, start building. ProductFlowAI helps you generate, validate, and launch high-margin side hustles in minutes using advanced market data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tools/generator" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
                Start Generating <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-xl hover:border-blue-600 transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-10" />
      </section>

      {/* FEATURE GRID: "The Unity Section" */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                <Zap />
              </div>
              <h3 className="text-2xl font-black mb-4">Rapid Launch</h3>
              <p className="text-slate-500 leading-relaxed font-medium">Go from a blank page to a full business blueprint and tech stack recommendations in under 60 seconds.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-100">
                <TrendingUp />
              </div>
              <h3 className="text-2xl font-black mb-4">Market Data</h3>
              <p className="text-slate-500 leading-relaxed font-medium">We analyze current market trends to ensure your side hustle idea has actual demand before you build it.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
                <Target />
              </div>
              <h3 className="text-2xl font-black mb-4">Risk Mitigation</h3>
              <p className="text-slate-500 leading-relaxed font-medium">Get step-by-step guidance on how to start small with low overhead and scale only when you see profit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION: The Final Hook */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build your <br/>first AI product?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Join hundreds of creators using ProductFlowAI to escape the 9-5 and build digital freedom.</p>
              <Link href="/tools/generator" className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
                <Rocket /> Let's Go
              </Link>
            </div>
            {/* Background Glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
Focus is the superpower most people never develop.
