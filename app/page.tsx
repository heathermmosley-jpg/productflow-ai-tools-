"use client";

import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");

  const VAULT_URL = "https://legacyprovault.gumroad.com";
  const DIRECT_STRATEGY = "https://legacyprovault.gumroad.com/l/Irresist";

  const handlePurchase = (url: string) => {
    window.open(url, "_blank");
    setStep(5); 
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '1100px', borderLeft: '8px solid white', borderRight: '8px solid white', minHeight: '90vh', display: 'flex', flexDirection: 'column', padding: '40px', backgroundColor: '#09090b', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', overflow: 'hidden' }}>
        
        {/* HEADER - CLEAN & PROFESSIONAL */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '4px solid white', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#facc15', borderRadius: '50%' }}></div>
            <h1 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: 0, letterSpacing: '-1px' }}>THE PAD</h1>
          </div>
          <button onClick={() => handlePurchase(VAULT_URL)} style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '50px', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '12px', textTransform: 'uppercase' }}>
            ENTER MAIN VAULT
          </button>
        </div>

        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* STEP 1: WELCOME */}
          {step === 1 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '90px', fontWeight: '900', fontStyle: 'italic', color: 'white', margin: '0 0 10px 0', lineHeight: '0.8', textTransform: 'uppercase' }}>ACCESS</h2>
              <h2 style={{ fontSize: '90px', fontWeight: '900', fontStyle: 'italic', color: '#facc15', margin: '0 0 40px 0', lineHeight: '0.8', textTransform: 'uppercase' }}>GRANTED</h2>
              <button onClick={() => setStep(2)} style={{ backgroundColor: 'white', color: 'black', padding: '30px 60px', borderRadius: '50px', fontSize: '24px', fontWeight: '900', border: '4px solid black', boxShadow: '0 10px 0 #facc15', cursor: 'pointer', textTransform: 'uppercase' }}>
                START SCAN
              </button>
            </div>
          )}

          {/* STEP 2: NICHE SEARCH */}
          {step === 2 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '50px', fontWeight: '900', fontStyle: 'italic', marginBottom: '30px', textTransform: 'uppercase' }}>TARGET <span style={{ color: '#facc15' }}>NICHE</span></h2>
              <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                <input 
                  type="text" placeholder="E.G. WEIGHT LOSS / REAL ESTATE..." 
                  style={{ width: '100%', backgroundColor: '#18181b', border: '4px solid white', padding: '30px', borderRadius: '20px', color: 'white', fontSize: '24px', textAlign: 'center', fontWeight: '900', textTransform: 'uppercase' }}
                  value={niche} onChange={(e) => setNiche(e.target.value)}
                />
                <button onClick={() => setStep(3)} style={{ marginTop: '20px', width: '100%', backgroundColor: '#facc15', color: 'black', padding: '25px', borderRadius: '15px', fontWeight: '900', fontSize: '20px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
                  SEARCH 42 TOOLS
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: THE ARSENAL (SHOPPING) */}
          {step === 3 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '4px solid #facc15', paddingBottom: '10px', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '30px', fontWeight: '900', fontStyle: 'italic', margin: 0, textTransform: 'uppercase' }}>THE ARSENAL</h2>
                <button onClick={() => setStep(2)} style={{ color: '#facc15', fontWeight: '900', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase' }}>CHANGE NICHE</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', maxHeight: '50vh', overflowY: 'auto', paddingRight: '10px' }}>
                {["GAP FINDER", "PROFIT MATH", "SEO SCANNER", "NICHE HUNTER", "FOCUS ENGINE", "ADRENALINE X", "VITALITY SCAN", "SCALE BOT"].map((name) => (
                  <div key={name} onClick={() => setStep(4)} style={{ padding: '30px', backgroundColor: '#18181b', border: '4px solid rgba(255,255,255,0.1)', borderRadius: '20px', textAlign: 'center', cursor: 'pointer' }}>
                    <p style={{ fontWeight: '900', fontStyle: 'italic', margin: 0, textTransform: 'uppercase' }}>{name}</p>
                    <p style={{ fontSize: '10px', opacity: 0.3, marginTop: '10px', textTransform: 'uppercase' }}>SECURE ACCESS</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: PRE-PURCHASE PREVIEW */}
          {step === 4 && (
            <div style={{ textAlign: 'center', backgroundColor: '#18181b', padding: '50px', borderRadius: '40px', border: '4px solid white' }}>
              <h3 style={{ fontSize: '60px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 30px 0', textTransform: 'uppercase' }}>TOOL READY</h3>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => handlePurchase(DIRECT_STRATEGY)} style={{ backgroundColor: '#facc15', color: 'black', padding: '25px 50px', borderRadius: '50px', fontSize: '20px', fontWeight: '900', border: '4px solid white', cursor: 'pointer', textTransform: 'uppercase' }}>BUY THIS TOOL</button>
                <button onClick={() => setStep(3)} style={{ backgroundColor: 'white', color: 'black', padding: '25px 50px', borderRadius: '50px', fontSize: '20px', fontWeight: '900', border: '4px solid black', cursor: 'pointer', textTransform: 'uppercase' }}>BACK TO HUB</button>
              </div>
            </div>
          )}

          {/* STEP 5: CONTINUE SHOPPING BRIDGE */}
          {step === 5 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#facc15', color: 'black', padding: '10px 30px', borderRadius: '50px', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>GATEWAY OPEN</div>
              <h2 style={{ fontSize: '60px', fontWeight: '900', fontStyle: 'italic', margin: '0 0 40px 0', textTransform: 'uppercase' }}>BUILD THE EMPIRE</h2>
              <button onClick={() => setStep(3)} style={{ backgroundColor: 'white', color: 'black', padding: '25px 50px', borderRadius: '50px', fontSize: '24px', fontWeight: '900', border: '4px solid black', boxShadow: '0 10px 0 #facc15', cursor: 'pointer', textTransform: 'uppercase' }}>
                KEEP SHOPPING
              </button>
            </div>
          )}
        </div>

        {/* FOOTER - NO RED WARNINGS */}
        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '4px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', opacity: 0.3, fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>
          <span>SECURE LEGACY ENCRYPTION ACTIVE</span>
          <span>LEGACY PRO VAULT // 2026</span>
        </div>
      </div>
    </div>
  );
      }
              
