"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "", budget: "", message: ""
  });

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

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email) return;
    setSubmitted(true);
  };

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--cream)",
    border: "1px solid var(--border)",
    borderRadius: 2,
    padding: "12px 16px",
    fontSize: 14,
    color: "var(--text)",
    fontFamily: "var(--font-outfit)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" ref={ref} style={{
      background: "var(--warm)",
      padding: "100px 48px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1.4fr",
        gap: 80,
      }}>

        {/* Left — Contact Info */}
        <div>
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
            lineHeight: 1.8, marginBottom: 40,
          }}>
            Visit our office or reach out — our team is ready to help you find the perfect property or investment opportunity in Islamabad.
          </p>

          {/* Contact Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { icon: "📍", label: "Head Office", value: "Plot 14, Street 22, F-7/1, Islamabad" },
              { icon: "📞", label: "Phone", value: "+92 300 5081989" },
              { icon: "✉️", label: "Email", value: "info@margallabuilders.com" },
              { icon: "🕐", label: "Office Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
            ].map((c, i) => (
              <div key={i} className="reveal" style={{
                ...revealStyle,
                display: "flex", gap: 16, alignItems: "flex-start",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <div style={{
                    fontSize: 10, letterSpacing: "0.15em",
                    textTransform: "uppercase", color: "var(--gold)",
                    marginBottom: 4,
                  }}>{c.label}</div>
                  <div style={{ color: "var(--text)", fontSize: 14 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal" style={{
          ...revealStyle,
          background: "#fff",
          border: "1px solid var(--border)",
          borderRadius: 4,
          padding: "48px 40px",
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
              <h3 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 28, color: "var(--text)", marginBottom: 12,
              }}>Message Sent!</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
                Thank you for reaching out. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 26, fontWeight: 600,
                color: "var(--text)", marginBottom: 32,
              }}>Send Us a Message</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>Full Name *</label>
                    <input
                      type="text" placeholder="Ahmed Khan"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--gold)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>Phone *</label>
                    <input
                      type="tel" placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--gold)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>Email *</label>
                  <input
                    type="email" placeholder="ahmed@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--gold)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>

                <div>
                  <label style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>I'm Interested In</label>
                  <select
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={e => e.target.style.borderColor = "var(--gold)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  >
                    <option value="">Select an option</option>
                    <option>Residential Property</option>
                    <option>Commercial Property</option>
                    <option>Housing Scheme / Plot</option>
                    <option>Investment Opportunity</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={e => e.target.style.borderColor = "var(--gold)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  >
                    <option value="">Select budget</option>
                    <option>Under 50 Lakh</option>
                    <option>50 Lakh – 1 Crore</option>
                    <option>1 Crore – 3 Crore</option>
                    <option>3 Crore – 5 Crore</option>
                    <option>Above 5 Crore</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = "var(--gold)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    background: "var(--gold)", color: "#fff",
                    border: "none", padding: "14px 32px",
                    fontSize: 12, letterSpacing: "0.15em",
                    textTransform: "uppercase", cursor: "pointer",
                    borderRadius: 2, transition: "background 0.2s",
                    fontFamily: "var(--font-outfit)",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--gold2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
                >
                  Send Message →
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section#contact { padding: 70px 24px !important; }
          section#contact > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}