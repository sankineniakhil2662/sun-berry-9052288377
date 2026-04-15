import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// A small, self-contained demo you can paste into any React app.
// No external UI libraries required.

const tokens = {
  bg: "#FAFAFA",
  surface: "#FFFFFF",
  border: "#E5E7EB",
  text: "#111827",
  muted: "#374151",
  primary: "#2563EB", // change to your brand color
  primaryHover: "#1D4ED8",
  ring: "rgba(37, 99, 235, 0.20)",
  shadow: "0 10px 25px rgba(17, 24, 39, 0.08)",
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({
  title,
  subtitle,
  badge,
  children,
  footer,
  accent = "top", // 'top' | 'left' | 'none'
  primaryAction,
  secondaryAction,
  interactive = true,
  density = "comfortable", // 'compact' | 'comfortable'
}) {
  const padding = density === "compact" ? 14 : 18;

  const accentStyle =
    accent === "top"
      ? { borderTop: `4px solid ${tokens.primary}` }
      : accent === "left"
      ? { borderLeft: `4px solid ${tokens.primary}` }
      : {};

  return (
    <motion.article
      initial={interactive ? { y: 6, opacity: 0 } : false}
      animate={interactive ? { y: 0, opacity: 1 } : false}
      whileHover={interactive ? { y: -2 } : undefined}
      transition={{ duration: 0.25 }}
      style={{
        background: tokens.surface,
        border: `1px solid ${tokens.border}`,
        borderRadius: 16,
        boxShadow: tokens.shadow,
        overflow: "hidden",
        ...accentStyle,
      }}
    >
      <div style={{ padding }}>
        {(title || subtitle || badge) && (
          <header style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              {title && (
                <h3
                  style={{
                    margin: 0,
                    color: tokens.text,
                    fontSize: 18,
                    lineHeight: "24px",
                    letterSpacing: "-0.01em",
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h3>
              )}
              {subtitle && (
                <p
                  style={{
                    margin: title ? "6px 0 0" : 0,
                    color: tokens.muted,
                    fontSize: 14,
                    lineHeight: "20px",
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>

            {badge && (
              <span
                style={{
                  flexShrink: 0,
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "rgba(37, 99, 235, 0.10)",
                  color: tokens.primary,
                  border: `1px solid ${tokens.border}`,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {badge}
              </span>
            )}
          </header>
        )}

        {children && <div style={{ marginTop: 12 }}>{children}</div>}

        {(primaryAction || secondaryAction) && (
          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {primaryAction && (
              <button
                type="button"
                onClick={primaryAction.onClick}
                style={{
                  cursor: "pointer",
                  border: "none",
                  borderRadius: 12,
                  padding: "10px 12px",
                  background: tokens.primary,
                  color: "white",
                  fontWeight: 700,
                  fontSize: 14,
                  boxShadow: `0 0 0 0 ${tokens.ring}`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = tokens.primaryHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = tokens.primary)}
                onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 4px ${tokens.ring}`)}
                onBlur={(e) => (e.currentTarget.style.boxShadow = `0 0 0 0 ${tokens.ring}`)}
              >
                {primaryAction.label}
              </button>
            )}

            {secondaryAction && (
              <button
                type="button"
                onClick={secondaryAction.onClick}
                style={{
                  cursor: "pointer",
                  borderRadius: 12,
                  padding: "10px 12px",
                  background: "transparent",
                  color: tokens.text,
                  border: `1px solid ${tokens.border}`,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                {secondaryAction.label}
              </button>
            )}
          </div>
        )}
      </div>

      {footer && (
        <footer
          style={{
            borderTop: `1px solid ${tokens.border}`,
            padding: density === "compact" ? "10px 14px" : "12px 18px",
            color: tokens.muted,
            fontSize: 13,
            lineHeight: "18px",
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            alignItems: "center",
          }}
        >
          {footer}
        </footer>
      )}
    </motion.article>
  );
}

function Metric({ label, value, hint }) {
  return (
    <div
      style={{
        border: `1px solid ${tokens.border}`,
        borderRadius: 14,
        padding: 12,
        background: "rgba(17, 24, 39, 0.02)",
      }}
    >
      <div style={{ color: tokens.muted, fontSize: 12, fontWeight: 600 }}>{label}</div>
      <div style={{ color: tokens.text, fontSize: 18, fontWeight: 800, marginTop: 4 }}>{value}</div>
      {hint && <div style={{ color: tokens.muted, fontSize: 12, marginTop: 6 }}>{hint}</div>}
    </div>
  );
}

export default function CardComponentDemo() {
  const [accent, setAccent] = useState("top");
  const [density, setDensity] = useState("comfortable");
  const [interactive, setInteractive] = useState(true);
  const [primary, setPrimary] = useState(tokens.primary);

  const demoTokens = useMemo(() => ({ ...tokens, primary }), [primary]);

  // update tokens.primary used in Card styles (simple approach for demo)
  tokens.primary = demoTokens.primary;
  tokens.primaryHover = demoTokens.primary;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: tokens.bg,
        padding: 20,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        color: tokens.text,
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 26, letterSpacing: "-0.02em" }}>Card Component Preview</h1>
            <p style={{ margin: "6px 0 0", color: tokens.muted }}>
              Off-white background (#FAFAFA) + surface cards with a clean border and soft shadow.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, color: tokens.muted }}>
              Accent
              <select
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: `1px solid ${tokens.border}`,
                  background: tokens.surface,
                  color: tokens.text,
                  fontWeight: 600,
                }}
              >
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="none">None</option>
              </select>
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, color: tokens.muted }}>
              Density
              <select
                value={density}
                onChange={(e) => setDensity(e.target.value)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: `1px solid ${tokens.border}`,
                  background: tokens.surface,
                  color: tokens.text,
                  fontWeight: 600,
                }}
              >
                <option value="comfortable">Comfortable</option>
                <option value="compact">Compact</option>
              </select>
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, color: tokens.muted }}>
              Brand color
              <input
                type="color"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                style={{ width: 52, height: 42, padding: 0, borderRadius: 12, border: `1px solid ${tokens.border}`, background: tokens.surface }}
                aria-label="Brand color"
              />
            </label>

            <label
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                fontSize: 13,
                color: tokens.text,
                padding: "10px 12px",
                borderRadius: 12,
                border: `1px solid ${tokens.border}`,
                background: tokens.surface,
                fontWeight: 700,
              }}
            >
              <input type="checkbox" checked={interactive} onChange={(e) => setInteractive(e.target.checked)} />
              Hover animation
            </label>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginTop: 18,
          }}
        >
          <Card
            title="Website Redesign"
            subtitle="A clean card layout that works well on light, off-white backgrounds."
            badge="In progress"
            accent={accent}
            density={density}
            interactive={interactive}
            primaryAction={{
              label: "Primary action",
              onClick: () => alert("Primary action clicked"),
            }}
            secondaryAction={{
              label: "Secondary",
              onClick: () => alert("Secondary clicked"),
            }}
            footer={<span>Updated just now</span>}
          >
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ color: tokens.muted, fontSize: 14, lineHeight: "20px" }}>
                Use cards for services, features, case studies, and pricing. Keep content short and scannable.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
                <Metric label="Load time" value="1.2s" hint="Target under 2s" />
                <Metric label="CTR" value="3.9%" hint="+0.7%" />
                <Metric label="Leads" value="42" hint="This week" />
              </div>
            </div>
          </Card>

          <Card
            title="Service Package"
            subtitle="Great for B2B: clear copy, strong hierarchy, and a single accent color."
            badge="Popular"
            accent={accent}
            density={density}
            interactive={interactive}
            footer={
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontWeight: 700, color: tokens.text }}>₹</span>
                <span>Starts from 29,999</span>
              </div>
            }
            primaryAction={{ label: "Get quote", onClick: () => alert("Quote requested") }}
          >
            <ul style={{ margin: 0, paddingLeft: 18, color: tokens.muted, fontSize: 14, lineHeight: "22px" }}>
              <li>Responsive pages</li>
              <li>SEO-ready structure</li>
              <li>Fast performance</li>
              <li>Lead form + WhatsApp button</li>
            </ul>
          </Card>

          <Card
            title="Minimal Card"
            subtitle="This is how it looks with no actions—useful for blog previews and simple info blocks."
            accent={accent}
            density={density}
            interactive={interactive}
            footer={<span>Read more →</span>}
          >
            <div
              style={{
                height: 110,
                borderRadius: 14,
                border: `1px dashed ${tokens.border}`,
                background: "rgba(37, 99, 235, 0.06)",
                display: "grid",
                placeItems: "center",
                color: tokens.muted,
                fontWeight: 700,
              }}
            >
              Image / illustration area
            </div>
          </Card>
        </div>

        <div style={{ marginTop: 16, color: tokens.muted, fontSize: 13, lineHeight: "18px" }}>
          Tip: Use <b>off-white</b> for the page background and <b>white cards</b> for content blocks. It looks modern, improves readability,
          and makes your brand color pop.
        </div>
      </div>
    </div>
  );
}
