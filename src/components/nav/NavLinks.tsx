import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "AI Solutions", to: "/services/ai-solutions" },
      { label: "Oracle Fusion Services", to: "/services/oracle-fusion-services" },
      { label: "Web Development", to: "/services/web-development" },
      { label: "Mobile App Development", to: "/services/mobile-app-development" },
      { label: "UI/UX Design", to: "/services/ui-ux-design" },
      { label: "Digital Marketing", to: "/services/digital-marketing" },
      { label: "Data Analytics", to: "/services/data-analytics" },
      { label: "Internship Programs", to: "/services/internship-programs" },
      { label: "E-Learning Solutions", to: "/services/e-learning-solutions" },
      { label: "Game Development", to: "/services/game-development" },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    children: [
      { label: "Agriculture & Farming", to: "/industries/agriculture-farming" },
      { label: "Dr. Consultation", to: "/industries/dr-consultation" },
      { label: "Fintech", to: "/industries/fintech" },
      { label: "Grocery Delivery", to: "/industries/grocery-delivery" },
      { label: "IoT Development", to: "/industries/iot-development" },
      { label: "Logistic", to: "/industries/logistic" },
      { label: "On-Demand", to: "/industries/on-demand" },
      { label: "Security Management", to: "/industries/security-management" },
      { label: "Blockchain Development", to: "/industries/blockchain-development" },
      { label: "E-Commerce", to: "/industries/e-commerce" },
      { label: "Food Delivery", to: "/industries/food-delivery" },
      { label: "Healthcare and Fitness", to: "/industries/healthcare-fitness" },
      { label: "Laundry", to: "/industries/laundry" },
      { label: "Media & Entertainment", to: "/industries/media-entertainment" },
      { label: "Real Estate Marketplace", to: "/industries/real-estate-marketplace" },
      { label: "Social Media", to: "/industries/social-media" },
      { label: "CRM Development", to: "/industries/crm-development" },
      { label: "Education", to: "/industries/education" },
      { label: "GPS Tracking Devices", to: "/industries/gps-tracking" },
      { label: "Hotel Booking", to: "/industries/hotel-booking" },
      { label: "Live Streaming", to: "/industries/live-streaming" },
      { label: "News", to: "/industries/news" },
      { label: "SaaS and PaaS", to: "/industries/saas-paas" },
      { label: "Taxi Booking", to: "/industries/taxi-booking" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const MEGA_MENU_LABELS = ["services", "industries"];

const isPathActive = (path: string, currentPath: string) => {
  if (path === "/") return currentPath === "/";
  return currentPath === path || currentPath.startsWith(`${path}/`);
};

type NavLinksProps = {
  activePath: string;
  onHomeClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const NavLinks = ({ activePath, onHomeClick }: NavLinksProps) => {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const accentText = "text-[rgb(var(--color-accent-magenta))]";
  const accentBorder = "border-[rgb(var(--color-accent-purple))]";
  const hoverAccentText = "hover:text-[rgb(var(--color-accent-purple))]";
  const hoverAccentBorder = "hover:border-[rgb(var(--color-accent-purple))]";

  const closeMenu = () => {
    setOpenLabel(null);
    setHoveredLabel(null);
  };

  const openMenu = (label: string) => {
    setOpenLabel(label);
  };

  useEffect(() => {
    const onDown = (e: globalThis.MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;

      if (navRef.current && !navRef.current.contains(target)) {
        closeMenu();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = (item: NavItem) => {
    const routeActive = isPathActive(item.to, activePath);
    const visualActive = hoveredLabel ? hoveredLabel === item.label : routeActive;

    return [
      "border-b-2 pb-1 text-sm font-medium transition-colors duration-200",
      visualActive
        ? `${accentText} ${accentBorder}`
        : `border-transparent text-white ${hoverAccentText} ${hoverAccentBorder}`,
    ].join(" ");
  };

  const dropdownTriggerClass = (item: NavItem, isOpen: boolean) => {
    const routeActive = isPathActive(item.to, activePath);
    const visualActive = hoveredLabel
      ? hoveredLabel === item.label
      : routeActive || isOpen;

    return [
      "flex items-center gap-1 border-b-2 pb-1 text-sm font-medium transition-colors duration-200",
      visualActive
        ? `${accentText} ${accentBorder}`
        : `border-transparent text-white ${hoverAccentText} ${hoverAccentBorder}`,
    ].join(" ");
  };

  return (
    <nav ref={navRef} className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item: NavItem) => {
        if (!item.children) {
          const handleClick = item.label === "Home" ? onHomeClick : undefined;

          return (
            <Link
              key={item.label}
              to={item.to}
              onMouseEnter={() => setHoveredLabel(item.label)}
              onMouseLeave={() => setHoveredLabel(null)}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                closeMenu();
                handleClick?.(e);
              }}
              className={linkClass(item)}
            >
              {item.label}
            </Link>
          );
        }

        const isMegaMenu = MEGA_MENU_LABELS.includes(item.label.toLowerCase());
        const isOpen = openLabel === item.label;

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => {
              setHoveredLabel(item.label);
              openMenu(item.label);
            }}
            onMouseLeave={() => {
              setHoveredLabel(null);
              setOpenLabel(null);
            }}
          >
            <button
              type="button"
              className={dropdownTriggerClass(item, isOpen)}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <span className="relative bottom-0.5">{item.label}</span>

              <svg
                className={[
                  "h-2.5 w-2.5 transition-transform duration-200",
                  isOpen ? "rotate-180" : "rotate-0",
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

            <div
              className={[
                "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4",
                isOpen
                  ? "visible opacity-100 pointer-events-auto"
                  : "invisible opacity-0 pointer-events-none",
                "transition-opacity duration-200",
              ].join(" ")}
            >
              <div
                className={[
                  "rounded-xl border border-border bg-surface shadow-card",
                  isMegaMenu ? "w-screen max-w-4xl" : "w-64",
                ].join(" ")}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between pb-3">
                    <div>
                      <p className="text-xs font-semibold text-muted">
                        {item.label.toUpperCase()}
                      </p>
                      <p className="text-sm font-semibold text-heading">
                        {item.label} We Offer
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="pt-4">
                    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                      {item.children.map((child: NavItem) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={closeMenu}
                          className={[
                            "rounded-lg border border-border bg-bg px-3 py-2 text-sm text-body transition",
                            hoverAccentText,
                            hoverAccentBorder,
                          ].join(" ")}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default NavLinks;