import { 
  Zap, PenTool, Globe, Target, Calendar, CheckSquare, 
  BarChart, Wallet, Lightbulb, User, Search, TrendingUp, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: "Business & Income",
    tools: [
      { name: "AI Side Hustle Generator", desc: "Turn skills into profit blueprints.", icon: <Zap />, color: "bg-blue-500" },
      { name: "Digital Product Generator", desc: "Brainstorm high-margin digital goods.", icon: <PenTool />, color: "bg-indigo-500" },
      { name: "Business Name Generator", desc: "Find the perfect brand identity.", icon: <Globe />, color: "bg-cyan-500" }
    ]
  },
  {
    title: "Focus & Productivity",
    tools: [
      { name: "Focus Planner", desc: "Remove distractions, get more done.", icon: <Target />, color: "bg-emerald-500" },
      { name: "Daily Task Organizer", desc: "Smart prioritization for creators.", icon: <CheckSquare />, color: "bg-green-500" }
    ]
  },
  {
    title: "Financial Clarity",
    tools: [
      { name: "Financial Clarity Score", desc: "Analyze your current money health.", icon: <BarChart />, color: "bg-amber-500" },
      { name: "Income Strategy Generator", desc: "Map out your path to $10k/mo.", icon: <Wallet />, color: "bg-orange-500" }
    ]
  },
  {
    title: "Idea Discovery",
    tools: [
      { name: "Ideas Gallery", desc: "Browse successful product blueprints.", icon: <Lightbulb />, color: "bg-purple-500" },
      { name: "Trending Ideas", desc: "What's winning in the market right now.", icon: <TrendingUp />, color: "bg-pink-500" }
    ]
  }
];

export default function ToolsHub() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Tools Hub</h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for a tool (e.g. 'Stripe', 'Planner')..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <Sparkles size={18} className="text-blue-600" /> {cat.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.tools.map((tool, tIdx) => (
                <div key={tIdx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className={`w-12 h-12 ${tool.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{tool.desc}</p>
                  <Link href="/tools/generator" className="inline-flex items-center font-bold text-blue-600 text-sm group-hover:gap-2 transition-all">
                    Try Tool <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
            }
