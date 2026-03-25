"use client";
import { useState } from "react";

export default function ProductFlowAI() {
  const [activeTab, setActiveTab] = useState("HOME");
  const [padInput, setPadInput] = useState("");
  const [padResult, setPadResult] = useState<{niche: string, angle: string} | null>(null);
  const [padError, setPadError] = useState("");
  const [coachInput, setCoachInput] = useState("");
  const [coachResult, setCoachResult] = useState("");
  const [coachError, setCoachError] = useState("");
  const [requestData, setRequestData] = useState({ name: "", email: "", outcome: "" });
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const G_BASE = "https://legacyprovault.gumroad.com";
  const navItems = ["HOME", "THE PAD", "FREE TOOLS", "STORE", "AI COACH", "REQUEST"];

  const ToolCard = ({ title, desc, tag, url = "", isComingSoon = false }: any) => (
    <div style={{ backgroundColor: '#111', border: '3px solid white', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ color: '#facc15', fontSize: '11px', fontWeight: '900', marginBottom: '10px', textTransform: 'uppercase' }}>{tag}</div>
        <h3 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 10px 0' }}>{title}</h3>
        <p style={{ fontSize: '13px', color: '#aaa' }}>{desc}</p>
      </div>
      <button onClick={() => !isComingSoon && window.open(url, "_blank")} disabled={isComingSoon} style={{ marginTop: '20px', backgroundColor: isComingSoon ? '#333' : 'white', color: isComingSoon ? '#777' : 'black', padding: '12px', fontWeight: '900', border: 'none', cursor: isComingSoon ? 'not-allowed' : 'pointer' }}>
        {isComingSoon ? "COMING SOON" : "ACCESS TOOL"}
      </button>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '10px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', border: '8px solid white', minHeight: '95vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050505' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '6px solid white', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab("HOME")}>
            <div style={{ width: '18px', height: '18px', backgroundColor: '#facc15', border: '2px solid white' }}></div>
            <span style={{ fontWeight: '900', fontSize: '18px' }}>PRODUCTFLOW AI</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <button key={item} onClick={() => setActiveTab(item)} style={{ background: activeTab === item ? '#facc15' : 'none', color: activeTab === item ? 'black' : 'white', fontWeight: '900', fontSize: '11px', padding: '6px 12px', border: activeTab === item ? '2px solid white' : 'none', cursor: 'pointer' }}>{item}</button>
            ))}
          </div>
        </nav>
        <main style={{ flexGrow: 1, padding: '30px 20px' }}>
          {activeTab === "HOME" && (
            <div className="fade-in" style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: 'clamp(35px, 7vw, 75px)', fontWeight: '900', lineHeight: '0.85' }}>FIND THE PROBLEM.<br/><span style={{ color: '#facc15' }}>GET THE TOOL.</span></h1>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '30px 0' }}>
                <button onClick={() => setActiveTab("THE PAD")} style={{ backgroundColor: 'white', color: 'black', padding: '18px 30px', fontWeight: '900', cursor: 'pointer' }}>START WITH THE PAD</button>
                <button onClick={() => setActiveTab("STORE")} style={{ backgroundColor: 'transparent', color: 'white', padding: '18px 30px', border: '3px solid white', cursor: 'pointer' }}>SHOP TRANSFORMATIONS</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div onClick={() => setActiveTab("THE PAD")} style={{ border: '4px solid white', padding: '30px', backgroundColor: '#111', cursor: 'pointer' }}><h2>THE PAD</h2><p>Identify niche/pain points.</p></div>
                <div onClick={() => setActiveTab("STORE")} style={{ border: '4px solid #facc15', padding: '30px', backgroundColor: '#111', cursor: 'pointer' }}><h2>STORE</h2><p>Ready-made systems.</p></div>
                <div onClick={() => setActiveTab("REQUEST")} style={{ border: '4px solid white', padding: '30px', backgroundColor: '#111', cursor: 'pointer' }}><h2>CUSTOM</h2><p>Tailored builds.</p></div>
              </div>
            </div>
          )}
          {activeTab === "THE PAD" && (
            <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '45px', color: '#facc15', fontWeight: '900' }}>THE PAD</h2>
              <div style={{ textAlign: 'left', backgroundColor: '#111', border: '4px solid white', padding: '30px' }}>
                <input value={padInput} onChange={(e) => setPadInput(e.target.value)} placeholder="ENTER NICHE..." style={{ width: '100%', padding: '20px', background: 'black', border: '2px solid white', color: 'white' }} />
                {padError && <p style={{ color: 'red', fontWeight: '900' }}>{padError}</p>}
                <button onClick={() => padInput.trim() ? setPadResult({niche: padInput, angle: "ELITE SYSTEM"}) : setPadError("INPUT REQUIRED")} style={{ width: '100%', padding: '20px', background: '#facc15', border: 'none', marginTop: '10px', fontWeight: '900', cursor: 'pointer' }}>GENERATE</button>
              </div>
              {padResult && <div style={{ marginTop: '20px', border: '4px solid #facc15', padding: '20px' }}><h3>NICHE: {padResult.niche.toUpperCase()}</h3><p>ANGLE: {padResult.angle}</p></div>}
            </div>
          )}
          {activeTab === "FREE TOOLS" && (
            <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              <ToolCard tag="NICHE" title="NICHE FINDER" desc="Identify high-traffic sub-sectors." isComingSoon={true} />
              <ToolCard tag="MARKETING" title="OFFER ANGLE" desc="Pitch your service 5 unique ways." isComingSoon={true} />
              <ToolCard tag="PERFORMANCE" title="FOCUS SCORE" desc="Audit your productivity grade." isComingSoon={true} />
              <ToolCard tag="ROUTINE" title="DAILY RESET" desc="2-minute morning protocol." isComingSoon={true} />
            </div>
          )}
          {activeTab === "STORE" && (
            <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              <ToolCard url={`${G_BASE}/l/mindsetmatrix`} tag="MINDSET" title="MINDSET MATRIX" desc="Cognitive Overhaul System." />
              <ToolCard url={`${G_BASE}/l/flowstate`} tag="FOCUS" title="FLOW STATE" desc="Execution Manual." />
              <ToolCard url={`${G_BASE}/l/wealthwidget`} tag="FINANCE" title="WEALTH WIDGET" desc="Budgeting Blueprint." />
              <ToolCard url={`${G_BASE}/l/cashflowcode`} tag="DEBT" title="CASHFLOW CODE" desc="Debt Liberation Protocol." />
            </div>
          )}
          {activeTab === "AI COACH" && (
            <div className="fade-in" style={{ maxWidth: '700px', margin: '0 auto', border: '4px solid #facc15', padding: '30px', backgroundColor: '#111' }}>
              <h2>AI SOLUTION ROUTER</h2>
              <textarea value={coachInput} onChange={(e) => setCoachInput(e.target.value)} placeholder="WHAT ARE YOU STRUGGLING WITH?" style={{ width: '100%', height: '120px', background: 'black', border: '2px solid white', color: 'white', padding: '15px' }} />
              {coachError && <p style={{ color: 'red' }}>{coachError}</p>}
              <button onClick={() => coachInput.trim() ? setCoachResult("START WITH THE FLOW STATE MODULE.") : setCoachError("DESCRIBE YOUR BOTTLENECK")} style={{ width: '100%', padding: '15px', background: '#facc15', fontWeight: '900', border: 'none', cursor: 'pointer', marginTop: '10px' }}>GET RECOMMENDATION</button>
              {coachResult && <p style={{ marginTop: '20px', border: '2px solid white', padding: '15px' }}>{coachResult}</p>}
            </div>
          )}
          {activeTab === "REQUEST" && (
            <div className="fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
              {!requestSubmitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input placeholder="NAME" onChange={(e) => setRequestData({...requestData, name: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white' }} />
                  <input placeholder="EMAIL" onChange={(e) => setRequestData({...requestData, email: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white' }} />
                  <textarea placeholder="OUTCOME" onChange={(e) => setRequestData({...requestData, outcome: e.target.value})} style={{ padding: '15px', background: '#111', border: '2px solid white', color: 'white', height: '100px' }} />
                  <button onClick={() => requestData.name ? setRequestSubmitted(true) : alert("COMPLETE FIELDS")} style={{ padding: '20px', background: 'white', color: 'black', fontWeight: '900', cursor: 'pointer' }}>SUBMIT REQUEST</button>
                </div>
              ) : (
                <div style={{ border: '6px solid #facc15', padding: '40px', textAlign: 'center' }}><h2>SENT</h2><p>Reviewing outcome parameters.</p><button onClick={() => setRequestSubmitted(false)} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>NEW REQUEST</button></div>
              )}
            </div>
          )}
        </main>
        <footer style={{ padding: '25px', borderTop: '6px solid white', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', color: '#444', letterSpacing: '5px' }}>SYSTEM ONLINE // 2026</div>
        </footer>
      </div>
    </div>
  );
}
