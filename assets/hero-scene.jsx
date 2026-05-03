// Cinematic city/road night scene — SVG, no images
// Renders: night sky gradient, distant skyline silhouette,
// road perspective with lane markings, row of streetlights with cones of light.

const HeroScene = ({ variant = "road" }) => {
  if (variant === "city") return <CityScene />;
  return <RoadScene />;
};

const RoadScene = () => (
  <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0a1422" />
        <stop offset="0.6" stopColor="#0D1F2D" />
        <stop offset="1" stopColor="#142a3d" />
      </linearGradient>
      <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#142a3d" />
        <stop offset="1" stopColor="#070d15" />
      </linearGradient>
      <radialGradient id="lampGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#00CC66" stopOpacity="0.55" />
        <stop offset="0.4" stopColor="#00CC66" stopOpacity="0.18" />
        <stop offset="1" stopColor="#00CC66" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="lightCone" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#00CC66" stopOpacity="0.35" />
        <stop offset="0.5" stopColor="#00CC66" stopOpacity="0.1" />
        <stop offset="1" stopColor="#00CC66" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="poleGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3a4a5e" />
        <stop offset="1" stopColor="#1a2433" />
      </linearGradient>
    </defs>

    {/* sky */}
    <rect width="800" height="380" fill="url(#sky)" />
    {/* stars */}
    {[[120,40],[180,80],[260,30],[340,90],[420,50],[520,20],[600,70],[680,45],[740,90],[80,110],[710,130],[450,110],[200,140]].map(([x,y], i) => (
      <circle key={i} cx={x} cy={y} r="0.8" fill="#fff" opacity={0.35 + (i%3)*0.15} />
    ))}

    {/* distant skyline */}
    <g opacity="0.55">
      <path d="M0 380 L0 320 L40 320 L40 290 L80 290 L80 310 L120 310 L120 270 L160 270 L160 295 L200 295 L200 280 L240 280 L240 305 L280 305 L280 260 L320 260 L320 285 L360 285 L360 300 L400 300 L400 275 L440 275 L440 295 L480 295 L480 250 L520 250 L520 290 L560 290 L560 280 L600 280 L600 300 L640 300 L640 270 L680 270 L680 295 L720 295 L720 285 L760 285 L760 305 L800 305 L800 380 Z" fill="#0a1828" />
      {/* skyline window lights */}
      {[[60,300,2],[100,300,2],[140,280,2],[180,285,2],[210,290,2],[260,295,2],[310,275,2],[345,290,2],[395,290,2],[450,285,2],[490,265,2],[540,275,2],[600,290,2],[650,285,2],[700,280,2],[745,295,2]].map(([x,y,r],i)=>(
        <rect key={i} x={x} y={y} width="2" height="2" fill="#FFD27A" opacity="0.7" />
      ))}
    </g>

    {/* ground */}
    <rect y="380" width="800" height="220" fill="url(#ground)" />

    {/* road perspective */}
    <path d="M280 380 L520 380 L700 600 L100 600 Z" fill="#0e1722" />
    {/* road centerlines (perspective dashes) */}
    <g stroke="#fff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round">
      <line x1="400" y1="395" x2="400" y2="405" />
      <line x1="400" y1="425" x2="400" y2="445" />
      <line x1="400" y1="475" x2="400" y2="510" />
      <line x1="400" y1="555" x2="400" y2="600" />
    </g>
    {/* road edges */}
    <line x1="280" y1="380" x2="100" y2="600" stroke="#fff" strokeOpacity="0.15" strokeWidth="1.5" />
    <line x1="520" y1="380" x2="700" y2="600" stroke="#fff" strokeOpacity="0.15" strokeWidth="1.5" />

    {/* streetlights row — left side, receding */}
    {[
      { x: 110, y: 380, scale: 1.2, glow: 95 },
      { x: 230, y: 360, scale: 0.85, glow: 70 },
      { x: 295, y: 348, scale: 0.6, glow: 50 },
      { x: 335, y: 340, scale: 0.42, glow: 36 },
    ].map((p, i) => (
      <g key={`L${i}`} transform={`translate(${p.x} ${p.y}) scale(${p.scale})`}>
        {/* glow halo */}
        <circle cx="40" cy="-180" r={p.glow} fill="url(#lampGlow)" />
        {/* light cone downward */}
        <path d={`M40 -178 L${40 - p.glow*0.55} 220 L${40 + p.glow*0.55} 220 Z`} fill="url(#lightCone)" />
        {/* pole */}
        <rect x="-2" y="-180" width="4" height="220" fill="url(#poleGrad)" />
        {/* arm */}
        <path d="M0 -178 Q 20 -195 40 -180" fill="none" stroke="#3a4a5e" strokeWidth="3" />
        {/* lamp head */}
        <rect x="32" y="-185" width="18" height="6" rx="1" fill="#1a2433" stroke="#00CC66" strokeWidth="0.8" />
        {/* hot spot */}
        <circle cx="40" cy="-181" r="2" fill="#aaffd1" opacity="0.9" />
      </g>
    ))}

    {/* streetlights row — right side */}
    {[
      { x: 690, y: 380, scale: 1.2, glow: 95, flip: true },
      { x: 570, y: 360, scale: 0.85, glow: 70, flip: true },
      { x: 505, y: 348, scale: 0.6, glow: 50, flip: true },
      { x: 465, y: 340, scale: 0.42, glow: 36, flip: true },
    ].map((p, i) => (
      <g key={`R${i}`} transform={`translate(${p.x} ${p.y}) scale(${-p.scale} ${p.scale})`}>
        <circle cx="40" cy="-180" r={p.glow} fill="url(#lampGlow)" />
        <path d={`M40 -178 L${40 - p.glow*0.55} 220 L${40 + p.glow*0.55} 220 Z`} fill="url(#lightCone)" />
        <rect x="-2" y="-180" width="4" height="220" fill="url(#poleGrad)" />
        <path d="M0 -178 Q 20 -195 40 -180" fill="none" stroke="#3a4a5e" strokeWidth="3" />
        <rect x="32" y="-185" width="18" height="6" rx="1" fill="#1a2433" stroke="#00CC66" strokeWidth="0.8" />
        <circle cx="40" cy="-181" r="2" fill="#aaffd1" opacity="0.9" />
      </g>
    ))}

    {/* atmospheric haze */}
    <rect width="800" height="600" fill="url(#sky)" opacity="0.12" style={{ mixBlendMode: "screen" }} />
  </svg>
);

const CityScene = () => (
  <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="csky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0a1422" />
        <stop offset="1" stopColor="#142a3d" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#csky)" />
    {/* Building blocks with glowing windows */}
    <g>
      {Array.from({ length: 14 }).map((_, i) => {
        const x = i * 60 + (i%2)*8;
        const h = 180 + ((i*53)%200);
        const y = 600 - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width="50" height={h} fill="#0e1828" stroke="#1a2a3d" strokeWidth="0.5" />
            {Array.from({ length: Math.floor(h/22) }).map((__, j) =>
              Array.from({ length: 3 }).map((___, k) => {
                const lit = ((i*7 + j*3 + k) % 5) < 3;
                return <rect key={`${j}-${k}`} x={x+6+k*14} y={y+8+j*22} width="6" height="10"
                  fill={lit ? (k===1 ? "#00CC66" : "#FFD27A") : "#0a1422"}
                  opacity={lit ? 0.7 + (i%3)*0.1 : 0.3} />;
              })
            )}
          </g>
        );
      })}
    </g>
  </svg>
);

window.HeroScene = HeroScene;
