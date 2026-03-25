"use client";
import { useState } from "react";

/**
 * PRODUCTFLOW AI - v2.5 (MULTI-STEP COACHING & FLOW UPGRADE)
 * - Restored full logic for THE PAD, AI COACH, and FREE TOOLS.
 * - Added Multi-Step AI Coaching (Diagnosis + Follow-up).
 * - Added Navigation Flow (Start Over / Recommended Tool / Request).
 */

export default function ProductFlowAI() {
  const [activeTab, setActiveTab] = useState("HOME");
  
  // --- GLOBAL PRODUCT LINKS ---
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

  // --- THE PAD STATE ---
  const [padInput, setPadInput] = useState("");
  const [padResult, setPadResult] = useState<{niche: string, angle: string} | null>(null);

  // --- AI COACH STATE (MULTI-STEP) ---
  const [coachInput, setCoachInput] = useState("");
  const [coachStep, setCoachStep] = useState(1); // 1: Input, 2: Diagnosis, 3: Follow-up
  const [coachDiagnosis, setCoachDiagnosis] = useState<{summary: string, nextStep: string, toolName: string, toolLink: string} | null>(null);
  const [followUpInput, setFollowUpInput] = useState("");
  const [followUpResponse, setFollowUpResponse] = useState("");

  // --- REQUEST STATE ---
  const [requestData, setRequestData] = useState({ name: "", email: "", outcome: "" });
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // --- REUSABLE COMPONENTS ---
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

  // --- LOGIC HANDLERS ---
  const handleCoachAnalysis = () => {
    if (!coachInput.trim()) return;
    setCoachDiagnosis({
      summary: `Analysis suggests a bottleneck in high-value execution and priority management.`,
      nextStep: "Implement a 90-minute isolation block to remove external friction.",
      toolName: "FLOW STATE 90",
      toolLink: PRODUCTS.FLOW90
    });
    setCoachStep(2);
  };

  const handleFollowUp = () => {
    if (!followUpInput.trim()) return;
    setFollowUpResponse(`To address that specifically, you should audit your current environment and utilize the 'Inhibitor Flush' found in the ${coachDiagnosis?.toolName} system.`);
    setCoachStep(3);
  };

  const resetCoach = () => {
    setCoachInput("");
    setFollowUpInput("");
    setFollowUpResponse("");
    setCoachDiagnosis(null);
    setCoachStep(1);
  };

  const resetPad = () => {
    setPadInput("");
    setPadResult(null);
  };

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
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: 'clamp(35px, 7vw, 75px)', fontWeight: '900', lineHeight: '0.85' }}>MISSION <span style={{ color: '#facc15' }}>CONTROL.</span></h1>
              <p style={{ color: '#888', margin: '20px 0 30px' }}>High-performance system deployment and diagnostic hub.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button onClick={() => setActiveTab("STORE")} style={{ backgroundColor: 'white', color: 'black', padding: '15px 30px', fontWeight: '900', cursor: 'pointer', border: 'none' }}>ENTER STORE</button>
                <button onClick={() => setActiveTab("AI COACH")} style={{ backgroundColor: 'transparent', color: 'white', padding: '15px 30px', border: '3px solid white', fontWeight: '900', cursor: 'pointer' }}>START COACHING</button>
              </div>
            </div>
          )}

          {/* THE PAD */}
          {activeTab === "THE PAD" && (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '40px', color: '#facc15', fontWeight: '900' }}>THE PAD</h2>
              {!padResult ? (
                <div style={{ textAlign: 'left', backgroundColor: '#111', border: '4px solid white', padding: '30px', marginTop: '20px' }}>
                  <input value={padInput} onChange={(e) => setPadInput(e.target.value)} placeholder="ENTER TARGET NICHE..." style={{ width: '100%', padding: '20px', background: 'black', border: '2px solid white', color: 'white' }} />
                  <button onClick={() => setPadResult({niche: padInput, angle: "ELITE SYSTEM ARCHITECTURE"})} style={{ width: '100%', padding: '20px', background: '#facc15', border: 'none', marginTop: '10px', fontWeight: '900', cursor: 'pointer' }}>GENERATE</button>
                </div>
              ) : (
                <div style={{ marginTop: '20px', border: '4px solid #facc15', padding: '30px', textAlign: 'left' }}>
                  <h3 style={{ color: '#facc15' }}>{padResult.niche.toUpperCase()} ARCHITECTURE</h3>
                  <p style={{ fontSize: '18px', marginBottom: '20px' }}>Angle: {padResult.angle}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={resetPad} style={{ padding: '10px 20px', background: 'white', color: 'black', fontWeight: '900', border: 'none', cursor: 'pointer' }}>START OVER</button>
                    <button onClick={() => setActiveTab("REQUEST")} style={{ padding: '10px 20px', background: 'transparent', color: 'white', border: '2px solid white', fontWeight: '900', cursor: 'pointer' }}>REQUEST FULL BUILD</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STORE (CATEGORIZED) */}
          {activeTab === "STORE" && (
            <div>
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

          {/* AI COACH (UPGRADED) */}
          {activeTab === "AI COACH" && (
            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
              <div style={{ border: '4px solid #facc15', padding: '30px', backgroundColor: '#111' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>AI SOLUTION <span style={{ color: '#facc15' }}>ROUTER</span></h2>
                
                {/* STEP 1: INITIAL QUESTION */}
                {coachStep === 1 && (
                  <div style={{ marginTop: '20px' }}>
                    <p style={{ color: '#888', marginBottom: '10px' }}>Identify your current bottleneck:</p>
                    <textarea value={coachInput} onChange={(e) => setCoachInput(e.target.value)} placeholder="I can't stay focused / My project estimating takes too long..." style={{ width: '100%', height: '120px', background: 'black', border: '2px solid white', color: 'white', padding: '15px' }} />
                    <button onClick={handleCoachAnalysis} style={{ width: '100%', padding: '15px', background: '#facc15', fontWeight: '900', border: 'none', cursor: 'pointer', marginTop: '10px' }}>GET RECOMMENDATION</button>
                  </div>
                )}

                {/* STEP 2: DIAGNOSIS & FOLLOW-UP */}
                {coachStep >= 2 && coachDiagnosis && (
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ padding: '20px', border: '2px solid white', background: 'black', marginBottom: '20px' }}>
                      <p style={{ color: '#facc15', fontWeight: '900', fontSize: '12px' }}>DIAGNOSIS SUMMARY:</p>
                      <p style={{ margin: '5px 0 15px' }}>{coachDiagnosis.summary}</p>
                      <p style={{ color: '#facc15', fontWeight: '900', fontSize: '12px' }}>RECOMMENDED NEXT STEP:</p>
                      <p style={{ margin: '5px 0' }}>{coachDiagnosis.nextStep}</p>
                    </div>

                    {coachStep === 2 && (
                      <div>
                        <p style={{ fontWeight: '900', fontSize: '12px', marginBottom: '10px' }}>ASK A FOLLOW-UP QUESTION:</p>
                        <textarea value={followUpInput} onChange={(e) => setFollowUpInput(e.target.value)} placeholder="How do I apply this to my specific morning routine?" style={{ width: '100%', height: '80px', background: 'black', border: '2px solid white', color: 'white', padding: '15px' }} />
                        <button onClick={handleFollowUp} style={{ width: '100%', padding: '15px', background: 'white', color: 'black', fontWeight: '900', border: 'none', cursor: 'pointer', marginTop: '10px' }}>ASK AI COACH</button>
                      </div>
                    )}

                    {coachStep === 3 && followUpResponse && (
                      <div style={{ padding: '20px', border: '2px solid #facc15', background: '#0a0a0a', marginBottom: '20px' }}>
                        <p style={{ color: '#facc15', fontWeight: '900', fontSize: '12px' }}>COACH FOLLOW-UP:</p>
                        <p style={{ margin: '10px 0' }}>{followUpResponse}</p>
                      </div>
                    )}

                    {/* ACTION PANEL */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginTop: '20px' }}>
                      <button onClick={() => window.open(coachDiagnosis.toolLink, "_blank")} style={{ padding: '12px', background: '#facc15', color: 'black', fontWeight: '900', border: 'none', cursor: 'pointer' }}>GO TO {coachDiagnosis.toolName}</button>
                      <button onClick={() => setActiveTab("STORE")} style={{ padding: '12px', background: 'white', color: 'black', fontWeight: '900', border: 'none', cursor: 'pointer' }}>VIEW STORE</button>
                      <button onClick={() => setActiveTab("REQUEST")} style={{ padding: '12px', background: 'transparent', color: 'white', border: '2px solid white', fontWeight: '900', cursor: 'pointer' }}>REQUEST BUILD</button>
                      <button onClick={resetCoach} style={{ padding: '12px', background: '#333', color: 'white', fontWeight: '900', border: 'none', cursor: 'pointer' }}>START OVER</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* REQUEST */}
          {activeTab === "REQUEST" && (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              {!requestSubmitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <h2 style={{ fontSize: '32px', fontWeight: '900' }}>REQUEST <span style={{ color: '#facc15' }}>BUILD</span></h2>
                  <input placeholder="NAME" onChange={(e) => setRequestData({...requestData, name: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white' }} />
                  <textarea placeholder="OUTCOME NEEDED" onChange={(e) => setRequestData({...requestData, outcome: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white', height: '100px' }} />
                  <button onClick={() => setRequestSubmitted(true)} style={{ padding: '20px', background: 'white', color: 'black', fontWeight: '900', cursor: 'pointer' }}>SUBMIT</button>
                </div>
              ) : (
                <div style={{ border: '4px solid #facc15', padding: '40px', textAlign: 'center' }}>
                  <h2>SENT</h2>
                  <button onClick={() => setRequestSubmitted(false)} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>NEW REQUEST</button>
                </div>
              )}
            </div>
          )}

          {/* FREE TOOLS */}
          {activeTab === "FREE TOOLS" && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>FREE <span style={{ color: '#facc15' }}>RESOURCES</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                <ToolCard tag="NICHE" title="NICHE FINDER" desc="Identify high-traffic sub-sectors." isComingSoon={true} />
                <ToolCard tag="MARKETING" title="OFFER ANGLE" desc="Generate 5 unique hooks." isComingSoon={true} />
              </div>
              <button onClick={() => setActiveTab("REQUEST")} style={{ marginTop: '30px', padding: '15px 30px', background: 'transparent', border: '2px solid #facc15', color: '#facc15', fontWeight: '900', cursor: 'pointer' }}>REQUEST A CUSTOM TOOL</button>
            </div>
          )}

        </main>
        <footer style={{ padding: '20px', borderTop: '4px solid white', textAlign: 'center', fontSize: '10px', color: '#444' }}>SYSTEM ONLINE // 2026</footer>
      </div>
    </div>
  );
  }
                                                                            
