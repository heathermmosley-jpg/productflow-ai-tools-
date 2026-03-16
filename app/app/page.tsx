import Link from 'next/link';
import { Rocket, Zap, BarChart3, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl">
        <h1 className="text-6xl font-black text-slate-900 mb-6 leading-tight">
          Turn your skills into a <span className="text-blue-600">profitable AI product.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          ProductFlowAI helps you generate, validate, and launch side hustles using the power of Artificial Intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tools" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition flex items-center gap-2">
            Generate My First Idea <ArrowRight size={20} />
          </Link>
          <Link href="/pricing" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transition">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-6">
        <div className="p-8 bg-white border rounded-3xl hover:border-blue-500 transition shadow-sm">
          <Rocket className="text-blue-600 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Rapid Launch</h3>
          <p className="text-slate-500 text-sm">Go from a blank page to a product blueprint in under 60 seconds.</p>
        </div>
        <div className="p-8 bg-white border rounded-3xl hover:border-blue-500 transition shadow-sm">
          <BarChart3 className="text-blue-600 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Market Data</h3>
          <p className="text-slate-500 text-sm">Real-time analysis of what people are actually buying right now.</p>
        </div>
        <div className="p-8 bg-white border rounded-3xl hover:border-blue-500 transition shadow-sm">
          <Zap className="text-blue-600 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">AI Guidance</h3>
          <p className="text-slate-500 text-sm">We don't just give ideas; we provide the tech steps to build them.</p>
        </div>
      </section>
    </div>
  );
}
