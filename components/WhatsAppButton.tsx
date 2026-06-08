"use client";

export default function WhatsAppButton() {
  return (
    
      href="https://wa.me/923005081989"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        zIndex: 999,
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        textDecoration: "none",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      💬
    </a>
  );
}