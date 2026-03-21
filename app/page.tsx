"use client";

import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  const VAULT_URL = "https://legacyprovault.gumroad.com";
  const SUBSCRIBE_URL = "https://legacyprovault.gumroad.com/follow";
  const DIRECT_STRATEGY = "https://legacyprovault.gumroad.com/l/Irresist";

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

  const handleAction = (url: string, nextStep?: number) => {
    window.open(url, "_blank");
    if (nextStep) setStep(nextStep);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '10px' }}>
      <div style={{ width: '100%', maxWidth: '1200px', border: '10px solid white', minHeight: '95vh', display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: '#050505', boxShadow: '0 0 100px rgba(255, 255, 255, 0.1)', position: 'relative' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '8px solid white', marginBottom: '25px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '18px', height: '18px', backgroundColor: '#facc15', border: '3px solid white' }}></div>
            <h1 style={{ fontSize: '32px', fontWeight: '900', fontStyle: 'italic', margin: 0, letterSpacing: '-2px' }}>THE PAD</h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => handleAction(SUBSCRIBE_URL)} style={{ backgroundColor: 'white', color: 'black', padding: '12px 25px', borderRadius: '4px', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '12px', textTransform: 'uppercase' }}>
              SUBSCRIBE
            </button>
            <button onClick={() => handleAction(VAULT_URL)} style={{ backgroundColor: '#facc15', color: 'black', padding: '12px 25px', borderRadius: '4px', fontWeight: '900', border: '4px solid white', cursor: 'pointer', fontSize: '12px', textTransform: 'uppercase' }}>
              VAULT
            </button>
          </div>
        </div>

        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10px' }}>
          
          {step === 1 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '18vw', fontWeight: '900', fontStyle: 'italic', color: '#facc15', margin: '0', lineHeight: '0.8', textTransform: 'uppercase', WebkitTextStroke: '2px white' }}>LOADED.</h2>
              <button onClick={() => setStep(2)} style={{ marginTop: '40px', backgroundColor: 'white', color: 'black', padding: '35px 80px', borderRadius: '0', fontSize: '32px', fontWeight: '900', border: 'none', cursor: 'pointer', textTransform: 'uppercase', boxShadow: '15px 15px 0 #facc15' }}>
                IDENTIFY NICHE
              </button>
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '60px', fontWeight: '900', fontStyle: 'italic', marginBottom: '10px' }}>TARGET <span style={{ color: '#facc15' }}>MARKET</span></h2>
              <input 
                type="text" placeholder="E.G. REAL ESTATE..." 
                style={{ width: '100%', maxWidth: '700px', backgroundColor: '#111', border: '6px solid white', padding: '30px', color: 'white', fontSize: '28px', textAlign: 'center', fontWeight: '900', marginBottom: '20px' }}
                value={niche} onChange={(e) => setNiche(e.target.value)}
              />
              <button onClick={() => setStep(3)} style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '700px', backgroundColor: '#facc15', color: 'black', padding: '25px', fontWeight: '900', fontSize: '24px', border: '4px solid white', cursor: 'pointer', textTransform: 'uppercase' }}>
                GENERATE SOLUTIONS
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={{ borderBottom: '6px solid #facc15', paddingBottom: '15px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '30px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>THE ARSENAL <span style={{color: '#facc15'}}>(42)</span></h2>
                <button onClick={() => setStep(2)} style={{ color: 'white', fontWeight: '900', background: 'black', border: '4px solid white', padding: '8px 15px', cursor: 'pointer', fontSize: '12px' }}>RESET</button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px', maxHeight: '55vh', overflowY: 'auto', padding: '10px' }}>
                {arsenal.map((name) => (
                  <button 
                    key={name} 
                    onClick={() => setStep(4)} 
                    style={{ 
                      padding: '40px 20px', 
                      backgroundColor: '#111', 
                      border: '4px solid white', 
                      borderRadius: '12px', 
                      textAlign: 'center', 
                      cursor: 'pointer',
                      boxShadow: '0 8px 0 rgba(255,255,255,0.1)',
                      transition: 'transform 0.1s'
                    }}
                  >
                    <p style={{ fontWeight: '900', fontStyle: 'italic', margin: 0, color: 'white', fontSize: '20px', textShadow: '2px 2px 0 black' }}>{name}</p>
                    <div style={{ marginTop: '15px', backgroundColor: '#facc15', color: 'black', fontSize: '11px', fontWeight: '900', display: 'inline-block', padding: '5px 12px', border: '2px solid white' }}>VIEW TOOL</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', backgroundColor: '#111', padding: '80px 20px', border: '10px solid #facc15' }}>
              <h3 style={{ fontSize: '10vw', fontWeight: '900', fontStyle: 'italic', margin: '0 0 20px 0', lineHeight: '0.8', WebkitTextStroke: '1px white' }}>LOCKED &<br/>READY</h3>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
                <button onClick={() => handleAction(DIRECT_STRATEGY, 5)} style={{ backgroundColor: '#facc15', color: 'black', padding: '30px 60px', fontSize: '28px', fontWeight: '900', border: '6px solid white', cursor: 'pointer', boxShadow: '10px 10px 0 white' }}>BUY NOW</button>
                <button onClick={() => setStep(3)} style={{ backgroundColor: 'black', color: 'white', padding: '30px 60px', fontSize: '28px', fontWeight: '900', border: '4px solid white', cursor: 'pointer' }}>BACK</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '80px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 10px 0', color: '#facc15' }}>SUCCESS.</h2>
              <div style={{ backgroundColor: 'white', color: 'black', padding: '40px', border: '8px solid #facc15', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
                <p style={{ fontWeight: '900', fontSize: '22px' }}>JOIN THE INNER CIRCLE</p>
                <p style={{ fontWeight: '700', fontSize: '16px', marginBottom: '25px' }}>NEVER MISS A NEW REVENUE TOOL.</p>
                <button onClick={() => handleAction(SUBSCRIBE_URL)} style={{ backgroundColor: 'black', color: 'white', padding: '20px 50px', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '18px' }}>
                  SUBSCRIBE TO VAULT
                </button>
              </div>
              <button onClick={() => setStep(3)} style={{ backgroundColor: 'transparent', color: 'white', padding: '25px 50px', fontSize: '24px', fontWeight: '900', border: '6px solid white', cursor: 'pointer' }}>
                CONTINUE SHOPPING
              </button>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: '20px', textAlign: 'center', opacity: 0.5, fontSize: '12px', fontWeight: '900', letterSpacing: '5px' }}>
          SYSTEM ONLINE // LEGACY PRO 2026
        </div>
      </div>
    </div>
  );
                     }
                
