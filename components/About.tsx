"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: "◈", title: "Quality First", desc: "Premium materials and craftsmanship on every project" },
    { icon: "◷", title: "Timely Delivery", desc: "100% on-schedule completion — guaranteed" },
    { icon: "◎", title: "Transparent Pricing", desc: "No hidden costs — clear contracts from day one" },
    { icon: "✦", title: "CDA Compliant", desc: "Fully approved and regulated developments" },
  ];

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  return (
    <section id="about" ref={ref} style={{ background: "#fff", padding: "100px 48px" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
      }}>

        {/* Left — Image */}
        <div className="reveal" style={{ ...revealStyle, position: "relative" }}>
          <div style={{
            width: "100%", aspectRatio: "4/5",
            borderRadius: 4, position: "relative", overflow: "hidden",
          }}>
            <Image
              src="/about.jpg"
              alt="Margalla Builders construction"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            {/* Overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(26,32,16,0.7) 0%, transparent 60%)",
            }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, padding: 32,
            }}>
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 14, color: "rgba(244,247,238,0.7)",
                letterSpacing: "0.15em", textTransform: "uppercase",
              }}>Islamabad, Pakistan</div>
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 22, color: "#F4F7EE", fontWeight: 400, marginTop: 4,
              }}>Building Excellence Since 2022</div>
            </div>
          </div>

          {/* Gold accent box */}
          <div style={{
            position: "absolute", top: -20, right: -20,
            background: "var(--gold)", padding: "20px 24px",
            borderRadius: 4, textAlign: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: 36, fontWeight: 600, color: "#fff", lineHeight: 1,
            }}>2022</div>
            <div style={{
              fontSize: 10, color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4,
            }}>Founded</div>
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <div className="reveal" style={{ ...revealStyle, display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
            <span style={{ color: "var(--gold2)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Who We Are</span>
          </div>

          <h2 className="reveal" style={{
            ...revealStyle,
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, color: "var(--text)",
            lineHeight: 1.1, marginBottom: 20,
          }}>
            Islamabad&apos;s Most<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Trusted Builders</em>
          </h2>

          <div className="reveal" style={{ ...revealStyle, width: 48, height: 2, background: "var(--gold)", marginBottom: 24 }} />

          <p className="reveal" style={{ ...revealStyle, color: "var(--muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Margalla Builders &amp; Developers has been Islamabad&apos;s leading real estate developer since 2022. Registered with SECP and compliant with CDA regulations, we have delivered over 25 projects across the capital.
          </p>

          <p className="reveal" style={{ ...revealStyle, color: "var(--muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
            From luxury residential towers to commercial complexes and gated communities — we bring vision, precision, and integrity to every build.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {values.map((v, i) => (
              <div key={i} className="reveal" style={{
                ...revealStyle,
                padding: "20px",
                border: "1px solid var(--border)",
                borderRadius: 4,
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.background = "var(--cream)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{ color: "var(--gold)", fontSize: 20, marginBottom: 8 }}>{v.icon}</div>
                <div style={{ fontFamily: "var(--font-cormorant)", fontSize: 17, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{v.title}</div>
                <div style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section#about { padding: 70px 24px !important; }
          section#about > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}