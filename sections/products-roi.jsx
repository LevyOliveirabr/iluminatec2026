// Roadway products showcase + ROI calculator + Why Us + Cases

const ROAD_PRODUCTS = [
  {
    series: "RoadForce",
    code: "BRP491 / BRP492",
    name: "Luminária Viária Premium",
    desc: "Linha topo de gama para rodovias e vias arteriais. Ótica avançada, dissipação superior, compatível com Interact City.",
    specs: [
      ["Pot.", "60–280W"],
      ["Eficácia", "até 170 lm/W"],
      ["IP", "IP66 / IK10"],
      ["Vida útil", "100.000h L90"],
    ],
    badge: "Telegestão",
    accent: "#00CC66",
  },
  {
    series: "EssentialForce Plus",
    code: "BRP130 / BRP131",
    name: "Vias Urbanas e Residenciais",
    desc: "Solução custo-benefício para municípios. Ideal para retrofit de larga escala em ruas e avenidas.",
    specs: [
      ["Pot.", "30–150W"],
      ["Eficácia", "140 lm/W"],
      ["IP", "IP66 / IK09"],
      ["Vida útil", "70.000h"],
    ],
    badge: "Retrofit",
    accent: "#00CC66",
  },
  {
    series: "StreetForce",
    code: "BRP371",
    name: "Compacta Urbana",
    desc: "Luminária compacta para ruas residenciais e ciclovias. Design discreto, instalação rápida em postes existentes.",
    specs: [
      ["Pot.", "20–80W"],
      ["Eficácia", "130 lm/W"],
      ["IP", "IP66"],
      ["Vida útil", "60.000h"],
    ],
    badge: "Urbana",
    accent: "#1A3A6B",
  },
  {
    series: "Interact City",
    code: "Plataforma IoT",
    name: "Telegestão Conectada",
    desc: "Dashboard cloud para gestão remota da rede. Monitoramento em tempo real, dimerização, manutenção preditiva.",
    specs: [
      ["Conectividade", "NEMA 7-pin"],
      ["Protocolo", "Zhaga D4i"],
      ["Cloud", "Signify"],
      ["API", "Aberta"],
    ],
    badge: "IoT",
    accent: "#00CC66",
  },
];

const ProductCard = ({ p }) => (
  <div style={{
    background: "linear-gradient(180deg, #fff 0%, #fafbfa 100%)",
    border: "1px solid #e6ebe6",
    borderRadius: 10,
    overflow: "hidden",
    transition: "all .25s ease",
    display: "flex", flexDirection: "column",
  }} className="prod-card">
    {/* Visual area — abstract product silhouette */}
    <div style={{
      height: 160, background: "linear-gradient(180deg, #0D1F2D 0%, #142a3d 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <radialGradient id={`g-${p.series}`} cx="0.5" cy="0.5" r="0.6">
            <stop offset="0" stopColor={p.accent} stopOpacity="0.5" />
            <stop offset="1" stopColor={p.accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill={`url(#g-${p.series})`} />
        {/* Stylized luminaire silhouette */}
        <g transform="translate(100 70)">
          <ellipse cx="0" cy="0" rx="55" ry="14" fill="#1a2433" stroke={p.accent} strokeWidth="1" />
          <ellipse cx="0" cy="-2" rx="48" ry="9" fill="#0a1422" />
          <rect x="-3" y="-22" width="6" height="22" fill="#2a3a4e" />
          {/* hot strip */}
          <rect x="-40" y="-1" width="80" height="2" fill={p.accent} opacity="0.9" />
        </g>
        {/* code */}
        <text x="16" y="146" fontFamily="'DM Mono', monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="1">
          {p.code}
        </text>
      </svg>
      <div style={{
        position: "absolute", top: 12, right: 12,
        fontSize: 9.5, color: p.accent, fontWeight: 700,
        letterSpacing: "1.2px", textTransform: "uppercase",
        border: `1px solid ${p.accent}66`,
        padding: "3px 8px", borderRadius: 3,
        background: "rgba(13,31,45,0.6)", backdropFilter: "blur(4px)",
      }}>{p.badge}</div>
    </div>
    <div style={{ padding: "22px 22px 24px" }}>
      <div style={{
        fontSize: 10, color: "#00CC66", letterSpacing: "1.5px",
        textTransform: "uppercase", fontWeight: 700, marginBottom: 6,
        fontFamily: "'DM Mono', monospace",
      }}>Philips · {p.series}</div>
      <h4 style={{
        fontFamily: "'Nunito Sans', sans-serif", fontSize: 17, fontWeight: 700,
        color: "#0D1F2D", marginBottom: 10, letterSpacing: "-0.01em",
      }}>{p.name}</h4>
      <p style={{
        fontSize: 13, color: "#5e6b73", lineHeight: 1.6, marginBottom: 16, textWrap: "pretty",
      }}>{p.desc}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 14px", marginBottom: 4 }}>
        {p.specs.map(([k, v]) => (
          <div key={k} style={{
            display: "flex", flexDirection: "column", gap: 1,
            paddingTop: 8, borderTop: "1px solid #ecefe9",
          }}>
            <span style={{
              fontSize: 9.5, color: "#9aa3a8", letterSpacing: "1px",
              textTransform: "uppercase", fontWeight: 600,
            }}>{k}</span>
            <span style={{
              fontSize: 12.5, color: "#0D1F2D", fontWeight: 600,
              fontFamily: "'DM Mono', monospace",
            }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ROI Calculator
const ROICalculator = () => {
  const [pontos, setPontos] = React.useState(500);
  const [potOld, setPotOld] = React.useState(250);
  const [potNew, setPotNew] = React.useState(110);
  const [horas, setHoras] = React.useState(11);
  const [tarifa, setTarifa] = React.useState(0.85);

  const kwhOld = (pontos * potOld * horas * 365) / 1000;
  const kwhNew = (pontos * potNew * horas * 365) / 1000;
  const econKwh = kwhOld - kwhNew;
  const econR$ = econKwh * tarifa;
  const reducao = Math.round((1 - potNew / potOld) * 100);

  const fmt = (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: 0 });

  return (
    <div style={{
      background: "linear-gradient(135deg, #1A3A6B 0%, #0D4A2E 100%)",
      borderRadius: 12, padding: "44px 44px 40px",
      border: "1px solid rgba(0,204,102,0.2)",
      position: "relative", overflow: "hidden",
    }}>
      {/* corner ornament */}
      <svg width="180" height="180" style={{ position: "absolute", top: -40, right: -40, opacity: 0.15 }}>
        <circle cx="90" cy="90" r="80" fill="none" stroke="#00CC66" strokeWidth="1" />
        <circle cx="90" cy="90" r="50" fill="none" stroke="#00CC66" strokeWidth="1" />
      </svg>

      <div style={{
        fontSize: 10.5, color: "#00CC66", letterSpacing: "2px",
        textTransform: "uppercase", fontWeight: 700, marginBottom: 14,
      }}>Calculadora · Retrofit LED</div>
      <h3 style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 700, color: "#fff",
        lineHeight: 1.2, marginBottom: 8, letterSpacing: "-0.015em", maxWidth: 520,
      }}>Quanto a sua cidade economiza com <span style={{ color: "#00CC66" }}>retrofit LED</span>?</h3>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 32, maxWidth: 520 }}>
        Estimativa baseada em consumo elétrico anual. Ajuste os parâmetros para o seu projeto.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px 40px", alignItems: "start" }} className="roi-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Slider label="Pontos de luz" value={pontos} min={50} max={5000} step={50} unit="" onChange={setPontos} />
          <Slider label="Potência atual (vapor sódio)" value={potOld} min={100} max={400} step={10} unit="W" onChange={setPotOld} />
          <Slider label="Potência LED Philips" value={potNew} min={50} max={250} step={5} unit="W" onChange={setPotNew} />
          <Slider label="Horas/dia ligadas" value={horas} min={6} max={14} step={1} unit="h" onChange={setHoras} />
          <Slider label="Tarifa kWh" value={tarifa} min={0.4} max={1.5} step={0.05} unit="R$" onChange={setTarifa} fmt={(v)=>v.toFixed(2)} />
        </div>

        <div style={{
          background: "rgba(13,31,45,0.55)",
          border: "1px solid rgba(0,204,102,0.2)",
          borderRadius: 10, padding: "28px 28px 24px",
          backdropFilter: "blur(6px)",
        }}>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "1.5px",
            textTransform: "uppercase", fontWeight: 600, marginBottom: 6,
          }}>Redução de consumo</div>
          <div style={{
            fontFamily: "'Nunito Sans', sans-serif", fontSize: 64, fontWeight: 700,
            color: "#00CC66", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 24,
          }}>{reducao}<span style={{ fontSize: 36 }}>%</span></div>

          <Row k="Consumo atual" v={`${fmt(kwhOld)} kWh/ano`} />
          <Row k="Consumo com LED" v={`${fmt(kwhNew)} kWh/ano`} accent />
          <Row k="Economia anual" v={`${fmt(econKwh)} kWh`} />
          <Row k="Economia financeira" v={`R$ ${fmt(econR$)}`} big />
          <Row k="Em 10 anos" v={`R$ ${fmt(econR$ * 10)}`} muted />

          <a href="#contato" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: "#00CC66", color: "#0D1F2D",
            padding: "13px 20px", borderRadius: 5, fontWeight: 700, fontSize: 13.5,
            textDecoration: "none", marginTop: 22, transition: "all .2s",
          }}>Solicitar proposta detalhada <Icon name="arrow" size={15} stroke="#0D1F2D" /></a>
        </div>
      </div>
    </div>
  );
};

const Slider = ({ label, value, min, max, step, unit, onChange, fmt }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <span style={{
        fontSize: 11.5, color: "rgba(255,255,255,0.65)",
        letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 600,
      }}>{label}</span>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: 14,
        color: "#00CC66", fontWeight: 600,
      }}>{fmt ? fmt(value) : value}{unit && ` ${unit}`}</span>
    </div>
    <input type="range" min={min} max={max} step={step} value={value}
      onChange={e => onChange(parseFloat(e.target.value))}
      style={{ accentColor: "#00CC66", width: "100%" }} />
  </label>
);

const Row = ({ k, v, accent, big, muted }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
  }}>
    <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", letterSpacing: "0.2px" }}>{k}</span>
    <span style={{
      fontFamily: "'Nunito Sans', sans-serif",
      fontSize: big ? 19 : 14, fontWeight: big ? 700 : 600,
      color: accent ? "#00CC66" : (muted ? "rgba(255,255,255,0.6)" : "#fff"),
      letterSpacing: "-0.01em",
    }}>{v}</span>
  </div>
);

window.ROAD_PRODUCTS = ROAD_PRODUCTS;
window.ProductCard = ProductCard;
window.ROICalculator = ROICalculator;
