import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/SLOGO.svg";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const heroSection = document.getElementById("hero");

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => heroSection?.scrollIntoView({ behavior: "smooth" }), 100);
      return;
    }

    heroSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* TOP STRIP */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex h-30 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-3 text-heading"
            aria-label="SUNBERRY home"
          >
            <img src={logo} alt="sunberry logo" className=" flex h-30  items-center w-auto object-contain" />
            <span className="sr-only">SUNBERRY</span>
          </Link>

          {/* Contact blocks (desktop) */}
          <div className="hidden items-center gap-10 md:flex">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-card">
                {/* phone icon */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
                  />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-muted">Call Us</div>
                <div className="text-sm font-semibold text-heading">16197526234</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-card">
                {/* mail icon */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-muted">24×7 Support</div>
                <div className="text-sm font-semibold text-heading">contact@tyltech.com</div>
              </div>
            </div>
          </div>

          {/* Mobile hamburger (top right) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-3 py-2 text-body transition-colors hover:text-brand md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* BOTTOM STRIP (nav links centered) */}
      <div className="bg-[#062a64]">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <NavLinks activePath={location.pathname} onHomeClick={handleHomeClick} />
        </div>

        <MobileMenu
          activePath={location.pathname}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onHomeClick={handleHomeClick}
        />
      </div>
    </header>
  );
};

export default Navbar;