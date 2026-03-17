import * as Icons from 'lucide-react';
import Link from 'next/link';

export default function HelpCenter() {
  const categories = [
    { title: "Getting Started", icon: <Icons.BookOpen className="text-blue-600" />, desc: "New here? Learn the basics of ProductFlowAI." },
    { title: "Using the Tools", icon: <Icons.PenTool className="text-purple-600" />, desc: "How to use our AI generators effectively." },
    { title: "Building Products", icon: <Icons.Sparkles className="text-emerald-600" />, desc: "Turning AI ideas into real digital assets." },
    { title: "Billing Questions", icon: <Icons.CreditCard className="text-amber-600" />, desc: "Managing subscriptions and Stripe payments." },
    { title: "Troubleshooting", icon: <Icons.LifeBuoy className="text-rose-600" />, desc: "Fixing common issues and technical errors." },
    { title: "Legal & Safety", icon: <Icons.ShieldAlert className="text-slate-600" />, desc: "Terms, Privacy, and AI Disclaimers." },
  ];

  const faqs = [
    { q: "How does the Idea Generator work?", a: "Our AI analyzes current market trends and cross-references them with your specific skills to find high-margin niches." },
    { q: "What is in the $19 Toolkit?", a: "It includes a step-by-step PDF guide, a tech-stack checklist, and ready-to-use marketing templates." },
    { q: "Can I cancel my subscription?", a: "Yes, you can manage your billing and cancel anytime through your user dashboard." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl font-black text-white mb-6">How can we help?</h1>
        <div className="relative max-w-2xl mx-auto">
          <input type="text" placeholder="Search help articles..." className="w-full pl-6 pr-6 py-5 rounded-2xl bg-white/10 border border-white/20 text-white outline-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-2xl mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-black mb-2 flex items-center gap-2"><Icons.Sparkles /> First-Time User Guide</h2>
            <p className="text-blue-100 font-medium text-sm">Follow the 4-step path to launch your first AI business.</p>
          </div>
          <Link href="/tools/generator" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-black whitespace-nowrap">Start Now</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">{cat.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto pb-32">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-[1.5rem] p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-slate-900 uppercase tracking-wide text-xs list-none">
                  {item.q}
                  <Icons.ChevronDown className="text-blue-600 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-500 text-sm border-t border-slate-50 pt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
