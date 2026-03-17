import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ProductFlowAI | Build Your Side Hustle',
  description: 'AI-powered tools to generate and launch your next digital product.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        {/* NAVIGATION HEADER */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="font-black text-xl tracking-tighter text-slate-900">
                PRODUCTFLOW<span className="text-blue-600">AI</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              <Link href="/tools" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Tools</Link>
              <Link href="/pricing" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
              <Link href="/help" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Help</Link>
              <Link href="/help" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-slate-800 transition-all active:scale-95">
  Start Here
</Link>
              
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="pt-20">
          {children}
        </main>

        {/* FOOTER SECTION */}
        <footer className="bg-slate-50 border-t border-slate-200 py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <span className="font-black text-xl tracking-tighter text-slate-900">
                  PRODUCTFLOW<span className="text-blue-600">AI</span>
                </span>
              </Link>
              <p className="text-slate-500 max-w-sm text-sm leading-relaxed font-medium">
                The all-in-one platform for digital entrepreneurs. From idea generation to product launch, we provide the AI tools you need to build a profitable side hustle.
              </p>
            </div>
            
            <div>
              <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li><Link href="/tools" className="hover:text-blue-600">All Tools</Link></li>
                <li><Link href="/help" className="hover:text-blue-600">Help Center</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-600">Pricing Plans</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li><Link href="/legal" className="hover:text-blue-600">Terms of Service</Link></li>
                <li><Link href="/legal" className="hover:text-blue-600">Privacy Policy</Link></li>
                <li><Link href="/legal" className="hover:text-blue-600">AI Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-200">
            <p className="text-slate-400 text-xs font-medium">
              &copy; 2026 ProductFlowAI. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
                      }
