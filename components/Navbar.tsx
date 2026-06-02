"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Services", "Projects", "Process", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(26,32,16,0.97)" : "rgba(26,32,16,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(107,122,42,0.2)",
      padding: scrolled ? "12px 48px" : "20px 48px",
      transition: "all 0.3s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: 36, height: 36, background: "var(--gold)",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }} />
        <div>
          <div style={{ color: "#F4F7EE", fontFamily: "var(--font-cormorant)", fontSize: 18, fontWeight: 600, letterSpacing: "0.05em" }}>
            Margalla Builders
          </div>
          <div style={{ color: "var(--gold)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Islamabad · Est. 2005
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desktop-nav">
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            color: "rgba(244,247,238,0.75)", fontSize: 13, letterSpacing: "0.08em",
            textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,247,238,0.75)")}
          >{link}</a>
        ))}
        <a href="#contact" style={{
          border: "1px solid var(--gold)", color: "var(--gold)",
          padding: "8px 20px", fontSize: 12, letterSpacing: "0.1em",
          textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s",
          borderRadius: 2,
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
        >Get a Quote</a>
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: "none", flexDirection: "column", gap: 5, background: "none",
        border: "none", cursor: "pointer", padding: 4,
      }} className="hamburger">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: "block", width: 22, height: 2,
            background: "var(--gold)", borderRadius: 2, transition: "all 0.3s",
            transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "opacity:0") : "none",
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(26,32,16,0.98)", padding: "20px 24px",
          display: "flex", flexDirection: "column", gap: 16,
          borderTop: "1px solid rgba(107,122,42,0.2)",
        }} className="mobile-menu">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(244,247,238,0.8)", fontSize: 14,
                letterSpacing: "0.08em", textTransform: "uppercase",
                textDecoration: "none", padding: "8px 0",
                borderBottom: "1px solid rgba(107,122,42,0.15)",
              }}>
              {link}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            background: "var(--gold)", color: "#fff", padding: "12px 20px",
            textAlign: "center", textDecoration: "none", fontSize: 13,
            letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2,
          }}>Get a Quote</a>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}