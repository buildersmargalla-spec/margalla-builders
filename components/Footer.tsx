"use client";

export default function Footer() {
  const links = {
    Services: ["Residential Development", "Commercial Projects", "Housing Schemes", "Interior Fit-Out", "Project Management"],
    Projects: ["Margalla Heights II", "Business Square", "Green Valley", "DHA Valley Villas"],
    Company: ["About Us", "Our Process", "Why Choose Us", "Testimonials", "Contact"],
  };

  return (
    <footer style={{
      background: "var(--stone)",
      borderTop: "1px solid rgba(107,122,42,0.2)",
      padding: "72px 48px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Top Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 48, marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 32, height: 32,
                background: "var(--gold)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }} />
              <div>
                <div style={{
                  color: "#F4F7EE", fontFamily: "var(--font-cormorant)",
                  fontSize: 16, fontWeight: 600, letterSpacing: "0.05em",
                }}>Margalla Builders</div>
                <div style={{
                  color: "var(--gold)", fontSize: 9,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                }}>Islamabad · Est. 2005</div>
              </div>
            </div>

            <p style={{
              color: "rgba(244,247,238,0.5)",
              fontSize: 13, lineHeight: 1.8, marginBottom: 24, maxWidth: 260,
            }}>
              Islamabad's premier real estate developer since 2005. Building quality homes and commercial spaces with trust and integrity.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { icon: "📞", text: "+92 300 5081989" },
                { icon: "✉️", text: "info@margallabuilders.com" },
                { icon: "📍", text: "F-7/1, Islamabad, Pakistan" },
              ].map((c, i) => (
                <div key={i} style={{
                  display: "flex", gap: 10, alignItems: "center",
                  color: "rgba(244,247,238,0.5)", fontSize: 12,
                }}>
                  <span>{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{
                color: "#F4F7EE", fontSize: 12,
                letterSpacing: "0.15em", textTransform: "uppercase",
                marginBottom: 20, fontFamily: "var(--font-outfit)",
              }}>{title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item, i) => (
                  <a key={i} href="#" style={{
                    color: "rgba(244,247,238,0.45)",
                    fontSize: 13, textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(244,247,238,0.45)"}
                  >{item}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(107,122,42,0.2)", marginBottom: 28 }} />

        {/* Bottom Bar */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <div style={{ color: "rgba(244,247,238,0.35)", fontSize: 12 }}>
            © {new Date().getFullYear()} Margalla Builders & Developers. All rights reserved. · SECP Reg. #0123456
          </div>
          <div style={{
            color: "rgba(244,247,238,0.35)", fontSize: 11,
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            PCATP · ABAD · FPCCI Member
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          footer { padding: 56px 24px 28px !important; }
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media(max-width:500px){
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}