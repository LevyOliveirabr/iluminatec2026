// SVG icon library — IluminatecBR
// Line icons, 1.5px stroke, 24x24 base. No emojis.

const Icon = ({ name, size = 24, stroke = "currentColor", strokeWidth = 1.5, fill = "none", style }) => {
  const paths = {
    // Streetlight pole — main brand symbol
    streetlight: (
      <>
        <path d="M12 21V8" />
        <path d="M12 8c0-2 1-3 4-3" />
        <path d="M14 5l4 1.5-1 3-4-1.5z" />
        <path d="M12 21h-3M12 21h3" />
      </>
    ),
    // City skyline
    city: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V10l4-2v13" />
        <path d="M9 21V6l5 2v13" />
        <path d="M14 21V12l5 1v8" />
        <path d="M7 13h0M7 16h0M11 11h0M11 14h0M16 16h0" strokeLinecap="round" />
      </>
    ),
    // Factory / industrial
    factory: (
      <>
        <path d="M3 21V11l5 3V11l5 3V8l8 4v9z" />
        <path d="M3 21h18" />
        <path d="M9 17v2M14 17v2M18 17v2" />
      </>
    ),
    // Office / building
    office: (
      <>
        <path d="M5 21V4h14v17" />
        <path d="M3 21h18" />
        <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" strokeLinecap="round" />
      </>
    ),
    // Stadium / sports
    stadium: (
      <>
        <ellipse cx="12" cy="14" rx="9" ry="4" />
        <path d="M3 14v2c0 2.2 4 4 9 4s9-1.8 9-4v-2" />
        <path d="M8 11l2-3M16 11l-2-3M12 10V6" />
        <circle cx="12" cy="14" r="1.5" />
      </>
    ),
    // Architectural / facade
    facade: (
      <>
        <path d="M4 21V6l8-3 8 3v15" />
        <path d="M4 21h16" />
        <path d="M9 13h6M9 17h6M11 9h2" strokeLinecap="round" />
      </>
    ),
    // Highway / transport
    highway: (
      <>
        <path d="M4 21l4-18M20 21l-4-18" />
        <path d="M12 4v2M12 9v2M12 14v2M12 19v2" strokeLinecap="round" />
      </>
    ),
    // Battery / BESS
    battery: (
      <>
        <rect x="3" y="7" width="16" height="11" rx="1.5" />
        <path d="M19 11h2v3h-2" />
        <path d="M9 11v3M13 11v3" strokeLinecap="round" stroke={stroke === "currentColor" ? "currentColor" : stroke} />
      </>
    ),
    // Sun / solar
    solar: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4" strokeLinecap="round" />
      </>
    ),
    // IoT / connected
    iot: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M8.5 8.5a5 5 0 017 0M5.5 5.5a9 9 0 0113 0" />
        <path d="M12 17.5h0" strokeLinecap="round" strokeWidth="2" />
      </>
    ),
    // Lightbulb
    bulb: (
      <>
        <path d="M9 18h6" strokeLinecap="round" />
        <path d="M10 21h4" strokeLinecap="round" />
        <path d="M12 3a6 6 0 00-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0012 3z" />
      </>
    ),
    // Chart / ROI
    chart: (
      <>
        <path d="M3 21h18" />
        <path d="M6 17V11M10 17V8M14 17v-4M18 17V5" strokeLinecap="round" strokeWidth="2" />
      </>
    ),
    // Check
    check: (
      <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
    // Arrow right
    arrow: (
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    ),
    // Plus
    plus: (
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    ),
    // Minus
    minus: (
      <path d="M5 12h14" strokeLinecap="round" />
    ),
    // Phone / WhatsApp
    whatsapp: (
      <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3zm4.5 12.6c-.2.5-1 1-1.5 1.1-.4.1-.9.1-1.5-.1-.4-.1-.8-.3-1.4-.5-2.5-1.1-4.1-3.6-4.2-3.8-.1-.2-1-1.3-1-2.5s.6-1.7.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.4-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6 0l.7-.9c.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3 0 .2 0 .7-.2 1.1z" fill={stroke} stroke="none" />
    ),
    // Mail
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    // Pin / location
    pin: (
      <>
        <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
    // Quote
    quote: (
      <path d="M7 7c-2 0-3 1.5-3 4s1 4 3 4c0 2-1 3-3 3v2c4 0 6-2 6-7v-2c0-2.5-1-4-3-4zm10 0c-2 0-3 1.5-3 4s1 4 3 4c0 2-1 3-3 3v2c4 0 6-2 6-7v-2c0-2.5-1-4-3-4z" fill={stroke} stroke="none" />
    ),
    // Shield / quality
    shield: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    // Gear / control
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
      </>
    ),
    // Tunnel
    tunnel: (
      <>
        <path d="M4 21V12a8 8 0 0116 0v9" />
        <path d="M4 21h16" />
        <path d="M9 21v-6a3 3 0 016 0v6" />
      </>
    ),
    // Brightness / lumens
    sun: (
      <>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" strokeLinecap="round" />
      </>
    ),
    // Download
    download: (
      <>
        <path d="M12 4v12M7 11l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 20h14" strokeLinecap="round" />
      </>
    ),
    // Menu
    menu: (
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    ),
    close: (
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      style={{ flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

window.Icon = Icon;
