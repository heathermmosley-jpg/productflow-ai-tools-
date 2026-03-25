"use client";
import { useState } from "react";

export default function ProductFlowAI() {
  const [activeTab, setActiveTab] = useState("HOME");
  
  // --- LOGIC STATES ---
  const [padInput, setPadInput] = useState("");
  const [padResult, setPadResult] = useState<{niche: string, angle: string} | null>(null);
  const [coachInput, setCoachInput] = useState("");
  const [coachResult, setCoachResult] = useState("");
  const [requestData, setRequestData] = useState({ name: "", email: "", outcome: "" });
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // --- PRODUCT LINKS ---
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

  const ToolCard = ({ title, desc, tag, url, isComingSoon = false }: any) => (
    <div style={{ backgroundColor: '#111', border: '2px solid white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ color: '#facc15', fontSize: '10px', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase' }}>{tag}</div>
        <h3 style={{ fontSize: '18px', fontWeight: '900', margin: '0 0 8px 0', lineHeight: '1.1' }}>{title}</h3>
        <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.4' }}>{desc}</p>
      </div>
      <button onClick={() => !isComingSoon && window.open(url, "_blank")} disabled={isComingSoon} style={{ marginTop: '15px', backgroundColor: isComingSoon ? '#333' : 'white', color: 'black', padding: '10px', fontWeight: '900', border: 'none', cursor: isComingSoon ? 'default' : 'pointer', fontSize: '12px' }}>
        {isComingSoon ? "COMING SOON" : "BUY NOW"}
      </button>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '10px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', border: '8px solid white', minHeight: '95vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050505' }}>
        
        {/* NAVIGATION */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '6px solid white', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab("HOME")}>
            <div style={{ width: '18px', height: '18px', backgroundColor: '#facc15', border: '2px solid white' }}></div>
            <span style={{ fontWeight: '900', fontSize: '18px' }}>PRODUCTFLOW AI</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {["HOME", "THE PAD", "FREE TOOLS", "STORE", "AI COACH", "REQUEST"].map((item) => (
              <button key={item} onClick={() => setActiveTab(item)} style={{ background: activeTab === item ? '#facc15' : 'none', color: activeTab === item ? 'black' : 'white', fontWeight: '900', fontSize: '11px', padding: '6px 12px', border: activeTab === item ? '2px solid white' : 'none', cursor: 'pointer' }}>{item}</button>
            ))}
          </div>
        </nav>

        <main style={{ flexGrow: 1, padding: '30px 20px' }}>
          
          {/* HOME */}
          {activeTab === "HOME" && (
            <div style={{ textAlign: 'center' }} className="fade-in">
              <h1 style={{ fontSize: 'clamp(35px, 7vw, 75px)', fontWeight: '900', lineHeight: '0.85' }}>MISSION <span style={{ color: '#facc15' }}>CONTROL.</span></h1>
              <p style={{ color: '#888', margin: '20px 0 30px' }}>The central hub for high-performance systems.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button onClick={() => setActiveTab("STORE")} style={{ backgroundColor: 'white', color: 'black', padding: '15px 30px', fontWeight: '900', cursor: 'pointer', border: 'none' }}>ENTER STORE</button>
                <button onClick={() => setActiveTab("THE PAD")} style={{ backgroundColor: 'transparent', color: 'white', padding: '15px 30px', border: '3px solid white', fontWeight: '900', cursor: 'pointer' }}>THE PAD</button>
              </div>
            </div>
          )}

          {/* THE PAD */}
          {activeTab === "THE PAD" && (
            <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '40px', color: '#facc15', fontWeight: '900' }}>THE PAD</h2>
              <div style={{ textAlign: 'left', backgroundColor: '#111', border: '4px solid white', padding: '30px', marginTop: '20px' }}>
                <input value={padInput} onChange={(e) => setPadInput(e.target.value)} placeholder="ENTER TARGET NICHE..." style={{ width: '100%', padding: '20px', background: 'black', border: '2px solid white', color: 'white' }} />
                <button onClick={() => setPadResult({niche: padInput, angle: "ELITE SYSTEM ARCHITECTURE"})} style={{ width: '100%', padding: '20px', background: '#facc15', border: 'none', marginTop: '10px', fontWeight: '900', cursor: 'pointer' }}>GENERATE</button>
              </div>
              {padResult && <div style={{ marginTop: '20px', border: '2px solid #facc15', padding: '20px' }}><h3>{padResult.niche.toUpperCase()}</h3><p>{padResult.angle}</p></div>}
            </div>
          )}

          {/* FREE TOOLS */}
          {activeTab === "FREE TOOLS" && (
            <div className="fade-in">
              <h2 style={{ marginBottom: '20px' }}>FREE <span style={{ color: '#facc15' }}>RESOURCES</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                <ToolCard tag="NICHE" title="NICHE FINDER" desc="Identify high-traffic sub-sectors." isComingSoon={true} />
                <ToolCard tag="MARKETING" title="OFFER ANGLE" desc="Generate 5 unique hooks." isComingSoon={true} />
              </div>
            </div>
          )}

          {/* STORE (CATEGORIZED) */}
          {activeTab === "STORE" && (
            <div className="fade-in">
              <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '25px' }}>SYSTEM <span style={{ color: '#facc15' }}>ARCHIVE</span></h2>
              
              <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '15px', fontSize: '12px', letterSpacing: '2px' }}>01. CONTRACTOR COMMAND</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                <ToolCard url={PRODUCTS.ESTIMATOR} tag="ESTIMATING" title="20-YEAR ESTIMATOR" desc="Professional pricing system for contractors." />
                <ToolCard url={PRODUCTS.EST_KIT} tag="BUNDLES" title="ESTIMATOR KIT" desc="Practical bundle for project bidding." />
              </div>

              <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '15px', fontSize: '12px', letterSpacing: '2px' }}>02. CAPITAL & OPERATIONS</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                <ToolCard url={PRODUCTS.LIFE_OP} tag="OPERATIONS" title="LIFE OPERATING SYSTEM" desc="Full clarity and structure system." />
                <ToolCard url={PRODUCTS.IRRESIST} tag="CONVERSION" title="IRRESISTIBLE" desc="Strengthen your offer and action." />
                <ToolCard url={PRODUCTS.STEPS} tag="STRATEGY" title="4-STEP SYSTEM" desc="Guided framework for progress." />
              </div>

              <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '15px', fontSize: '12px', letterSpacing: '2px' }}>03. MINDSET & PERFORMANCE</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                <ToolCard url={PRODUCTS.MINDSET} tag="COGNITION" title="MINDSET MATRIX" desc="The cognitive overhaul system." />
                <ToolCard url={PRODUCTS.FLOW90} tag="EXECUTION" title="FLOW STATE 90" desc="Focus and deep work protocol." />
                <ToolCard url={PRODUCTS.CONSISTENCY} tag="MOMENTUM" title="CONSISTENCY CATALYST" desc="Structure and follow-through." />
                <ToolCard url={PRODUCTS.RESET} tag="TRANSFORMATION" title="RESET SYSTEM" desc="Regroup and move forward." />
                <ToolCard url={PRODUCTS.CRPS} tag="RESILIENCE" title="CRPS RESET" desc="Direction and encouragement." />
              </div>
            </div>
          )}

          {/* AI COACH */}
          {activeTab === "AI COACH" && (
            <div className="fade-in" style={{ maxWidth: '700px', margin: '0 auto', border: '4px solid #facc15', padding: '30px', backgroundColor: '#111' }}>
              <h2>AI SOLUTION <span style={{ color: '#facc15' }}>ROUTER</span></h2>
              <textarea value={coachInput} onChange={(e) => setCoachInput(e.target.value)} placeholder="DESCRIBE YOUR BOTTLENECK..." style={{ width: '100%', height: '120px', background: 'black', border: '2px solid white', color: 'white', padding: '15px', marginTop: '15px' }} />
              <button onClick={() => setCoachResult("RECOMMENDED: INITIALIZE FLOW STATE 90 PROTOCOL.")} style={{ width: '100%', padding: '15px', background: '#facc15', fontWeight: '900', border: 'none', cursor: 'pointer', marginTop: '10px' }}>ANALYZE</button>
              {coachResult && <div style={{ marginTop: '20px', border: '2px solid white', padding: '15px' }}>{coachResult}</div>}
            </div>
          )}

          {/* REQUEST */}
          {activeTab === "REQUEST" && (
            <div className="fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
              {!requestSubmitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <h2>REQUEST <span style={{ color: '#facc15' }}>BUILD</span></h2>
                  <input placeholder="NAME" onChange={(e) => setRequestData({...requestData, name: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white' }} />
                  <textarea placeholder="OUTCOME NEEDED" onChange={(e) => setRequestData({...requestData, outcome: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white', height: '100px' }} />
                  <button onClick={() => setRequestSubmitted(true)} style={{ padding: '20px', background: 'white', color: 'black', fontWeight: '900', cursor: 'pointer' }}>SUBMIT</button>
                </div>
              ) : (
                <div style={{ border: '4px solid #facc15', padding: '40px', textAlign: 'center' }}><h2>SENT</h2><button onClick={() => setRequestSubmitted(false)}>NEW</button></div>
              )}
            </div>
          )}

        </main>
        <footer style={{ padding: '20px', borderTop: '4px solid white', textAlign: 'center', fontSize: '10px', color: '#444' }}>SYSTEM ONLINE // 2026</footer>
      </div>
    </div>
  );
      }
                  
