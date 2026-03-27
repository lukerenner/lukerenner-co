"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "COACHING PROGRAM", href: "/coaching" },
  { label: "FILM AND VIDEO", href: "/film-and-video" },
  { label: "COPYWRITING", href: "/copywriting" },
  { label: "SALES ENABLEMENT", href: "/sales-enablement" },
  { label: "WEB DESIGN", href: "/web-design" },
  { label: "SUCCESS STORIES", href: "/success-stories" },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "96px",
        background: "transparent",
        zIndex: 100,
      }}
    >
      <nav
        className="flex flex-row items-center justify-between w-full h-full px-8"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/481-luke-renner-logo-15885549844261.png"
            alt="Luke Renner logo"
            width={60}
            height={60}
          />
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <ul className="hidden md:flex flex-row gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "var(--font-lato), Lato, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "normal",
                  textDecoration: "none",
                }}
                className="hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CONTACT button — hidden on mobile */}
        <Link
          href="/coaching"
          className="contact-btn hidden md:inline-flex items-center justify-center flex-shrink-0 hover:opacity-85 transition-opacity"
          style={{
            background: "#c45543",
            color: "white",
            border: "3px solid white",
            padding: "0 50px",
            fontSize: "12px",
            letterSpacing: "1px",
            height: "40px",
            textDecoration: "none",
            textTransform: "uppercase",
            fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          CONTACT
        </Link>

        {/* Hamburger button — visible only on mobile */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center text-white text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={cn(
          "md:hidden w-full overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ background: "rgba(36, 36, 36, 0.97)" }}
      >
        <ul className="list-none m-0 p-0 flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-white/10">
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-lato), Lato, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "normal",
                  textDecoration: "none",
                }}
                className="block px-8 py-4 hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/coaching"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-8 py-4 hover:opacity-85 transition-opacity"
              style={{
                background: "#c45543",
                color: "white",
                fontSize: "12px",
                letterSpacing: "1px",
                textDecoration: "none",
                textTransform: "uppercase",
                fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
