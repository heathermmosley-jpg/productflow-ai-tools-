"use client";
import { useState } from "react";

export default function ProductFlowAI() {
  // --- NAVIGATION STATE ---
  const [activeTab, setActiveTab] = useState("HOME");
  const [previousTab, setPreviousTab] = useState("HOME");

  // --- LOGIC STATES ---
  const [padInput, setPadInput] = useState("");
  const [padResult, setPadResult] = useState<{niche: string, angle: string} | null>(null);
  const [coachInput, setCoachInput] = useState("");
  const [coachStep, setCoachStep] = useState(1);
  const [coachDiagnosis, setCoachDiagnosis] = useState<{summary: string, nextStep: string, toolName: string, toolLink: string} | null>(null);
  const [followUpInput, setFollowUpInput] = useState("");
  const [followUpResponse, setFollowUpResponse] = useState("");
  
  // --- REQUEST STATE ---
  const [requestData, setRequestData] = useState({ name: "", email: "", outcome: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // --- NAV HELPERS ---
  const handleTabChange = (newTab: string) => {
    setPreviousTab(activeTab);
    setActiveTab(newTab);
  };

  const goBack = () => setActiveTab(previousTab);

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

  // --- FORM SUBMISSION ENGINE ---
  const handleRequestSubmit = async () => {
    if (!requestData.name || !requestData.outcome) {
      alert("Please fill in your name and the required outcome.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvzvozjo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setRequestSubmitted(true);
      } else {
        alert("System error. Please try again or contact support.");
      }
    } catch (error) {
      alert("Connection error. Check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- COMPONENTS ---
  const BackButton = () => (
    <button onClick={goBack} style={{ marginBottom: '20px', padding: '8px 15px', backgroundColor: 'transparent', color: '#facc15', border: '2px solid #facc15', fontWeight: '900', fontSize: '11px', cursor: 'pointer', textTransform: 'uppercase' }}>
      ← BACK
    </button>
  );

  const ToolCard = ({ title, desc, tag, url, isComingSoon = false }: any) => (
    <div style={{ backgroundColor: '#111', border: '2px solid white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ color: '#facc15', fontSize: '10px', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase' }}>{tag}</div>
        <h3 style={{ fontSize: '18px', fontWeight: '900', margin: '0 0 8px 0', lineHeight: '1.1' }}>{title}</h3>
        <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.4' }}>{desc}</p>
      </div>
      <button 
        onClick={() => !isComingSoon && window.open(url, "_blank")} 
        disabled={isComingSoon} 
        style={{ marginTop: '15px', backgroundColor: isComingSoon ? '#333' : 'white', color: isComingSoon ? '#777' : 'black', padding: '10px', fontWeight: '900', border: 'none', cursor: isComingSoon ? 'default' : 'pointer', fontSize: '12px' }}
      >
        {isComingSoon ? "COMING SOON" : "BUY NOW"}
      </button>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '10px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', border: '8px solid white', minHeight: '95vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050505' }}>
        
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '6px solid white', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => handleTabChange("HOME")}>
            <div style={{ width: '18px', height: '18px', backgroundColor: '#facc15', border: '2px solid white' }}></div>
            <span style={{ fontWeight: '900', fontSize: '18px' }}>PRODUCTFLOW AI</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {["HOME", "THE PAD", "FREE TOOLS", "STORE", "AI COACH", "REQUEST"].map((item) => (
              <button key={item} onClick={() => handleTabChange(item)} style={{ background: activeTab === item ? '#facc15' : 'none', color: activeTab === item ? 'black' : 'white', fontWeight: '900', fontSize: '11px', padding: '6px 12px', border: activeTab === item ? '2px solid white' : 'none', cursor: 'pointer' }}>{item}</button>
            ))}
          </div>
        </nav>

        <main style={{ flexGrow: 1, padding: '30px 20px' }}>
          
          {activeTab === "HOME" && (
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: 'clamp(35px, 7vw, 75px)', fontWeight: '900', lineHeight: '0.85' }}>MISSION <span style={{ color: '#facc15' }}>CONTROL.</span></h1>
              <p style={{ color: '#888', margin: '20px 0 30px' }}>High-performance system deployment hub.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button onClick={() => handleTabChange("STORE")} style={{ backgroundColor: 'white', color: 'black', padding: '15px 30px', fontWeight: '900', cursor: 'pointer', border: 'none' }}>ENTER STORE</button>
                <button onClick={() => handleTabChange("AI COACH")} style={{ backgroundColor: 'transparent', color: 'white', padding: '15px 30px', border: '3px solid white', fontWeight: '900', cursor: 'pointer' }}>START COACHING</button>
              </div>
            </div>
          )}

          {activeTab === "THE PAD" && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <BackButton />
              <div style={{ textAlign: 'center' }}>
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
                      <button onClick={() => {setPadInput(""); setPadResult(null);}} style={{ padding: '10px 20px', background: 'white', color: 'black', fontWeight: '900', border: 'none', cursor: 'pointer' }}>START OVER</button>
                      <button onClick={() => handleTabChange("REQUEST")} style={{ padding: '10px 20px', background: 'transparent', color: 'white', border: '2px solid white', fontWeight: '900', cursor: 'pointer' }}>REQUEST FULL BUILD</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "STORE" && (
            <div>
              <BackButton />
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
                <ToolCard url={PRODUCTS.STEPS} tag="STRATEGY" title="4-STEP SYSTEM" desc="Guided framework for progress." isComingSoon={true} />
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

          {activeTab === "AI COACH" && (
            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
              <BackButton />
              <div style={{ border: '4px solid #facc15', padding: '30px', backgroundColor: '#111' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>AI SOLUTION <span style={{ color: '#facc15' }}>ROUTER</span></h2>
                {coachStep === 1 && (
                  <div style={{ marginTop: '20px' }}>
                    <textarea value={coachInput} onChange={(e) => setCoachInput(e.target.value)} placeholder="DESCRIBE YOUR BOTTLENECK..." style={{ width: '100%', height: '120px', background: 'black', border: '2px solid white', color: 'white', padding: '15px' }} />
                    <button onClick={() => { setCoachDiagnosis({ summary: "Execution bottleneck identified.", nextStep: "Implement Flow State 90.", toolName: "FLOW STATE 90", toolLink: PRODUCTS.FLOW90 }); setCoachStep(2); }} style={{ width: '100%', padding: '15px', background: '#facc15', fontWeight: '900', border: 'none', cursor: 'pointer', marginTop: '10px' }}>ANALYZE</button>
                  </div>
                )}
                {coachStep >= 2 && coachDiagnosis && (
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ padding: '15px', border: '2px solid white', background: 'black', marginBottom: '15px' }}>
                      <p style={{ color: '#facc15', fontWeight: '900' }}>DIAGNOSIS: {coachDiagnosis.summary}</p>
                      <p>NEXT STEP: {coachDiagnosis.nextStep}</p>
                    </div>
                    {coachStep === 2 && (
                      <div style={{ marginTop: '15px' }}>
                        <textarea value={followUpInput} onChange={(e) => setFollowUpInput(e.target.value)} placeholder="ASK A FOLLOW-UP..." style={{ width: '100%', height: '80px', background: 'black', border: '2px solid white', color: 'white', padding: '15px' }} />
                        <button onClick={() => { setFollowUpResponse("Focus on the inhibitor flush protocol first."); setCoachStep(3); }} style={{ width: '100%', padding: '15px', background: 'white', color: 'black', fontWeight: '900', marginTop: '10px', cursor: 'pointer' }}>ASK COACH</button>
                      </div>
                    )}
                    {coachStep === 3 && (
                      <div style={{ padding: '15px', border: '2px solid #facc15', background: '#0a0a0a', marginBottom: '15px' }}>
                        <p style={{ color: '#facc15' }}>COACH: {followUpResponse}</p>
                      </div>
                    )}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
                      <button onClick={() => window.open(coachDiagnosis.toolLink, "_blank")} style={{ padding: '12px', background: '#facc15', fontWeight: '900' }}>GO TO TOOL</button>
                      <button onClick={() => handleTabChange("STORE")} style={{ padding: '12px', background: 'white', fontWeight: '900' }}>VIEW STORE</button>
                      <button onClick={() => handleTabChange("REQUEST")} style={{ padding: '12px', background: 'transparent', color: 'white', border: '2px solid white' }}>REQUEST BUILD</button>
                      <button onClick={() => { setCoachStep(1); setCoachDiagnosis(null); }} style={{ padding: '12px', background: '#333' }}>START OVER</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "REQUEST" && (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <BackButton />
              {!requestSubmitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <h2 style={{ fontSize: '32px', fontWeight: '900' }}>REQUEST <span style={{ color: '#facc15' }}>BUILD</span></h2>
                  <p style={{ fontSize: '13px', color: '#888' }}>Our engine will analyze this and contact you with a build quote.</p>
                  <input placeholder="NAME" value={requestData.name} onChange={(e) => setRequestData({...requestData, name: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white' }} />
                  <input placeholder="EMAIL ADDRESS" value={requestData.email} onChange={(e) => setRequestData({...requestData, email: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white' }} />
                  <textarea placeholder="DESCRIBE THE OUTCOME YOU NEED..." value={requestData.outcome} onChange={(e) => setRequestData({...requestData, outcome: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white', height: '120px' }} />
                  <button 
                    onClick={handleRequestSubmit} 
                    disabled={isSubmitting}
                    style={{ padding: '20px', background: isSubmitting ? '#333' : 'white', color: isSubmitting ? '#777' : 'black', fontWeight: '900', cursor: isSubmitting ? 'default' : 'pointer' }}
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT REQUEST"}
                  </button>
                </div>
              ) : (
                <div style={{ border: '4px solid #facc15', padding: '40px', textAlign: 'center', backgroundColor: '#111' }}>
                  <h2 style={{ color: '#facc15' }}>TRANSMISSION RECEIVED</h2>
                  <p style={{ margin: '20px 0', fontSize: '14px' }}>Your request has been sent to the build engine. Check your email for next steps.</p>
                  <button onClick={() => setRequestSubmitted(false)} style={{ padding: '10px 20px', background: 'white', color: 'black', border: 'none', fontWeight: '900', cursor: 'pointer' }}>NEW REQUEST</button>
                </div>
              )}
            </div>
          )}

          {activeTab === "FREE TOOLS" && (
            <div>
              <BackButton />
              <h2 style={{ marginBottom: '20px' }}>FREE <span style={{ color: '#facc15' }}>RESOURCES</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                <ToolCard tag="NICHE" title="NICHE FINDER" desc="Identify high-traffic sub-sectors." isComingSoon={true} />
                <ToolCard tag="MARKETING" title="OFFER ANGLE" desc="Generate 5 unique hooks." isComingSoon={true} />
              </div>
            </div>
          )}

        </main>
        <footer style={{ padding: '20px', borderTop: '4px solid white', textAlign: 'center', fontSize: '10px', color: '#444' }}>SYSTEM ONLINE // 2026</footer>
      </div>
    </div>
  );
}
