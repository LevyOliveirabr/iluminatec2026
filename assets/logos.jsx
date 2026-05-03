// Logo components for IluminatecBR + co-brand Signify

const IluminatecLogo = ({ size = 36, color = "#00CC66", textColor = "#fff", showText = true }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg width={size} height={size} viewBox="0 0 36 36" aria-label="IluminatecBR">
      <circle cx="18" cy="18" r="16" fill="none" stroke={color} strokeWidth="2" />
      <text
        x="18"
        y="24"
        textAnchor="middle"
        fontFamily="'Nunito Sans', sans-serif"
        fontWeight="700"
        fontSize="18"
        fill={color}
      >
        i
      </text>
    </svg>
    {showText && (
      <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 17, color: textColor, letterSpacing: "-0.01em" }}>
        ilumina<span style={{ color: color, fontWeight: 700 }}>tec</span>
        <span style={{ fontWeight: 300, opacity: 0.45, fontSize: 13, marginLeft: 1 }}>BR</span>
      </div>
    )}
  </div>
);

// Stylized "Signify" wordmark — used under license as Representante Oficial
const SignifyMark = ({ color = "#fff", opacity = 1 }) => (
  <span
    style={{
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 600,
      letterSpacing: "0.02em",
      color,
      opacity,
      fontSize: 14,
    }}
  >
    Signify
  </span>
);

// Philips wordmark — same usage
const PhilipsMark = ({ color = "#fff", opacity = 0.85 }) => (
  <span
    style={{
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: "0.04em",
      color,
      opacity,
      fontSize: 14,
      fontStyle: "italic",
    }}
  >
    PHILIPS
  </span>
);

window.IluminatecLogo = IluminatecLogo;
window.SignifyMark = SignifyMark;
window.PhilipsMark = PhilipsMark;
