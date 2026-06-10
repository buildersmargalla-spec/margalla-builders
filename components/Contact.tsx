"use client";
import { useEffect, useRef } from "react";

export default function Contact() {
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

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  return (
    <section id="contact" ref={ref} style={{
      background: "var(--warm)",
      padding: "100px 48px",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div className="reveal" style={{ ...revealStyle, display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
          <span style={{ color: "var(--gold2)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Get In Touch
          </span>
        </div>

        <h2 className="reveal" style={{
          ...revealStyle,
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 400, color: "var(--text)",
          lineHeight: 1.1, marginBottom: 20,
        }}>
          Let's Build<br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Together</em>
        </h2>

        <div className="reveal" style={{ ...revealStyle, width: 48, height: 2, background: "var(--gold)", marginBottom: 32 }} />

        <p className="reveal" style={{
          ...revealStyle,
          color: "var(--muted)", fontSize: 15,
          lineHeight: 1.8, marginBottom: 56,
          maxWidth: 560,
        }}>
          Visit our office or reach out — our team is ready to help you find the perfect property or investment opportunity in Islamabad.
        </p>

        {/* Contact Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
        }}>
          {[
            { icon: "📍", label: "Head Office", value: "Plot 14, Street 22, F-7/1, Islamabad" },
            { icon: "📞", label: "Phone", value: "+92 300 5081989" },
            { icon: "✉️", label: "Email", value: "info@margallabuilders.com" },
            { icon: "🕐", label: "Office Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
          ].map((c, i) => (
            <div key={i} className="reveal" style={{
              ...revealStyle,
              display: "flex", gap: 20, alignItems: "flex-start",
              padding: "28px 24px",
              border: "1px solid var(--border)",
              borderRadius: 4,
              background: "#fff",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(107,122,42,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "var(--cream)",
                border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0,
              }}>{c.icon}</div>
              <div>
                <div style={{
                  fontSize: 10, letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "var(--gold)",
                  marginBottom: 6, fontWeight: 600,
                }}>{c.label}</div>
                <div style={{ color: "var(--text)", fontSize: 15, lineHeight: 1.5 }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="reveal" style={{
          ...revealStyle,
          marginTop: 40,
          padding: "32px 40px",
          background: "var(--stone)",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: 22, color: "#F4F7EE", fontWeight: 400, marginBottom: 6,
            }}>Prefer to chat directly?</div>
            <div style={{ color: "rgba(244,247,238,0.6)", fontSize: 13 }}>
              Message us on WhatsApp for a quick response
            </div>
          </div>
          
            href="https://wa.me/923005081989"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366", color: "#fff",
              padding: "14px 32px", borderRadius: 2,
              fontSize: 13, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              fontFamily: "var(--font-outfit)", fontWeight: 500,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#1da851"}
            onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
          >
            💬 WhatsApp Us
          </a>
        </div>

      </div>

      <style>{`
        @media(max-width:900px){
          section#contact { padding: 70px 24px !important; }
          section#contact > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}