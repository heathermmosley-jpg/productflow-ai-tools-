import { ShieldCheck, Info } from 'lucide-react';

export default function LegalPage() {
  const sections = [
    { 
      title: "Terms of Service", 
      content: "By using ProductFlowAI, you agree to our terms. Our platform provides AI-generated content for creative and business inspiration. We do not guarantee financial success." 
    },
    { 
      title: "Privacy Policy", 
      content: "Your data is yours. We use Stripe for secure payments and do not store your credit card information on our servers." 
    },
    { 
      title: "General Disclaimer", 
      content: "All content provided on this platform is for informational purposes only. ProductFlowAI is not a substitute for professional legal or financial advice." 
    },
    { 
      title: "AI & Medical Disclaimer", 
      content: "AI-generated suggestions are not medical, legal, or financial advice. Always consult with a licensed professional before making significant health or investment decisions." 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-32 px-6">
      <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-slate-600 text-xs font-black uppercase tracking-widest mb-6">
        <ShieldCheck size={14} /> Legal Center
      </div>
      <h1 className="text-5xl font-black text-slate-900 mb-12">Transparency & Terms</h1>
      
      <div className="space-y-16">
        {sections.map((section, i) => (
          <div key={i} className="border-b border-slate-100 pb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">{section.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-amber-50 border-2 border-amber-100 p-8 rounded-[2rem] flex gap-6 items-start">
        <Info className="text-amber-600 shrink-0" />
        <p className="text-sm text-amber-800 leading-relaxed italic">
          Last Updated: March 2026. ProductFlowAI reserves the right to update these terms at any time. Continued use of the platform constitutes agreement to the updated terms.
        </p>
      </div>
    </div>
  );
}
