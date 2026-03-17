import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">ProductFlow<span className="text-blue-600">AI</span></span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link href="/tools" className="text-sm font-bold text-slate-600 hover:text-blue-600">Tools</Link>
              <Link href="/pricing" className="text-sm font-bold text-slate-600 hover:text-blue-600">Pricing</Link>
              <Link href="/help" className="text-sm font-bold text-slate-600 hover:text-blue-600">Help</Link>
              <Link href="/help" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-slate-800 transition-all active:scale-95">Start Here</Link>
            </div>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
        <footer className="bg-slate-50 border-t border-slate-200 py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <div className="col-span-2">
              <span className="text-slate-900 text-xl font-black mb-6 block tracking-tighter">ProductFlow<span className="text-blue-600">AI</span></span>
              <p className="normal-case text-slate-400 font-medium max-w-xs leading-relaxed">The Infinity Loop for digital entrepreneurs. Build, scale, and transform your side hustle into a legacy.</p>
            </div>
            <div>
              <h4 className="text-slate-900 mb-6 text-xs">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="/tools" className="hover:text-blue-600">All Tools</Link></li>
                <li><Link href="/help" className="hover:text-blue-600">Onboarding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 mb-6 text-xs">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/legal" className="hover:text-blue-600">Terms</Link></li>
                <li><Link href="/legal" className="hover:text-blue-600">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
