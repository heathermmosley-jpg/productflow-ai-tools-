import Link from 'next/link';
import { Rocket, Zap, BarChart3, ArrowRight, Shield, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center bg-white text-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
          <Star size={16} fill="currentColor" /> New: AI Market Analysis 2.0
        </div>
        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
          Turn your skills into a <br />
          <span className="text-blue-600">profitable AI product.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop dreaming, start building. ProductFlowAI helps you generate, validate, and launch high-margin side hustles in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/tools" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
            Start Generating <ArrowRight size={24} />
          </Link>
          <Link href="/pricing" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center justify-center">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50 w-full border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Rocket className="text-blue-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Rapid Launch</h3>
            <p className="text-slate-500 leading-relaxed text-lg">Go from a blank page to a full business blueprint and tech stack recommendations in under 60 seconds.</p>
          </div>

          <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Market Data</h3>
            <p className="text-slate-500 leading-relaxed text-lg">We analyze current market trends to ensure your side hustle idea has actual demand before you build it.</p>
          </div>

          <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-purple-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Risk Mitigation</h3>
            <p className="text-slate-500 leading-relaxed text-lg">Get step-by-step guidance on how to start small with low overhead and scale only when you see profit.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
