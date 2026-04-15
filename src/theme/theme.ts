// src/theme.ts
// TYL Tech – Design System Theme

export const theme = {
    brand: {
      primary: "#1D4ED8",
      gradient: "linear-gradient(90deg, #7C7CF4, #4F8CF7, #5BC0EB)",
      gradientStops: ["#7C7CF4", "#4F8CF7", "#5BC0EB"],
    },
  
    colors: {
      background: "#FAFAFA",
      surface: "#FFFFFF",
      border: "#E5E7EB",
  
      heading: "#0F172A",
      body: "#737373",
      muted: "#64748B",
  
      link: "#1D4ED8",
      linkHover: "#1E40AF",
  
      footerBg: "#020617",
      footerText: "#CBD5E1",
      footerMuted: "#94A3B8",
      footerLinkHover: "#5BC0EB",
    },
  
    shadows: {
        sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
        md: "0 10px 25px rgba(17, 24, 39, 0.08)",
        lg: "0 20px 45px rgba(17, 24, 39, 0.12)",
      
        // 🔥 Brand hover shadow (Smartborn-style)
        hover: "0 18px 40px rgba(29, 78, 216, 0.18)", // soft blue glow
    },
  
    radii: {
      sm: 10,
      md: 14,
      lg: 18,
      pill: 999,
    },
  
    spacing: {
      xs: 6,
      sm: 10,
      md: 14,
      lg: 18,
      xl: 24,
      xxl: 32,
    },
  
    typography: {
      fontFamily:
        "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      h1: { fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em" },
      h2: { fontSize: 30, fontWeight: 800, letterSpacing: "-0.015em" },
      h3: { fontSize: 20, fontWeight: 750, letterSpacing: "-0.01em" },
      body: { fontSize: 16, fontWeight: 500, lineHeight: "24px" },
      small: { fontSize: 13, fontWeight: 500, lineHeight: "18px" },
    },
  
    components: {
      button: {
        height: 44,
        paddingX: 14,
        radius: 12,
      },
      card: {
        radius: 16,
        padding: 18,
        border: "1px solid #E5E7EB",
        shadow: "0 10px 25px rgba(17, 24, 39, 0.08)",
        background: "#FFFFFF",
      },
    },
  } as const;
  