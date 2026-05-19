export default function FloatingRating() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: 0,
        background: "rgba(10,14,24,0.9)",
        border: "1px solid oklch(0.78 0.20 255 / 0.4)",
        borderRadius: 999,
        padding: "6px 6px 6px 16px",
        backdropFilter: "blur(16px)",
        boxShadow: "0 12px 40px oklch(0.45 0.25 258 / 0.4)",
        animation: "floatY 4s ease-in-out infinite",
      }}
    >
      <div style={{ display: "flex", gap: 2, marginRight: 10 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="oklch(0.82 0.18 85)">
            <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 22 12 17.5 5.8 22l2.39-8.14L2 9.36h7.61z" />
          </svg>
        ))}
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#e7ecf5",
          letterSpacing: "0.05em",
          marginRight: 10,
        }}
      >
        5.0/5
      </div>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "linear-gradient(135deg, oklch(0.68 0.22 255), oklch(0.45 0.26 258))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
          <path d="M12 21s-8-5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-8 11-8 11z" />
        </svg>
      </div>
    </div>
  );
}
