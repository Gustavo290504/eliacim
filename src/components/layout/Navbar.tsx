"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Church, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sermones", href: "/sermones" },
  { name: "Eventos", href: "/eventos" },
  { name: "Sobre Nosotros", href: "/nosotros" },
  { name: "Donaciones", href: "/donaciones" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // On inner pages, always use "solid" (dark text) navbar style
  const solidNav = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solidNav
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-medium/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`p-2 rounded-xl transition-all duration-300 ${
                  solidNav
                    ? "bg-navy text-white shadow-md"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
                } group-hover:scale-105`}
              >
                <Church className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                    solidNav ? "text-navy" : "text-white"
                  }`}
                >
                  Iglesia Bautista
                </span>
                <span
                  className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                    solidNav ? "text-gold" : "text-gold-light"
                  }`}
                >
                  Eliacim
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? solidNav
                        ? "text-navy bg-navy/5"
                        : "text-white bg-white/15"
                      : solidNav
                        ? "text-gray-600 hover:text-navy hover:bg-navy/5"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/donaciones"
                className={`ml-4 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  solidNav
                    ? "bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg"
                    : "bg-white text-navy hover:bg-white/90 shadow-lg"
                }`}
              >
                Donar
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                solidNav
                  ? "text-navy hover:bg-navy/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy-dark/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-medium/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-navy rounded-xl text-white">
                <Church className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy">Iglesia Bautista</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  Eliacim
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-gray-400 hover:text-navy hover:bg-gray-light transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Panel Links */}
          <div className="p-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-navy text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-light hover:text-navy"
                }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-medium/30">
            <Link
              href="/donaciones"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Hacer una Donación
            </Link>
            <p className="text-center text-xs text-gray-400 mt-4">
              &ldquo;Porque donde están dos o tres congregados en mi nombre,
              allí estoy yo en medio de ellos.&rdquo;
              <span className="block text-gold mt-1">— Mateo 18:20</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
