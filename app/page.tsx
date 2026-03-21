"use client";

import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  const VAULT_URL = "https://legacyprovault.gumroad.com";
  const DIRECT_STRATEGY = "https://legacyprovault.gumroad.com/l/Irresist";

  // THE FULL 42-TOOL ARSENAL
  const arsenal = [
    "GAP FINDER", "PROFIT MATH", "SEO SCANNER", "NICHE HUNTER", "FOCUS ENGINE", 
    "ADRENALINE X", "VITALITY SCAN", "SCALE BOT", "TRAFFIC MOVER", "HOOK MASTER",
    "REVENUE RADAR", "OFFER BUILDER", "COPY GENIUS", "LEAD MAGNET", "FUNNEL FIXER",
    "AD SPEND ROI", "CONTENT GRID", "SOCIAL SURGE", "EMAIL ARCHITECT", "CLIENT CLOSER",
    "PIPELINE PRO", "BRAND SHIELD", "MARKET MAPPER", "VIRAL VELOCITY", "WEALTH WIDGET",
    "SYSTEMS SYNC", "GROWTH GEAR", "LEGACY LOOM", "EMPIRE EDGE", "STRATEGY STREAM",
    "VALUATION VAULT", "EXIT ENGINE", "CASHFLOW CODE", "MARGIN MAKER", "RISK RADAR",
    "MINDSET MATRIX", "HABIT HUB", "PEAK PERFORMER", "FLOW STATE", "VISION VENTURE",
    "IMPACT INDEX", "PRODUCT FLOW AI"
  ];

  const handlePurchase = (url: string) => {
    window.open(url, "_blank");
    setStep(5); 
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '10px' }}>
      <div style={{ width: '100%', maxWidth: '1200px', border: '8px solid white', minHeight: '95vh', display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: '#000', boxShadow: '0 0 80px rgba(250, 204, 21, 0.15)', position: 'relative' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '6px solid white', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#facc15', borderRadius: '2px', transform: 'rotate(45deg)' }}></div>
            <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', margin: 0, letterSpacing: '-2px' }}>THE PAD</h1>
          </div>
          <button onClick={() => handlePurchase(VAULT_URL)} style={{ backgroundColor: '#facc15', color: 'black', padding: '12px 30px', borderRadius: '50px', fontWeight: '900', border: '4px solid white', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase' }}>
            MAIN VAULT
          </button>
        </div>

        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10px' }}>
          
          {step === 1 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '18vw', fontWeight: '900', fontStyle: 'italic', color: '#facc15', margin: '0', lineHeight: '0.8', textTransform: 'uppercase' }}>OPEN.</h2>
              <p style={{ fontSize: '20px', fontWeight: '900', marginBottom: '40px', letterSpacing: '4px', opacity: 0.6 }}>SYSTEM READY FOR DEPLOYMENT</p>
              <button onClick={() => setStep(2)} style={{ backgroundColor: 'white', color: 'black', padding: '35px 80px', borderRadius: '100px', fontSize: '32px', fontWeight: '900', border: 'none', cursor: 'pointer', textTransform: 'uppercase', boxShadow: '0 15px 0 #facc15' }}>
                IDENTIFY NICHE
              </button>
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '60px', fontWeight: '900', fontStyle: 'italic', marginBottom: '10px' }}>TARGET <span style={{ color: '#facc15' }}>MARKET</span></h2>
              <p style={{ marginBottom: '40px', opacity: 0.5, fontWeight: '900' }}>INPUT YOUR INDUSTRY TO FILTER THE ARSENAL</p>
              <input 
                type="text" placeholder="E.G. REAL ESTATE / FITNESS..." 
                style={{ width: '100%', maxWidth: '700px', backgroundColor: '#0a0a0a', border: '6px solid white', padding: '30px', borderRadius: '30px', color: 'white', fontSize: '28px', textAlign: 'center', fontWeight: '900', marginBottom: '20px' }}
                value={niche} onChange={(e) => setNiche(e.target.value)}
              />
              <button onClick={() => setStep(3)} style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '700px', backgroundColor: '#facc15', color: 'black', padding: '25px', borderRadius: '20px', fontWeight: '900', fontSize: '24px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
                GENERATE SOLUTIONS
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={{ borderBottom: '6px solid #facc15', paddingBottom: '15px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '30px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>THE ARSENAL <span style={{opacity: 0.3}}>(42)</span></h2>
                <button onClick={() => setStep(2)} style={{ color: '#facc15', fontWeight: '900', background: 'none', border: '2px solid #facc15', padding: '8px 15px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px' }}>RESET SEARCH</button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '15px', maxHeight: '55vh', overflowY: 'auto', padding: '10px' }}>
                {arsenal.map((name) => (
                  <button 
                    key={name} 
                    onClick={() => setStep(4)} 
                    style={{ 
                      padding: '35px 20px', backgroundColor: '#0a0a0a', border: '4px solid white', borderRadius: '30px', textAlign: 'center', cursor: 'pointer', position: 'relative'
                    }}
                  >
                    <p style={{ fontWeight: '900', fontStyle: 'italic', margin: 0, color: 'white', fontSize: '20px' }}>{name}</p>
                    <div style={{ marginTop: '12px', backgroundColor: '#facc15', color: 'black', fontSize: '10px', fontWeight: '900', display: 'inline-block', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>GET ACCESS</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', backgroundColor: '#0a0a0a', padding: '80px 20px', borderRadius: '60px', border: '8px solid #facc15' }}>
              <h3 style={{ fontSize: '12vw', fontWeight: '900', fontStyle: 'italic', margin: '0 0 20px 0', lineHeight: '0.8' }}>SYSTEM<br/>READY</h3>
              <p style={{ fontWeight: '900', letterSpacing: '2px', marginBottom: '50px', opacity: 0.5 }}>TRANSFORMATION PACKAGE PREPARED FOR {niche || 'DEPLOYMENT'}</p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => handlePurchase(DIRECT_STRATEGY)} style={{ backgroundColor: '#facc15', color: 'black', padding: '30px 60px', borderRadius: '100px', fontSize: '28px', fontWeight: '900', border: '4px solid white', cursor: 'pointer' }}>BUY NOW</button>
                <button onClick={() => setStep(3)} style={{ backgroundColor: 'transparent', color: 'white', padding: '30px 60px', borderRadius: '100px', fontSize: '28px', fontWeight: '900', border: '4px solid white', cursor: 'pointer' }}>BACK</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '80px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 10px 0', color: '#facc15' }}>INITIALIZED</h2>
              <p style={{ marginBottom: '50px', fontWeight: '900', opacity: 0.5 }}>CHECKOUT OPENED IN NEW SECURE WINDOW</p>
              <button onClick={() => setStep(3)} style={{ backgroundColor: 'white', color: 'black', padding: '35px 80px', borderRadius: '100px', fontSize: '32px', fontWeight: '900', border: 'none', cursor: 'pointer', boxShadow: '0 15px 0 #facc15' }}>
                KEEP SHOPPING
              </button>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: '20px', padding: '15px', borderTop: '4px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', opacity: 0.4, fontSize: '11px', fontWeight: '900', letterSpacing: '3px' }}>
          <span>LEGACY ENCRYPTION: ACTIVE</span>
          <span>EMPIRE BUILDER // 2026</span>
        </div>
      </div>
    </div>
  );
                           }
