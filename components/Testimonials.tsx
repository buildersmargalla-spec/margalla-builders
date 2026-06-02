"use client";
import { useEffect, useRef } from "react";

export default function Testimonials() {
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

  const testimonials = [
    {
      initials: "AK",
      name: "Ahmed Khalid",
      role: "Homeowner, Margalla Heights",
      review: "Margalla Builders delivered our apartment on time and exactly as promised. The build quality is exceptional — we couldn't be happier with our investment.",
    },
    {
      initials: "SR",
      name: "Sana Raza",
      role: "Investor, Green Valley Residencia",
      review: "I have invested in three plots through Margalla Builders. Their transparent pricing and professional team made the entire process seamless and stress-free.",
    },
    {
      initials: "FM",
      name: "Farhan Mirza",
      role: "Business Owner, Islamabad Business Square",
      review: "Our office in Business Square is world-class. The attention to detail and quality of finishes reflects true professionalism. Highly recommend their commercial projects.",
    },
  ];

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  return (
    <section id="testimonials" ref={ref} style={{
      background: "var(--stone)",
      padding: "100px 48px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ ...revealStyle, display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
            <span style={{ color: "var(--gold2)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Client Stories
            </span>
            <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
          </div>
          <h2 className="reveal" style={{
            ...revealStyle,
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, color: "#F4F7EE", lineHeight: 1.1,
          }}>
            What Our <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Clients Say</em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {testimonials.map((t, i) => (
            <div key={i} className="reveal" style={{
              ...revealStyle,
              background: "var(--stone2)",
              border: "1px solid rgba(107,122,42,0.2)",
              borderRadius: 4,
              padding: "36px 32px",
              position: "relative",
              transition: "border-color 0.3s ease",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(107,122,42,0.5)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(107,122,42,0.2)"}
            >
              {/* Quote mark */}
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 80, lineHeight: 0.8,
                color: "var(--gold)", opacity: 0.3,
                marginBottom: 20,
              }}>"</div>

              <p style={{
                color: "rgba(244,247,238,0.75)",
                fontSize: 14, lineHeight: 1.8,
                marginBottom: 28,
                fontStyle: "italic",
              }}>{t.review}</p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "var(--gold)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: 16, fontWeight: 600, color: "#fff",
                }}>{t.initials}</div>
                <div>
                  <div style={{
                    color: "#F4F7EE", fontSize: 15,
                    fontFamily: "var(--font-cormorant)", fontWeight: 600,
                  }}>{t.name}</div>
                  <div style={{
                    color: "var(--gold)", fontSize: 11,
                    letterSpacing: "0.1em",
                  }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section#testimonials { padding: 70px 24px !important; }
          section#testimonials > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}