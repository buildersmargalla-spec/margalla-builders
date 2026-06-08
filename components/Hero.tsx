"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  const stats = [
    { num: "3+", label: "Years Experience" },
    { num: "25+", label: "Projects Completed" },
    { num: "500+", label: "Families Served" },
    { num: "100%", label: "On-Time Delivery" },
  ];

  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: "var(--stone)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "120px 48px 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(107,122,42,0.04) 0px, rgba(107,122,42,0.04) 1px, transparent 1px, transparent 60px)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 40, height: 1, background: "var(--gold2)" }} />
          <span style={{
            color: "var(--gold2)", fontSize: 12, letterSpacing: "0.2em",
            textTransform: "uppercase", fontFamily: "var(--font-outfit)",
          }}>Islamabad's Premier Developers</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(48px, 7vw, 92px)",
          fontWeight: 300, color: "#F4F7EE",
          lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.02em",
        }}>
          Building Islamabad's<br />
          <em style={{ color: "var(--gold2)", fontStyle: "italic" }}>Tomorrow</em>
        </h1>

        <div style={{
          color: "rgba(244,247,238,0.45)", fontSize: 11,
          letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24,
        }}>
          Margalla Builders & Developers · Islamabad, Pakistan
        </div>

        <p style={{
          color: "rgba(244,247,238,0.65)", fontSize: 16,
          lineHeight: 1.75, maxWidth: 520, marginBottom: 44,
          fontFamily: "var(--font-outfit)",
        }}>
          Since 2022, we have been crafting exceptional residential and commercial properties across Islamabad — where quality, trust, and timely delivery define every project.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" style={{
            background: "var(--gold)", color: "#fff",
            padding: "14px 32px", fontSize: 13, letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            borderRadius: 2, transition: "all 0.2s",
            fontFamily: "var(--font-outfit)",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--gold2)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
          >View Our Portfolio</a>

          <a href="#about" style={{
            border: "1px solid rgba(244,247,238,0.3)", color: "rgba(244,247,238,0.8)",
            padding: "14px 32px", fontSize: 13, letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            borderRadius: 2, transition: "all 0.2s",
            fontFamily: "var(--font-outfit)",
            display: "flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(244,247,238,0.7)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(244,247,238,0.3)"}
          >Our Story <span>→</span></a>
        </div>
      </div>

      <div style={{
        display: "flex", gap: 0, marginTop: 80,
        borderTop: "1px solid rgba(107,122,42,0.2)",
        paddingTop: 40, flexWrap: "wrap",
        position: "relative", zIndex: 1,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            flex: 1, minWidth: 120,
            padding: "0 32px 0 0",
            borderRight: i < stats.length - 1 ? "1px solid rgba(107,122,42,0.2)" : "none",
            marginRight: i < stats.length - 1 ? 32 : 0,
          }}>
            <div style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: 42, fontWeight: 300, color: "var(--gold)", lineHeight: 1,
            }}>{s.num}</div>
            <div style={{
              color: "rgba(244,247,238,0.5)", fontSize: 11,
              letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 6,
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:900px){
          section#home { padding: 100px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
}