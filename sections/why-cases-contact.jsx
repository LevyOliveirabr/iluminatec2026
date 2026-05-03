// Why Us, Cases, Contact, Footer

const WHY = [
  { num: "01", icon: "shield", title: "Representante Oficial Signify Philips",
    desc: "Acesso direto ao portfólio completo, suporte técnico e garantia do líder mundial em iluminação." },
  { num: "02", icon: "gear", title: "Especificação técnica completa",
    desc: "Laudos fotométricos, projetos via DIALux/Relux, memoriais descritivos para construtoras e arquitetos." },
  { num: "03", icon: "pin", title: "Cobertura nacional",
    desc: "Atendimento em todo o Brasil. Suporte remoto com resposta em até 24h. Visitas técnicas mediante agendamento." },
  { num: "04", icon: "bulb", title: "Portfólio multisegmento",
    desc: "Da lâmpada ao BESS — um parceiro para toda a jornada energética da sua empresa." },
  { num: "05", icon: "chart", title: "ROI comprovado",
    desc: "Até 70% de redução no consumo com retrofit LED. Retorno calculado antes da compra." },
  { num: "06", icon: "iot", title: "Tecnologia de ponta",
    desc: "Interact IoT, Dynalite, Color Kinetics, BESS LFP — o estado da arte em energia e iluminação." },
];

const CASES = [
  { tipo: "Município · Interior SP", pontos: "2.400", reducao: "68%",
    titulo: "Retrofit completo de iluminação pública",
    desc: "Substituição de luminárias vapor de sódio por linha EssentialForce Plus com Interact City. Telegestão da rede inteira." },
  { tipo: "Centro logístico · MG", pontos: "320 pts", reducao: "72%",
    titulo: "High Bay LED em galpão de 18.000m²",
    desc: "Iluminação industrial Philips com sensores Dynalite. Pé direito 12m, ambiente IP65 com baixíssima manutenção." },
  { tipo: "Arena esportiva · RJ", pontos: "ArenaVision", reducao: "HD/4K",
    titulo: "Iluminação esportiva profissional",
    desc: "Refletores Philips ArenaVision homologados para transmissão. Liga instantânea, controle de cenas via Dynalite." },
];

const WhySection = () => (
  <section style={{ padding: "120px 5%", background: "#F4F7F4" }} id="por-que">
    <SectionHead tag="Diferenciais" title={<>Por que escolher a <em style={{color:"#00CC66",fontStyle:"normal"}}>IluminatecBR</em></>}
      sub="Não somos mais um fornecedor de produto. Somos um parceiro técnico comprometido com o sucesso do seu projeto." dark={false} />
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
      gap: 20, marginTop: 56,
    }}>
      {WHY.map(w => (
        <div key={w.num} style={{
          background: "#fff", borderRadius: 10, padding: "32px 30px",
          border: "1px solid #e8ede8", transition: "all .25s",
          position: "relative",
        }} className="why-card">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 8, background: "#0D1F2D",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#00CC66",
            }}>
              <Icon name={w.icon} size={22} strokeWidth={1.4} />
            </div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#9aa3a8",
              letterSpacing: "1px", fontWeight: 600,
            }}>{w.num}</div>
          </div>
          <h3 style={{
            fontFamily: "'Nunito Sans', sans-serif", fontSize: 17, fontWeight: 700,
            color: "#0D1F2D", marginBottom: 10, letterSpacing: "-0.01em", textWrap: "balance",
          }}>{w.title}</h3>
          <p style={{ fontSize: 13.5, color: "#5e6b73", lineHeight: 1.65, textWrap: "pretty" }}>{w.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const CasesSection = () => (
  <section style={{ padding: "120px 5%", background: "#0D1F2D", position: "relative", overflow: "hidden" }} id="cases">
    {/* bg ornament */}
    <svg width="800" height="800" style={{ position: "absolute", top: -200, right: -200, opacity: 0.06, pointerEvents: "none" }}>
      <circle cx="400" cy="400" r="380" fill="none" stroke="#00CC66" strokeWidth="1" />
      <circle cx="400" cy="400" r="280" fill="none" stroke="#00CC66" strokeWidth="1" />
      <circle cx="400" cy="400" r="180" fill="none" stroke="#00CC66" strokeWidth="1" />
    </svg>
    <SectionHead tag="Cases" title={<>Projetos com <em style={{color:"#00CC66",fontStyle:"normal"}}>resultado</em> mensurável</>}
      sub="Cada projeto entregue com especificação técnica, acompanhamento e validação pós-instalação." dark={true} />
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: 20, marginTop: 56, position: "relative",
    }}>
      {CASES.map((c, i) => (
        <div key={i} style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 10, padding: "32px 30px", transition: "all .25s",
        }} className="case-card">
          <div style={{
            fontSize: 10.5, color: "#00CC66", letterSpacing: "1.5px",
            textTransform: "uppercase", fontWeight: 700, marginBottom: 18,
            fontFamily: "'DM Mono', monospace",
          }}>{c.tipo}</div>
          <h3 style={{
            fontFamily: "'Nunito Sans', sans-serif", fontSize: 19, fontWeight: 700,
            color: "#fff", marginBottom: 10, lineHeight: 1.3, textWrap: "balance",
          }}>{c.titulo}</h3>
          <p style={{
            fontSize: 13.5, color: "rgba(255,255,255,0.55)",
            lineHeight: 1.65, marginBottom: 24, textWrap: "pretty",
          }}>{c.desc}</p>
          <div style={{
            display: "flex", gap: 24, paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>Escala</div>
              <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginTop: 4 }}>{c.pontos}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>Resultado</div>
              <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 22, fontWeight: 700, color: "#00CC66", marginTop: 4 }}>{c.reducao}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SectionHead = ({ tag, title, sub, dark }) => (
  <div style={{ maxWidth: 720 }}>
    <div style={{
      fontSize: 11, color: "#00CC66", letterSpacing: "2.5px",
      textTransform: "uppercase", fontWeight: 700, marginBottom: 16,
      fontFamily: "'DM Mono', monospace",
    }}>{tag}</div>
    <h2 style={{
      fontFamily: "'Nunito Sans', sans-serif",
      fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700,
      color: dark ? "#fff" : "#0D1F2D", lineHeight: 1.15,
      marginBottom: 18, letterSpacing: "-0.02em", textWrap: "balance",
    }}>{title}</h2>
    <p style={{
      fontSize: 16.5, color: dark ? "rgba(255,255,255,0.55)" : "#5e6b73",
      lineHeight: 1.65, maxWidth: 600, textWrap: "pretty",
    }}>{sub}</p>
  </div>
);

const ContactSection = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{
      padding: "120px 5%",
      background: "linear-gradient(135deg, #1A3A6B 0%, #0D4A2E 100%)",
      position: "relative", overflow: "hidden",
    }} id="contato">
      <svg width="600" height="600" style={{ position: "absolute", bottom: -200, left: -200, opacity: 0.08, pointerEvents: "none" }}>
        <circle cx="300" cy="300" r="280" fill="none" stroke="#00CC66" strokeWidth="1" />
        <circle cx="300" cy="300" r="200" fill="none" stroke="#fff" strokeWidth="0.5" />
      </svg>
      <SectionHead tag="Fale Conosco" title={<>Solicite sua <em style={{color:"#00CC66",fontStyle:"normal"}}>cotação</em></>}
        sub="Preencha o formulário e nossa equipe técnica entra em contato em até 24h úteis com proposta personalizada." dark={true} />
      <div style={{
        display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56,
        marginTop: 56, position: "relative",
      }} className="contact-grid">
        {sent ? (
          <div style={{
            background: "rgba(0,204,102,0.08)", border: "1px solid rgba(0,204,102,0.3)",
            borderRadius: 12, padding: "60px 40px", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16,
          }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#00CC66", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="check" size={32} stroke="#0D1F2D" strokeWidth={3} />
            </div>
            <h3 style={{ color: "#fff", fontFamily: "'Nunito Sans', sans-serif", fontSize: 22, fontWeight: 700 }}>Solicitação enviada</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Nossa equipe técnica entra em contato em até 24h úteis.</p>
            <button onClick={()=>setSent(false)} style={{
              background: "transparent", color: "#00CC66", border: "1px solid #00CC66",
              padding: "10px 22px", borderRadius: 4, fontWeight: 600, fontSize: 13, cursor: "pointer", marginTop: 8,
            }}>Enviar nova solicitação</button>
          </div>
        ) : (
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <FormField label="Nome completo" placeholder="Seu nome" />
              <FormField label="Empresa" placeholder="Nome da empresa" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <FormField label="Email" placeholder="email@empresa.com.br" type="email" />
              <FormField label="Telefone / WhatsApp" placeholder="+55 (XX) XXXXX-XXXX" />
            </div>
            <FormField label="Segmento de interesse" select options={[
              "Selecione um segmento", "Iluminação Pública / Prefeitura", "Iluminação Viária (rodovias, ruas)",
              "Industrial / Galpão / Fábrica", "Corporativo / Escritório", "Esportivo / Estádio / Quadra",
              "Arquitetural / Color Kinetics", "Transporte / Túneis", "BESS / Energia Solar", "Outro",
            ]} />
            <FormField label="Mensagem" textarea placeholder="Descreva brevemente seu projeto: número de pontos de luz, prazo, orçamento estimado..." />
            <button type="submit" style={{
              background: "#00CC66", color: "#0D1F2D", border: "none",
              padding: "16px 28px", borderRadius: 5, fontWeight: 700, fontSize: 14.5,
              letterSpacing: "0.02em", cursor: "pointer", marginTop: 8,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              transition: "all .2s",
            }}>Enviar solicitação <Icon name="arrow" size={16} stroke="#0D1F2D" strokeWidth={2} /></button>
          </form>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <ContactItem icon="whatsapp" label="WhatsApp comercial" value="+55 (11) 9XXXX-XXXX" sub="Seg–Sex · 8h às 18h" />
          <ContactItem icon="mail" label="Email" value="comercial@iluminatec.com.br" />
          <ContactItem icon="pin" label="Atendimento" value="100% remoto · Cobertura nacional" sub="Visitas técnicas mediante agendamento" />
          <div style={{
            marginTop: 8, padding: "20px 22px",
            background: "rgba(0,204,102,0.08)", border: "1px solid rgba(0,204,102,0.25)",
            borderRadius: 10, display: "flex", flexDirection: "column", gap: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="shield" size={18} stroke="#00CC66" />
              <strong style={{ color: "#00CC66", fontSize: 13, fontWeight: 700, letterSpacing: "0.3px" }}>
                Representante Oficial Signify Philips
              </strong>
            </div>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
              Catálogo técnico completo · Projetos luminotécnicos sob consulta · Resposta em até 24h úteis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, placeholder, type="text", textarea, select, options }) => {
  const fieldStyle = {
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 4, padding: "13px 16px", color: "#fff",
    fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: "none",
    transition: "border-color .2s",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{
        fontSize: 10.5, color: "rgba(255,255,255,0.55)",
        letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600,
      }}>{label}</span>
      {textarea ? (
        <textarea placeholder={placeholder} rows={4} style={{ ...fieldStyle, resize: "vertical", minHeight: 100 }} />
      ) : select ? (
        <select style={fieldStyle}>{options.map(o => <option key={o} style={{background:"#0D1F2D"}}>{o}</option>)}</select>
      ) : (
        <input type={type} placeholder={placeholder} style={fieldStyle} />
      )}
    </label>
  );
};

const ContactItem = ({ icon, label, value, sub }) => (
  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
    <div style={{
      width: 42, height: 42, borderRadius: 8,
      border: "1px solid rgba(0,204,102,0.3)", background: "rgba(0,204,102,0.05)",
      display: "flex", alignItems: "center", justifyContent: "center", color: "#00CC66", flexShrink: 0,
    }}>
      <Icon name={icon} size={18} />
    </div>
    <div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14.5, color: "#fff", fontWeight: 500 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{sub}</div>}
    </div>
  </div>
);

const Footer = () => (
  <footer style={{ background: "#070d15", padding: "60px 5% 32px" }}>
    <div style={{
      display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.07)",
    }} className="footer-grid">
      <div>
        <IluminatecLogo size={32} />
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginTop: 14, maxWidth: 300 }}>
          Representante Oficial Signify Philips. Energia · Iluminação Profissional. Atendimento nacional.
        </p>
      </div>
      <FooterCol title="Segmentos" links={["Iluminação Viária","Iluminação Pública","Industrial","Esportivo","Arquitetural","Corporativo"]} />
      <FooterCol title="Produtos" links={["RoadForce","EssentialForce Plus","Interact City","High Bay","Color Kinetics","BESS / Solar"]} />
      <FooterCol title="Empresa" links={["Sobre Nós","Diferenciais","Cases","Contato","Signify Brasil ↗"]} />
    </div>
    <div style={{
      paddingTop: 24, display: "flex", justifyContent: "space-between",
      flexWrap: "wrap", gap: 16, alignItems: "center",
    }}>
      <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.3px" }}>
        © 2026 IluminatecBR · Representante Oficial Signify Philips. Todos os direitos reservados. Marcas Philips e Signify utilizadas sob licença contratual.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        {["IG","IN","YT","WA"].map(s => (
          <a key={s} href="#" style={{
            width: 32, height: 32, borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10.5, color: "rgba(255,255,255,0.55)", textDecoration: "none",
            fontFamily: "'DM Mono', monospace", letterSpacing: "0.5px", fontWeight: 600,
            transition: "all .2s",
          }} className="social-link">{s}</a>
        ))}
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }) => (
  <div>
    <h4 style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>{title}</h4>
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, padding: 0, margin: 0 }}>
      {links.map(l => <li key={l}><a href="#" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color .2s" }} className="footer-link">{l}</a></li>)}
    </ul>
  </div>
);

Object.assign(window, { WhySection, CasesSection, ContactSection, Footer, SectionHead });
