"use client";
import { useEffect, useRef } from "react";

export default function WhyUs() {
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

  const features = [
    { num: "01", title: "SECP & CDA Registered", desc: "Fully registered and compliant with all regulatory bodies in Pakistan." },
    { num: "02", title: "19+ Years of Excellence", desc: "Two decades of delivering quality projects across Islamabad and Rawalpindi." },
    { num: "03", title: "Transparent Contracts", desc: "Clear pricing, no hidden charges — every term documented and explained." },
    { num: "04", title: "In-House Engineering", desc: "Our own team of certified engineers ensures quality at every stage." },
    { num: "05", title: "Post-Handover Support", desc: "Dedicated after-sales team available for 2 years post completion." },
  ];

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  return (
    <section id="why-us" ref={ref} style={{
      background: "var(--cream)",
      padding: "100px 48px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "start",
      }}>

        {/* Left — Features */}
        <div>
          <div className="reveal" style={{ ...revealStyle, display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
            <span style={{ color: "var(--gold2)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Why Choose Us
            </span>
          </div>

          <h2 className="reveal" style={{
            ...revealStyle,
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, color: "var(--text)",
            lineHeight: 1.1, marginBottom: 48,
          }}>
            The Margalla<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Difference</em>
          </h2>

          {features.map((f, i) => (
            <div key={i} className="reveal" style={{
              ...revealStyle,
              display: "flex", gap: 24, alignItems: "flex-start",
              padding: "24px 0",
              borderBottom: "1px solid var(--border)",
            }}>
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 13, color: "var(--gold)",
                letterSpacing: "0.1em", minWidth: 28,
                paddingTop: 3,
              }}>{f.num}</div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: 20, fontWeight: 600,
                  color: "var(--text)", marginBottom: 6,
                }}>{f.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — CTA Box */}
        <div className="reveal" style={{
          ...revealStyle,
          background: "var(--stone)",
          padding: "48px 40px",
          borderRadius: 4,
          position: "sticky",
          top: 100,
        }}>
          <div style={{
            width: 40, height: 40,
            background: "var(--gold)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            marginBottom: 28,
          }} />

          <h3 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: 32, fontWeight: 400,
            color: "#F4F7EE", lineHeight: 1.2, marginBottom: 16,
          }}>
            Ready to Build Your <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Dream?</em>
          </h3>

          <p style={{
            color: "rgba(244,247,238,0.6)",
            fontSize: 14, lineHeight: 1.75, marginBottom: 32,
          }}>
            Schedule a free consultation with our team. We'll walk you through available projects, pricing, and investment options — no pressure.
          </p>

          <a href="#contact" style={{
            display: "block",
            background: "var(--gold)", color: "#fff",
            padding: "14px 28px", textAlign: "center",
            fontSize: 12, letterSpacing: "0.15em",
            textTransform: "uppercase", textDecoration: "none",
            borderRadius: 2, marginBottom: 32,
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--gold2)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
          >Schedule a Consultation</a>

          {/* Contact Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "📞", text: "+92 300 5081989" },
              { icon: "✉️", text: "info@margallabuilders.com" },
              { icon: "📍", text: "Plot 14, Street 22, F-7/1, Islamabad" },
            ].map((c, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                color: "rgba(244,247,238,0.65)", fontSize: 13,
              }}>
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section#why-us { padding: 70px 24px !important; }
          section#why-us > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          section#why-us > div > div:last-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}