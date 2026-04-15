import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import { useMemo, useState } from "react";
import { NAV_ITEMS } from "./NavLinks";

const isPathActive = (path: string, currentPath: string) => {
  if (path === "/") return currentPath === "/";
  return currentPath === path || currentPath.startsWith(`${path}/`);
};

type MobileMenuProps = {
  activePath: string;
  isOpen: boolean;
  onClose: () => void;
  onHomeClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const MobileMenu = ({ activePath, isOpen, onClose, onHomeClick }: MobileMenuProps) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const accent = "text-[rgb(var(--color-accent-purple))]";
  const hoverAccent = "hover:text-[rgb(var(--color-accent-purple))]";

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onHomeClick(event);
    onClose();
  };

  // Auto-expand the section that matches current path (optional but useful)
  const defaultOpenKey = useMemo(() => {
    const parent = NAV_ITEMS.find((i) => i.children?.some((c) => isPathActive(c.to, activePath)));
    return parent?.label ?? null;
  }, [activePath]);

  // When menu opens, set default open section (only if none chosen yet)
  // (No useEffect needed—keep it simple; this is safe behavior)
  const resolvedOpenKey = openKey ?? (isOpen ? defaultOpenKey : null);

  const toggle = (label: string) => {
    setOpenKey((prev) => (prev === label ? null : label));
  };

  return (
    <div
      className={[
        "border-t border-border bg-surface md:hidden",
        "transition-[max-height,opacity] duration-300",
        isOpen ? "max-h-[calc(100dvh-72px)] opacity-100" : "max-h-0 opacity-0",
      ].join(" ")}
    >
      {/* Scroll container */}
      <div className="max-h-[calc(100dvh-72px)] overflow-y-auto px-6 py-4">
        <div className="space-y-3">
          {NAV_ITEMS.map((item) => {
            const isActive = isPathActive(item.to, activePath);

            if (!item.children) {
              const onClick = item.label === "Home" ? handleHomeClick : onClose;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={onClick}
                  className={[
                    "block text-sm font-medium transition-colors",
                    isActive ? accent : `text-body ${hoverAccent}`,
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            }

            const isSectionOpen = resolvedOpenKey === item.label;

            return (
              <div key={item.label} className="rounded-2xl border border-border bg-bg">
                {/* Parent row */}
                <div className="flex items-center justify-between px-4 py-3">
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className={[
                      "text-sm font-semibold transition-colors",
                      isActive ? accent : `text-body ${hoverAccent}`,
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggle(item.label)}
                    className={[
                      "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border",
                      "bg-surface text-body transition",
                      hoverAccent,
                    ].join(" ")}
                    aria-expanded={isSectionOpen}
                    aria-controls={`mobile-section-${item.label}`}
                  >
                    <svg
                      className={[
                        "h-4 w-4 transition-transform duration-200",
                        isSectionOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Children (accordion) */}
                <div
                  id={`mobile-section-${item.label}`}
                  className={[
                    "grid transition-[grid-template-rows,opacity] duration-200",
                    isSectionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-2 border-t border-border px-4 py-3">
                      {item.children.map((child) => {
                        const childActive = isPathActive(child.to, activePath);

                        return (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={onClose}
                            className={[
                              "block text-sm transition-colors",
                              childActive ? accent : `text-muted ${hoverAccent}`,
                            ].join(" ")}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom spacing so last item isn't hidden behind browser UI */}
        <div className="h-6" />
      </div>
    </div>
  );
};

export default MobileMenu;