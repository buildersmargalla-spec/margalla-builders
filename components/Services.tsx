"use client";
import { useEffect, useRef } from "react";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { num: "01", icon: "⌂", title: "Residential Development", desc: "Premium apartments, villas and townhouses across Islamabad's most sought-after sectors." },
    { num: "02", icon: "◫", title: "Commercial Projects", desc: "Office towers, retail plazas and mixed-use developments designed for modern business needs." },
    { num: "03", icon: "◈", title: "Housing Schemes", desc: "Planned gated communities with parks, amenities and CDA-approved infrastructure." },
    { num: "04", icon: "✦", title: "Interior Fit-Out", desc: "Full interior design and finishing services — from concept to handover." },
    { num: "05", icon: "◎", title: "Project Management", desc: "End-to-end construction management ensuring quality, timeline and budget control." },
    { num: "06", icon: "◇", title: "Real Estate Investment", desc: "Expert guidance for property investment with high ROI potential in Islamabad." },
  ];

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  return (
    <section id="services" ref={ref} style={{
      background: "var(--stone)",
      padding: "100px 48px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div className="reveal" style={{ ...revealStyle, display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
            <span style={{ color: "var(--gold2)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              What We Do
            </span>
          </div>
          <h2 className="reveal" style={{
            ...revealStyle,
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, color: "#F4F7EE",
            lineHeight: 1.1,
          }}>
            Our <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Services</em>
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "rgba(107,122,42,0.15)",
        }}>
          {services.map((s, i) => (
            <div key={i} className="reveal" style={{
              ...revealStyle,
              background: "var(--stone)",
              padding: "40px 32px",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              transition: "background 0.3s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--stone2)";
                const bar = e.currentTarget.querySelector(".gold-bar") as HTMLElement;
                if (bar) bar.style.width = "100%";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--stone)";
                const bar = e.currentTarget.querySelector(".gold-bar") as HTMLElement;
                if (bar) bar.style.width = "0%";
              }}
            >
              {/* Bottom border animation */}
              <div className="gold-bar" style={{
                position: "absolute", bottom: 0, left: 0,
                height: 2, width: "0%",
                background: "var(--gold)",
                transition: "width 0.4s ease",
              }} />

              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 48, fontWeight: 300,
                color: "rgba(107,122,42,0.3)",
                lineHeight: 1, marginBottom: 20,
              }}>{s.num}</div>

              <div style={{ fontSize: 24, color: "var(--gold)", marginBottom: 16 }}>{s.icon}</div>

              <h3 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 22, fontWeight: 600,
                color: "#F4F7EE", marginBottom: 12,
              }}>{s.title}</h3>

              <p style={{
                color: "rgba(244,247,238,0.55)",
                fontSize: 14, lineHeight: 1.7,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section#services { padding: 70px 24px !important; }
          section#services .reveal > div { grid-template-columns: 1fr !important; }
        }
        @media(max-width:900px){
          section#services > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}