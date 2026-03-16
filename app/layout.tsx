import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
      <body className={inter.className}>
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600 tracking-tighter">
              PRODUCTFLOW<span className="text-slate-900">AI</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link href="/tools" className="hover:text-blue-600 transition">Tools</Link>
              <Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
            </div>
            <Link href="/pricing" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition">
              Get Started
            </Link>
          </div>
        </nav>
        
        <main>{children}</main>

        <footer className="bg-slate-50 border-t py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-500 text-sm">© 2026 ProductFlowAI. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
