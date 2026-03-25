"use client";
import { useState } from "react";

export default function ProductFlowAI() {
  const [activeTab, setActiveTab] = useState("HOME");

  // --- UPDATED GUMROAD LINKS ---
  const PRODUCTS = {
    CONSISTENCY: "https://legacyprovault.gumroad.com/l/Conss",
    STEPS: "https://legacyprovault.gumroad.com/l/Steps",
    FLOW90: "https://legacyprovault.gumroad.com/l/Fs90",
    IRRESIST: "https://legacyprovault.gumroad.com/l/Irresist",
    LIFE_OP: "https://legacyprovault.gumroad.com/l/life-operations-system",
    CRPS: "https://legacyprovault.gumroad.com/l/Crps",
    MINDSET: "https://legacyprovault.gumroad.com/l/mtrx",
    ESTIMATOR: "https://legacyprovault.gumroad.com/l/Estms",
    EST_KIT: "https://legacyprovault.gumroad.com/l/Estkit",
    RESET: "https://legacyprovault.gumroad.com/l/Reset"
  };

  const ToolCard = ({ title, desc, tag, url }: any) => (
    <div style={{ backgroundColor: '#111', border: '2px solid white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ color: '#facc15', fontSize: '10px', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase' }}>{tag}</div>
        <h3 style={{ fontSize: '18px', fontWeight: '900', margin: '0 0 8px 0', lineHeight: '1.1' }}>{title}</h3>
        <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.4' }}>{desc}</p>
      </div>
      <button onClick={() => window.open(url, "_blank")} style={{ marginTop: '15px', backgroundColor: 'white', color: 'black', padding: '10px', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '12px' }}>
        BUY NOW
      </button>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '10px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', border: '8px solid white', minHeight: '95vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050505' }}>
        
        {/* NAV SECTION */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '6px solid white', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab("HOME")}>
            <div style={{ width: '18px', height: '18px', backgroundColor: '#facc15', border: '2px solid white' }}></div>
            <span style={{ fontWeight: '900', fontSize: '18px' }}>PRODUCTFLOW AI</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {["HOME", "STORE", "THE PAD", "REQUEST"].map((item) => (
              <button key={item} onClick={() => setActiveTab(item)} style={{ background: activeTab === item ? '#facc15' : 'none', color: activeTab === item ? 'black' : 'white', fontWeight: '900', fontSize: '11px', padding: '6px 12px', border: activeTab === item ? '2px solid white' : 'none', cursor: 'pointer' }}>{item}</button>
            ))}
          </div>
        </nav>

        <main style={{ flexGrow: 1, padding: '30px 20px' }}>
          
          {activeTab === "HOME" && (
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: 'clamp(35px, 7vw, 70px)', fontWeight: '900', lineHeight: '0.9' }}>MISSION CONTROL.</h1>
              <button onClick={() => setActiveTab("STORE")} style={{ marginTop: '20px', backgroundColor: 'white', color: 'black', padding: '15px 30px', fontWeight: '900', cursor: 'pointer' }}>ENTER THE STORE</button>
            </div>
          )}

          {activeTab === "STORE" && (
            <div className="fade-in">
              <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '20px' }}>SYSTEM <span style={{ color: '#facc15' }}>ARCHIVE</span></h2>
              
              {/* SECTION 1: CONTRACTOR COMMAND */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '15px', fontSize: '14px', letterSpacing: '2px' }}>01. CONTRACTOR COMMAND CENTER</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                  <ToolCard url={PRODUCTS.ESTIMATOR} tag="ESTIMATING" title="20-YEAR ESTIMATOR" desc="Contractor system built to speed up pricing and improve bid confidence." />
                  <ToolCard url={PRODUCTS.EST_KIT} tag="BUNDLES" title="ESTIMATOR KIT" desc="Practical bundle of tools designed for faster, cleaner project bids." />
                </div>
              </div>

              {/* SECTION 2: MONEY & OPERATIONS */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '15px', fontSize: '14px', letterSpacing: '2px' }}>02. CAPITAL & OPERATIONS</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                  <ToolCard url={PRODUCTS.LIFE_OP} tag="OPERATIONS" title="LIFE OPERATING SYSTEM" desc="Full life-management system for clarity, structure, and execution." />
                  <ToolCard url={PRODUCTS.IRRESIST} tag="CONVERSION" title="IRRESISTIBLE" desc="Designed to strengthen your offer and increase customer action." />
                  <ToolCard url={PRODUCTS.STEPS} tag="STRATEGY" title="4-STEP SYSTEM" desc="A guided framework to simplify action and create faster progress." />
                </div>
              </div>

              {/* SECTION 3: MINDSET & RESET */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '15px', fontSize: '14px', letterSpacing: '2px' }}>03. PERFORMANCE & RESET</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                  <ToolCard url={PRODUCTS.MINDSET} tag="COGNITION" title="MINDSET MATRIX" desc="Cognitive overhaul system built to sharpen thinking and rebuild control." />
                  <ToolCard url={PRODUCTS.FLOW90} tag="EXECUTION" title="FLOW STATE 90" desc="Focus and execution system to help you reclaim deep work momentum." />
                  <ToolCard url={PRODUCTS.CONSISTENCY} tag="MOMENTUM" title="CONSISTENCY CATALYST" desc="Built to help you create structure, momentum, and follow-through." />
                  <ToolCard url={PRODUCTS.CRPS} tag="RESILIENCE" title="CRPS RESET" desc="Support-focused system for direction, encouragement, and resilience." />
                  <ToolCard url={PRODUCTS.RESET} tag="TRANSFORMATION" title="RESET SYSTEM" desc="Transformation tool built to help you regroup and move forward." />
                </div>
              </div>

            </div>
          )}
        </main>
      </div>
    </div>
  );
                }
          
