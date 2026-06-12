"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Projects() {
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

  const projects = [
    {
      tag: "Luxury Residential",
      title: "Margalla Heights – Phase II",
      desc: "Premium high-rise apartments with panoramic Margalla Hills views. 180 units across 18 floors.",
      location: "F-8, Islamabad",
      year: "2023",
      status: "Completed",
      image: "/project1.jpg",
      span: true,
    },
    {
      tag: "Commercial",
      title: "Islamabad Business Square",
      desc: "A-grade office tower with modern co-working spaces in the heart of Blue Area.",
      location: "Blue Area, Islamabad",
      year: "2022",
      status: "Completed",
      image: "/project2.jpg",
      span: false,
    },
    {
      tag: "Gated Community",
      title: "Green Valley Residencia",
      desc: "CDA-approved housing scheme with 400+ plots, parks and commercial area.",
      location: "Chakri Road, Islamabad",
      year: "2024",
      status: "Ongoing",
      image: "/project3.jpg",
      span: false,
    },
    {
      tag: "Villas",
      title: "DHA Valley Villas – Block C",
      desc: "Luxury villas with smart home features, private gardens and 24/7 security.",
      location: "DHA Valley, Islamabad",
      year: "2024",
      status: "Ongoing",
      image: "/project4.jpg",
      span: false,
    },
  ];

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.6s ease",
  };

  return (
    <section id="projects" ref={ref} style={{ background: "var(--cream)", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div className="reveal" style={{
          ...revealStyle,
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 56,
          flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 32, height: 1, background: "var(--gold2)" }} />
              <span style={{ color: "var(--gold2)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Work</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400, color: "var(--text)", lineHeight: 1.1,
            }}>
              Featured <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Projects</em>
            </h2>
          </div>
          <a href="#contact" style={{
            color: "var(--gold)", fontSize: 13, letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            borderBottom: "1px solid var(--gold)", paddingBottom: 2,
          }}>All Projects →</a>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 20,
        }}>
          {projects.map((p, i) => (
            <div key={i} className="reveal" style={{
              ...revealStyle,
              gridColumn: p.span ? "1 / 3" : "auto",
              background: "#fff",
              borderRadius: 4,
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(26,32,16,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Thumbnail */}
              <div style={{
                height: p.span ? 280 : 200,
                position: "relative",
                overflow: "hidden",
              }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(26,32,16,0.2)",
                }} />
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: p.status === "Completed" ? "rgba(107,122,42,0.9)" : "rgba(224,123,42,0.9)",
                  color: "#fff", fontSize: 10, letterSpacing: "0.15em",
                  textTransform: "uppercase", padding: "4px 10px", borderRadius: 2,
                }}>{p.status}</div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <div style={{ color: "var(--gold2)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>{p.tag}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: 22, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 20, fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  <span>📍 {p.location}</span>
                  <span>📅 {p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section#projects { padding: 70px 24px !important; }
          section#projects > div > div:last-child { grid-template-columns: 1fr !important; }
          section#projects > div > div:last-child > div { grid-column: auto !important; }
        }
      `}</style>
    </section>
  );
}