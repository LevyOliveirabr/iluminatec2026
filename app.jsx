// Main App — Hero + Nav + composes all sections

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#segmentos", label: "Segmentos" },
  { href: "#viaria", label: "Iluminação Viária" },
  { href: "#por-que", label: "Diferenciais" },
  { href: "#cases", label: "Cases" },
  { href: "#contato", label: "Contato" },
];

const HERO_STATS = [
  { num: "70%", label: "Redução no consumo com retrofit LED" },
  { num: "100k h", label: "Vida útil RoadForce L90" },
  { num: "IP66", label: "Proteção em luminárias viárias" },
  { num: "BR", label: "Atendimento nacional" },
];

const Nav = ({ tweaks }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(13,31,45,0.92)" : "rgba(13,31,45,0.4)",
      backdropFilter: "blur(20px) saturate(160%)",
      borderBottom: scrolled ? "1px solid rgba(0,204,102,0.15)" : "1px solid rgba(255,255,255,0.06)",
      padding: "0 5%", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      height: scrolled ? 60 : 72,
      transition: "all .3s ease",
    }}>
      <a href="#" style={{ textDecoration: "none" }}>
        <IluminatecLogo size={34} />
      </a>
      <ul style={{
        display: "flex", gap: 28, listStyle: "none", padding: 0, margin: 0,
      }} className="nav-desktop">
        {NAV_ITEMS.map(n => (
          <li key={n.href}>
            <a href={n.href} style={{
              color: "rgba(255,255,255,0.7)", textDecoration: "none",
              fontSize: 13.5, transition: "color .2s", letterSpacing: "0.01em",
            }} className="nav-link">{n.label}</a>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <a href="#contato" style={{
          background: "#00CC66", color: "#0D1F2D",
          padding: "10px 22px", borderRadius: 4,
          fontSize: 13, fontWeight: 700, textDecoration: "none",
          transition: "all .2s", letterSpacing: "0.01em",
        }} className="nav-cta">Solicitar cotação</a>
      </div>
    </nav>
  );
};

const Hero = ({ tweaks }) => (
  <section style={{
    minHeight: "100vh", background: "#0a1422",
    position: "relative", overflow: "hidden",
    display: "flex", alignItems: "center",
    padding: "120px 5% 80px",
  }}>
    {/* Cinematic scene background */}
    <div style={{ position: "absolute", inset: 0, opacity: 0.85 }}>
      <HeroScene variant={tweaks.heroVariant} />
    </div>
    {/* dark gradient overlay for text legibility */}
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(90deg, rgba(10,20,34,0.95) 0%, rgba(10,20,34,0.7) 45%, rgba(10,20,34,0.2) 100%)",
    }} />

    <div style={{ position: "relative", maxWidth: 680, zIndex: 2 }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 9,
        border: "1px solid rgba(0,204,102,0.35)",
        background: "rgba(0,204,102,0.06)",
        borderRadius: 4, padding: "7px 14px",
        fontSize: 11, color: "#00CC66",
        letterSpacing: "1.5px", textTransform: "uppercase",
        fontWeight: 700, marginBottom: 32,
        fontFamily: "'DM Mono', monospace",
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%", background: "#00CC66",
          animation: "pulse 2s infinite",
        }} />
        Representante Oficial Signify · Philips
      </div>

      <h1 style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: "clamp(40px, 6vw, 72px)",
        fontWeight: 700, color: "#fff",
        lineHeight: 1.05, marginBottom: 28,
        letterSpacing: "-0.03em", textWrap: "balance",
      }}>
        Ilumine cidades.<br />
        <span style={{ color: "#00CC66" }}>Reduza custos.</span><br />
        Conecte tudo.
      </h1>

      <p style={{
        fontSize: 18, color: "rgba(255,255,255,0.7)",
        lineHeight: 1.65, marginBottom: 40, maxWidth: 560, textWrap: "pretty",
      }}>
        Soluções <strong style={{ color: "#fff", fontWeight: 600 }}>Philips Signify</strong> de classe mundial em iluminação viária, pública, industrial e arquitetural. Telegestão Interact City, BESS e energia solar. Atendimento nacional com suporte técnico especializado.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
        <a href="#contato" style={{
          background: "#00CC66", color: "#0D1F2D",
          padding: "16px 32px", borderRadius: 5,
          fontWeight: 700, fontSize: 14.5, textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 10,
          transition: "all .2s",
        }} className="cta-primary">
          Solicitar cotação <Icon name="arrow" size={16} stroke="#0D1F2D" strokeWidth={2} />
        </a>
        <a href="#viaria" style={{
          border: "1px solid rgba(255,255,255,0.25)",
          color: "rgba(255,255,255,0.85)",
          padding: "16px 32px", borderRadius: 5,
          fontWeight: 600, fontSize: 14.5, textDecoration: "none",
          transition: "all .2s",
        }} className="cta-ghost">
          Ver linha viária
        </a>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 24, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)",
        maxWidth: 620,
      }}>
        {HERO_STATS.map(s => (
          <div key={s.label}>
            <div style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 30, fontWeight: 700, color: "#00CC66",
              letterSpacing: "-0.02em", lineHeight: 1,
            }}>{s.num}</div>
            <div style={{
              fontSize: 11.5, color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.3px", marginTop: 6, lineHeight: 1.4,
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Co-brand badge bottom right */}
    <div style={{
      position: "absolute", bottom: 32, right: "5%", zIndex: 2,
      display: "flex", alignItems: "center", gap: 14,
      padding: "12px 18px", background: "rgba(13,31,45,0.7)",
      backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 6,
    }} className="hero-cobrand">
      <span style={{
        fontSize: 9.5, color: "rgba(255,255,255,0.5)", letterSpacing: "1.5px",
        textTransform: "uppercase", fontWeight: 600,
        fontFamily: "'DM Mono', monospace",
      }}>Representante Oficial</span>
      <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)" }} />
      <SignifyMark color="#fff" />
      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>·</span>
      <PhilipsMark color="#fff" />
    </div>
  </section>
);

const AboutSection = () => (
  <section style={{ padding: "120px 5%", background: "#fff" }} id="sobre">
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center",
    }} className="about-grid">
      <div>
        <SectionHead tag="Quem somos"
          title={<>Especialistas em <em style={{color:"#00CC66",fontStyle:"normal"}}>energia</em> e iluminação para o mercado <em style={{color:"#00CC66",fontStyle:"normal"}}>B2B</em></>}
          sub="A IluminatecBR é uma empresa de representação comercial especializada, com portfólio que cobre do ponto de luz ao sistema de armazenamento de energia. Atuamos como elo técnico entre fabricantes globais e clientes que exigem o melhor."
          dark={false} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          { icon: "bulb", title: "Iluminação Profissional", desc: "Philips Signify — interiores, exteriores, arquitetural, esportiva." },
          { icon: "city", title: "Iluminação Pública", desc: "Retrofit LED, telegestão, solar — prefeituras e cidades inteligentes." },
          { icon: "battery", title: "Energia e BESS", desc: "Armazenamento, solar, distribuição — FSE Taiwan." },
          { icon: "gear", title: "Engenharia Elétrica", desc: "Projetos, instalações, infraestrutura — Ultra Engenharia." },
        ].map(p => (
          <div key={p.title} style={{
            background: "#F4F7F4", borderRadius: 10, padding: "26px 24px",
            borderLeft: "3px solid #00CC66",
            transition: "all .25s",
          }} className="pillar-card">
            <div style={{ color: "#00CC66", marginBottom: 14 }}>
              <Icon name={p.icon} size={26} strokeWidth={1.4} />
            </div>
            <h4 style={{
              fontFamily: "'Nunito Sans', sans-serif", fontSize: 15.5,
              fontWeight: 700, color: "#0D1F2D", marginBottom: 8, lineHeight: 1.3,
            }}>{p.title}</h4>
            <p style={{ fontSize: 12.5, color: "#5e6b73", lineHeight: 1.6, textWrap: "pretty" }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SegmentsSection = ({ density }) => (
  <section style={{ padding: "120px 5%", background: "#0D1F2D", position: "relative", overflow: "hidden" }} id="segmentos">
    <SectionHead tag="Áreas de Atuação"
      title={<>Soluções para cada <em style={{color:"#00CC66",fontStyle:"normal"}}>segmento</em></>}
      sub="Do campo de futebol de bairro ao estádio profissional. Da quadra do condomínio à fábrica de médio porte. Da rua residencial à rodovia federal." dark={true} />
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 16, marginTop: 56,
    }}>
      {SEGMENTS.map(s => <SegmentCard key={s.title} s={s} density={density} />)}
    </div>
  </section>
);

const ViariaSection = () => (
  <section style={{ padding: "120px 5%", background: "#F4F7F4" }} id="viaria">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
      <SectionHead tag="Linha Viária · Foco"
        title={<>Luminárias <em style={{color:"#00CC66",fontStyle:"normal"}}>viárias</em> Philips</>}
        sub="Da rodovia federal à rua residencial. Linha completa Signify para iluminação pública conectada, com telegestão Interact City e ROI calculado."
        dark={false} />
      <a href="https://www.signify.com/pt-br/prof/luminarias-de-exteriores/rodovias-e-ruas/SMC_NROADLUM_CA/category"
        target="_blank" rel="noopener"
        style={{
          fontSize: 13, color: "#00CC66", fontWeight: 600,
          textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
          padding: "12px 20px", border: "1px solid rgba(0,204,102,0.4)",
          borderRadius: 5, background: "#fff", letterSpacing: "0.01em",
        }}>Catálogo Signify completo <Icon name="arrow" size={14} stroke="#00CC66" /></a>
    </div>
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
      gap: 20, marginBottom: 64,
    }}>
      {ROAD_PRODUCTS.map(p => <ProductCard key={p.series} p={p} />)}
    </div>
    <ROICalculator />
  </section>
);

const WhatsAppFloat = () => (
  <a href="https://wa.me/5511900000000" target="_blank" rel="noopener" style={{
    position: "fixed", bottom: 24, right: 24, zIndex: 90,
    width: 56, height: 56, borderRadius: "50%", background: "#25D366",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
    textDecoration: "none", color: "#fff", transition: "transform .2s",
  }} className="wa-float" aria-label="WhatsApp">
    <Icon name="whatsapp" size={28} stroke="#fff" strokeWidth={0} fill="#fff" />
  </a>
);

// ---- Tweaks Panel content ----
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "road",
  "density": "regular",
  "accentVibrance": 100,
  "showCobrand": true
}/*EDITMODE-END*/;

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <div style={{
      filter: t.accentVibrance !== 100 ? `saturate(${t.accentVibrance}%)` : "none",
    }}>
      <Nav tweaks={t} />
      <Hero tweaks={t} />
      <AboutSection />
      <SegmentsSection density={t.density} />
      <ViariaSection />
      <WhySection />
      <CasesSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Cena" value={t.heroVariant} options={["road", "city"]}
          onChange={v => setTweak("heroVariant", v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Densidade" value={t.density} options={["compact", "regular"]}
          onChange={v => setTweak("density", v)} />
        <TweakSection label="Cor de marca" />
        <TweakSlider label="Vibrância do verde" value={t.accentVibrance}
          min={50} max={130} unit="%" onChange={v => setTweak("accentVibrance", v)} />
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
