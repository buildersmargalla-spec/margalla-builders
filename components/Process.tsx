"use client";
import { useEffect, useRef } from "react";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { num: "01", icon: "◎", title: "Site Selection", desc: "We identify and evaluate prime locations with full legal due diligence." },
    { num: "02", icon: "◈", title: "Design & Approvals", desc: "Architectural design with CDA and RDA approvals secured before groundbreaking." },
    { num: "03", icon: "⌂", title: "Construction", desc: "High-quality construction with certified engineers and premium materials." },
    { num: "04", icon: "✦", title: "Quality Handover", desc: "Thorough quality inspection and snag-free handover to every client." },
    { num: "05", icon: "◷", title: "After-Sales Care", desc: "Dedicated support team for maintenance and post-handover assistance." },
  ];

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  return (
    <section id="process" ref={ref} style={{
      background: "#fff",
      padding: "100px 48px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="reveal" style={{ ...revealStyle, display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
            <span style={{ color: "var(--gold2)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              How We Work
            </span>
            <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
          </div>
          <h2 className="reveal" style={{
            ...revealStyle,
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, color: "var(--text)", lineHeight: 1.1,
          }}>
            Our <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Process</em>
          </h2>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 0,
          position: "relative",
        }}>
          {/* Connecting line */}
          <div style={{
            position: "absolute",
            top: 36, left: "10%", right: "10%",
            height: 1,
            background: "var(--border)",
            zIndex: 0,
          }} />

          {steps.map((s, i) => (
            <div key={i} className="reveal" style={{
              ...revealStyle,
              textAlign: "center",
              padding: "0 16px",
              position: "relative", zIndex: 1,
            }}>
              {/* Circle */}
              <div style={{
                width: 72, height: 72,
                border: "1px solid var(--border)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
                background: "#fff",
                fontSize: 20, color: "var(--gold)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "var(--gold)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {s.icon}
              </div>

              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 11, color: "var(--gold2)",
                letterSpacing: "0.2em", textTransform: "uppercase",
                marginBottom: 8,
              }}>{s.num}</div>

              <h3 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 19, fontWeight: 600,
                color: "var(--text)", marginBottom: 10,
              }}>{s.title}</h3>

              <p style={{
                color: "var(--muted)", fontSize: 13,
                lineHeight: 1.7,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section#process { padding: 70px 24px !important; }
          section#process > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          section#process > div > div:last-child > div:first-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}