// Segments data + section component

const SEGMENTS = [
  {
    icon: "streetlight",
    tag: "Prioridade",
    title: "Iluminação Viária",
    desc: "Luminárias para rodovias, ruas e áreas urbanas. Linhas RoadForce, EssentialForce e StreetForce com telegestão Interact City integrada.",
    products: ["RoadForce", "EssentialForce Plus", "Interact City", "Postes solares"],
    href: "#viaria",
  },
  {
    icon: "city",
    title: "Iluminação Pública",
    desc: "Retrofit LED para prefeituras, telegestão remota e iluminação solar. Conformidade com a legislação brasileira 2026.",
    products: ["Retrofit LED", "Smart City", "Solar all-in-one"],
    href: "#publica",
  },
  {
    icon: "factory",
    title: "Industrial e Galpões",
    desc: "High Bay LED para galpões, luminárias IP65/IP66 para ambientes agressivos, controle Dynalite para centros logísticos.",
    products: ["High Bay UFO", "Battens IP65", "Dynalite"],
    href: "#industrial",
  },
  {
    icon: "stadium",
    title: "Esportes e Arenas",
    desc: "Refletores Philips para campos, quadras e arenas. Homologados para transmissão em HD/4K. Liga instantânea.",
    products: ["ArenaVision", "OptiVision", "Beach Tennis"],
    href: "#esportes",
  },
  {
    icon: "facade",
    title: "Arquitetural e Design",
    desc: "Color Kinetics para fachadas. Accent lighting para museus, hotéis e shoppings. Fitas LED IRC 90+.",
    products: ["Color Kinetics", "DMX/DALI", "Accent"],
    href: "#arquitetural",
  },
  {
    icon: "office",
    title: "Corporativo e Escritórios",
    desc: "Downlights, painéis e sistemas Dynalite para edifícios. Automação inteligente e eficiência energética.",
    products: ["Downlights", "Painéis 600×600", "Interact Office"],
    href: "#corporativo",
  },
  {
    icon: "tunnel",
    title: "Transporte e Túneis",
    desc: "Luminárias para rodovias, túneis e aeroportos. Alta resistência e baixíssima manutenção em infraestrutura crítica.",
    products: ["Túneis", "Aeroportos", "IP67"],
    href: "#transporte",
  },
  {
    icon: "battery",
    title: "BESS e Energia Solar",
    desc: "Battery Energy Storage Systems FSE Taiwan. Sistemas solares e projetos elétricos com Ultra Engenharia.",
    products: ["BESS LFP", "Solar FV", "On/Off-grid"],
    href: "#energia",
  },
];

const SegmentCard = ({ s, density }) => (
  <a href={s.href} className="seg-card" style={{
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: density === "compact" ? "22px 22px" : "30px 28px",
    transition: "all .25s ease",
    display: "block",
    textDecoration: "none",
    position: "relative",
    overflow: "hidden",
  }}>
    {s.tag && (
      <div style={{
        position: "absolute", top: 16, right: 16,
        fontSize: 9.5, color: "#00CC66", letterSpacing: "1.5px",
        textTransform: "uppercase", fontWeight: 700,
        border: "1px solid rgba(0,204,102,0.4)", padding: "3px 7px", borderRadius: 3,
      }}>{s.tag}</div>
    )}
    <div style={{
      width: 52, height: 52, borderRadius: 8,
      background: "rgba(0,204,102,0.08)",
      border: "1px solid rgba(0,204,102,0.15)",
      display: "flex", alignItems: "center", justifyContent: "center",
      marginBottom: 22,
      color: "#00CC66",
    }}>
      <Icon name={s.icon} size={26} strokeWidth={1.4} />
    </div>
    <h3 style={{
      fontFamily: "'Nunito Sans', sans-serif", fontSize: 18, fontWeight: 700,
      color: "#fff", marginBottom: 10, letterSpacing: "-0.01em",
    }}>{s.title}</h3>
    <p style={{
      fontSize: 13.5, color: "rgba(255,255,255,0.55)",
      lineHeight: 1.65, marginBottom: 18, textWrap: "pretty",
    }}>{s.desc}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {s.products.map(p => (
        <span key={p} style={{
          fontSize: 10.5, color: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 3, padding: "3px 8px",
          fontFamily: "'DM Mono', monospace", letterSpacing: "0.02em",
        }}>{p}</span>
      ))}
    </div>
    <div style={{
      marginTop: 20, display: "flex", alignItems: "center", gap: 6,
      fontSize: 12, color: "#00CC66", fontWeight: 600, letterSpacing: "0.02em",
    }}>
      Ver soluções <Icon name="arrow" size={14} stroke="#00CC66" />
    </div>
  </a>
);

window.SEGMENTS = SEGMENTS;
window.SegmentCard = SegmentCard;
